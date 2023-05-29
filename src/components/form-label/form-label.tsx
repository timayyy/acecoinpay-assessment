import { HTMLAttributes } from "react";
import { StyledFormLabel } from "./form-label.style";

interface FormLabelProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string;
}

export function FormLabel({ title, subTitle, ...rest }: FormLabelProps) {
  return (
    <StyledFormLabel {...rest}>
      <h3 className="title">{title}</h3>
      <p className="sub-title">{subTitle}</p>
    </StyledFormLabel>
  );
}
