import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PROXY } from "../../constants/api";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import categoryIcon from "../../assets/circle_right.svg";
import sellerIcon from "../../assets/seller.svg";

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

function InvestPage() {
  const params = useParams();
  const investId = params.id;

  // const { data, isLoading } = useQuery({
  //   queryKey: ["item", investId],
  //   queryFn: async () => {
  //     const res = await axios.get(`${PROXY}/api/`);
  //     if (res.data.length > 4) return res.data.slice(0, 4);
  //     return res.data;
  //   },
  // });

  return (
    <div>
      <Helmet>
        <title>{data.name} | 펀딩</title>
      </Helmet>
      <ProductImg src={data.imgUrl} alt="상품 이미지" />
      <Container>
        <CategoryWrapper onClick={() => (window.location.href = `/list?category=${data.category}`)}>
          {data.category}
          <img src={categoryIcon} alt="카테고리 바로가기" />
        </CategoryWrapper>

        <Title>{data.name}</Title>
        <Description>{data.description}</Description>

        <Price $color={"#00BF40"}>
          {data.price.toLocaleString("ko-kr")}
          <MiniLetter>원</MiniLetter>
        </Price>
        <Price $isDown>
          {data.investNum}
          <MiniLetter>명 참여</MiniLetter>
        </Price>

        <MiniLetter>판매자 정보</MiniLetter>
        <Seller>
          <LeftBox>
            <img src={sellerIcon} alt="판매자 아이콘" />
            <div>
              주식회사 레어
              <br />
              <Follower>364 팔로워</Follower>
            </div>
          </LeftBox>
          <FollowBtn>팔로우</FollowBtn>
        </Seller>
      </Container>
      <BottomBox>
        <BottomBtn>펀딩하기</BottomBtn>
      </BottomBox>
    </div>
  );
}

export default InvestPage;

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

const CategoryWrapper = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 16px;

  cursor: pointer;

  color: #989ba2;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;

  color: #404040;
  font-size: 15px;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.48px;
`;

const Price = styled.div<{ $color?: string; $isDown?: boolean }>`
  color: ${({ $color }) => ($color ? `${$color}` : "#000")};
  font-size: 28px;
  font-family: Inter;
  font-weight: 600;
  line-height: 150%; /* 42px */
  letter-spacing: -0.896px;

  margin-bottom: ${({ $isDown }) => ($isDown ? "32px" : "0")};
`;

const MiniLetter = styled.span`
  margin-left: 4px;
  color: #404040;
  font-size: 15px;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.48px;
`;

const Seller = styled.div`
  border-radius: 16px;
  background: #fafafa;

  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

const LeftBox = styled.div`
  color: #404040;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.48px;

  display: flex;
  gap: 16px;
  align-items: center;
`;

const FollowBtn = styled.button`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: var(--Green-99, #f2fff6);

  color: var(--Semantic-Status-Positive, var(--Status-Positive, #00bf40));
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.512px;

  cursor: pointer;
`;

const Follower = styled.span`
  font-weight: 400;
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
`;
