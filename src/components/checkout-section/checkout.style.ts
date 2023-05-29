import styled from "styled-components";

export const StyledCheckoutWrapper = styled.div`
  padding-top: 10.5rem;
  position: relative;
  margin-top: 7rem;

  .blue-shadow {
    height: 2.4rem;
    width: 6.5rem;
    background-color: ${({ theme }) => theme.colors?.bgBlue};
    position: absolute;
    top: -0.8rem;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media (min-width: 960px) {
    margin-top: 0;
  }
`;

export const StyledCheckoutInfoWrapper = styled.div`
  position: relative;
  background-color: #f0f3f8;
  border-radius: 1.6rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 960px) {
    margin-top: 0;
    padding: 0 4rem;
  }

  .credit-card {
    position: relative;
    padding: 4rem 3rem 3rem 3rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), #fff);
    border-radius: 1.6rem;
    box-shadow: 0px 4px 14px 2px rgba(224, 224, 224, 0.6);
    width: 100%;
    overflow: hidden;
    z-index: 50;
    backdrop-filter: blur(15px);
    margin: -10.5rem 0.5rem 3rem 0.5rem;

    .credit-card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 10.5rem;

      img {
        height: 2.8rem;
        &.mc-chip-image {
          height: 4.5rem;
          width: 3.5rem;
        }
      }
    }
    .credit-card-body {
      color: ${({ theme }) => theme.colors?.textMain};
      margin-bottom: 3rem;

      .card-holder {
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 2rem;
      }

      .card-digits {
        display: flex;
        gap: 2rem;

        .hidden-digits {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          .digit-circle {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.colors?.bgDark};
          }
        }
        .visible-digits {
          font-size: 1.7rem;
          font-weight: 700;
        }
      }
    }
    .credit-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .expiry-date {
        font-size: 1.6rem;
        font-weight: 600;
      }
      .master-card-logo {
        height: 3rem;
      }
    }

    .card-circle {
      width: 70rem;
      height: 70rem;
      border: 1px solid ${({ theme }) => theme.colors?.inputBorder};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 3.2rem;
      left: -9.6rem;
      z-index: -1;

      .inner-circle {
        width: 57rem;
        height: 57rem;
        border: 1px solid ${({ theme }) => theme.colors?.inputBorder};
        border-radius: 50%;
      }
    }
  }
`;
