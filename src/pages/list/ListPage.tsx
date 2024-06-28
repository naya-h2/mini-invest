import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import CardList from "../../components/list/CardList";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { PROXY } from "../../constants/api";

function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const end = searchParams.get("end") === "true";
  const keyword = searchParams.get("keyword");

  const makeRequestUrl = () => {
    if (category) return `/api/category?category=${category}`;
    if (end) return `/api/end`;
    return `/api/keyword?keyword=${keyword}`;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["item-list", category, end, keyword],
    queryFn: async () => {
      const url = makeRequestUrl();
      const res = await axios.get(PROXY + url);
      return res.data;
    },
  });

  const makeTitleText = () => {
    if (category) return `지금 투자 가능한 [ ${category} ] 목록입니다.`;
    if (end) return `최근 종료된 투자 목록입니다.`;
    return `[ ${keyword} ] 로 검색한 결과입니다.`;
  };

  return (
    <>
      <Header />
      <Content>
        <Title>{makeTitleText()}</Title>
        {isLoading ? "로딩중.." : data && data.length > 0 ? <CardList data={data} isEnd={end} /> : "데이터가 없습니다."}
      </Content>
      <BottomNav />
    </>
  );
}

export default ListPage;

const Content = styled.div`
  margin: 54px 0 96px;
  padding: 10px 20px 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-weight: 500;
`;
