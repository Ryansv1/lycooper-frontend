'use client'

import { Badge, Flex, ScaleFade, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect} from "react";

export default function Navbar(){
const {isOpen, onOpen, onClose}= useDisclosure()
const [isMobile, setMobile] = useState<Boolean>()


useEffect(() =>{
    if(window.innerWidth < 768){
        setMobile(true)
    } else {
        setMobile(false)
    }
}, [setMobile])

    return(
    <>
        <nav className="fixed flex flex-row justify-between items-center min-w-full p-8 z-20 bg-blue-950">
            <Image src="/imgs/logo.png" alt="Lycooper"width={200} height={50} />
            <Button  onClick={onOpen}>Menu</Button>
            <Drawer
                isOpen={isOpen}
                placement={isMobile ? "right" : "bottom"}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <h1>Menu Lycooper</h1>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex className="flex-col gap-6">
                            <Button>
                                <Link href="/dashboard">Tela Inicial</Link>
                            </Button>
                            <Button>
                                <Link href="/dashboard/sensores">Sensores</Link>
                            </Button>
                            <Button>
                                <Link href="/dashboard/historico">Histórico de Coleta</Link>
                            </Button>
                            <Button>
                                <Link href="/dashboard/configuracoes">Configurações</Link>
                            </Button>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>            
        </nav>
    </>
    )
}