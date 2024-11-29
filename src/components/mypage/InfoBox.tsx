import styled, { css } from "styled-components";
import coinIcon from "../../assets/infobox-coin.svg";
import arrowIcon from "../../assets/infobox-arrow.svg";
import plantIcon from "../../assets/mypage-plant.svg";

interface Props {
  title: string;
  value?: string;
  theme: "green" | "grey";
}

const MY_PLANT = [
  { type: "당근", plant: 300 },
  { type: "납작복숭아", plant: 5000 },
];

function InfoBox({ theme, title, value }: Props) {
  return (
    <Box $theme={theme}>
      <TopWrapper>
        <Icon src={theme === "green" ? coinIcon : arrowIcon} />
        <Title>{title}</Title>
      </TopWrapper>
      {value}
      <div>
        {theme === "green" &&
          MY_PLANT.map(({ type, plant }) => (
            <PlantBox>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {type} <img src={plantIcon} alt="플랜트" />
              </div>
              <Plant>
                {plant.toLocaleString("ko-kr")} <Mini>plant</Mini>
              </Plant>
            </PlantBox>
          ))}
      </div>
    </Box>
  );
}

export default InfoBox;

const greenStyle = css`
  background: #00bf40;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const greyStyle = css`
  background: #f7f7f8;
  color: #1c1b1f;
`;

const THEME = {
  green: greenStyle,
  grey: greyStyle,
};

const Box = styled.div<{ $theme: "green" | "grey" }>`
  min-height: 88px;
  padding: 16px 24px;

  border-radius: 4px;

  font-size: 22px;
  font-weight: 700;
  line-height: 150%; /* 33px */
  letter-spacing: -0.22px;

  ${({ $theme }) => THEME[$theme]};
  white-space: pre-wrap;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.48px;
`;

const TopWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const PlantBox = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 17px;
  font-weight: 500;
  line-height: 150%; /* 25.5px */
  letter-spacing: -0.544px;
`;

const Plant = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 150%; /* 33px */
  letter-spacing: -0.22px;
`;

const Mini = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;
