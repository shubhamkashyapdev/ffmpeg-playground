import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
const Header = () => {
  return /* @__PURE__ */ React.createElement(HeaderBar, null, /* @__PURE__ */ React.createElement(HeaderContainer, null, /* @__PURE__ */ React.createElement("div", null, "Logo"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(NavItems, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "YouTube Video Download")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    to: "/vdo-to-gif"
  }, "Video To GIF")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    to: "/vdo-to-gif"
  }, "Video To GIF"))))));
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
