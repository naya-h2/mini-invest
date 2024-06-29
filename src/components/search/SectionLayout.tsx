import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: ReactNode;
}

function SectionLayout({ title, children }: Props) {
  return (
    <Container>
      {title}
      {children}
    </Container>
  );
}

export default SectionLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #171719;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;
