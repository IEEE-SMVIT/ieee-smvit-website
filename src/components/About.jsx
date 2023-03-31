import React from "react";
import { Text, Heading,Container } from "@chakra-ui/react";
import Section from "./Section";
function About() {
  return (
    <Container maxW={'container.lg'} pt={14}>


    <Section> 
   
        <Heading as={'h2'} textDecoration='underline' marginTop={3} marginBottom={4}>About IEEE SIR MVIT</Heading>
        <Text textAlign={'justify'} textIndent='1em'>
          
          The Institute of Electrical and Electronics Engineers (IEEE) is the
          world's largest technical professional organization dedicated to
          advancing technology for the benefit of humanity. With more than
          400,000 members in over 160 countries, IEEE is a leading authority on
          a wide range of areas such as aerospace, telecommunications,
          biomedical engineering, and more. IEEE provides a platform for
          students, researchers, and professionals to share their knowledge and
          expertise through conferences, journals, and other educational and
          networking opportunities. As a student branch of IEEE, we aim to
          foster a community of like-minded individuals who share a passion for
          technology and innovation, and to encourage and support our members to
          pursue their academic and professional goals.
        </Text>
    </Section>
    </Container>
  );
}

export default About;
