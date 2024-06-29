import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import SearchBar from "../../components/search/SearchBar";
import KeywordSection from "../../components/search/KeywordSection";
import NowSection from "../../components/search/NowSection";

function SearchPage() {
  return (
    <>
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
