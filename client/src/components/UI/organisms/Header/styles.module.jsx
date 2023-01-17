import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&display=swap");

  .Navbar {
    background-color: #fff;
    border-bottom: 0.5px solid #d1d1d1;
    margin-top: 0;
    width: 100%;
    z-index: 10;
  }

  #NavbarBrand {
    font-family: "Lalezar" !important;
    font-size: 2rem !important;
    color: #000 !important;
  }

  .bi {
    font-size: 1.1rem !important;
  }

  .navLink:hover,
  .navLink:hover .bi {
    color: var(--main-color) !important;
    cursor: pointer;
  }

  .top-bar-divider {
    width: 0;
    border-right: 1px solid #e3e6f0;
    height: calc(4.375rem - 2rem);
    margin: auto 1rem;
  }

  @media (max-width: 62rem) {
    #sm-hide {
      display: none;
    }
  }

  @media (min-width: 62rem) {
    #sm-show {
      display: none;
    }
  }
`;
