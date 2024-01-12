import styled from "styled-components";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Filter from "./bossFilter";

var path = 'https://hiteku.github.io/img/ms/', isRB
// path = '../img/ms'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const BossItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  border-radius: 0 11px 11px 11px;
  background-color: #444;
`;

function Item(item, index, type) {
  let t, m, stage, result = []
  if (item === undefined) return ''
  item = item.replaceAll('λ', '')
  index = (index === undefined) ? 0 : index
  t = item.split('|')
  if (type === 4) // eslint-disable-next-line
    result = <><img src={path + "icon/" + "楓幣減免.png"}/><img src={path + "icon/" + "固定潛能.png"}/></>;
  else {
    if (type === 2) result = <img src={path + "icon/furniture/" + t[index] + ".png"} alt=""/>
    else if (type < 4) {
      m = t[index].split(',')
      for (let j = 0; j < m.length; j++) result.push(<img src={path + "icon/" + m[j] + ".png"} alt=""/>)
    }
    else {
      if (t[index].includes('>')) {
        if (t[index].includes('A')) {
          result.push(t[index].slice(0, 4) + '\n')
          t[index] = t[index].slice(4)
        }
        stage = t[index].split('>')
        let s = stage.length
        if (s > 0) result.push('⑴ ' + stage[0])
        if (s > 1) result.push('\n⑵ ' + stage[1])
        if (s > 2) result.push('\n⑶ ' + stage[2])
        if (s > 3) result.push('\n⑷ ' + stage[3])
      }
      else result = t[index]
    }
  }
  return result
}

function newTR(props, length) {
  let lists = [], s = 1, e = length, tce = props.boss.complete.split('|')
  let crystal = (isRB) ? props.boss.crystallizationRB : props.boss.crystallization
  if (props.boss.hard.includes('劇情')) { s++; e++; }
  if (props.boss.hard.includes('創世')) { e--; }
  for (let i = s; i < e; i++) {
    lists.push(
      <tr>
        <td>{Item(props.boss.hard, i)}</td>
        <td>{Item(props.boss.level, i)}</td>
        <td>{Item(props.boss.health, i)}</td>
        <td>{Item(props.boss.defense, i)}</td>
        <td>{Item(props.boss.ARCAUT, i)}</td>
        {tce[i].includes('λ') ? (<></>) : (<td>{Item(props.boss.complete, i)}</td>)}
        <td>{Item(props.boss.other, i, 1)}</td>
        <td>{Item(props.boss.furniture, i, 2)}</td>
        <td>{Item(props.boss.focus, i, 3)}</td>
        <td>{Item(props.boss.additional, i, 5)}</td>
        <td>{Item(props.boss.ELTA, i, 5)}</td>
        <td>{Item(crystal, i)}</td>
      </tr>)
  }
  return lists
}

function BossItem(props) {
  let i = 0, l = props.boss.hard.split('|').length, ce = props.boss.complete.split('λ').length
  let crystal = (isRB) ? props.boss.crystallizationRB : props.boss.crystallization
  if (props.boss.hard.includes('劇情')) { i++; l--; }
  return (
    <table>
      <tbody>
        <tr>
          <td style={{width: "15%"}} rowSpan={l}><img style={{width: "170px"}} src={path + "boss/" + props.boss.img + ".png"} alt=""/><br></br>{props.boss.name}</td>
          <td style={{width: "4.5%"}}>{Item(props.boss.hard, i)}</td>
          <td style={{width: "6%"}}>{Item(props.boss.level, i)}</td>
          <td style={{width: "15%"}}>{Item(props.boss.health, i)}</td>
          <td style={{width: "6%"}}>{Item(props.boss.defense, i)}</td>
          <td style={{width: "10%"}}>{Item(props.boss.ARCAUT, i)}</td>
          <td style={{width: "4.5%"}} rowSpan={ce}>{Item(props.boss.complete, i)}</td>
          <td style={{width: "4.5%"}}>{Item(props.boss.other, i, 1)}</td>
          <td style={{width: "4.5%"}}>{Item(props.boss.furniture, i, 2)}</td>
          <td style={{width: "10%"}}>{Item(props.boss.focus, i, 3)}</td>
          <td style={{width: "4.5%"}}>{Item(props.boss.additional, i, 5)}</td>
          <td style={{width: "4.5%"}}>{Item(props.boss.ELTA, i, 5)}</td>
          <td>{Item(crystal, i)}</td>
        </tr>
        {newTR(props, l)}
      </tbody>
    </table>
  );
}

function BossList() {

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleChange = (newValue) => {
    setCheckboxValue(newValue);
  };

  isRB = (checkboxValue) ? 'ReBoot' : ''

  const bosses = useSelector((store) => store.bossesReducer);
  const filter = useSelector((store) => store.filterReducer);

  const renderItems = () => {
    let list = [];
    bosses.forEach((item, index) => {
      if (
        (filter === "SHOW_ALL") ||
        (filter === "SHOW_SP" && item.other !== undefined) ||
        (filter === "SHOW_FT" && item.furniture !== undefined) ||
        // (filter === "SHOW_EQ" && item.focus !== undefined) ||
        (filter === "SHOW_ES" && item.focus !== undefined && item.focus.includes('固定')) ||
        (filter === "SHOW_AB" && item.additional !== undefined) ||
        (filter === "SHOW_ELTA" && item.ELTA !== undefined)
      ) {
        list.push(
          <BossItem key={item.name} boss={{ ...item, idx: index }} />
        );
      }
    });
    return list;
  };

  return (
    <Wrapper>
      <Filter selected={filter} checkboxValue={checkboxValue} onCheckboxChange={handleChange} />
      <BossItemContainer>
        <table>
          <thead>
            <tr>
              <th rowSpan="2" style={{width: "15%"}}></th>
              <th rowSpan="2" style={{width: "4.5%"}}>難度</th>
              <th rowSpan="2" style={{width: "6%"}}>等級</th>
              <th rowSpan="2" style={{width: "15%"}}>血量</th>
              <th rowSpan="2" style={{width: "6%"}}>防禦％</th>
              <th rowSpan="2" style={{width: "10%"}}>符文</th>
              <th rowSpan="2" style={{width: "4.5%"}}>通關</th>
              <th colSpan="6">掉落物</th>
            </tr>
            <tr>
              <th style={{width: "4.5%"}}>特殊</th>
              <th style={{width: "4.5%"}}>家具</th>
              <th style={{width: "10%"}}>重點物品</th>
              {/* <th style={{width: "4.5%"}}>祈禱精髓</th> */}
              <th style={{width: "4.5%"}}><img src="https://hiteku.github.io/img/ms/icon/可疑的附加方塊.png" alt=""/></th>
              <th style={{width: "4.5%"}}><img src="https://hiteku.github.io/img/ms/icon/靈魂艾爾達氣息.png" alt=""/></th>
              <th><img src="https://hiteku.github.io/img/ms/icon/強烈的力量結晶.png" alt=""/>{isRB}</th>
            </tr>
          </thead>
        </table>
      {renderItems()}
      </BossItemContainer>
      <div id="src">
        <sub>更新於V255版本．資料來源：<a className="src" href="https://home.gamer.com.tw/Cieuakis" target="_blank" rel="noreferrer">ᴍʏᴜ ͜ꕤ̷⋆</a>、<a className="src" href="https://forum.gamer.com.tw/Co.php?bsn=7650&sn=6437368" target="_blank" rel="noreferrer">新楓之谷BOSS全資訊整理</a></sub>
      </div><br></br>
    </Wrapper>
  );
}

export default BossList;