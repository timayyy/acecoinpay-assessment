import styled from "styled-components";

export const StyledFormSection = styled.section`
  margin-top: 5rem;
`;
export const StyledFormSectionGrid = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem 2rem;
`;

export const StyledColumnGrid = styled.div`
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 768px) {
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .col-1 {
      grid-column: 1/2;
    }
    .col-2 {
      grid-column: 2/3;
    }
    .col-full {
      grid-column: 1/3;
    }
  }
`;
