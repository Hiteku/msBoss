import styled, { css } from "styled-components";
import React from 'react';
import { useDispatch } from "react-redux";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  background-color: ${(props) => (props.active ? "#444" : "#222")};
  border: none;
  border-radius: 5px 5px 0 0;
  padding: 9px 15px;
  color: white;
  margin-right: 5px;
  letter-spacing: 0.1em;
  text-align: center;
  cursor: pointer;
`;

const CheckBoxWrapper = styled.div`
  position: absolute;
  right: 4.6%;
  ${({ screenWidth }) =>
  css`
    width: ${screenWidth}px;
    @media (max-width: 1484.8px) {
      left: 1370px;
    }
  `}
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #9393FF;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

function setFilter(filter){
  return {
      type: 'SET_FILTER',
      filter
  };
}

function Filter(props) {
  const dispatch = useDispatch();

  // const [checkboxValue, onCheckboxChange] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.checked;
    props.onCheckboxChange(newValue);
  }

  return (
    <ButtonContainer>
      <Button
        active={props.selected === "SHOW_ALL"}
        onClick={() => dispatch(setFilter("SHOW_ALL"))}
      >全部
      </Button>
      <Button
        active={props.selected === "SHOW_SP"}
        onClick={() => dispatch(setFilter("SHOW_SP"))}
      >特殊
      </Button>
      <Button
        active={props.selected === "SHOW_FT"}
        onClick={() => dispatch(setFilter("SHOW_FT"))}
      >家具
      </Button>
      {/* <Button
        active={props.selected === "SHOW_EQ"}
        onClick={() => dispatch(setFilter("SHOW_EQ"))}
      >重點裝備
      </Button> */}
      <Button
        active={props.selected === "SHOW_ES"}
        onClick={() => dispatch(setFilter("SHOW_ES"))}
      >祈禱精髓
      </Button>
      <Button
        active={props.selected === "SHOW_AB"}
        onClick={() => dispatch(setFilter("SHOW_AB"))}
      >附加
      </Button>
      <Button
        active={props.selected === "SHOW_ELTA"}
        onClick={() => dispatch(setFilter("SHOW_ELTA"))}
      >艾爾達
      </Button>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox"
          checked={props.checkboxValue} onChange={handleChange}/>
        <CheckBoxLabel htmlFor="checkbox"/>
      </CheckBoxWrapper>
    </ButtonContainer>
  );
}

export default Filter;
