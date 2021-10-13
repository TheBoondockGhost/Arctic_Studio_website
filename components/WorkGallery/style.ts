import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.1;
  margin: 10px 0 25px;
  text-align: center;
  color: ${({theme}) => theme.colors.primeColor};
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

export const Card = styled.div`
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
    0 4px 25px rgba(0, 0, 0, 0.07);
  color: black;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: black;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
      0 6px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`

export const Figure = styled.figure`
  margin: 0;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
  padding: 15px;

  img {
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const Lead = styled.div`
  margin: 0 20px 20px;
  color: ${({theme}) => theme.colors.primeColor};
  text-align: center;

  & > * {
    margin: 0 0 10px;
  }
`