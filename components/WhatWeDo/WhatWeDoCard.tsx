import React from "react";
import { Card, Figure, Img, Title, Lead } from "./style";
import { WhatWeDoCardProps } from "../../shared/types";

export const WhatWeDoCard = ({title, image, lead}: WhatWeDoCardProps) => {
    return (
        <>
        <Card>
            <Figure>
                <Img alt={title} src={image} width={340} height={180}/>
                {/* <img alt={title} src={image} /> */}
            </Figure>
            <Title>{title}</Title>
            <Lead>{lead}</Lead>
        </Card>
        </>
    )
}