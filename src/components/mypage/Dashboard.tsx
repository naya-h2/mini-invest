import styled from "styled-components";
import { MyInvestType } from "../../type/data";
import rateIcon from "../../assets/myinvest-ratio.svg";

interface Props {
  data: MyInvestType[];
}

const COLOR = ["#00BF40", "#00AEFF", "#FF9200"];

function Dashboard({ data }: Props) {
  return (
    <Container>
      나의 투자 대시보드
      <InfoWrapper>
        <RateImg src={rateIcon} />
        <DetailBox>
          {data.map(({ type, ratio }, idx) => (
            <DetailWrapper key={type}>
              <Icon $color={COLOR[idx]} />
              {type}
              <Bold>{ratio + "%"}</Bold>
            </DetailWrapper>
          ))}
        </DetailBox>
      </InfoWrapper>
    </Container>
  );
}

export default Dashboard;

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

const InfoWrapper = styled.div`
  display: flex;
`;

const RateImg = styled.img`
  width: 160px;
  height: 120px;
`;

const DetailBox = styled.div`
  height: 120px;
  padding: 20px;
  border-radius: 8px;
  background: #f7f7f8;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DetailWrapper = styled.div`
  height: 24px;

  display: grid;
  grid-template-columns: 8px 80px 32px;
  gap: 8px;
  align-items: center;

  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const Icon = styled.div<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ $color }) => $color};
`;

const Bold = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.512px;
`;
