import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .logo-circle {
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors?.bgBlue};
      color: ${({ theme }) => theme.colors?.white};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo-text {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors?.textMain};

      .light-text {
        font-weight: 300;
      }
    }
  }

  .clock-timer {
    display: flex;
    align-items: center;
    font-size: 2.16rem;
    font-weigth: 500;

    .timer-number {
      background-color: ${({ theme }) => theme.colors?.bgDark};
      color: ${({ theme }) => theme.colors?.white};
      height: 4.5rem;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      margin-left: 0.3rem;
    }

    .timer-divider {
      margin-right: 0.15rem;
      margin-left: 0.3rem;
    }
  }
`;
