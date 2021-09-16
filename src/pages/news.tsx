import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function News() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Primeira Box
            </Text>
          </Box>

          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Segunda Box
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return { props: {} };
});
