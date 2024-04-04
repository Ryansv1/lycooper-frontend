"use client";

import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";

interface queryResultStatusProps {
  status: "Loading" | "Error" | null;
}
interface buttonStateProps {
  status: "Loading" | "Sucesso" | "Error" | null;
}

export default function SignupForm() {
  const router = useRouter();
  const [buttonState, setButtonState] = useState<buttonStateProps>({
    status: null,
  });
  const [queryResultStatus, setQueryResultStatus] =
    useState<queryResultStatusProps>({ status: null });
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setQueryResultStatus({ status: "Loading" });
    await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 201) {
        router.push("/auth/login");
      } else {
        setQueryResultStatus({ status: "Error" });
      }
    });
  };

  useEffect(() => {
    if (queryResultStatus.status === "Error") {
      setButtonState({ status: "Error" });
    } else if (queryResultStatus.status === "Loading") {
      setButtonState({ status: "Loading" });
    } else if (queryResultStatus.status === null) {
      setButtonState({ status: null });
    }
  }, [queryResultStatus]);

  return (
    <Flex className="flex flex-col gap-8">
      <h1 className="text-md">Crie sua conta</h1>
      <form
        action="http://localhost:8000/auth/register"
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="ex: user@domain.com"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="email"
            {...register("userEmail", { required: true })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Usuário</FormLabel>
          <Input
            placeholder="Seu usuário"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="text"
            {...register("userName", { required: true })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Sua senha"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="password"
            {...register("userPassword", { required: true })}
          />
        </FormControl>
        {buttonState.status === null ? (
          <Button className="mt-8" type="submit">
            Cadastre-se!
          </Button>
        ) : buttonState.status === "Loading" ? (
          <Button className="mt-8" colorScheme="messenger" type="submit">
            Carregando
          </Button>
        ) : buttonState.status === "Error" ? (
          <Button className="mt-8" colorScheme="red" type="submit">
            Erro
          </Button>
        ) : (
          <Button className="mt-8" colorScheme="green" type="submit">
            Sucesso
          </Button>
        )}
      </form>
    </Flex>
  );
}
