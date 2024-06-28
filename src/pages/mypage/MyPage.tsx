import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Profile from "../../components/mypage/Profile";

function MyPage() {
  return (
    <>
      <Content>
        <Profile />
      </Content>
      <BottomNav />
    </>
  );
}

export default MyPage;

const Content = styled.div`
  margin-bottom: 96px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;
