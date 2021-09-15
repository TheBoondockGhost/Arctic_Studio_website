import styled from "styled-components";

interface CircleProps {
    imageUrl?: string,
    right: string,
    top: string,
    dumb?: boolean,
}

export const Circle = styled.div`
    width: 320px;
    height: 320px;
    background-color: #fff;
    border: 10px solid;
    border: ${(props: CircleProps )=> props.dumb ? "none" : "10px solid"};
    border-color: ${({theme}) => theme.colors.blueCircle};
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.decorLightBlue};
    background-image: ${(props: CircleProps )=> props.dumb ? "none" : `url(${props.imageUrl})`};
    background-size: cover;
    position: absolute;
    top: ${({top}) => top};
    right: ${({right}) => right};

    @media (max-width: 1024px) {
        width: 220px;
        height: 220px;
      }

`;