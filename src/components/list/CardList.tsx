import Card from "../Card";
import styled from "styled-components";
import { GetItemType } from "../../type/data";

interface Props {
  data: GetItemType[];
  isEnd?: boolean;
}

function CardList({ data, isEnd = false }: Props) {
  return (
    <Container>
      {data.map(({ id, name, category, price, rate, imgUrl }) => (
        <Card isEnd={isEnd} key={id} name={name} category={category} price={price} isProfitable={rate > 0} rate={rate} imgUrl={imgUrl} />
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
