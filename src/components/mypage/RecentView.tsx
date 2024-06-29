import { useQuery } from "react-query";
import Card from "../Card";
import { GetItemType } from "../../type/data";
import axios from "axios";
import { PROXY } from "../../constants/api";
import styled from "styled-components";

function RecentView() {
  const { data, isLoading } = useQuery({
    queryKey: ["recent"],
    queryFn: async () => {
      const res = await axios.get(`${PROXY}/api/new`);
      return res.data as GetItemType[];
    },
  });

  return (
    <Container>
      최근 본 내역
      <CardWrapper>
        {isLoading
          ? "로딩중.."
          : data && data?.length > 0
          ? data.map(({ id, name, category, price, imgUrl }) => <Card key={id} type="recentView" name={name} category={category} price={price} imgUrl={imgUrl} />)
          : "데이터가 없습니다."}
      </CardWrapper>
    </Container>
  );
}

export default RecentView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
`;
