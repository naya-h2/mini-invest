import styled, { css } from "styled-components";
import { CategoryType } from "../../../type/homepage";
import { useQuery } from "react-query";
import axios from "axios";
import { GetItemType } from "../../../type/data";
import { PROXY } from "../../../constants/api";

function PopularSection() {
  const today = new Date();
  const hours = today.getHours();
  const { data, isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios.get(`${PROXY}/api/hot`);
      return res.data as GetItemType[];
    },
  });

  return (
    <Container>
      인기 TOP 3<DetailText>{`${hours}:00`} 기준, 전일 대비</DetailText>
      {isLoading ? (
        <Category>로딩중 ..</Category>
      ) : data && data?.length > 0 ? (
        data.map(({ id, name, category, rate, imgUrl }) => <Card id={id} key={id} name={name} category={category} rate={rate} imgSrc={imgUrl} isProfitable={rate > 0} />)
      ) : (
        "데이터가 존재하지 않습니다."
      )}
    </Container>
  );
}

export default PopularSection;

interface CardProps {
  id: number;
  name: string;
  category: CategoryType;
  rate: number;
  imgSrc: string;
  isProfitable: boolean;
}

function Card({ id, name, category, rate, imgSrc, isProfitable }: CardProps) {
  return (
    <CardBox onClick={() => (window.location.href = `/invest/${id}`)}>
      <CardImg src={imgSrc} />
      <CardText>
        {name}
        <Category>{category}</Category>
      </CardText>
      <CardRate $isProfitable={isProfitable}>{`${isProfitable ? "+" : "-"} ${rate}%`}</CardRate>
    </CardBox>
  );
}

const Container = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

const DetailText = styled.p`
  padding-bottom: 8px;

  color: #989ba2;
  text-align: right;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.416px;

  border-bottom: 1px solid rgba(127, 127, 127, 0.2);
`;

const CardBox = styled.div`
  height: 88px;
  padding: 12px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  position: relative;

  border-bottom: 1px solid rgba(127, 127, 127, 0.2);

  cursor: pointer;
`;

const CardImg = styled.img`
  width: 64px;
  height: 64px;

  position: absolute;
  left: 8px;

  border-radius: 4px;
  flex-shrink: 0;

  object-fit: cover;
  object-position: center;
`;

const CardText = styled.div`
  margin-left: 80px;
  min-width: 130px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.512px;
`;

const Category = styled.p`
  color: #989ba2;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.416px;
`;

const minusStyle = css`
  color: #ff4242;
  background-color: #fff4f4;
`;

const CardRate = styled.span<{ $isProfitable: boolean }>`
  padding: 10px 4px;
  min-width: 88px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: #f2fff6;

  color: #00bf40;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.512px;

  ${({ $isProfitable }) => ($isProfitable ? null : minusStyle)};
`;
