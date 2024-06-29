import styled from "styled-components";
import searchIcon from "../../assets/header-search.svg";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/list?keyword=${event.currentTarget.keyword.value}`);
  };

  const handleCloseClick = (event: FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Form onSubmit={(event) => handleSubmitForm(event)}>
      <InputWrapper>
        <Input name="keyword" placeholder="검색어를 입력하세요" autoFocus />
        <button>
          <SearchIcon src={searchIcon} />
        </button>
      </InputWrapper>
      <CloseBtn onClick={(event) => handleCloseClick(event)}>닫기</CloseBtn>
    </Form>
  );
}

export default SearchBar;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px 12px 8px 24px;
  border-radius: 8px;

  background: #f7f7f8;

  ::placeholder {
    color: #2e2f33e0;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.448px;
  }

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  width: 90%;
  position: relative;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;

  position: absolute;
  top: 8px;
  right: 12px;
`;

const CloseBtn = styled.button`
  color: rgba(55, 56, 60, 0.61);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.448px;
`;
