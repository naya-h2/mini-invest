import styled, { css } from "styled-components";
import { DEADLINE_DATA } from "../../constants/mockup";
import { useQuery } from "react-query";
import axios from "axios";
import { GetItemType } from "../../type/data";

function DeadlineSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["deadline"],
    queryFn: async () => {
      const res = await axios.get("/api/dDay");
      return res.data as GetItemType[];
    },
  });

  return (
    <Container>
      <TitleWrapper>모집 마감 임박</TitleWrapper>
      <CardWrapper>
        {isLoading
          ? "로딩중.."
          : data && data.length > 0
          ? data.map(({ dday, name, description, price, yearRate, imgUrl, id }) => (
              <Card key={id} dDay={dday} name={name} description={description} price={price} rate={yearRate} imgUrl={imgUrl} />
            ))
          : "데이터가 없습니다."}
      </CardWrapper>
    </Container>
  );
}

export default DeadlineSection;

interface CardProps {
  dDay: number;
  name: string;
  description: string;
  price: number;
  rate: number;
  imgUrl: string;
}

function Card({ dDay, name, description, price, rate, imgUrl }: CardProps) {
  return (
    <CardBox>
      <CardChip>{`D-${dDay}`}</CardChip>
      <CardText>
        {name}
        <DetailText>{description}</DetailText>
      </CardText>
      <CardImg src={imgUrl} />
      <BottomWrapper>
        <BottomBox $isRight={true}>
          1 PIE 당 가격
          <BoldContent>{`${price.toLocaleString("ko-KR")} 원`}</BoldContent>
        </BottomBox>
        <BottomBox $isRight={false}>
          최근 1년 수익률
          <BoldContent>{`${rate}%`}</BoldContent>
        </BottomBox>
      </BottomWrapper>
    </CardBox>
  );
}

const DividingLine = css`
  border-right: 1px dashed rgba(120, 120, 128, 0.36);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px;

  white-space: nowrap;
  overflow-x: scroll;
`;

const CardBox = styled.div`
  padding: 20px;
  width: 344px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;

  border: 1px solid rgba(127, 127, 127, 0.2);
  border-radius: 4px;
`;

const CardChip = styled.span`
  padding: 8px 0;
  width: 66px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: #f2fff6;

  color: #00bf40;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.512px;
`;

const CardImg = styled.img`
  width: 82px;
  height: 82px;

  border-radius: 4px;
  object-fit: cover;
  object-position: center;

  position: absolute;
  top: 20px;
  right: 10px;
`;

const CardText = styled.div`
  margin-right: 82px;
  width: 222px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.512px;
  white-space: normal;
`;

const DetailText = styled.span`
  color: #989ba2;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.416px;
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
`;

const BottomBox = styled.div<{ $isRight: boolean }>`
  color: #171719;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.13px;

  ${({ $isRight }) => ($isRight ? DividingLine : null)};
`;

const BoldContent = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.18px;
`;
