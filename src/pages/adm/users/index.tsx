import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Header from "../../../components/Header";
import { Pagination } from "../../../components/Pagination";
import Sidebar from "../../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td px="6">
                  <Box>
                    <Text fontWeight="bold">Gabriel Sodré</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabrieldeavilasodre@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td> 24 de Agosto, 2021</Td>
                <Td>
                  <IconButton
                    borderRadius="50%"
                    variant="ghost"
                    colorScheme="purple"
                    aria-label="Editar"
                    fontSize="20"
                    icon={<RiPencilLine />}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
