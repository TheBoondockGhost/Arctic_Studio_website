import React from "react";
import Link from "next/link";
import { Container, Logo } from "./style";
import { Center } from "../Center";


export const Header = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href="/">
                        <a>What's next</a>
                    </Link>
                </Logo>
            </Center>
        </Container>
    )
}