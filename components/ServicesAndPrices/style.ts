import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.1;
  margin: 10px 0 45px;
  text-align: center;
  color: ${({theme}) => theme.colors.primeColor};
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;


export const PriceListTitle = styled.h4`
font-size: 1.2rem;
color: ${({theme}) => theme.colors.primeColor};
position: absolute;
width: fit-content;
padding: 10px 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
background-color: ${({theme}) => theme.colors.yellow};
left: 50%;
transform: translate(-50%, -50%);
`;

export const PriceListBody = styled.ul`
margin: 0;
list-style-type: none;
padding: 0;
color: ${({theme}) => theme.colors.primeColor};
background-color: ${({theme}) => theme.colors.lightBlue};
padding: 37px 20px 30px;
border: 3px solid rgba(51, 119, 155, 0.3);
border-radius: 20px;
`;

export const PriceListItem = styled.li`
display: grid;
grid-column-gap: 0px;
grid-template-columns: 70% auto;
`;

export const ServiceDescription = styled.div`
display: flex;
justify-content: end;
align-items: center;
padding: 10px 25px 10px 0;
border-right: 2px solid rgba(51, 119, 155, 0.3);
text-align: end;

`;

export const PriceBlock = styled.div`
padding: 5px 0 5px 25px;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const ServicePrice = styled.p`

`;

export const ServiceVolume = styled.p`
font-size: 0.9rem;
font-style: italic;
`;

export const ServiceCall = styled.div`

a {
  color: #33779B;
  text-decoration: none;
  display: block;
  width: fit-content;
  padding: 5px 10px;
  background: linear-gradient(180deg, #FFB7A2 0%, #FFE6A2 100%);
  border-radius: 5px;
}
`;

export const PriceCard = styled.div`
position: relative;
width: 47%;

`;

export const ServiceSection = styled.div`
// display: grid;
// grid-column-gap: 60px;
// grid-template-columns: 1fr 1fr;
display: flex;

flex-flow: column wrap;
height: 900px;
align-items: center;
justify-content: space-between;
// -webkit-box-orient: vertical;

  @media (max-width: 1130px) {
    flex-wrap: nowrap;
    height: 1850px;
  }
`;

export const LogisticBox = styled.div`
list-style-type: none;
padding: 0;
color: ${({theme}) => theme.colors.primeColor};
background-color: ${({theme}) => theme.colors.yellow};
padding: 37px 20px 30px;
border-radius: 20px;
`;

export const DecorName = styled.div`
display: flex;
font-size: 3.75rem;
font-weight: 700;
color: ${({theme}) => theme.colors.primeColor};
align-items: center;
justify-content: center;
padding: 0 40px;
`;