import React from "react";
import { Circle } from "./style";

interface CircleImageProps {
    imageUrl?: string,
    right: string,
    top: string,
    dumb?: boolean,
}

export const CircleImage = ({imageUrl, right, top, dumb}: CircleImageProps) => {
    return (
        <>
            <Circle imageUrl={imageUrl} right={right} top={top} dumb={dumb}/>
        </>
    )
}