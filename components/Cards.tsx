import { ReactNode } from "react"
import {
    Stack,
    useColorModeValue,
} from "@chakra-ui/react"


export const Card = ({ children, color = "#ffa76b"}: { children: ReactNode, color : string }) => {
    return (
    <Stack
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        p={5}
        rounded={"md"}
        align={"left"}
        pos={"relative"}
        borderBottom={"4px solid"}
        textAlign={"left"}
        borderColor={color}
        // _after={{
        //   content: `""`,
        //   w: 0,
        //   h: 0,
        //   borderLeft: "solid transparent",
        //   borderLeftWidth: 16,
        //   borderRight: "solid transparent",
        //   borderRightWidth: 16,
        //   borderTop: "solid",
        //   borderTopWidth: 16,
        //   borderTopColor: useColorModeValue("white", "gray.800"),
        //   pos: "absolute",
        //   bottom: "-16px",
        //   left: "50%",
        //   transform: "translateX(-50%)",
        // }}
    >
        {children}
    </Stack>
    )
}