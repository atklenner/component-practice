import {
  Wrapper,
  Container,
  Header,
  Categories,
  Category,
  Items,
} from "./MenuStyles.js";
import Item from "./Item";
import menu from "./data.js";
import { useState } from "react";

export default function Menu() {
  const [items, setItems] = useState(menu);

  function filterItems(category) {
    if (category === "all") {
      setItems(menu);
    } else {
      setItems(menu.filter((item) => item.category === category));
    }
  }
  return (
    <Wrapper>
      <Container>
        <Header>Our Menu</Header>
        <Categories>
          <Category onClick={() => filterItems("all")}>All</Category>
          <Category onClick={() => filterItems("breakfast")}>
            Breakfast
          </Category>
          <Category onClick={() => filterItems("lunch")}>Lunch</Category>
          <Category onClick={() => filterItems("shakes")}>Shakes</Category>
        </Categories>
        <Items>
          {items.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </Items>
      </Container>
    </Wrapper>
  );
}
