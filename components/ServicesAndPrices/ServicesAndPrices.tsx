import React from "react";
import Image from "next/image";
import {
    ServiceSection,
    SectionTitle,
    LogisticBox,
    PriceListItem,
    PriceCard,
    ServiceDescription,
    PriceBlock,
    ServicePrice,
    ServiceVolume,
    DecorName,
} from "./style";
import { PriceList } from "./PriceList";


export const ServicesAndPrices = () => {

    const services = [
        {
            title: 'Реанимация пуховиков',
            id: "1",
            priceList: [
                {
                    description: 'Замена / донабивка гусиным белым элитным пухом 98%',
                    price: '3 500 р.',
                    volume: '(100 г)'
                },
                {
                    description: 'Замена / донабивка белым пухом водоплавающих птиц 98%',
                    price: '2 800 р.',
                    volume: '(100 г)'
                },
                {
                    description: 'Замена / донабивка гагачьим пухом 100%',
                    price: '38 000 р.',
                    volume: '(100 г)'
                },
                {
                    description: 'Чистка пуховика для взрослого или подростка (от 8 лет)',
                    price: '1 200 - 3 000 р.',
                },
                {
                    description: 'Чистка детского пуховика (до 7 лет)',
                    price: '1 000 - 1 200 р.',
                },
                {
                    description: 'Чистка комбинезона, куртки + полукомбинезона детского (до 7 лет)',
                    price: '1 500 р.',
                },
                {
                    description: 'Сухая чистка сложных пятен (плюсом к чистке)',
                    price: 'от 500 р.',
                },
                {
                    description: 'Чистка и восстановление меха (опушка, воротник)',
                    price: '600 - 1 500 р.',
                },
                {
                    description: 'Замена меха на наш (натуральный песец, енот, лама, лиса)',
                    price: 'от 800 р.',
                },

            ]
        },
        {
            id: "2",
            priceList: [
                {
                    description: 'Сервисные работы на брендовую продукцию',
                    call: 'уточнить',
                },
            ]
        },
        {
            id: "3",
            logistic: true,
            priceList: [
                {
                    description: 'услуги курьера: забрать / вернуть от 3-х пуховых изделий',
                    priceOne: '300 р.',
                    volumeOne: '- 1 поездка',
                    priceTwo: 'бесплатно',
                    volumeTwo: '- 2 поездки'
                },
            ]
        },
        {
            title: 'Прочий ремонт',
            id: "4",
            priceList: [
                {
                    description: 'Утепление швов (синтепон, пуховые пакеты)',
                    price: 'от 3 000 р.',
                },
                {
                    description: 'Установка кнопок пластик / металл',
                    price: '50 / 80 р.',
                    volume: '(1 шт.)'
                },
                {
                    description: 'Замена манжет трикотаж',
                    price: 'от 500 р.',
                    volume: '(1 пара)'
                },
                {
                    description: 'Замена молнии',
                    price: 'от 1 000 р.',
                },
                {
                    description: 'Замена подклада куртки',
                    price: 'от 2 000 р.',
                },
                {
                    description: 'Прочий ремонт',
                    call: 'уточнить',
                },
            ]
        },
        {
            title: 'Пошив пуховой одежды',
            id: "5",
            priceList: [
                {
                    description: 'Эксклюзивный пуховый конверт для новорожденных',
                    price: 'от 8 000 р.',
                },
                {
                    description: 'Пуховые унты детские, взрослые на войлоке 1.2 см',
                    price: 'от 3 000 р.',
                    volume: '(1 пара)'
                },
                {
                    description: 'Пуховый конверт для Вашей куртки (без учета пуха)',
                    price: 'от 3 000 р.',
                },
                {
                    description: 'Пошив прочей пуховой одежды',
                    call: 'уточнить',
                },
            ]
        },
    ];

    return (
        <>
            <section id={"services-and-prices"} style={{ padding: "70px 0" }}>
                <SectionTitle>услуги и цены</SectionTitle>
                <ServiceSection>
                    <PriceList priceListCards={services} />
                    {/* <PriceCard>
                        <LogisticBox>
                            <PriceListItem>
                                <ServiceDescription>
                                    услуги курьера: забрать / вернуть от 3-х пуховых изделий
                                </ServiceDescription>
                                <PriceBlock>
                                    <ServicePrice>300 р.</ServicePrice>
                                    <ServiceVolume>- 1 поездка</ServiceVolume>
                                    <hr style={{ border: "0" }} />
                                    <ServicePrice>бесплатно</ServicePrice>
                                    <ServiceVolume>- 2 поездки</ServiceVolume>
                                </PriceBlock>
                            </PriceListItem>
                        </LogisticBox>
                    </PriceCard> */}
                    <PriceCard>
                        <DecorName>
                            <p>
                                ARCTIC STUDIO
                            </p>
                            <Image src="/images/logo_1.png" width={250} height={200} />
                        </DecorName>
                    </PriceCard>
                </ServiceSection>
            </section>
        </>
    )
}