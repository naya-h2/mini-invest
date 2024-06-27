import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import Category from "../../components/home/Category";
import PopularSection from "../../components/home/PopularSection";

function HomePage() {
  return (
    <>
      <Header />
      <Content>
        <Category />
        <PopularSection />
      </Content>
      <BottomNav />
    </>
  );
}

export default HomePage;

const Content = styled.div`
  margin: 54px 0 96px;
  padding: 0 20px;
`;
