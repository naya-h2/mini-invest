import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import Category from "../../components/home/Category";
import CategoryContents from "../../components/home/CategoryContents";
import DefaultContents from "../../components/home/DefaultContents";
import { useStore } from "../../store";

function HomePage() {
  const { category } = useStore((state) => ({ category: state.category }));

  return (
    <>
      <Header />
      <Content>
        <Category />
        {category !== "전체보기" ? <CategoryContents /> : <DefaultContents />}
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
