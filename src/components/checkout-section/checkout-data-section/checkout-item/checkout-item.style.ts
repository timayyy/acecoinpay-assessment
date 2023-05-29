import styled from "styled-components";

export const StyledCheckoutItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  margin-bottom: 1.9rem;
  font-size: 1.6rem;

  .checkout-item-title {
    font-weight: 500;
    color: ${({ theme }) => theme.colors?.textSub};
  }
  .checkout-item-value {
    display: flex;
    align-items: center;
    gap: 1rem;

    .apple-logo {
      height: 2rem;
    }

    .value-text {
      color: ${({ theme }) => theme.colors?.textMain};
      font-weight: 600;
    }
  }
`;
