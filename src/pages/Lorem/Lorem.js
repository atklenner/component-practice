import { Container, Wrapper, Header, Form, Paragraphs } from "./LoremStyles";
import { useState } from "react";
import { text } from "./data";

export default function Lorem() {
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setIndex(value);
  }

  const paragraphs = [];

  for (let i = 0; i < index; i++) {
    paragraphs.push(text[i]);
  }

  return (
    <Wrapper>
      <Container>
        <Header>Tired of Boring Lorem Ipsum?</Header>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="para">
            Paragraphs:{" "}
            <input
              type="number"
              name="para"
              id="para"
              min={0}
              max={9}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </label>
          <button>Generate</button>
        </Form>
        <Paragraphs>
          {index !== 0 &&
            paragraphs.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
        </Paragraphs>
      </Container>
    </Wrapper>
  );
}
