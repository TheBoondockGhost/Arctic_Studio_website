import React from "react";
import { Section, SectionTitle, DecorCircle, Grid } from "./style";
import { WhatWeDoCard } from "./WhatWeDoCard";


export const WhatWeDo = ({title}) => {
    const leadOne = "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.";
    const leadTwo = "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.";
    const leadThree = "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.";
    return (
        <>
            <section id={"what-we-do"} style={{ position: "relative", width: "100%" }}>
                <SectionTitle>{title}</SectionTitle>
            <DecorCircle />
                <Grid>
                    <WhatWeDoCard image={"/images/whatWeDo/WhatWeDo_1.jpg"} title={"Реанимация пуховиков"} lead={leadOne} />
                    <WhatWeDoCard image={"/images/whatWeDo/WhatWeDo_2.jpg"} title={"Ремонт пуховиков"} lead={leadTwo} />
                    <WhatWeDoCard image={"/images/whatWeDo/WhatWeDo_3.jpg"} title={"Пошив пуховых изделий"} lead={leadThree} />
                </Grid>
            </section>
        </>
    )
}