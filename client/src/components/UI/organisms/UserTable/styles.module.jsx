import styled from "styled-components";

export const Container = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 70px;

  .bi-x-circle:hover {
    color: var(--main-color);
  }

  tr {
    vertical-align: middle;
  }

  #profilePic {
    border: 3px solid var(--mid-blue);
    width: 50px;
  }
`;
