import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import Category from "../../components/home/Category";
import PopularSection from "../../components/home/PopularSection";
import DeadlineSection from "../../components/home/DeadlineSection";
import RecentSection from "../../components/home/RecentSection";
import PossibleSection from "../../components/home/CategoryContents/PossibleSection";

function HomePage() {
  return (
    <>
      <Header />
      <Content>
        <Category />
        {/* <PossibleSection /> */}
        <PopularSection />
        <DeadlineSection />
        <RecentSection />
      </Content>
      <BottomNav />
    </>
  );
}

export default HomePage;

const Content = styled.div`
  margin: 54px 0 96px;
  padding: 0 20px 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;
