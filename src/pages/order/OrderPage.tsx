import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PROXY } from "../../constants/api";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { useState } from "react";
import minusIcon from "../../assets/minus-circle.svg";
import plusIcon from "../../assets/plus-circle.svg";
import PlusIcon from "../../components/icon/PlusIcon";
import MinusIcon from "../../components/icon/MinusIcon";

function OrderPage() {
  const params = useParams();
  const investId = params.id;
  const [count, setCount] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["item", investId],
    queryFn: async () => {
      const res = await axios.get(`${PROXY}/api?id=${investId}`);

      return res.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <div>로딩중..</div>
      ) : (
        <>
          <Helmet>
            <title>{data.name} | 구매</title>
          </Helmet>
          <ProductImg src={data.imgUrl} alt="상품 이미지" />
          <Container>
            <Title>{data.name}</Title>

            <OrderBox>
              <MinusIcon onClickFunc={() => setCount((prev) => --prev)} disabled={count <= 1} />
              <p style={{ width: "100%" }}>{count}</p>
              <PlusIcon onClickFunc={() => setCount((prev) => ++prev)} disabled={count > 999} />
            </OrderBox>

            <PriceBox>
              {data.price.toLocaleString("ko-kr")}
              <MiniLetter>원</MiniLetter>
            </PriceBox>
          </Container>
          <BottomBox>
            <BottomBtn onClick={() => (window.location.href = "/404")}>구매하기</BottomBtn>
          </BottomBox>
        </>
      )}
    </>
  );
}

export default OrderPage;

const ProductImg = styled.img`
  width: 100%;
  height: 280px;

  object-fit: cover;
  object-position: center;
`;

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 144px;
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

const BottomBtn = styled.button`
  border-radius: 8px;
  background: #00bf40;

  display: flex;
  height: 64px;
  width: 100%;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #f2fff6;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.576px;

  cursor: pointer;
`;

const Title = styled.h3`
  margin-top: 69px;
  text-align: center;

  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const OrderBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  width: 212px;
  margin: 20px auto;

  color: #00bf40;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  line-height: 150%; /* 72px */
  letter-spacing: -1.536px;
`;

const PriceBox = styled.div`
  color: #000;
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.768px;
`;

const MiniLetter = styled.span`
  margin-left: 4px;

  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;
