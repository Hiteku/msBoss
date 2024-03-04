import styled, { css } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import BossList from "./App";
import bossesReducer from './bossData';
import "./style.css";
import Sidebar from './sidebar';

function filterReducer(state = 'SHOW_ALL', action) {
    switch (action.type) {
      case 'SET_FILTER':
        return action.filter;
      default:
        return state;
    }
}

const bossApp = combineReducers({
    filterReducer,
    bossesReducer
});

const store = createStore(bossApp);

const Wrapper = styled.div`
  background-color: #333;
  height: 100%;
  padding: 1px;
  ${({ screenWidth }) =>
  css`
    width: ${screenWidth}px;
    @media (max-width: 1484.8px) {
      width: 1485.6px;
    }
  `}
`;

const Title = styled.h1`
  margin: 1em auto 0 auto ;
  text-align: center;
  font-size: 30px;
  color: #ddd;
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <Sidebar />
        <Title>楓之谷BOSS篩選器</Title>
        <BossList />
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
