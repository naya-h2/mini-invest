import styled from "styled-components";
import { CategoryType } from "../type/homepage";

interface Props {
  name: string;
  category: CategoryType;
  price: number;
  isProfitable: boolean;
  rate: number;
  imgUrl: string;
  isEnd?: boolean;
}

function Card({ name, category, price, isProfitable, rate, imgUrl, isEnd = false }: Props) {
  return (
    <Box>
      <Img src={imgUrl} />
      <TitleWrapper>
        {name}
        <Category>{category}</Category>
      </TitleWrapper>
      <DetailWrapper>
        <DetailType>1 PIE 당 가격</DetailType>
        <DetailContent $color="#000">{price.toLocaleString("ko-KR")} 원</DetailContent>
      </DetailWrapper>
      <DetailWrapper>
        <DetailType>예상 누적수익률</DetailType>
        <DetailContent $color={isProfitable ? "#00bf40" : "#FF4242"}>{`${isProfitable ? "+" : "-"} ${rate}%`}</DetailContent>
      </DetailWrapper>
    </Box>
  );
}

export default Card;

const Box = styled.div`
  padding: 20px 12px 20px 116px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  position: relative;

  border-radius: 4px;
  border: 1px solid rgba(235, 235, 245);
  background: #fff;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;

  object-fit: cover;
  object-position: center;

  position: absolute;
  top: 20px;
  left: 20px;
`;

const TitleWrapper = styled.div`
  padding-bottom: 4px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.512px;
`;

const Category = styled.span`
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const DetailWrapper = styled.div`
  display: flex;

  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const DetailType = styled.div`
  width: 100px;
`;

const DetailContent = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 14px;
  font-weight: 700;
  line-height: 150%; /* 21px */
`;
