import allIcon from "../../assets/category-all.svg";
import plantIcon from "../../assets/category-plant.svg";
import fruitIcon from "../../assets/category-fruit.svg";
import accIcon from "../../assets/category-necklace.svg";
import movieIcon from "../../assets/category-movie.svg";
import styled, { css } from "styled-components";
import { useStore } from "../../store";
import { CategoryType } from "../../type/homepage";

interface Menu {
  name: CategoryType;
  icon: string;
}

const MENU_LIST: Menu[] = [
  {
    name: "전체보기",
    icon: allIcon,
  },
  {
    name: "식물",
    icon: plantIcon,
  },

  {
    name: "명품",
    icon: accIcon,
  },
  {
    name: "독립영화",
    icon: movieIcon,
  },
  {
    name: "농산물",
    icon: fruitIcon,
  },
];

function Category() {
  const { category, setCategory } = useStore((state) => ({ category: state.category, setCategory: state.setCategory }));

  return (
    <Container>
      {MENU_LIST.map((item) => (
        <MenuBox key={item.name} $isSelected={category === item.name} onClick={() => setCategory(item.name)}>
          <Icon src={item.icon} />
          {item.name}
        </MenuBox>
      ))}
    </Container>
  );
}

export default Category;

const selectedFontStyle = css`
  color: #171719;
  font-weight: 700;
  opacity: 1;
`;

const Container = styled.div`
  padding: 25px 0;

  display: flex;
  justify-content: space-between;
`;

const MenuBox = styled.div<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: rgba(55, 56, 60, 0.61);
  opacity: 0.7;
  text-align: center;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.416px;

  cursor: pointer;
  ${({ $isSelected }) => ($isSelected ? selectedFontStyle : null)}
`;

const Icon = styled.img`
  width: 56px;
  height: 56px;
  padding: 12px;

  border-radius: 80px;
  background-color: #f7f7f8;
`;
