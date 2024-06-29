import styled from "styled-components";
import editIcon from "../../assets/edit.svg";

interface Props {
  data: string[];
}

function StarCategory({ data }: Props) {
  return (
    <Container>
      <TitleWrapper>
        관심 카테고리
        <EditWrapper>
          수정하기
          <EditIcon src={editIcon} />
        </EditWrapper>
      </TitleWrapper>
      <TagWrapper>
        {data.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </TagWrapper>
    </Container>
  );
}

export default StarCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.64px;
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: rgba(46, 47, 51, 0.88);
  font-size: 15px;
  font-weight: 400;
  line-height: 146.7%; /* 22.005px */
  letter-spacing: 0.144px;
`;

const EditIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Tag = styled.span`
  width: fit-content;
  height: 42px;
  padding: 0 24px;

  display: flex;
  align-items: center;

  border-radius: 40px;
  border: 1px solid #8a8a8a;
  background: #fff;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
`;
