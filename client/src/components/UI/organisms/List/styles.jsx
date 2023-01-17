import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 85%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.5 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-size: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      height: 42px;
      width: 42px;
      border-radius: 20px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  #ListHeader {
    background: #fff;
    padding: 25px 10px;
    border-top: 3px solid purple;
    border-top-left-radius: 5px;
    position: static;
  }

  ul {
    margin-top: 30px;
    height: 100%;
    overflow-y: scroll;
  }
`;
