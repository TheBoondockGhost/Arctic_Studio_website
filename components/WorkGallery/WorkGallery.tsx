import React, { useState, useEffect, useCallback } from "react";
import { WorkGalleryCard } from "./WorkGalleryCard";
import { useEmblaCarousel } from "embla-carousel/react";
import Carousel from "./Carousel.module.css";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import {SectionTitle} from "./style";


export const WorkGallery = () => {

    const works = [
        {
            id: "1",
            image: "/images/works/work_1.jpg",
            lead: "Куртка на 14 лет. Замена синтетической ваты на пух - 126 г. Температурный режим: до -15℃"
        },
        {
            id: "2",
            image: "/images/works/work_2.jpg",
            lead: "Куртка на 5-6 лет. Донабивка - 100 г пуха. Дополнена мехом енотовидной собаки (на кнопках). Температурный режим: до -35℃"
        },
        {
            id: "3",
            image: "/images/works/work_3.jpg",
            lead: "Куртка на 14 лет. Замена синтетической ваты на пух - 126 г. Температурный режим: до -15℃"
        },
        {
            id: "4",
            image: "/images/works/work_4.jpg",
            lead: "Куртка на 5-6 лет. Донабивка - 100 г пуха. Дополнена мехом енотовидной собаки (на кнопках). Температурный режим: до -35℃"
        },
        {
            id: "5",
            image: "/images/works/work_5.jpeg",
            lead: "Куртка на 14 лет. Замена синтетической ваты на пух - 126 г. Температурный режим: до -15℃"
        },
    ]

    const [emblaRef] = useEmblaCarousel();
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true, inViewThreshold: 0.1 });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <>
            <section id={"work-gallery"} style={{padding: "70px 0"}}>
                <SectionTitle>галерея работ</SectionTitle>
                <div className={Carousel.embla} ref={emblaRef}>
                    <div className={Carousel.embla__viewport} ref={viewportRef}>
                        <div className={Carousel.embla__container}>
                            {works.map(work => (
                                <WorkGalleryCard key={work.id} work={work} />
                            ))}
                        </div>
                    </div>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
                <div className={Carousel.embla__dots}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}