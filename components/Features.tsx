import {
  Container,
  SimpleGrid,
  Image,
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5"
import { ReactElement } from "react"
import { ShapeDivisor } from "./ShapeDivisor"
import { LINK_TO_BUY } from "@/constants/links"

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Box
        bg={"#49c190"}
        position="relative"
    >
      <Container 
        maxW={"4xl"} 
        h={"auto"}
        py={8}
        paddingBottom={["8vh", "10vh", "28vh"]}
      >
        <SimpleGrid alignItems={"center"} columns={{ base: 1, md: 2 }} spacing={10}>

          <Stack spacing={4}>
            <Heading color={"whiteAlpha.800"}>Calma que vai dar tudo certo!</Heading>
            <Text color={"whiteAlpha.700"} fontSize={"lg"}>
              Acabe com suas duvidas sobre sua gestação. 
              Este ebook vai sanar muitas de suas duvidas em seu período pré e pos-parto
            </Text>
            <Button
                colorScheme={"green"}
                bg={"#ffa56e"}
                as={"a"}
                rounded={"sm"}
                px={6}
                href={LINK_TO_BUY}
                _hover={{
                  bg: "#ffa43f",
                }}
              >
                Obter o ebook!
            </Button>
          </Stack>

          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "images/cover/book.png"
              }
              objectFit={"cover"}
              maxH="44vh"
              position={"relative"}
            />
          </Flex>
        </SimpleGrid>
        
        <ShapeDivisor />
      </Container>

    </Box>
  )
}
