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

// eslint-disable-next-line
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

// eslint-disable-next-line
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

  const handleFilter = (filter, checkboxValue) => {
    dispatch(setFilter(filter));
    props.onCheckboxChange(checkboxValue);
  };

  const handleChange = (event) => {
    props.onCheckboxChange(event.target.checked);
  };

  return (
    <ButtonContainer>
      <Button
        active={props.selected === "SHOW_ALL"}
        onClick={() => handleFilter("SHOW_ALL", props.checkboxValue)}
      >
        全部
      </Button>

      <Button
        active={props.selected === "SHOW_SP"}
        onClick={() => handleFilter("SHOW_SP", true)}
      >
        強化
      </Button>

      <Button
        active={props.selected === "SHOW_FT"}
        onClick={() => handleFilter("SHOW_FT", true)}
      >
        家具
      </Button>

      <Button
        active={props.selected === "SHOW_ELTA"}
        onClick={() => handleFilter("SHOW_ELTA", false)}
      >
        艾爾達
      </Button>

      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          checked={props.checkboxValue}
          onChange={handleChange}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </ButtonContainer>
  );
}

export default Filter;
