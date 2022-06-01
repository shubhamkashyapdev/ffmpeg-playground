import React from "../_snowpack/pkg/react.js";
import {BrowserRouter as Router, Route, Routes} from "../_snowpack/pkg/react-router-dom.js";
import Header from "./components/AppHeader/Header.js";
import VideoToGIF from "./pages/VideoToGIF.js";
import YTD from "./pages/YTD.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    element: /* @__PURE__ */ React.createElement(YTD, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/vdo-to-gif",
    element: /* @__PURE__ */ React.createElement(VideoToGIF, null)
  })));
};
export default App;
