import { Button, Container, Header, Review, Wrapper } from "./SliderStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { people } from "./data";
import { useState } from "react";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const { id, image, name, title, quote } = people[index];

  function changeIndex(n) {
    if (index === 0 && n === -1) {
      setIndex(people.length - 1);
    } else if (index === people.length - 1 && n === 1) {
      setIndex(0);
    } else {
      setIndex(index + n);
    }
  }

  return (
    <Wrapper>
      <Header>/ Reviews</Header>
      <Container>
        <Button onClick={() => changeIndex(-1)}>
          <FaChevronLeft />
        </Button>
        <Review>
          <img src={image} alt="some review" />
          <h2>{name}</h2>
          <p>{title}</p>
          <p>{quote}</p>
        </Review>
        <Button onClick={() => changeIndex(1)}>
          <FaChevronRight />
        </Button>
      </Container>
    </Wrapper>
  );
}
