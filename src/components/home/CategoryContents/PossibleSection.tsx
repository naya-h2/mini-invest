import styled from "styled-components";
import moreIcon from "../../../assets/more.svg";
import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function PossibleSection() {
  const { category } = useStore((state) => ({ category: state.category }));
  const navigate = useNavigate();
  // const {} = useQuery({queryKey: ["item", category], queryFn: async () => {
  //   const res = axios('http://15.165.155.204:8080/api/')
  // }})

  return (
    <Container>
      <TitleWrapper>
        지금 투자 가능 목록
        <MoreBtn onClick={() => navigate(`/list?category=${category}`)}>
          더보기
          <MoreIcon src={moreIcon} />
        </MoreBtn>
      </TitleWrapper>
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
