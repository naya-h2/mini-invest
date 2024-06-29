import axios from "axios";
import { useQuery } from "react-query";
import { PROXY } from "../../constants/api";
import { GetItemType } from "../../type/data";
import styled from "styled-components";
import SectionLayout from "./SectionLayout";

function NowSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios.get(`${PROXY}/api/hot`);
      return res.data as GetItemType[];
    },
  });

  return (
    <SectionLayout title="지금 인기있는 투자">
      <CardList>
        {isLoading
          ? "로딩중.."
          : data && data.length > 0
          ? data.map(({ id, category, name, investNum, startDate, endDate, method }) => (
              <CardBox key={id}>
                <CategoryTag>{category}</CategoryTag>
                <TitleWrapper>
                  {name}
                  <NumberMsg>
                    <Number>{investNum}</Number>명이 투자했어요
                  </NumberMsg>
                </TitleWrapper>
                <DetailWrapper>
                  <Detail>
                    <p>투자기간</p>
                    <Content>
                      {startDate}~{endDate}
                    </Content>
                  </Detail>
                  <Detail>
                    <p>투자방법</p>
                    <Content>{method}</Content>
                  </Detail>
                </DetailWrapper>
                <Progressbar>
                  <Progress $ratio={Math.min((investNum / 200) * 100, 100)} />
                </Progressbar>
              </CardBox>
            ))
          : "데이터가 없습니다."}
      </CardList>
    </SectionLayout>
  );
}

export default NowSection;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardBox = styled.div`
  padding: 20px;

  border-radius: 8px;
  border: 1px solid rgba(55, 56, 60, 0.28);

  color: #171719;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.576px;
`;

const CategoryTag = styled.span`
  padding: 0 12px;
  width: fit-content;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid #00bf40;

  color: #00bf40;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.416px;
  white-space: nowrap;
`;

const TitleWrapper = styled.div`
  margin: 20px 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberMsg = styled.p`
  color: rgba(46, 47, 51, 0.88);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.448px;
`;

const Number = styled.span`
  color: #00bf40;
  font-weight: 600;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Detail = styled.div`
  display: flex;
  gap: 24px;

  color: rgba(46, 47, 51, 0.88);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const Content = styled.p`
  font-weight: 400;
  letter-spacing: -0.14px;
`;

const Progressbar = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 12px;

  background-color: #d9d9d9;
  border-radius: 12px;
`;

const Progress = styled.div<{ $ratio: number }>`
  width: ${({ $ratio }) => `${$ratio}%`};
  height: 12px;
  background-color: #00bf40;
  border-radius: 12px;
`;
