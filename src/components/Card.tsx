import styled, { css } from "styled-components";
import { CategoryType } from "../type/homepage";

interface Props {
  id: number;
  type?: "list" | "recentView";
  name: string;
  category: CategoryType;
  price: number;
  isProfitable?: boolean;
  rate?: number;
  imgUrl: string;
  isEnd?: boolean;
}

function Card({ id, type = "list", name, category, price, isProfitable, rate, imgUrl, isEnd = false }: Props) {
  return (
    <Box $isEnd={isEnd} $type={type} onClick={() => (window.location.href = isEnd ? `/token/${id}` : `/invest/${id}`)}>
      <Img src={imgUrl} />
      <TitleWrapper>
        <Title>{name}</Title>
        <Category>{category}</Category>
      </TitleWrapper>
      <DetailWrapper $type={type}>
        <DetailType>1 PLANT 당 가격</DetailType>
        <DetailContent $color="#000">{price.toLocaleString("ko-KR")} 원</DetailContent>
      </DetailWrapper>
      {type === "list" && (
        <DetailWrapper>
          <DetailType>예상 누적수익률</DetailType>
          <DetailContent $color={isProfitable ? "#00bf40" : "#FF4242"}>{`${isProfitable ? "+" : ""}${rate}%`}</DetailContent>
        </DetailWrapper>
      )}
    </Box>
  );
}

export default Card;

const recentViewCard = css`
  min-width: 300px;
  border: 1px solid #37383c47;
  border-radius: 8px;
`;

const Box = styled.div<{ $isEnd: boolean; $type?: string }>`
  padding: 20px 12px 20px 116px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  position: relative;

  border-radius: 4px;
  border: 1px solid rgba(235, 235, 245);
  background: ${({ $isEnd }) => ($isEnd ? "#F4F4F5" : "#fff")};

  ${({ $type }) => ($type === "recentView" ? recentViewCard : null)};

  cursor: pointer;
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

const Title = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Category = styled.span`
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;

  white-space: nowrap;
`;

const recentViewStyle = css`
  flex-direction: column;

  font-size: 18px;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.18px;
`;

const DetailWrapper = styled.div<{ $type?: string }>`
  display: flex;

  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;

  ${({ $type }) => ($type === "recentView" ? recentViewStyle : null)};
`;

const DetailType = styled.div`
  width: 100px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const DetailContent = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
`;
