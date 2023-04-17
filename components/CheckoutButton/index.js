import styled from "styled-components";
import Link from "next/link";
export default function CheckoutButton() {
  return (
    <>
      <StyledLink href="/">Checkout</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  border: 2px solid black;
  box-shadow: 20px 15px 16px black;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(211, 59, 29, 0.8);
  text-decoration: none;
  font-weight: bold;
  color: black;
  margin-left: 70%;
`;
