import {
  Article,
  Image,
  Info,
  Head,
  Title,
  Price,
  Body,
} from "./ItemStyles.js";

export default function Item({ title, price, img, desc }) {
  // const formattedPrice = price.
  return (
    <Article>
      <Image>
        <img src={img} alt="some food" />
      </Image>
      <Info>
        <Head>
          <Title>{title}</Title>
          <Price>${price}</Price>
        </Head>
        <Body>{desc}</Body>
      </Info>
    </Article>
  );
}
