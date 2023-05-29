import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { DefaultTheme } from "styled-components";

export interface IButtonProps
  extends PropsWithChildren<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "css">
  > {
  variant: "primary" | "unstyled";
  fullWidth?: boolean;
}
export type IButtonEmotionProps = IButtonProps & { theme: DefaultTheme };
