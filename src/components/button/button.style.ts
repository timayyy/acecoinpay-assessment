import styled, { css } from "styled-components";
import { IButtonEmotionProps } from "./i-button";

function variantButtonStyles({ theme, variant }: IButtonEmotionProps) {
  switch (variant) {
    case "unstyled":
      return css`
        color: ${theme.colors?.bgDark};
        background: none;
        font-weight: 500;
        padding-left: 0;
        text-decoration: underline;

        &:hover,
        &:active {
          opacity: 0.8;
        }

        &:focus {
          outline: 0;
        }
      `;
    default:
    case "primary":
      return css`
        color: ${theme.colors?.white};
        background-color: ${theme.colors?.bgBlue};

        &:hover,
        &:active {
          color: ${theme.colors?.white};
          background-color: ${theme.colors?.bgBlue};
          opacity: 0.8;
        }

        &:disabled,
        &:disabled:active,
        &:disabled:hover {
          color: ${theme.colors?.white};
          border-color: ${theme.colors?.bgBlue};
          background-color: ${theme.colors?.bgBlue};
          cursor: not-allowed;
          opacity: 0.4;
        }
      `;
  }
}

export const ButtonStyledComponent = styled.button`
  font-family: Poppins;
  border: 0;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height: 1.6rem;
  font-weight: 600;
  border-radius: 0.6rem;
  text-transform: capitalize;
  transition: all 300ms ease-in-out;
  background-color: ${({ theme }) => theme.colors?.bgBlue};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem 2.4rem;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${variantButtonStyles}
`;
