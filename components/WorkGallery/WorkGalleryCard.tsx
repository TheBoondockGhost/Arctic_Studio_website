import React from "react";
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
                        <img src={work.image} width={320} height={320} />
                    </Figure>
                    <Lead>{work.lead}</Lead>
                </Card>
            </div>
        </>
    )
}