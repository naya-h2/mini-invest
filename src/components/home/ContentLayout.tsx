import styled from "styled-components";
import moreIcon from "../../assets/more.svg";
import { ReactNode } from "react";

interface Props {
  handleMoreClick: () => void;
  children: ReactNode;
  title: string;
}

function ContentLayout({ handleMoreClick, children, title }: Props) {
  return (
    <Container>
      <TitleWrapper>
        {title}
        <MoreBtn onClick={handleMoreClick}>
          더보기
          <MoreIcon src={moreIcon} />
        </MoreBtn>
      </TitleWrapper>
      <DataWrapper>{children}</DataWrapper>
    </Container>
  );
}

export default ContentLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreBtn = styled.button`
  height: 20px;

  display: flex;
  gap: 4px;
  align-items: center;

  color: rgba(46, 47, 51, 0.88);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.144px;
`;

const MoreIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DataWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
