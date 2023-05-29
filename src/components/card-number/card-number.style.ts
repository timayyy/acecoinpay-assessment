import styled from "styled-components";

export const StyledCardNumberWrapper = styled.div`
  display: grid;
  gap: 3rem 2rem;
  grid-template-columns: repeat(2, 1fr);

  .edit-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-self: end;
    gap: 0.9rem;
    color: ${({ theme }) => theme.colors?.bgBlue};

    .edit-text {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
`;
