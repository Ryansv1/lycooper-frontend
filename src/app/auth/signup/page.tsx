import SignupForm from "@/components/signup-form";
import {
  Button,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Signin() {
  return (
    <Flex className="flex flex-col sm:flex-row gap-4 drop-shadow-md text-black text-center font-poppins">
      <Flex className="flex-col justify-center items-center bg-gradient-to-tr from-blue-500 to bg-green-300 p-12 m-4 rounded-md">
        <SignupForm />
      </Flex>
      <Flex className="flex-col justify-center items-center gap-8 bg-gradient-to-tr from-blue-500 to bg-green-300 p-12 m-4 mb-12 sm:mb-4 rounded-md">
        <h1>Bem-vindo ao Lycooper</h1>
        <h3>Já tem uma conta? Faça login abaixo!</h3>
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
