import { ReactNode } from "react"
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Container,
    Image,
    Avatar,
    Button,
    useColorModeValue,
} from "@chakra-ui/react"
import { LINK_TO_BUY } from "@/constants/links"

export const BeforeFooterCallToAction = () => {
    return (
        <Box
            bg={"#49c190"}
        >
            <Container
                maxW={"4xl"}
                py={28}
                justifyContent={"center"}
                position={"relative"}
                marginTop={"20"}
            >
                <Flex
                    // maxW={"auto"}
                    bg={"#97d08f"}
                    padding={"3vh"}
                    borderRadius={"lg"}
                    justifyContent={"space-between"}
                    position={"absolute"}
                    top="-31%"
                    left="0"
                    right="0"
                >
                    <Flex
                        // bg={"#49c190"}
                        borderRadius={"md"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        // w={"fit-content"}
                        h={"auto"}
                        maxH={"20vh"}
                    >
                        <Image
                            rounded={"md"}
                            alt={"feature image"}
                            src={"images/cover/book.png"}
                            objectFit={"cover"}
                            maxH={["25vh", "30vh"]}
                        />
                    </Flex>
                    <Flex
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                        maxW="60%"
                        direction={"column"}
                    >
                        <Heading 
                            color={"whiteAlpha.800"}
                            as={"h3"}
                            fontSize={["2xl", "2xl", "3xl"]}
                        >
                            Quer ter esse ebook?
                            Obtenha agora, seu para sempre!
                        </Heading>
                        <Button
                            color={"whiteAlpha.800"}
                            bg={"#ffa56e"}
                            rounded={"sm"}
                            w={"100%"}
                            fontSize={"1xl"}
                            as={"a"}
                            padding={"2vh"}
                            // px={6}
                            href={LINK_TO_BUY}
                            _hover={{
                            bg: "#ffa43f",
                            }}
                            marginTop={"2vh"}
                        >
                            Obter ebook!
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}