import React from "react";
import Image from "next/image";
import { WorkGallery as WorkGalleryTypes } from "../../shared/types";
import { Card, Figure, Lead } from './style';
import Carousel from "./Carousel.module.css";

type WorkGalleryProps = {
    work: WorkGalleryTypes,
}

export const WorkGalleryCard = ({ work }: WorkGalleryProps) => {
    return (
        <>
            <div className={Carousel.embla__slide}>
                <Card>
                    <Figure>
                        <Image src={work.image} width={322} height={330} />
                    </Figure>
                    <Lead>{work.lead}</Lead>
                </Card>
            </div>
        </>
    )
}