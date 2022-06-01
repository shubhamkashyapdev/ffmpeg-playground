// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:ital,wght@0,300;0,400;0,700;1,900&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n/* basic styling */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Open-Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}