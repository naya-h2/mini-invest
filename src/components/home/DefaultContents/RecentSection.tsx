import styled from "styled-components";
import { POPULAR_DATA } from "../../../constants/mockup";
import { useQuery } from "react-query";
import axios from "axios";
import { GetItemType } from "../../../type/data";
import { PROXY } from "../../../constants/api";

function RecentSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["recent"],
    queryFn: async () => {
      const res = await axios.get(`${PROXY}/api/new`);
      return res.data as GetItemType[];
    },
  });

  return (
    <Container>
      최신 등록된 투자 목록
      <CardWrapper>
        {isLoading
          ? "로딩중.."
          : data && data.length > 0
          ? data.map(({ id, name, category, startDate, endDate, method }) => (
              <CardBox key={id}>
                <TitleWrapper>
                  {name}
                  <CategoryText>{category}</CategoryText>
                </TitleWrapper>
                <DetailBox>
                  <p>투자기간</p>
                  <DetailContent>
                    {startDate} ~ {endDate}
                  </DetailContent>
                </DetailBox>
                <DetailBox>
                  <p>투자방법</p>
                  <DetailContent>{method}</DetailContent>
                </DetailBox>
              </CardBox>
            ))
          : "데이터가 없습니다."}
      </CardWrapper>
    </Container>
  );
}

export default RecentSection;

const Container = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

const CardWrapper = styled.div`
  margin-top: 16px;

  display: flex;
  gap: 16px;

  white-space: nowrap;
  overflow-x: scroll;
`;

const CardBox = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 4px;
  border: 1px solid rgba(235, 235, 245);
`;

const TitleWrapper = styled.div`
  margin-bottom: 8px;

  display: flex;
  gap: 8px;
  align-items: center;

  color: #171719;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.576px;
`;

const CategoryText = styled.span`
  color: #989ba2;
  font-size: 13px;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.416px;
`;

const DetailBox = styled.div`
  display: flex;
  gap: 16px;

  color: rgba(46, 47, 51, 0.88);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;

const DetailContent = styled.p`
  font-weight: 400;
  letter-spacing: -0.14px;
`;
