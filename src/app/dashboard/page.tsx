import Image from 'next/image'
import { Flex, Text} from '@chakra-ui/react'
import { Federant } from 'next/font/google'

export default function Home() {
  let isMobile = true

  return (
    <Flex className="flex-col bg-blue-950 min-h-screen relative">
      <Flex className="mt-28 bg-homeImage bg-center bg-cover bg-no-repeat p-24 flex flex-col text-center text-white">
        <Text className="text-4xl mb-8">Bem-vindo ao sistema!</Text>
        <Text className="text-xl">Sinta-se a vontade para utilizar as ferramentas do sistema!</Text>
      </Flex>
      <Flex className='m-4 p-6 relative flex-col sm:flex-row text-justify gap-10 text-white sm:justify-center sm:items-center'>
        <Image src="/imgs/tomate1.jpg" alt="Lycooper" width={400} height={300} className='rounded-md shadow-md' />
        <Text>
        A aquaponia é um sistema para cultivo baseado na integração do sistema hidropônico (cultivo de plantas) e o sistema de aquicultura (cultura de peixes). 
        Diante disto, este trabalho apresenta o processo de desenvolvimento de um sistema criado com intuito de auxiliar, por meio da automatização, as dificuldades 
        encontradas no manejo do cultivo do tomateiro em um sistema de Aquaponia. 
        O cenário do processo de cultivo para embasamento do trabalho está localizado no Instituto Federal Catarinense - Câmpus Rio do Sul, SC.
        </Text>
      </Flex>
      <Flex className='m-4 p-6 relative flex-col sm:flex-row text-justify gap-10 text-white sm:justify-center sm:items-center'>
        <Image src="/imgs/tomate2.jpg" alt="Lycooper" width={400} height={300} className='rounded-md shadow-md' />
        <Text>
        O desenvolvimento do trabalho foi realizado através da linguagem Javascript, com integração do Node.js, 
        juntamente ao framework Express.js e o Banco de Dados MongoDB. A proposta visa automatizar uma parcela das dificuldades encontradas, 
        como checagem de dados de sensores e acionamento dos motores presentes nos sistemas. A implantação do sistema não foi possível, porém foi construída 
        uma maquete a fim de demonstrar o sistema em funcionamento de 
        forma semelhante ao projeto original, em menores escalas.
        </Text>
      </Flex>
    </Flex>
  )
}
