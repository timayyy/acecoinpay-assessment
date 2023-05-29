import styled from "styled-components";

export const StyledCardExpiryInputWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.8rem;

  .slash {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors?.textMain};
  }
`;
