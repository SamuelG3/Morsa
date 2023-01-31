import styled from "styled-components";

export const Container = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 70px;

  .bi-x-circle-fill {
    margin-right: 0;
    padding: 10px;
    border-radius: 20px;
  }
  .bi-x-circle-fill:hover {
    color: var(--main-color);
    background-color: var(--light-blue);
    cursor: pointer;
  }

  tr {
    vertical-align: middle;
  }

  #profilePic {
    border: 3px solid var(--mid-blue);
    width: 50px;
  }
`;
