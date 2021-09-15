import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  flex: 1;
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;
