import styled from "styled-components";
import Link from "next/link";
export default function CheckoutButton() {
  return (
    <>
      <StyledButton type="submit">Checkout</StyledButton>
    </>
  );
}
export const StyledButton = styled.button`
  margin-top: 0px;
  box-shadow: 20px 15px 16px black;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(155, 225, 219, 0.8);
  button {
    background: none;
    border: none;
  }
  /* font-weight: 1000; */
`;
