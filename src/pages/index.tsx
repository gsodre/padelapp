import { Button, Flex, Link, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { withSSRGuest } from "../utils/withSSRGuest";

type ISignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido.").required("Informe seu e-mail."),
  password: yup.string().required("Informe sua senha."),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<ISignInFormData> = async (values) => {
    await signIn(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Stack spacing="0">
        <Flex
          as="form"
          w="100%"
          maxW={400}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="E-mail"
              {...register("email")}
              error={formState.errors.email}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              {...register("password")}
              error={formState.errors.password}
            />
          </Stack>

          <Button
            mt="6"
            size="lg"
            type="submit"
            colorScheme="purple"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>

        <Flex w="100%" maxW={360} flexDir="column">
          <Link
            ml="auto"
            mr="3"
            fontSize="smaller"
            fontStyle="italic"
            color="purple.400"
          >
            Esqueceu sua senha?
          </Link>
          <Button mt="8" size="lg" colorScheme="yellow">
            Cadastre-se
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return { props: {} };
});
