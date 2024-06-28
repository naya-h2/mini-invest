import Card from "../Card";
import styled from "styled-components";
import { GetItemType } from "../../type/data";

interface Props {
  data: GetItemType[];
}

function CardList({ data }: Props) {
  return (
    <Container>
      {data.map(({ id, name, category, price, isProfitable, rate, imgUrl }) => (
        <Card key={id} name={name} category={category} price={price} isProfitable={true} rate={rate} imgUrl={imgUrl} />
      ))}
    </Container>
  );
}

export default CardList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
