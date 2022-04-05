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
  gap: 4em;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 2em;

  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 1.25em;

  @media (min-width: 1000px) {
    flex-direction: column;
  }
`;

export const Tab = styled.button`
  background-color: transparent;
  padding: 0;
  font-size: 1.25rem;
  border: none;
  color: ${(props) => (props.selected ? "darkcyan" : "black")};
  border-bottom: ${(props) => (props.selected ? "2px solid darkcyan" : "none")};
  transition: color 250ms, border-bottom 250ms;

  &:hover {
    color: darkcyan;
    border-bottom: 2px solid darkcyan;
  }

  @media (min-width: 800px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    padding: 0 2em;
    border-bottom: none;
    border-left: ${(props) => (props.selected ? "2px solid darkcyan" : "none")};

    &:hover {
      border-left: 2px solid darkcyan;
      border-bottom: none;
    }
  }
`;

export const Info = styled.div`
  margin-bottom: 2em;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const JobTitle = styled.h2`
  font-weight: 400;
  font-size: 1.25em;
  margin-top: 0;
`;

export const Company = styled.p`
  font-weight: 600;
  padding: 0.25em 0.75em;
  background-color: lightgray;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

export const Dates = styled.p`
  color: rgba(0, 0, 0, 0.4);
`;

export const Duty = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 2em;
`;

export const InfoButton = styled.button`
  background-color: darkcyan;
  color: lightblue;
  border: none;
  padding: 0.5em 2.5em;
  border-radius: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 500ms, background-color 500ms;

  &:hover {
    background-color: lightblue;
    color: darkcyan;
  }
`;
