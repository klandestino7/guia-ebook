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
  useColorModeValue,
} from "@chakra-ui/react"

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children, key }: { children: ReactNode, key: number }) => {
  return (
    <Flex
      key = {key}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={4}
      w="20vh"

      rounded={"xl"}
      direction="column"

      align={"center"}
      justifyContent={"center"}
      alignItems={"center"}

      minH={"15vh"}
      borderRadius="xl"
      mb={2}
    >
      {children}
    </Flex>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"} color={"#49c190"}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      fontSize={"sm"}
      color={"blackAlpha.700"}
      // minH="0px"
    >
      {children}
    </Text>
  )
}


const TopicosDoLivro = [
  {
    title: "O pré-natal",
    description: " ",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Modelo de consultas",
    description: " ",
    image : "images/icons/bg-icon-2.svg",
  },
  {
    title: "Exames",
    description: "Falo sobre vários tipos de exames e o que eles são.",
    image : "images/icons/bg-icon-3.svg",
  },
  {
    title: "Até onde pode chegar uma gestação?",
    description: " ",
    image : "images/icons/bg-icon-3.svg",
  },
  {
    title: "Sintomas comuns na gestação",
    description: " ",
    image : "images/icons/bg-icon-3.svg",
  },
  {
    title: "Alimentação",
    description: "Dicas de como se alimentar melhor e o beneficio de alguns tipos de alimentos.",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Dicas se sentir enjoo, azia e vomitar",
    description: " ",
    image : "images/icons/bg-icon-2.svg",
  },
  {
    title: "Intercorrência mais comum",
    description: " ",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Parto humanizado",
    description: "Eu explano exatamente o que é o parto humanizado e seus beneficios para a mamãe e o bebê.",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Existe cesariana humanizada?",
    description: " ",
    image : "images/icons/bg-icon-2.svg",
  },
  {
    title: "Lei do acompanhante",
    description: " ",
    image : "images/icons/bg-icon-3.svg",
  },
  {
    title: "Preparação para o parto",
    description: " ",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Momento certo de ir para o hospital",
    description: " ",
    image : "images/icons/bg-icon-2.svg",
  },
  {
    title: "Metodos para alívio da dor",
    description: " ",
    image : "images/icons/bg-icon-3.svg",
  },
  {
    title: "Monitoração do bebê",
    description: " ",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Eventualidades",
    description: " ",
    image : "images/icons/bg-icon-2.svg",
  },
  {
    title: "Mitos",
    description: " ",
    image : "images/icons/bg-icon-3.svg",
  },
  {
    title: "Intervençoes na Mãe",
    description: " ",
    image : "images/icons/bg-icon-1.svg",
  },
  {
    title: "Parto normal x Cerária",
    description: " ",
    image : "images/icons/bg-icon-2.svg",
  },
  {
    title: "Amamentação",
    description: " ",
    image : "images/icons/bg-icon-3.svg",
  },
]


export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12} px={4}>
        <Stack spacing={0} align={"center"} color={"blackAlpha.800"}>
          <Heading color={"#49c190"}>Assuntos do livro</Heading>
          <Text
            fontSize={"sm"}
            color={"gray.600"}
          >
            Aqui a baixo estão os tópico que irei explicar com detalhes para sanar suas principais dúvidas
          </Text>
        </Stack>
        <Flex 
            padding={4}
            mx="auto"
            h="auto"

            // columnCount={ [2, 3, 4]}
            columnGap={"8px"}
            flexWrap={"wrap"}

            justifyContent={"center"}
        >
          { 
            TopicosDoLivro.map((item, idx) =>  (
                  <TestimonialContent key={idx}>
                    {/* <Image 
                      src={item.image}
                      alt={item.title}
                      size={"sm"}
                    /> */}
                    <TestimonialHeading>{item.title}</TestimonialHeading>
                    <TestimonialText>
                      {item.description}
                    </TestimonialText>
                  </TestimonialContent>
              )
            )
          }
        </Flex >
      </Container>
    </Box>
  )
}
