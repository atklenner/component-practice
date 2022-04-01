import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Header = styled.h1`
  font-size: 2rem;

  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 2em;
  margin-bottom: 2em;

  @media (min-width: 1000px) {
    flex-direction: column;
  }
`;

export const Tab = styled.button`
  background-color: transparent;
  font-size: 1.25rem;

  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Info = styled.div``;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const JobTitle = styled.h2`
  font-weight: 400;
  font-size: 1.25em;
`;

export const Company = styled.p`
  font-weight: 600;
  padding: 0.25em 0.75em;
  background-color: lightgray;
  border-radius: 5px;
`;

export const Dates = styled.p``;

export const Duty = styled.div`
  text-align: left;
`;

export const InfoButton = styled.button``;
