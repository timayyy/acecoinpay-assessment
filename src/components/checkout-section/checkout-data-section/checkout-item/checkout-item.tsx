import AppleLogo from "../../../../assets/apple-logo.svg";
import { StyledCheckoutItemWrapper } from "./checkout-item.style";

type TCheckoutItemProps = {
  title: string;
  value: string;
  hasImage?: boolean;
};

export function CheckoutItem({ hasImage, title, value }: TCheckoutItemProps) {
  return (
    <StyledCheckoutItemWrapper>
      <p className="checkout-item-title">{title}</p>
      <div className="checkout-item-value">
        {hasImage && (
          <img src={AppleLogo} alt="apple logo" className="apple-logo" />
        )}
        <span className="value-text">{value}</span>
      </div>
    </StyledCheckoutItemWrapper>
  );
}
