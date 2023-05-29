import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "css"> {
  alignment?: "leftAlign" | "centerAlign";
  fullWidth?: boolean;
  isCvv?: boolean;

  /**
   * Start adornment component
   *
   * You can use this to add a prefix to an input.
   *
   * @example
   * // Country code of Portugal phone number input
   * <Input startAdornment={<IconComponent />} />
   */
  startAdornment?: ReactNode;

  /**
   * End adornment component
   *
   * You can use this to add a suffix or action to the input.
   *
   * @example
   * // Suffix of weight input
   * <Input endAdornment="kg" />
   *
   * @example
   * // Clear input button
   * <Input endAdornment={<button>clear</button>} />
   */
  endAdornment?: ReactNode;
}
