import styled from "styled-components";
import moreIcon from "../../../assets/more.svg";
import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { PROXY } from "../../../constants/api";
import CardList from "../../list/CardList";

function PossibleSection() {
  const { category } = useStore((state) => ({ category: state.category }));
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["item", category],
    queryFn: async () => {
      const res = await axios.get(`${PROXY}/api/category?category=${category}`);
      if (res.data.length > 4) return res.data.slice(0, 4);
      return res.data;
    },
  });

  return (
    <Container>
      <TitleWrapper>
        지금 투자 가능 목록
        <MoreBtn onClick={() => navigate(`/list?category=${category}`)}>
          더보기
          <MoreIcon src={moreIcon} />
        </MoreBtn>
      </TitleWrapper>
      <CardWrapper>{isLoading ? "로딩중.." : data && data.length !== 0 ? <CardList data={data} /> : "데이터가 없습니다."}</CardWrapper>
    </Container>
  );
}

export default PossibleSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreBtn = styled.button`
  height: 20px;

  display: flex;
  gap: 4px;
  align-items: center;

  color: rgba(46, 47, 51, 0.88);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.144px;
`;

const MoreIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CardWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
