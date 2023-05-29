import { StyledCheckoutDataWrapper } from "./checkout-data-section.style";
import { CHECKOUT_ITEMS } from "../../../utils/checkout";
import { CheckoutItem } from "./checkout-item";
import { CheckoutTotal } from "./checkout-total";

export function CheckoutDataSection() {
  return (
    <StyledCheckoutDataWrapper>
      <div>
        {CHECKOUT_ITEMS.map((item) => (
          <CheckoutItem
            hasImage={item.hasImage}
            title={item.title}
            value={item.value}
            key={item.id}
          />
        ))}
      </div>
      <div className="dash-line">
        <div className="left-half-circle"></div>
        <div className="right-half-circle"></div>
      </div>
      <CheckoutTotal />
    </StyledCheckoutDataWrapper>
  );
}
