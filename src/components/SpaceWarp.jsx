import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpaceWarp = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create box geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create shader material for space warp effect
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec2 warp = vec2(sin(vUv.y * 20.0 + time * 2.0) * 0.2, cos(vUv.x * 20.0 + time * 2.0) * 0.2);
        vec3 displacedPosition = position + vec3(warp, 0.0);
        gl_FragColor = vec4(displacedPosition, 1.0);
      }
    `;
    const uniforms = { time: { value: 0 } };
    const shaderMaterial = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    mesh.material = shaderMaterial;

    // Animate space warp effect
    const animate = (time) => {
      requestAnimationFrame(animate);
      uniforms.time.value = time / 1000; // convert to seconds
      geometry.verticesNeedUpdate = true; // let Three.js know vertices have changed
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SpaceWarp
