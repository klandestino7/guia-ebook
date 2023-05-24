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

export default function AboutAuthor() {
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
                            src={"images/cover/author.png"}
                            objectFit={"full"}
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
                            Sobre o autor
                        </Heading>
                        <Text
                            color={'gray.500'}
                            maxW={'3xl'}
                            textAlign={"left"}
                            fontSize={"sm"}
                            lineHeight={"md"}
                            marginBottom={6}
                        >
                            Yuri Lobato Vasques, nascido em Belém.
                            Em 2009 ingressei na faculdade para medicina na UEPA - Universidade Estadual do Pará onde cursei seis anos de medicina.
                            Logo após formado me mudei para Londrina onde fiz a especialização em ginecologia e obstetrícia na Universidade Estadual
                            Londrina por três anos. Em 2018 consultório próprio onde trabalhamos por três anos ajudando famílias a ter um parto
                            respeitoso conhecer a medicina humanizada. Desde 2019 faço parte do grupo de educação continuada em humanização:
                            Projeto Obstare, grupo que luta pela humanização do Nascimento. Em 2021 e me mudei para Balneário Camboriú - SC
                            onde resido atualmente com a minha família e trabalho na Clínica Mandi - Pediatria e Obstetrícia humanizada.
                        </Text>

                        <Heading
                            fontSize={{ base: '2xl' }}
                            fontWeight={"bold"}
                            lineHeight={'120%'}
                            marginBottom={3}
                        >
                            Formação
                        </Heading>
                        <Stack
                            direction={{ base: 'column', md: 'row', lg: 'row'}}
                            spacing={{ base: 1, md: 8, lg: 2 }}
                            px={{ base: 0, md: 8, lg: 0}}
                        >
                            <Card
                                color="#ffa76b"
                            >
                                <Text
                                    fontWeight={"bold"}
                                >
                                    UEPA - Universidade Estadual Do Pará
                                </Text>
                                <Text
                                    color={"#ffa76b"}
                                    fontSize={"sm"}
                                >
                                    2009
                                </Text>
                                <Text
                                    color={"gray.500"}
                                    fontSize={"sm"}
                                >
                                    Eu concluí medicina na Universidade Estadual do Pará em 2015
                                </Text>
                            </Card>

                            <Card
                                color="#00c28f"
                            >
                                <Text
                                    fontWeight={"bold"}
                                >
                                    Universidade Estadual Londrina
                                </Text>
                                <Text
                                    color={"#00c28f"}
                                    fontSize={"sm"}
                                >
                                    2015
                                </Text>
                                <Text
                                    color={"gray.500"}
                                    fontSize={"sm"}
                                >
                                    Fiz a especialização em ginecologia e obstetrícia
                                </Text>
                            </Card>
                        </Stack>
                    </Flex>

                
                </Stack>
            </Container>
        </Box>
    );
}
