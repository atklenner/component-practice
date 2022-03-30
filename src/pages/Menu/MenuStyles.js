import styled from "styled-components/macro";

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    max-width: 1170px;
  }
`;

export const Header = styled.h1`
  font-size: 2.5rem;

  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 4em;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Category = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2em;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;
