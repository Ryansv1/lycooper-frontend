import { Flex } from "@chakra-ui/react";
import FormCollect from "@/components/form-collect";
export default function Historico(){


    return(
        <Flex className="min-h-screen bg-blue-900 flex justify-center items-center flex-col gap-4">
            <h1 className="text-white text-xl">Histórico de coleta</h1>
            <FormCollect>
                
            </FormCollect>
        </Flex>
    )
}