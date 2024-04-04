"use client";

import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Inputs = {
  userEmail: string;
  userPassword: string;
};

interface queryResultStatusProps {
  status: string | null; // Loading, Success, Error or Null
}
interface buttonStateProps {
  status: "Loading" | "Success" | "Error" | null;
}
interface loginInputProps {
  userEmail: string;
  userPassword: string;
}

export default function LoginForm() {
  const [queryResultStatus, setQueryResultStatus] =
    useState<queryResultStatusProps>({ status: null });
  const [buttonState, setButtonState] = useState<buttonStateProps>({
    status: null,
  }); // idle, loading, success, error
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<loginInputProps> = async (data) => {
    setQueryResultStatus({ status: "Loading" });
    await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        router.push("/dashboard");
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
      <h1 className="text-md">Login</h1>
      <form
        action="http://localhost:8000/auth/login"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="ex: user@domain.com"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="email"
            {...register("userEmail", { required: true, minLength: 8 })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            placeholder="Sua senha"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="password"
            {...register("userPassword")}
          />
        </FormControl>

        {buttonState.status === null ? (
          <Button className="mt-8" type="submit">
            Login
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
