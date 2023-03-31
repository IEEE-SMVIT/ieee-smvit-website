import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from './lib/theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      
      <App/>
      
    </ChakraProvider>
  </React.StrictMode>
);
