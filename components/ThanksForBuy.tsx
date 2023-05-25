import {
    Box,
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    IconProps,
    useColorModeValue,
} from '@chakra-ui/react';
import { Card } from './Cards';

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function ThanksForBuy() {
    const router = useRouter();

    useEffect(() => {   
        setTimeout(() =>  router.push('https://drive.google.com/file/d/1tswV8fBoY7747PRPnDhD84gKrquLURII/view'), 5000);
    }, []);

    return (
        <Box 
            // bg={useColorModeValue("gray.100", "gray.700")}
            display={"flex"}
            // bg={"purple"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Container
                maxW={"fit-content"}
                // bg={"pink"}
                margin={0}
            >
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 10, md: 18 }}
                    // maxW={"6xl"}
                    direction={{ base: "column", md: "column", xl: "row"}}
                    // bg={"yellow"}
                >
                    <Flex 
                        align={"center"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Image
                            rounded={"md"}
                            alt={"feature image"}
                            src={"images/cover/book.png"}
                            // objectFit={"full"}
                            w={'xl'}
                        />
                    </Flex>
        
                    <Flex
                        direction={"column"}
                        maxW={'md'}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                        px={4} 
                    >
                        <Heading
                            fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                            fontWeight={"bold"}
                            lineHeight={'150%'}
                            marginBottom={3}
                        >
                            Obrigado por adquirir o ebook
                        </Heading>
                        <Text
                            color={'gray.500'}
                            maxW={'3xl'}
                            textAlign={"center"}
                            fontSize={"sm"}
                            lineHeight={"md"}
                            marginBottom={6}
                        >
                            Seu download está iniciando ...
                        </Text>

                    </Flex>
                
                </Stack>
            </Container>
        </Box>
    );
}
