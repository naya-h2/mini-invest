import { Helmet } from "react-helmet-async";
import BottomNav from "../../components/BottomNav";
import styled, { css } from "styled-components";

const MY_PLANT_ITEM = [
  {
    id: 18,
    name: "당근",
    plant: 300,
    profit: 20,
    price: 3000000,
    current: 60000,
    buying: 50000,
  },
  {
    id: 20,
    name: "납작 복숭아",
    plant: 5000,
    profit: 1,
    price: 4000000,
    current: 80000,
    buying: 80000,
  },
];

const HEART_ITEM = [
  { id: 19, name: "배추", current: 110000, hearting: 100000 },
  { id: 1, name: "몬스테라 오벨리스크", current: 49000, hearting: 52000 },
];

function PlantPage() {
  return (
    <>
      <Helmet>
        <title>플랜트 거래</title>
      </Helmet>
      <Content>
        <PageTitle>나의 플랜트</PageTitle>
        <MyRateBox>
          <p>전체수익률</p>
          <Rate>+ 12 %</Rate>
        </MyRateBox>

        <PlantContainer>
          {MY_PLANT_ITEM.map(({ id, name, plant, price, profit, current, buying }) => (
            <PlantBox id={name} onClick={() => (window.location.href = `/token/${id}`)}>
              <BoxWrapper>
                <Left>
                  <p>{name}</p>
                  <p style={{ fontSize: "22px" }}>{plant.toLocaleString("ko-kr")}P</p>
                </Left>
                <Right>
                  <Tag $isProfitable={!(profit > 0)}>
                    {profit > 0 ? `+` : "-"} {profit.toLocaleString("ko-kr")} %
                  </Tag>
                  <Tag $isProfitable={!(price > 0)}>
                    {price > 0 ? `+` : "-"} {price.toLocaleString("ko-kr")} 원
                  </Tag>
                </Right>
              </BoxWrapper>
              <PlantBottom>
                1플랜트
                <BottomWrapper>
                  <Circle $color="#2A2A2A" />
                  <p>
                    현재가 <Bold>{current.toLocaleString("ko-kr")}</Bold>
                  </p>
                </BottomWrapper>
                <BottomWrapper>
                  <Circle $color="#868687" />
                  <p style={{ color: "#868687" }}>
                    구매가 <Bold>{buying.toLocaleString("ko-kr")}</Bold>
                  </p>
                </BottomWrapper>
              </PlantBottom>
            </PlantBox>
          ))}
        </PlantContainer>

        <PageTitle>찜한 아이템</PageTitle>
        <PlantContainer>
          {HEART_ITEM.map(({ id, name, current, hearting }) => (
            <PlantBox $isNoBottom key={id} onClick={() => (window.location.href = `/invest/${id}`)}>
              {name}
              <p style={{ fontSize: "14px", fontWeight: "400", marginBottom: "16px" }}>1 플랜트</p>
              <InfoBox $color="#00BF40">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Circle $color="#00BF40" />
                  현재가
                </div>
                <Price>{current.toLocaleString("ko-kr")}</Price>
              </InfoBox>
              <InfoBox $color="#868687">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Circle $color="#868687" />찜 당시 가격
                </div>
                <Price>{hearting.toLocaleString("ko-kr")}</Price>
              </InfoBox>
            </PlantBox>
          ))}
        </PlantContainer>
      </Content>
      <BottomNav />
    </>
  );
}

export default PlantPage;

const Content = styled.div`
  margin-bottom: 96px;
  padding: 20px 20px 48px;
`;

const PageTitle = styled.h2`
  margin: 50px 0 15px;

  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const MyRateBox = styled.div`
  height: 70px;

  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  color: #404040;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.512px;

  border-radius: 16px;
  background: #f2fff6;
`;

const Rate = styled.p`
  padding: 8px 15px;
  color: #00bf40;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
`;

const PlantBox = styled.div<{ $isNoBottom?: boolean }>`
  position: relative;

  padding: 20px 24px;
  padding-bottom: ${({ $isNoBottom }) => ($isNoBottom ? "16px" : "60px")};
  border-radius: 16px;
  border: 1px solid rgba(112, 115, 124, 0.16);
  background: #fbfbfc;

  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.576px;
`;

const PlantBottom = styled.div`
  width: 100%;
  padding: 10px 24px;

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 1px solid rgba(112, 115, 124, 0.16);

  color: #2a2a2a;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.576px;
`;

const minusStyle = css`
  color: #f14226;
  background-color: rgba(241, 66, 38, 0.1);
`;

const Tag = styled.span<{ $isProfitable?: boolean }>`
  padding: 6px 14px;
  min-width: 66px;
  width: fit-content;
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

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Circle = styled.div<{ $color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ $color }) => $color};
  border-radius: 100%;
`;

const BottomWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Bold = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
`;

const PlantContainer = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoBox = styled.div<{ $color: string }>`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;

  color: ${({ $color }) => $color};
`;

const Price = styled.div`
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;
