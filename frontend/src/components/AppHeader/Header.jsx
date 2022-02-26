import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <div>Logo</div>
        <nav>
          <NavItems>
            <NavItem>
              <Link to="/">YouTube Video Download</Link>
            </NavItem>
            <NavItem>
              <Link to="/vdo-to-gif">Video To GIF</Link>
            </NavItem>
            <NavItem>
              <Link to="/vdo-to-gif">Video To GIF</Link>
            </NavItem>
          </NavItems>
        </nav>
      </HeaderContainer>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  background-color: #000;
  color: #fff;
  font-weight: bold;
  display: flex;
`;
const HeaderContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.ul`
  navitemst-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  padding: 15px 20px;
  transition: all 0.3s ease-in-out;
  :hover {
    filter: blur(0.2px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  a {
    color: #fff;
    letter-spacing: 0.3px;
  }
`;

export default Header;
