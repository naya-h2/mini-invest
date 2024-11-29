import styled from "styled-components";

interface Props {
  disabled?: boolean;
  onClickFunc: () => void;
}

function MinusIcon({ disabled, onClickFunc }: Props) {
  return (
    <Button disabled={disabled} onClick={onClickFunc}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="mynaui:minus-circle-solid">
          <path
            id="Vector"
            d="M3.75 20C3.75 11.025 11.025 3.75 20 3.75C28.975 3.75 36.25 11.025 36.25 20C36.25 28.975 28.975 36.25 20 36.25C11.025 36.25 3.75 28.975 3.75 20ZM14.1667 18.75C13.8351 18.75 13.5172 18.8817 13.2828 19.1161C13.0484 19.3505 12.9167 19.6685 12.9167 20C12.9167 20.3315 13.0484 20.6495 13.2828 20.8839C13.5172 21.1183 13.8351 21.25 14.1667 21.25H25.8333C26.1649 21.25 26.4828 21.1183 26.7172 20.8839C26.9516 20.6495 27.0833 20.3315 27.0833 20C27.0833 19.6685 26.9516 19.3505 26.7172 19.1161C26.4828 18.8817 26.1649 18.75 25.8333 18.75H14.1667Z"
            fill={disabled ? "#8A8A8A" : "#00BF40"}
          />
        </g>
      </svg>
    </Button>
  );
}

export default MinusIcon;

const Button = styled.button`
  width: 40px;
  height: 40px;
`;
