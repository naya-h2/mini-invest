import styled from "styled-components";
import { PROFILE } from "../../constants/mockup";
import alertIcon from "../../assets/header-alert.svg";

function Profile() {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileImg src={PROFILE.imgUrl} />
        {PROFILE.name}님
      </ProfileWrapper>
      <AlertIcon src={alertIcon} />
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 100%;
`;

const AlertIcon = styled.img`
  width: 28px;
  height: 28px;
`;
