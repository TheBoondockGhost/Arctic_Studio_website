import React from "react";
import Image from "next/image";
import { Card, Figure, Title, Lead } from "./style";
import { WhatWeDoCardProps } from "../../shared/types";

export const WhatWeDoCard = ({title, image, lead}: WhatWeDoCardProps) => {
    return (
        <>
        <Card>
            <Figure>
                {/* <Image src={image} width={"100%"} height={"100%"}/> */}
                <img alt={title} src={image} />
            </Figure>
            <Title>{title}</Title>
            <Lead>{lead}</Lead>
        </Card>
        </>
    )
}