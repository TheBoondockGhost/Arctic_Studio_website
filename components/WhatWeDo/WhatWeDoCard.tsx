import React from "react";
import Image from "next/image";
import { Card, Figure, Title, Lead } from "./style";
import { WhatWeDoCardProps } from "../../shared/types";

export const WhatWeDoCard = ({title, image, lead}: WhatWeDoCardProps) => {
    return (
        <>
        <Card>
            <Figure>
                <Image alt={title} src={image} layout={"responsive"} width={340} height={180} objectFit={"cover"}/>
                {/* <img alt={title} src={image} /> */}
            </Figure>
            <Title>{title}</Title>
            <Lead>{lead}</Lead>
        </Card>
        </>
    )
}