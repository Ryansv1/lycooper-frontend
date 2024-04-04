
import { FormControl, FormLabel, Input, Button, Select, Flex} from "@chakra-ui/react"
import { useEffect, useState } from "react";
export default function FormCollect (){
return(
    <Flex className="bg-green-400 p-16 rounded-md">
        <form action="http://localhost:8000/api/collect" method="GET" className="space-y-6">
            <FormControl isRequired>
                <FormLabel >Data da coleta</FormLabel>
                <Input variant="filled" type="date" name="date"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Sensor</FormLabel>
                <Select variant='filled' name="sensorId">
                    <option value="pH">pH</option>
                    <option value="temperature">Temperatura</option>
                    <option value="umidity">Umidade</option>
                </Select>
            </FormControl>
            <Button className=""type="submit">Pesquisar!</Button>
        </form>
    </Flex>
    )
}

    