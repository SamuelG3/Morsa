import styled from "styled-components";

export const Container = styled.div`
  #UserProfileHeader {
    width: 70px;
    margin-right: 15px;
  }
  #UserNameHeader {
    font-weight: bold;
  }

  #cards {
    a {
      margin-right: 15px;
      border: none;
      color: black;
      text-decoration: none;
    }

    a:hover {
      border: 2px solid var(--main-color);
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
    background: rgb(247, 247, 159);
    box-shadow: 0px 5px rgb(236, 236, 51);
    border-radius: 1rem;
    width: 10rem;
    height: 11rem;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 0s;
    margin-right: 2rem;
    position: relative;
    cursor: pointer;
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
    font-weight: bold;
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

  #favoritarCard i,
  #opcoesDoCard i {
    font-size: 1rem;
  }

  .itemCard:hover #favoritarCard,
  .itemCard:hover #opcoesDoCard {
    visibility: visible;
  }
`;
