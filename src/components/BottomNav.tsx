import styled from "styled-components";
import homeIcon from "../assets/nav-home.svg";
import homeSelectIcon from "../assets/nav-home-select.svg";
import categoryIcon from "../assets/nav-category.svg";
import categorySelectIcon from "../assets/nav-category-select.svg";
import mypageIcon from "../assets/nav-account.svg";
import mypageSelectIcon from "../assets/nav-account-select.svg";
import { useNavigate } from "react-router-dom";

const ICON_LIST = [
  {
    name: "홈",
    defaultIcon: homeIcon,
    selectedIcon: homeSelectIcon,
    path: "/",
  },
  {
    name: "카테고리",
    defaultIcon: categoryIcon,
    selectedIcon: categorySelectIcon,
    path: "/list",
  },
  {
    name: "마이페이지",
    defaultIcon: mypageIcon,
    selectedIcon: mypageSelectIcon,
    path: "/mypage",
  },
];

function BottomNav() {
  const curPath = window.location.pathname;
  const navigate = useNavigate();

  return (
    <Container>
      {ICON_LIST.map((item) => (
        <IconBox key={item.name} $isSelected={curPath === item.path} onClick={() => navigate(item.path)}>
          <Icon src={curPath === item.path ? item.selectedIcon : item.defaultIcon} />
          {item.name}
        </IconBox>
      ))}
    </Container>
  );
}

export default BottomNav;

const Container = styled.div`
  width: 100%;
  height: 96px;
  padding: 16px 32px 32px;

  position: fixed;
  bottom: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;

  background-color: #f9f9fa;
`;

const IconBox = styled.div<{ $isSelected: boolean }>`
  width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ $isSelected }) => ($isSelected ? "#2A2A2A" : "#8a8a8a")};
  text-align: center;
  font-size: 13px;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.416px;

  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
