import styled from "styled-components";

function NotFoundPage() {
  return (
    <Container>
      <Bold>플랜테스트</Bold>곧 오픈 예정입니다!
    </Container>
  );
}

export default NotFoundPage;

const Container = styled.div`
  height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Bold = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
