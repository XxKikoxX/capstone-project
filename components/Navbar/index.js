import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <StyledUl>
          <StyledLi>
            <StyledLink href="/checkin">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="/historyPage">History Page</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="/about">About</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNavbar>
    </>
  );
};
export default Navbar;

const StyledLi = styled.li`
  display: inline;
  padding: 27px;
`;

const StyledLink = styled(Link)`
  list-style-type: none;
  color: black;
  text-decoration: none;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  border: 2px solid;
  border-color: black grey grey black;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  background-color: rgba(155, 225, 219, 0.8);
  font-weight: bold;
`;

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: -20px;
  width: 100%;
`;
