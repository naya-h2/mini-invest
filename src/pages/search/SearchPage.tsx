import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import SearchBar from "../../components/search/SearchBar";
import KeywordSection from "../../components/search/KeywordSection";
import NowSection from "../../components/search/NowSection";
import { Helmet } from "react-helmet-async";

function SearchPage() {
  return (
    <>
      <Helmet>
        <title>검색하기</title>
      </Helmet>
      <Content>
        <SearchBar />
        <KeywordSection />
        <NowSection />
      </Content>
      <BottomNav />
    </>
  );
}

export default SearchPage;

const Content = styled.div`
  margin-bottom: 96px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;
