import styled from "styled-components/macro";

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    max-width: 640px;
    flex-direction: row;
    margin-bottom: 2.5em;
  }
`;

export const Image = styled.div`
  img {
    height: 200px;
    width: 400px;
    object-fit: cover;
    border: 4px solid gray;
    border-radius: 3px;
    margin-bottom: 1em;

    @media (min-width: 800px) {
      height: 175px;
      width: 225px;
    }
  }
`;

export const Info = styled.div`
  @media (min-width: 800px) {
    margin-left: 2em;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted gray;
  padding-bottom: 0.5em;
  margin-bottom: 1em;
`;

export const Body = styled.div`
  margin-bottom: 2.5em;
  line-height: 1.6;
  font-size: 0.75rem;

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 0.75rem;

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const Price = styled.p`
  margin: 0;
  font-size: 0.75rem;

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;
