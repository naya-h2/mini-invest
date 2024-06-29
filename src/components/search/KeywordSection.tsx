import icon1 from "../../assets/tag-plant.svg";
import icon2 from "../../assets/tag-island.svg";
import icon3 from "../../assets/tag-building.svg";
import icon4 from "../../assets/tag-movie.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SectionLayout from "./SectionLayout";

const RECOMMEND_KEYWORD = [
  {
    keyword: "희귀한",
    icon: icon1,
  },
  {
    keyword: "안정적 수익",
    icon: icon2,
  },
  {
    keyword: "장기 투자",
    icon: icon3,
  },
  {
    keyword: "새로운 시도",
    icon: icon4,
  },
];

function KeywordSection() {
  const navigate = useNavigate();

  const handleKeywordClick = (keyword: string) => {
    navigate(`/list?keyword=${keyword}`);
  };

  return (
    <SectionLayout title="추천 키워드">
      <KeywordWrapper>
        {RECOMMEND_KEYWORD.map(({ keyword, icon }) => (
          <KeywordTag key={keyword} onClick={() => handleKeywordClick(keyword)}>
            {keyword}
            <Icon src={icon} />
          </KeywordTag>
        ))}
      </KeywordWrapper>
    </SectionLayout>
  );
}

export default KeywordSection;

const KeywordWrapper = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
`;

const KeywordTag = styled.span`
  padding: 10px 16px;
  height: 40px;
  width: fit-content;

  display: flex;
  gap: 8px;

  color: #171719;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;

  white-space: nowrap;

  border-radius: 32px;
  border: 1px solid #37383c47;
  background: #fff;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
