import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    --main-color: #0fbcf9;
    --secondary-color: #064b64;
    --dark-color: #171d1c;
    --light-gray: #dbdbdb;
    --light-blue: #DCF0FC;
    --mid-blue: #87A4B5;
  }
  
  html, body, #root {
    height: 100vh;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  #NavbarBrand {
    font: 2rem 'Lalezar' !important;
    color: #000 !important;
    margin: 0 !important;
  }
  
  ul {
    list-style: none;
  }

  .input {
  outline: none;
  border: none;
  width: 98%;
  padding: 15px;
  border-radius: 10px;
  background-color: #edf5f3;
  margin: 5px 0;
  font-size: 14px;
}

.input:hover,
.input:focus {
  border: 1px solid var(--main-color);
}
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;
