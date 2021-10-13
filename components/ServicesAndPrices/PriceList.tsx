import React from "react";
import { PriceList as PriceListType } from "../../shared/types";
import {
    PriceListTitle,
    PriceListBody,
    PriceListItem,
    PriceCard,
    ServiceDescription,
    ServicePrice,
    ServiceVolume,
    ServiceCall,
    PriceBlock,
    LogisticBox
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

type PriceListProps = {
    priceListCards: PriceListType[],
}

export const PriceList = ({ priceListCards }: PriceListProps) => {
    return (
        <>
            {priceListCards.map((card) => (
                card?.logistic ? (
                    <PriceCard key={card.id}>
                        <LogisticBox>
                            {card.priceList.map(service => (
                                <PriceListItem key={service.description}>
                                    <ServiceDescription>
                                        {service.description}
                                    </ServiceDescription>
                                    <PriceBlock>
                                        <ServicePrice>{service.priceOne}</ServicePrice>
                                        <ServiceVolume>{service.volumeOne}</ServiceVolume>
                                        <hr style={{ border: "0" }} />
                                        <ServicePrice>{service.priceTwo}</ServicePrice>
                                        <ServiceVolume>{service.volumeTwo}</ServiceVolume>
                                    </PriceBlock>
                                </PriceListItem>
                            ))}
                        </LogisticBox>
                    </PriceCard>
                ) : (
                    <PriceCard key={card.id}>
                        {!!card.title && (
                            <PriceListTitle>{card.title}</PriceListTitle>
                        )}
                        <PriceListBody>
                            {card.priceList.map(service => (
                                <PriceListItem key={service.description}>
                                    <ServiceDescription>{service.description}</ServiceDescription>
                                    <PriceBlock>
                                        {!!service.price && (
                                            <ServicePrice>{service.price}</ServicePrice>
                                        )}
                                        {!!service.volume && (
                                            <ServiceVolume>{service.volume}</ServiceVolume>
                                        )}
                                        {!!service.call && (
                                            <ServiceCall>
                                                <a href="tel:+74957489800">
                                                    {service.call}
                                                    &nbsp;
                                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                                </a>
                                            </ServiceCall>
                                        )}
                                    </PriceBlock>
                                </PriceListItem>
                            ))}
                        </PriceListBody>
                    </PriceCard>
                )
            ))}
        </>
    )
}