import styled from "styled-components";
import { InputField } from "../../input/input.style";

export const StyledInputWrapper = styled.div`
  background-color: #fbfbfb;
  border-radius: 6px;
  height: 7rem;
  padding: 0.7rem 2rem 0.7rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors?.inputBorder};
  display: flex;
  align-items: center;

  .verified-icon {
    height: 2rem;
    margin-top: 0.5rem;
  }

  .inner-wrapper {
    display: flex;
    align-items: center;
    flex: 1 1;
    gap: 0.6rem;

    .mc-logo {
      height: 2.2rem;
      margin-top: 0.5rem;
    }

    @media (min-width: 500px) {
      gap: 2rem;
      .mc-logo {
        height: 3.2rem;
      }
    }
  }

  @media (min-width: 500px) {
    padding: 0.7rem 2rem;
    .inner-wrapper {
      gap: 2rem;
    }
  }
`;

export const StyledCustomInput = styled(InputField)`
  border-right: 0;
  border-left: 0;
  width: 4ch;
  letter-spacing: 0;
  font-size: 1.5rem;
  padding: 0;
  font-family: monospace;

  &:focus {
    border: 0;
    background-color: transparent;
  }

  @media (min-width: 500px) {
    font-size: 1.8rem;
  }
`;
