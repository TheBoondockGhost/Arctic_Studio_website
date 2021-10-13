import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
  padding: 15px;
  height: 490px;
  background-color: #33779B;
`;

export const ConnectionCard = styled.div`
width: 100%;
padding: 30px 0;
display: flex;
justify-content: space-between;
color: ${({theme}) => theme.colors.white};
font-size: 1.2rem;
line-height: 1.5rem;
`;

export const RightSide = styled.div`
text-align: end;
`;

export const LeftSide = styled.div`
  text-align: start;
`;

export const AddressBlock = styled.div`
margin-bottom: 20px;
`;

export const ContactBlock = styled.div`
margin-bottom: 20px;
`;

export const ListBody = styled.ul`
list-style-type: none;
padding: 0;
margin: 0 0 20px;
`;

export const BoldText = styled.p`
font-weight: 700;
margin-bottom: 10px;
`;

export const NormalText = styled.p`
margin-bottom: 10px;
`;

export const Messengers = styled.div`
  display: flex;
  justify-content: space-between;

  [data-icon="instagram"] {
    color: ${({theme}) => theme.colors.white};
  }

  [data-icon="instagram"]:hover {
    cursor: pointer;
    // color: ${({theme}) => theme.colors.instagramHover};
  }

  [data-icon="whatsapp"] {
    color: ${({theme}) => theme.colors.white};
  }

  [data-icon="whatsapp"]:hover {
    cursor: pointer;
    // color: ${({theme}) => theme.colors.whatsAppHover};
  }

  [data-icon="vk"] {
    color: ${({theme}) => theme.colors.white};
  }

  [data-icon="vk"]:hover {
    cursor: pointer;
    // color: ${({theme}) => theme.colors.vkHover};
  }

`;