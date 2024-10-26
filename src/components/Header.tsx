import styled from "styled-components";
import logoIcon from "../assets/logo.svg";
import alertIcon from "../assets/header-alert.svg";
import searchIcon from "../assets/header-search.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src={logoIcon} alt="플랜테스트 로고" />
        플랜테스트
      </Logo>
      <SearchIcon src={searchIcon} onClick={() => navigate("/search")} />
      <AlertIcon src={alertIcon} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 54px;
  padding: 13px 20px;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: white;
`;

const Logo = styled.span`
  height: 28px;
  font-weight: 700;
  font-size: 20px;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 28px;
  height: 28px;

  position: absolute;
  right: 68px;

  cursor: pointer;
`;

const AlertIcon = styled.img`
  width: 28px;
  height: 28px;

  position: absolute;
  right: 20px;
`;
