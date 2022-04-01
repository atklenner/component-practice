import styled from "styled-components/macro";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 750px;
  width: 80%;
`;

export const Header = styled.h1``;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  height: 2rem;
  width: 2rem;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border: 4px solid lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    border-radius: 100px;
  }

  p {
    text-align: center;
    width: 80%;
  }

  .activeSlide {
    opacity: 1;
  }
`;
