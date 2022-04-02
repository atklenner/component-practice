import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const Container = styled.div`
  margin-top: 3em;
  max-width: 640px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1em;

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 2em;

  label {
    font-size: 1.5rem;

    input {
      width: 64px;
      border-radius: 5px;
      border: 2px solid blue;
    }
  }

  button {
    border: none;
    margin-left: 0.5em;
    background-color: lightblue;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 0.5em 0.75em;
  }

  button:hover {
    background-color: palegreen;
  }
`;

export const Paragraphs = styled.div`
  font-size: 0.85rem;

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;
