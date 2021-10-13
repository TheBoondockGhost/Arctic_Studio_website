import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    Card,
    CardTitle,
    CardSubTitle,
    CardContent,
    CardButton,
    Decor,
    Messengers
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CircleImage } from "../CircleImage";
import { WhatWeDo } from "../WhatWeDo";
import { ServicesAndPrices } from "../ServicesAndPrices/ServicesAndPrices";
import { WorkGallery } from "../WorkGallery";

export const StartPage = () => {
    const [windowWidth, setWindowWidth] = useState(null)
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        console.log("windowWidth", windowWidth)
    })

    return (
        <>
        <main style={{flexGrow: 1}}>
        <section style={{ position: "relative", width: "100%" }}>
                <Decor>
                    <Card>
                        <Image src="/images/logo_1.png" width={169} height={133} />
                        <CardTitle>ARCTIC STUDIO</CardTitle>
                        <CardSubTitle>Пуховая мастерская</CardSubTitle>
                        <CardContent>Московская область</CardContent>
                        <CardContent>г. Ивантеевка</CardContent>
                        <CardContent>
                            тел. <a href="tel:+74957489800">+7(495)748-98-00</a>
                        </CardContent>
                        <CardButton>доступны услуги курьера</CardButton>
                        <Messengers>
                            <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faInstagram} size="3x" style={{ marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faVk} size="3x" />
                        </Messengers>
                    </Card>
                    <div style={{ position: "relative", flexGrow: 1 }}>
                        <CircleImage right={windowWidth > 1024 ? "0" : "45%"} top={windowWidth > 1024 ? "47%" : "9%"} dumb />
                        <CircleImage imageUrl={"/images/fetherGlass.jpg"} right={"0"} top={"15%"} />
                        <CircleImage imageUrl={"/images/fur.jpeg"} right={windowWidth > 1024 ? "35%" : "25%"} top={windowWidth > 1024 ? "35%" : "30%"} />
                    </div>
                </Decor>
            </section>
            <WhatWeDo title={"Чем мы занимаемся"}/>
            <ServicesAndPrices />
            <WorkGallery />
        </main>
        </>
    )
}