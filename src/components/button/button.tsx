import { ButtonStyledComponent } from "./button.style";
import { IButtonProps } from "./i-button";

export function Button({
  variant,
  fullWidth,
  children,
  type,
  ...rest
}: IButtonProps) {
  return (
    <ButtonStyledComponent
      fullWidth={fullWidth}
      variant={variant}
      type={type}
      {...rest}
    >
      <span>{children}</span>
    </ButtonStyledComponent>
  );
}
