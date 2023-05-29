import styled from "styled-components";

export const StyledMainAppContainer = styled.div`
  position: relative;
  max-width: 124rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors?.white};

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.5rem;
    cursor: pointer;
    background-color: #f9fbfc;

    &:hover {
      color: ${({ theme }) => theme.colors?.white};
      background-color: #ef5350;
      transition: all 0.25s ease-in-out;
    }
  }
`;
export const StyledMainSection = styled.div`
  max-width: 112.6rem;
  padding: 6rem 1rem 6rem 1rem;
  margin: 0 auto;

  @media (min-width: 330px) {
    padding: 6rem 2rem 6rem 2rem;
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 2rem;

    .form-input-section {
      grid-column: span 8 / span 8;
    }

    .payment-info-section {
      grid-column: span 4 / span 4;
    }
  }
  @media (min-width: 1020px) {
    gap: 7rem;
  }
`;
