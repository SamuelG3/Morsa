import styled from "styled-components";

export const Container = styled.div`
  #boardCard a {
    text-decoration: none;
  }

  .redScheme {
    #cardIcon {
      background-color: #e74c3c;
    }
    .itemCard {
      background: #f1a7a9;
      box-shadow: 0px 5px #e74c3c;
    }
    .itemCard:hover {
      background: #e01e37;
    }
    #opcoesDoCard:hover {
      background: #f1a7a9;
    }
  }

  .blueScheme {
    #cardIcon {
      background-color: #3498db;
    }
    .itemCard {
      background: #77b6fb;
      box-shadow: 0px 5px #3498db;
    }
    .itemCard:hover {
      background: #196bde;
    }
    #opcoesDoCard:hover {
      background: #77b6fb;
    }
  }

  .greenScheme {
    #cardIcon {
      background-color: #2ecc71;
    }
    .itemCard {
      background: #92e6a7;
      box-shadow: 0px 5px #2ecc71;
    }
    .itemCard:hover {
      background: #25a244;
    }
    #opcoesDoCard:hover {
      background: #92e6a7;
    }
  }
  .yellowScheme {
    #cardIcon {
      background-color: #f1c40f;
    }
    .itemCard {
      background: #ffe169;
      box-shadow: 0px 5px #f1c40f;
    }
    .itemCard:hover {
      background: #edc531;
    }
    #opcoesDoCard:hover {
      background: #ffe169;
    }
  }

  .purpleScheme {
    #cardIcon {
      background-color: #893ce7;
    }
    .itemCard {
      background: #dc97ff;
      box-shadow: 0px 5px #893ce7;
    }
    .itemCard:hover {
      background: #6818a5;
    }
    #opcoesDoCard:hover {
      background: #dc97ff;
    }
  }

  .pinkScheme {
    #cardIcon {
      background-color: #e73cb1;
    }
    .itemCard {
      background: #ffb9d8;
      box-shadow: 0px 5px #e73cb1;
    }
    .itemCard:hover {
      background: #ff177f;
    }
    #opcoesDoCard:hover {
      background: #ffb9d8;
    }
  }

  .addNewCard {
    padding: 1rem 1.5rem;
    border: 2px rgb(175, 210, 233) dotted;
    border-radius: 1rem;
    width: 10rem;
    height: 11rem;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 0s;
    margin-right: 2rem;
    cursor: pointer;
  }

  .addNewCard p {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    font-weight: 800;
    color: rgb(41, 115, 184);
  }

  .addNewCard {
    font-size: 1.5rem;
    opacity: 1;
    margin-top: 0.8rem;
    color: rgb(169, 208, 245);
    transition-property: opacity;
    transition-duration: 2s;
  }

  .addNewCard:hover {
    border: 2px rgb(48, 100, 179) dotted;
    opacity: 0.4;
  }

  .addNewCard:hover i {
    color: rgb(48, 100, 179);
    opacity: 0.5;
  }

  .itemCard {
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    width: 10rem;
    height: 11rem;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 0s;
    margin-top: 0.8rem;
    margin-right: 2rem;
    position: relative;
    cursor: pointer;

    #cardIcon {
      padding: 5px;
      border-radius: 17px;
    }
  }

  .itemCard i {
    font-size: 1.5rem;
    color: white;
  }

  #cardTitle {
    color: black;
    font-weight: bold;
    line-height: 1.2rem;
    margin-top: 0.5rem;
  }

  #numeroDeCardsNoPipe {
    font-size: 0.7rem;
    color: #fff;
  }

  .itemCard:hover {
    background: rgb(243, 189, 13);
  }

  .itemCard:hover p,
  .itemCard:hover #cardTitle,
  .itemCard:hover #opcoesDoCard,
  .itemCard:hover i {
    color: white;
  }

  #favoritarCard {
    visibility: hidden;
    position: absolute;
    top: 10px;
    right: 15px;
  }

  #opcoesDoCard {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  #opcoesDoCard {
    padding: 10px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  #favoritarCard i,
  #opcoesDoCard i {
    font-size: 1rem;
  }

  .itemCard:hover #favoritarCard,
  .itemCard:hover #opcoesDoCard {
    visibility: visible;
  }
`;
