import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import CardList from "../../components/list/CardList";
import { POPULAR_DATA } from "../../constants/mockup";

function ListPage() {
  //query로 category 사용
  return (
    <>
      <Header />
      <Content>
        <CardList data={POPULAR_DATA} />
      </Content>
      <BottomNav />
    </>
  );
}

export default ListPage;

const Content = styled.div`
  margin: 54px 0 96px;
  padding: 0 20px 20px;
`;
