import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  height: 73px;

  background-color: #33779B;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  display: flex;

  font-size: 1.6rem;
  font-family: ${(p) => p.theme.fonts.accent};

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: ${(p) => p.theme.colors.pink};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  ul {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding: 0 15px;

    @media (max-width: 800px) {
      padding: 0;
    }
  }

  a {
    text-decoration: none;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  a:hover {
    text-decoration: underline white;
  }


`;
