import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Filter from "./bossFilter";

var path = 'https://hiteku.github.io/img/ms/', isRB
// path = '../img/ms'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const BossItemContainer = styled.div`
  padding: 2em;
  border-radius: 0 11px 11px 11px;
  background-color: #444;
`;

function Item(item, index, type) {
  let t, m, stage, result = [];
  if (item === undefined) return '';

  item = item.replaceAll('λ', '');
  index = (index === undefined) ? 0 : index;
  t = item.split('|');

  if (t[index] === '')  return '';
  else if (type === 4) // eslint-disable-next-line
    result = <><img src={path + "icon/" + "楓幣減免.png"}/><img src={path + "icon/" + "固定潛能.png"}/></>;
  else {
    if (type === 2) result = <img src={path + "icon/furniture/" + t[index] + ".png"} alt="" />;
    else if (type < 4) {
      m = t[index].split(',');
      for (let j = 0; j < m.length; j++) {
        result.push(<img key={j} src={path + "icon/" + m[j] + ".png"} alt="" />);
      }
    }
    else {
      if (t[index].includes('>')) {
        if (t[index].includes('A')) {
          result.push(t[index].slice(0, 4) + '\n');
          t[index] = t[index].slice(4);
        }
        stage = t[index].split('>');
        let s = stage.length;
        if (s > 0) result.push('⑴ ' + stage[0]);
        if (s > 1) result.push('\n⑵ ' + stage[1]);
        if (s > 2) result.push('\n⑶ ' + stage[2]);
        if (s > 3) result.push('\n⑷ ' + stage[3]);
      }
      else result = t[index];
    }
  }
  return result;
}

function newTR(props, length) {
  let lists = [], tce = props.boss.complete.split('|'), isLastLambda = true
  let crystal = (isRB) ? props.boss.crystallizationRB : props.boss.crystallization
  for (let i = 0; i < length; i++) {
    if (Item(props.boss.hard, i).includes('任務')) continue;
    var ace = isLastLambda ? props.boss.complete.split('λ').length : 1
    lists.push(
      <tr key={i}>
        {i === length-1 && <td style={{width: "15%"}} rowSpan={i+1}><img style={{width: "170px"}} src={path + "boss/" + props.boss.img + ".png"} alt=""/><br></br>{props.boss.name}</td>}
        <td style={{width: "4.5%"}}>{Item(props.boss.hard, i)}</td>
        <td style={{width: "6%"}}>{Item(props.boss.level, i)}</td>
        <td style={{width: "15%"}}>{Item(props.boss.health, i)}</td>
        <td style={{width: "6%"}}>{Item(props.boss.defense, i)}</td>
        <td style={{width: "10%"}}>{Item(props.boss.ARCAUT, i)}</td>
        {tce[i].includes('λ') ? (<></>) : (<td style={{width: "4.5%"}} rowSpan={ace}>{Item(props.boss.complete, i)}</td>)}
        <td style={{width: "4.5%"}}>{Item(props.boss.other, i, 1)}</td>
        <td style={{width: "4.5%"}}>{Item(props.boss.furniture, i, 2)}</td>
        <td style={{width: "10%"}}>{Item(props.boss.focus, i, 3)}</td>
        <td style={{width: "4.5%"}}>{Item(props.boss.additional, i, 5)}</td>
        <td style={{width: "4.5%"}}>{Item(props.boss.ELTA, i, 5)}</td>
        <td>{Item(crystal, i)}</td>
      </tr>)
    isLastLambda = tce[i].includes('λ')
  }
  return lists.reverse()
}

function BossItem(props) {
  return (
    <tbody>
      {newTR(props, props.boss.hard.split('|').length)}
    </tbody>
  );
}

function BossList() {

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleChange = (newValue) => {
    setCheckboxValue(newValue);
  };

  isRB = (checkboxValue) ? 'ReBoot' : '';

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
          <thead style={{ position: 'sticky', top: 0, zIndex: 1, background: '#333' }}>
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
          {renderItems()}
        </table>
      </BossItemContainer>
      <div className='src'>
        <sub>
          <a href="https://forum.gamer.com.tw/Co.php?bsn=7650&sn=6444311" target="_blank" rel="noopener noreferrer">
            <img
              src={`https://hiteku.fly.dev/static/assets/logo/bahamut.png`}
              alt="imgBahamut"
            />
          {/* </a>&nbsp;
          <a href="https://www.youtube.com/Hiteku" target="_blank" rel="noopener noreferrer">
            <img
              src={`https://hiteku.fly.dev/static/assets/logo/youtube.png`}
              alt="imgYoutube"
            /> */}
          </a> © Hiteku 更新於V259版本・資料來源：<a className="src" href="https://home.gamer.com.tw/Cieuakis" target="_blank" rel="noreferrer">ᴍʏᴜ ͜ꕤ̷⋆</a>、<a className="src" href="https://forum.gamer.com.tw/Co.php?bsn=7650&sn=6437368" target="_blank" rel="noreferrer">新楓之谷BOSS全資訊整理</a>
        </sub>
      </div><br></br>
      <ScrollToTopButton></ScrollToTopButton>
    </Wrapper>
  );
}

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buttonStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    borderRadius: '50%',
    background: '#222',
    color: '#fff',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: showButton ? '1' : '0',
    transition: 'opacity 0.3s ease-in-out'
  };

  return (
    <div style={buttonStyles} onClick={scrollToTop} >
      <i className="fa-solid fa-angle-up"></i>
    </div>
  );
};

export default BossList;