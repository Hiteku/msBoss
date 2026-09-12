import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Filter from "./bossFilter";

var path = 'https://hiteku.github.io/img/ms/'
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

const HardTag = styled.span`
  display: inline-block;
  min-width: 60px;
  padding: 2px 12px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 18px;
  box-sizing: border-box;
  &.easy {
    background: #999;
  }
  &.normal {
    background: #28a9bd;
  }
  &.hard {
    background: #e84f73;
  }
  &.chaos {
    background: #292929;
    color: #b58b55;
    border: 1px solid #b58b55;
  }
  &.extreme {
    background: #292929;
    color: #ff3b4f;
    border: 1px solid #ff3b4f;
  }
`;

function Item(item, index, type) {
  let t, m, stage, result = [];
  if (item === undefined) return '';
  index = (index === undefined) ? 0 : index;
  t = item.split('|');

  if (t[index] === '')  return '';
  else if (type === 4) // eslint-disable-next-line
    result = <><img src={path + "icon/" + "楓幣減免.png"}/><img src={path + "icon/" + "固定潛能.png"}/></>;
  else {
    if (type === 2) {
      const imgName = t[index];
      result = (
        <div className="tooltip-container">
          <img src={path + "icon/furnishing/" + imgName + ".png"} alt="" />
          <img className="tooltip-image" src={path + "detail/furnishing/" + imgName + ".png"} alt="" />
        </div>
      );
    } else if (type < 4) {
      m = t[index].split(',');
      result = m.map((name, j) => (
        <div key={j} className="tooltip-container">
          <img src={path + "icon/" + name + ".png"} alt="" />
          <img className="tooltip-image" src={path + "detail/" + name + ".png"} alt="" />
        </div>
      ));
    } else if (type === 6) {
      const iconMap = { d: '強烈的力量結晶_每日', w: '強烈的力量結晶_每週', m: '強烈的力量結晶_每月', t: '黑暗的痕跡', a: '敵對者的決心', ARC: '秘法符文', AUT: '真實符文' };
      result = t[index]
        .split(/(ARC|AUT|[dwmta])/)
        .filter(Boolean)
        .map((char, i) => {
          const icon = iconMap[char];
          if (icon) {
            return (
              <img
                key={i}
                src={`https://hiteku.github.io/img/ms/icon/${icon}.png`}
                alt=""
                style={{ verticalAlign: 'middle' }}
              />
            );
          }
          return char;
        });
    }
    else if (type === 7) {
      const hardMap = { '簡單': 'easy', '普通': 'normal', '困難': 'hard', '混沌': 'chaos', '終極': 'extreme' };
      result = t[index].split('\n').map((name, i) => {
        const className = hardMap[name];
        if (className) {
          return (
            <HardTag key={i} className={className}>
              {name}
            </HardTag>
          );
        }
        return (
          <span key={i}>
            {name}
          </span>
        );
      });
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

function newTR(props, length, checkboxValue) {
  let lists = []
  for (let i = 0; i < length; i++) {
    if (Item(props.boss.hard, i).includes('任務')) continue;
    lists.push(
      <tr key={i}>
        {(props.boss.img === 'Dyle' || props.boss.img === 'Seruf' || props.boss.img === 'Tengu' || props.boss.img === 'Dorothy') ?
        i === length-1 && <td rowSpan={i+1}>{props.boss.name}</td> :
        i === length-1 && <td rowSpan={i+1}><img style={{width: "170px"}} src={path + "boss/" + props.boss.img + ".png"} alt=""/><br/>{props.boss.name}</td> }
        <td>{Item(props.boss.hard, i, 7)}</td>
        <td>{Item(props.boss.level, i)}</td>
        <td>{Item(props.boss.health, i)}</td>
        <td>{Item(props.boss.defense, i)}</td>
        <td>{Item(props.boss.ARCAUT, i, 6)}</td>
        <td>{checkboxValue ? Item(props.boss.determination, i, 6) : Item(props.boss.focus, i, 3)}</td>
        <td>{checkboxValue ? Item(props.boss.soul, i, 5) : Item(props.boss.box, i, 1)}</td>
        <td>{checkboxValue ? Item(props.boss.erion, i, 5) : Item(props.boss.enhance, i, 1)}</td>
        <td>{checkboxValue ? Item(props.boss.traces, i, 5) : Item(props.boss.other, i, 1)}</td>
        <td>{checkboxValue ? Item(props.boss.ELTA, i, 5) : Item(props.boss.furnishing, i, 2)}</td>
        <td>{Item(props.boss.crystallization, i, 6)}</td>
      </tr>)
  }
  return lists.reverse()
}

function BossItem(props) {
  return (
    <tbody>
      {newTR(props, props.boss.hard.split('|').length, props.checkboxValue)}
    </tbody>
  );
}

function BossList() {

  const bosses = useSelector((store) => store.bossesReducer);
  const filter = useSelector((store) => store.filterReducer);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const renderItems = () => {
    let list = [];
    bosses.forEach((item, index) => {
      if (
        (filter === "SHOW_ALL") ||
        (filter === "SHOW_SP" && item.enhance !== undefined) ||
        (filter === "SHOW_FT" && item.furnishing !== undefined) ||
        // (filter === "SHOW_ES" && item.focus !== undefined && item.focus.includes('固定')) ||
        (filter === "SHOW_ELTA" && item.ELTA !== undefined)
      ) {
        list.push(
          <BossItem key={item.name} boss={{ ...item, idx: index }} checkboxValue={checkboxValue}/>
        );
      }
    });
    return list;
  };

  return (
    <Wrapper>
      <Filter
        selected={filter}
        checkboxValue={checkboxValue}
        onCheckboxChange={setCheckboxValue}
      />
      <BossItemContainer>
        <table>
          <thead style={{ position: 'sticky', top: 0, zIndex: 1, background: '#333' }}>
            <tr>
              <th rowSpan="2" style={{width: "15%"}}></th>
              <th rowSpan="2" style={{width: "5%"}}>難度</th>
              <th rowSpan="2" style={{width: "5%"}}>等級</th>
              <th rowSpan="2" style={{width: "15%"}}>血量</th>
              <th rowSpan="2" style={{width: "5%"}}>防禦％</th>
              <th rowSpan="2" style={{width: "7.5%"}}>符文</th>
              <th colSpan="6">{checkboxValue ? "素材量" : "掉落物"}</th>
            </tr>
            <tr>
              <th>{checkboxValue ? "創世／命運武器" : "重點物品"}</th>
              <th style={{width: "5%"}}>{checkboxValue ? <img src="https://hiteku.github.io/img/ms/icon/激戰的痕跡.png" alt=""/> : "隨機箱"}</th>
              <th style={{width: "5%"}}>{checkboxValue ? <img src="https://hiteku.github.io/img/ms/icon/艾里溫的碎片交換券.png" alt=""/> : "強化"}</th>
              <th style={{width: "5%"}}>{checkboxValue ? <img src="https://hiteku.github.io/img/ms/icon/靈魂碎片.png" alt=""/> : "特殊"}</th>
              <th style={{width: "5%"}}>{checkboxValue ? <img src="https://hiteku.github.io/img/ms/icon/靈魂艾爾達氣息.png" alt=""/> : "家具"}</th>
              {/* <th style={{width: "4.5%"}}>祈禱精髓</th>
              <th style={{width: "4.5%"}}><img src="https://hiteku.github.io/img/ms/icon/可疑的附加方塊.png" alt=""/></th>
              <th style={{width: "4%"}}><img src="https://hiteku.github.io/img/ms/icon/靈魂艾爾達氣息.png" alt=""/></th> */}
              <th style={{width: "13%"}}>強烈的力量結晶</th>
            </tr>
          </thead>
          {renderItems()}
        </table>
      </BossItemContainer>
      <div className='src'>
        <sub>
          <a href="https://forum.gamer.com.tw/Co.php?bsn=7650&sn=6444311" target="_blank" rel="noopener noreferrer">
            <img
              src={`https://hiteku.vercel.app/static/assets/icon/bahamut.png`}
              alt="imgBahamut"
            />
          </a>&nbsp;
          <a href="https://www.youtube.com/Hiteku" target="_blank" rel="noopener noreferrer">
            <img
              src={`https://hiteku.vercel.app/static/assets/icon/youtube.png`}
              alt="imgYoutube"
            />
          </a> © Hiteku 更新於V281版本・資料來源：<a className="src" href="https://home.gamer.com.tw/Cieuakis" target="_blank" rel="noreferrer">ᴍʏᴜ ͜ꕤ̷⋆</a>、<a className="src" href="https://home.gamer.com.tw/Joker2008717" target="_blank" rel="noreferrer">Joker2008717</a>、<a className="src" href="https://forum.gamer.com.tw/Co.php?bsn=7650&sn=6437368" target="_blank" rel="noreferrer">新楓之谷BOSS全資訊整理</a>
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