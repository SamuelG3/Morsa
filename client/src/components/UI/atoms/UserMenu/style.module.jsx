import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }

  @media (max-width: 479px) {
    img {
      width: 1230px;
    }
  }

  @media (max-width: 62em) {
    #navIcons {
      display: flex;
      flex-direction: column-reverse;
    }

    #userMenu {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: left;
    }
  }

  .dropdownItem:hover,
  .dropdownItem:hover .bi {
    color: var(--main-color) !important;
  }

  @media (max-width: 62rem) {
    .sm-hide {
      display: none !important;
    }
  }
`;
