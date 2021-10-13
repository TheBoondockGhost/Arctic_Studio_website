import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    width: 100%;
    margin-top: 80px;
    padding-top: 70px;
`;

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

export const Grid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
position: relative;

&:after {
  content: "";
  flex: auto;
}

&:after,
& > * {
  width: calc(33% - 10px);

}

@media (max-width: 800px) {
  &:after,
  & > * {
    width: 100%;
  }
}
`;

export const Card = styled.div`

  overflow: hidden;
  color: black;
  text-decoration: none;
  transition: all 0.2s;

`;

export const Figure = styled.figure`
  margin: 0;
  max-width: 100%;
  position: relative;
  overflow: hidden;


  img {
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const Title = styled.h3`
  margin: 10px 20px;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
`;

export const Lead = styled.div`
  margin: 0 20px 20px;
  text-align: center;
  font-size: 1.2rem;

  & > * {
    margin: 0 0 10px;
  }
`;

export const DecorCircle = styled.div`
width: 520px;
height: 520px;
background-color: #fff;
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.decorLightBlue};
position: absolute;
z-index: -1;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media (max-width: 1024px) {
    width: 220px;
    height: 220px;
  }
`;