import styled from "styled-components";

export const Container = styled.div`
  #userPicture {
    width: 90px;
    margin-right: 15px;
  }

  .userNameHeader {
    font-weight: bold;
  }

  #cards {
    a {
      margin-right: 15px;
      color: black;
      text-decoration: none;
      border: 1px solid lightgrey;
    }

    a:hover {
      border: 1px solid var(--main-color);
      cursor: pointer;
    }
  }
`;
