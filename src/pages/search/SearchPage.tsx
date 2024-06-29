import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import SearchBar from "../../components/search/SearchBar";

function SearchPage() {
  return (
    <>
      <Content>
        <SearchBar />
      </Content>
      <BottomNav />
    </>
  );
}

export default SearchPage;

const Content = styled.div`
  margin-bottom: 96px;
  padding: 20px;
`;
