import styled, { css } from "styled-components";
import coinIcon from "../../assets/infobox-coin.svg";
import arrowIcon from "../../assets/infobox-arrow.svg";

interface Props {
  title: string;
  value: string;
  theme: "green" | "grey";
}

function InfoBox({ theme, title, value }: Props) {
  return (
    <Box $theme={theme}>
      <TopWrapper>
        <Icon src={theme === "green" ? coinIcon : arrowIcon} />
        <Title>{title}</Title>
      </TopWrapper>
      {value}
    </Box>
  );
}

export default InfoBox;

const greenStyle = css`
  background: #00bf40;
  color: white;
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
