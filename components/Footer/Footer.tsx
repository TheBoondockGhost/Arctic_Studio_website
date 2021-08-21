import React from "react";
import { Center } from "../Center";
import { Container } from "./style";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <Container>
                <Center>
                    <a href="https://www.linkedin.com/in/aleksei-dubenskii-7115321ab/">Link me</a> {currentYear}
                </Center>
            </Container>
        </>
    )
}