import styled from "styled-components";
import plusIcon from "../../assets/arrow_drop_up.svg";
import minusIcon from "../../assets/arrow_drop_down.svg";
import { Helmet } from "react-helmet-async";

const data = {
  id: 19,
  name: "배추(15000평)",
  description: "농장 위치: 충북 괴산",
  category: "농산물",
  rate: 7.84,
  yearRate: 7.86,
  investNum: 72,
  startDate: "2024-09-01",
  endDate: "2024-12-01",
  method: "펀딩",
  price: 72000,
  imgUrl:
    "https://hilarious-snapdragon-2ae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde448d9f-35f7-4ad6-850b-8de1c0d77406%2F7ff2aff2-85c9-4666-a013-3f8b9140b481%2Fimage.png?table=block&id=12b8863b-8c59-808f-832e-ec9024f21f6e&spaceId=de448d9f-35f7-4ad6-850b-8de1c0d77406&width=2000&userId=&cache=v2",
  dday: 34,
};

const PRICE_RIGHT = [
  { type: "시가", value: 5060, color: "#F14226" },
  { type: "고가", value: 5060, color: "#F14226" },
  { type: "저가", value: 4990, color: "#F14226" },
  { type: "상한가", value: 5060, color: "#F14226" },
  { type: "하한가", value: 3500, color: "#3281F5" },
  { type: "기준가", value: 240000, color: "#000" },
];

const PRICE_LEFT = [
  { type: "기준가", value: 59, color: "#000" },
  { type: "대금", value: "29만 5,190", color: "#000" },
  { type: "기준가", value: "167억", color: "#000" },
];

/**
 * 토큰 거래 페이지
 */
function TokenPage() {
  return (
    <>
      <Helmet>
        <title>{data.name} | 토큰 거래</title>
      </Helmet>

      <Header>
        <LeftBox>
          <Title>{data.name}</Title>
          <PriceContainer>
            <PriceBox>
              <Price $isPlus={data.rate > 0}>{data.price.toLocaleString("ko-kr")}</Price>
              <PriceChange $change={data.rate}>
                <Icon alt="아이콘" src={data.rate > 0 ? plusIcon : minusIcon} /> 80 ({data.rate > 0 ? "+" : ""}
                {data.rate}%)
              </PriceChange>
            </PriceBox>
            <NextPrice>다음 장 기준가</NextPrice>
          </PriceContainer>
        </LeftBox>
        <Img src={data.imgUrl} alt="상품 이미지" />
      </Header>

      <Tabs>
        <Tab $active>호가</Tab>
        <Tab>정보</Tab>
        <Tab>시세</Tab>
      </Tabs>

      <OrderBook>
        <div></div>
        <div>
          {[...Array(5)].map((_, idx) => (
            <OrderRow key={idx} $type="bid">
              <Column $color="#3281F5">
                <PriceText>240,000</PriceText>
              </Column>
            </OrderRow>
          ))}
        </div>
        <RightBox>
          {PRICE_RIGHT.map(({ type, value, color }) => (
            <ColBox key={type}>
              <Column>{type}</Column>
              <Column $color={color}>{value.toLocaleString("ko-kr")}</Column>
            </ColBox>
          ))}
        </RightBox>
      </OrderBook>

      <OrderBook>
        <LeftPriceBox>
          {PRICE_LEFT.map(({ type, value, color }, idx) => (
            <ColBox key={idx}>
              <Column>{type}</Column>
              <Column $color={color}>{value.toLocaleString("ko-kr")}</Column>
            </ColBox>
          ))}
        </LeftPriceBox>
        <div>
          {[...Array(5)].map((_, idx) => (
            <OrderRow key={idx} $type="ask">
              <Column $color="#F14226">
                <PriceText>240,000</PriceText>
              </Column>
            </OrderRow>
          ))}
        </div>
        <div></div>
      </OrderBook>

      <BottomBox>
        <ButtonGroup>
          <Button onClick={() => (window.location.href = "/404")} $type="buy">
            매수
          </Button>
          <Button onClick={() => (window.location.href = "/404")} $type="sell">
            매도
          </Button>
        </ButtonGroup>
      </BottomBox>
    </>
  );
}

export default TokenPage;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  justify-content: end;
  padding-bottom: 14px;
`;

const LeftPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding-top: 14px;
`;
const ColBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 12px;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 4px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Img = styled.img`
  width: 104px;
  height: 104px;

  border-radius: 8px;

  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
`;

const Header = styled.div`
  margin-top: 72px;
  margin-bottom: 40px;
  padding: 0 40px;

  display: flex;
  gap: 16px;
`;

const Title = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NextPrice = styled.span`
  color: #989ba2;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
  white-space: nowrap;
`;

const Price = styled.div<{ $isPlus: boolean }>`
  color: ${(props) => (props.$isPlus ? "#F14226" : "#3281f5")};
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 150%; /* 42px */
  letter-spacing: -0.896px;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const PriceChange = styled.div<{ $change: number }>`
  min-width: 112px;

  font-size: 16px;
  color: ${(props) => (props.$change > 0 ? "#F14226" : "#3281f5")};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.512px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-top: 40px;
  padding: 0 40px;
`;

const Tab = styled.div<{ $active?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: ${(props) => (props.$active ? "4px solid #1C1B1F" : "none")};
  color: ${(props) => (props.$active ? "#1C1B1F" : "#C6C6C8")};
`;

const OrderBook = styled.div`
  border: 1px solid #c6c6c8;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const OrderRow = styled.div<{ $type: "ask" | "bid" }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 30px;

  background-color: ${(props) => (props.$type === "bid" ? "rgba(50, 129, 245, 0.12)" : "rgba(241, 66, 38, 0.10);")};
  border-bottom: 1px solid rgba(198, 198, 200, 0.5);
  color: ${(props) => (props.$type === "bid" ? "#3281F5" : "#F14226")};

  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.512px;
`;

const Column = styled.div<{ $color?: string }>`
  text-align: center;
  color: ${(props) => (props.$color ? props.$color : "#989BA2")};

  font-size: 14px;
  font-weight: ${(props) => (props.$color ? "600" : "400")};
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const PriceText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const BottomBox = styled.div`
  height: 120px;
  width: 100%;

  position: fixed;
  bottom: 0;
  right: 0;

  padding: 20px 20px 36px;

  border-top: 1px solid rgba(60, 60, 67, 0.36);
  background: #f7f7f7;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Button = styled.button<{ $type: "buy" | "sell" }>`
  width: 100%;
  height: 64px;

  padding: 10px 14px;

  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.576px;

  background-color: ${(props) => (props.$type === "buy" ? "#F14226" : "#3281F5")};
  border-radius: 8px;
  cursor: pointer;
`;
