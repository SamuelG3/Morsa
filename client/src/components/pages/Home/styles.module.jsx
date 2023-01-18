import styled from "styled-components";

export const Container = styled.div`
  .bi {
    font-size: 1.5rem;
    color: var(--light-gray);
  }

  .bi:hover {
    color: var(--main-color);
  }

  .carouselItem {
    height: 27rem;
    background: #000;
    color: #fff;
    position: relative;
    background-position: center;
    background-size: cover;
  }

  .carouselImg {
    top: 0;
    left: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.5;
  }
  /*------------------- Backgrounds ----------------------------*/

  .bg-gray {
    background-color: var(--light-gray);
  }
  /* ------------------- Header ------------------- */

  #LandingImage {
    width: 700px;
  }

  header a {
    color: var(--dark-color) !important;
  }

  header a:hover {
    color: var(--main-color) !important;
  }

  header a:visited {
    color: var(--dark-color);
  }

  h1 {
    font-family: "Lalezar";
    font-size: 3rem;
    color: #171d1c;
  }

  header h1 a,
  header h1 a:visited {
    text-decoration: none;
    color: var(--dark-color);
  }

  .special-btn {
    border: solid 2px var(--main-color) !important;
    border-radius: 0.3rem !important;
    transition: all 0.5s ease;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  header a:hover,
  .special-btn:hover {
    color: var(--main-color);
  }

  .special-btn:hover {
    transform: scale(1.05);
  }

  /* ------------------- Header ------------------- */

  /* ------------------- Hero ------------------- */

  /* main {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-content: center;
  height: 70vh;
} */

  h2 {
    font-size: 3rem;
  }

  .img-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    50% {
      transform: translateY(30px);
    }
  }

  .button-type-1 {
    padding: 15px;
    border: solid var(--main-color) 2px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: var(--main-color);
    margin-right: 20px;
  }

  .button-type-1-style {
    background-color: var(--main-color);
    color: #fff;
  }

  .button-type-1-style:hover {
    background-color: var(--secondary-color);
    border: solid var(--secondary-color) 2px;
    color: #fff;
  }

  /* ------------------- Hero ------------------- */

  /* ------------------- Parcerias ------------------- */
  .parcerias-article {
    background: #dbdbdb;
    width: 100%;
    padding: 5% 0;
    margin-bottom: 4.5rem;
    display: block;
    align-items: center;
  }

  .parcerias-article {
    line-height: 80px;
  }

  .parcerias-article p {
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    opacity: 50%;
  }

  .parcerias-article ul {
    margin: 0 auto;
    align-content: center;
    max-width: 1200px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 50%;
  }

  .parcerias-article li {
    display: inline-block;
  }

  .parcerias-article img {
    width: 50%;
  }

  /* ------------------- Parcerias ------------------- */

  /* ------------------- Footer ------------------- */

  footer {
    color: #fff;
  }

  footer a {
    color: var(--light-gray) !important;
  }

  footer a:hover {
    color: #fff !important;
  }
`;
