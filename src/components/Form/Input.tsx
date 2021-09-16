import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const Input = ({ name, label, error = null, ...rest }: IInputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        {...rest}
        id={name}
        name={name}
        size="lg"
        bg="gray.900"
        variant="filled"
        _hover={{ bg: "gray.900" }}
        focusBorderColor="purple.500"
      />
      {!!error && <FormErrorMessage ml="2">{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
