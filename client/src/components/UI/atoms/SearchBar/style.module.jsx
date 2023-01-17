import styled from "styled-components";

export const Search = styled.div`
  #SearchBar {
    border-radius: 20px;
    background: #fff;
    width: 220px;
    height: 25px;
    margin: auto;
    border: 1px solid var(--light-gray);
    position: relative;
    display: flex;

    justify-content: space-between;
  }

  #SearchBar input {
    border: none;
    margin-left: 10px;
    width: 100%;
  }

  #SearchBar i {
    position: relative;
    margin-right: 10px;
  }

  @media (max-width: 62rem) {
    #SearchBar {
      width: 25rem;
    }
  }
`;
