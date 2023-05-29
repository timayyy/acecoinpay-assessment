import { useState, useMemo } from "react";
import { IInputProps } from "./i-input";
import {
  AdornmentWrapperDiv,
  InputField,
  InputFieldWrapperDiv,
  PasswordControlButton,
} from "./input.style";
import { TbGridDots } from "react-icons/tb";

export function Input({
  startAdornment,
  endAdornment,
  type,
  fullWidth,
  className,
  alignment = "centerAlign",
  isCvv,
  ...rest
}: IInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const PasswordControl = useMemo(
    () => (
      <PasswordControlButton
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {/* {showPassword ? <span>Open</span> : <span>Closed</span>} */}
        <div className="dots-icon">
          <TbGridDots fontSize={25} />
        </div>
      </PasswordControlButton>
    ),
    [setShowPassword, showPassword]
  );
  return (
    <InputFieldWrapperDiv fullWidth={fullWidth} className={className}>
      {startAdornment && (
        <AdornmentWrapperDiv>{startAdornment}</AdornmentWrapperDiv>
      )}
      <InputField
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        type={showPassword ? "text" : type}
        alignment={alignment}
        {...rest}
      />
      {endAdornment && (
        <AdornmentWrapperDiv className="end">
          {type === "password" || isCvv ? PasswordControl : endAdornment}
        </AdornmentWrapperDiv>
      )}
    </InputFieldWrapperDiv>
  );
}
