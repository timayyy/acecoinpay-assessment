import styled from "styled-components";

export const StyledCheckoutTotalWrapper = styled.div`
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .total-value {
    .total-text {
      color: ${({ theme }) => theme.colors?.textSub};
      font-size: 1.5rem;
      font-weight: 500;
    }

    .total-amount {
      color: ${({ theme }) => theme.colors?.textMain};
      display: flex;
      // align-items: center;
      gap: 1rem;

      .total-amount-value {
        font-size: 3.2rem;
        font-weight: 700;

        .sub-amount {
          font-size: 2rem;
          font-weight: 600;
        }
      }

      .total-amount-currency {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors?.textSub};
        font-weight: 600;
        margin-top: 1.5rem;
      }
    }
  }

  .payment-logo {
    height: 2.5rem;
  }
`;
