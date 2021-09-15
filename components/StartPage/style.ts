import styled from "styled-components";
import {theme} from "../../shared/theme";

export const Card = styled.div`
    padding: 80px 0 0;
`;

export const CardTitle = styled.h1`
  font-size: 3.75rem;
  line-height: 1.1;
  margin: 10px 0 15px;

  @media (max-width: 800px) {
    font-size: 2.65rem;
  }
`;

export const CardSubTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.15em;
  color: white;

  margin-bottom: 15px;
`;

export const CardContent = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;

  a {
      text-decoration: none;
      font-family: Helvetica, sans-cerif;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline white;
  }

`;

export const CardButton = styled.a`
  font-size: 1.4rem;
  
  color: ${({theme}) => theme.colors.primeColor};
  background-color: ${({theme}) => theme.colors.yellow};
  display: block;
  width: fit-content;
  padding: 10px 20px 14px;
  margin: 10px 0;
  border-radius: 15px;


`;

export const SubTitle = styled.h2`
  font-size: 2.8rem;
  line-height: 1.1;
  margin: 10px 0 15px;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const MoreLink = styled.a`
  margin: -20px 0 30px;
  display: inline-block;
  vertical-align: top;
`;

export const Decor = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const Messengers = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  margin-top: 20px;

  [data-icon="instagram"] {
    color: ${({theme}) => theme.colors.instagram};
  }

  [data-icon="instagram"]:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.instagramHover};
  }

  [data-icon="whatsapp"] {
    color: ${({theme}) => theme.colors.whatsApp};
  }

  [data-icon="whatsapp"]:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.whatsAppHover};
  }

  [data-icon="vk"] {
    color: ${({theme}) => theme.colors.vk};
  }

  [data-icon="vk"]:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.vkHover};
  }

`;