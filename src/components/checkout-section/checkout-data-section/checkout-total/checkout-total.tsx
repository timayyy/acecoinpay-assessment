import PaymentLogo from "../../../../assets/payout-image.png";
import { StyledCheckoutTotalWrapper } from "./checkout-total.style";

export function CheckoutTotal() {
  return (
    <StyledCheckoutTotalWrapper>
      <div className="total-value">
        <div className="total-text">You have to pay</div>
        <div className="total-amount">
          <p className="total-amount-value">
            549<span className="sub-amount">.99</span>
          </p>
          <p className="total-amount-currency">USD</p>
        </div>
      </div>
      <img src={PaymentLogo} alt="payment-logo" className="payment-logo" />
    </StyledCheckoutTotalWrapper>
  );
}
