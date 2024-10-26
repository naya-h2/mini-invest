import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Profile from "../../components/mypage/Profile";
import InfoBox from "../../components/mypage/InfoBox";
import { PROFILE } from "../../constants/mockup";
import Dashboard from "../../components/mypage/Dashboard";
import StarCategory from "../../components/mypage/StarCategory";
import RecentView from "../../components/mypage/RecentView";
import { Helmet } from "react-helmet-async";

function MyPage() {
  return (
    <>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <Content>
        <Profile imgUrl={PROFILE.imgUrl} name={PROFILE.name} />
        <InfoSection>
          <InfoBox theme="green" title="PLANT" value={PROFILE.coin.toLocaleString("KO-kr")} />
          <InfoBox theme="grey" title="평가수익률" value={(PROFILE.rate > 0 ? "+ " : "") + PROFILE.rate + "%"} />
        </InfoSection>
        <Dashboard data={PROFILE.myInvest} />
        <StarCategory data={PROFILE.myCategory} />
        <RecentView />
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

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
