import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { AuthProvider } from "../contexts/AuthContext";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
