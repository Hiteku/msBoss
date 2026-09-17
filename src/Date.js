import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 70px auto 0 auto;
  width: 90%;
`;

const DateContainer = styled.div`
  padding: 2em;
  border-radius: 11px 11px 11px 11px;
  background-color: #fff;

  h2 {
    color: #444;
    text-align: center;
  }
`;

const Kaling = [
  { src: 'https://i.imgur.com/DirSAaQ.gif' },
  { src: 'https://i.imgur.com/Q0oqOFn.gif' },
  { src: 'https://i.imgur.com/8npJ4Xw.gif' },
  { src: 'https://i.imgur.com/KoiG8OP.gif' },
  { src: 'https://hiteku.github.io/img/ms/gif/與咖凌的約會椅子_Hiteku.gif' },
  { src: 'https://i.imgur.com/vAAUlg5.png', type: 'dialog' },
  { src: 'https://i.imgur.com/AvG3D1Y.png', type: 'dialog' },
  { src: 'https://i.imgur.com/3kv7Qzs.png', type: 'dialog' },
  { src: 'https://i.imgur.com/nEZQB3R.png', type: 'dialog' },
  { src: 'https://i.imgur.com/SuUsLQD.png', type: 'dialog' },
  { src: 'https://i.imgur.com/g0Iyh8P.png', type: 'dialog' },
  { src: 'https://i.imgur.com/PQQIXZx.png', type: 'dialog' },

  { src: 'https://i.imgur.com/uIorflv.png', type: 'CG' },
  { src: 'https://i.imgur.com/1rTnVqv.png', type: 'CG' },
  { src: 'https://i.imgur.com/8vRRv1k.png', type: 'CG' },
  { src: 'https://i.imgur.com/vbVrPDC.png', type: 'CG' },
  { src: 'https://i.imgur.com/u06QwGF.png', type: 'CG' },
  { src: 'https://i.imgur.com/kgDFder.png', type: 'CG' },
  { src: 'https://i.imgur.com/Rey3sWA.png', type: 'CG' },
  { src: 'https://i.imgur.com/j6mZ9Qb.png', type: 'CG' },
  { src: 'https://i.imgur.com/sL5AuYK.png', type: 'CG' },
];

const Seren = [
  { src: 'https://i.imgur.com/lTfC21v.gif' },
  { src: 'https://i.imgur.com/7W6CL5f.gif' },
  { src: 'https://i.imgur.com/qgMDtaA.gif' },
  { src: 'https://i.imgur.com/qz1Pl94.gif' },
  { src: 'https://hiteku.github.io/img/ms/gif/與賽蓮的約會椅子_Hiteku.gif' },
  { src: 'https://i.imgur.com/fSA2nVf.png', type: 'dialog' },
  { src: 'https://i.imgur.com/c8WxQ96.png', type: 'dialog' },
  { src: 'https://i.imgur.com/1JuBVTU.png', type: 'dialog' },
  { src: 'https://i.imgur.com/SwpU65C.png', type: 'dialog' },
  { src: 'https://i.imgur.com/s4kktHv.png', type: 'dialog' },
  { src: 'https://i.imgur.com/vTU0SfV.png', type: 'dialog' },
  { src: 'https://i.imgur.com/BKZxBcU.png', type: 'dialog' },

  { src: 'https://i.imgur.com/PHtK7AZ.png', type: 'CG' },
  { src: 'https://i.imgur.com/R998YuB.png', type: 'CG' },
  { src: 'https://i.imgur.com/BuqSSSs.png', type: 'CG' },
  { src: 'https://i.imgur.com/ZP0EDur.png', type: 'CG' },
  { src: 'https://i.imgur.com/sYUWU6l.png', type: 'CG' },
  { src: 'https://i.imgur.com/0zXBHP1.png', type: 'CG' },
  { src: 'https://i.imgur.com/0eMlqTo.png', type: 'CG' },
];

const Orchid = [
  { src: 'https://i.imgur.com/tPsMDnh.gif' },
  { src: 'https://i.imgur.com/zBIKYP5.gif' },
  { src: 'https://i.imgur.com/dcm1jcR.gif' },
  { src: 'https://i.imgur.com/E5ECgX1.gif' },
  { src: 'https://hiteku.github.io/img/ms/gif/與殺人鯨的約會椅子_Hiteku.gif' },
  { src: 'https://i.imgur.com/rQQoh08.png', type: 'dialog' },
  { src: 'https://i.imgur.com/Vq3yHlB.png', type: 'dialog' },
  { src: 'https://i.imgur.com/Fu0EKup.png', type: 'dialog' },
  { src: 'https://i.imgur.com/xzT5nPI.png', type: 'dialog' },
  { src: 'https://i.imgur.com/yLlwn8L.png', type: 'dialog' },
  { src: 'https://i.imgur.com/gEVHlzT.png', type: 'dialog' },
  { src: 'https://i.imgur.com/1RXmn1e.png', type: 'dialog' },
  { src: 'https://i.imgur.com/sYVUgWU.png', type: 'dialog' },
  { src: 'https://i.imgur.com/Je0FOgH.png', type: 'dialog' },

  { src: 'https://i.imgur.com/uBM23Hk.png', type: 'CG' },
  { src: 'https://i.imgur.com/isErIjI.png', type: 'CG' },
  { src: 'https://i.imgur.com/zhyR7xP.png', type: 'CG' },
  { src: 'https://i.imgur.com/3ZTuBxh.png', type: 'CG' },
  { src: 'https://i.imgur.com/iahVlw6.png', type: 'CG' },
  { src: 'https://i.imgur.com/I7auQA9.png', type: 'CG' },
  { src: 'https://i.imgur.com/cjdrxDF.png', type: 'CG' },
  { src: 'https://i.imgur.com/18va8GR.png', type: 'CG' },
  { src: 'https://i.imgur.com/1eS34Oy.png', type: 'CG' },
];

const renderImages = data => (
  <>
    {data.map((image, index) => (
      <React.Fragment key={index}>
        <img
          src={image.src}
          alt=""
          style={{
            display: image.type === 'CG' ? 'block' : 'inline-block',
            margin: image.type === 'CG' ? '20px auto' : '0',
            width:
              image.type === 'dialog' ? 150 :
              image.type === 'CG' ? 900 :
              'auto',
          }}
        />
        {image.type === 'dialog' &&
          data[index + 1]?.type !== 'dialog' && <br />}
        {!image.type &&
          data[index + 1]?.type && <br />}
      </React.Fragment>
    ))}
  </>
);

function Date() {
  return (
    <Wrapper>
        <DateContainer>
            <img src="https://i.imgur.com/RuYFQGk.png" style={{ width: '100%' }} alt=""/><hr style={{ marginTop: '69px' }} />
            <h2>咖凌</h2>
            {renderImages(Kaling)}<hr style={{ marginTop: '100px' }} />
            <h2>賽蓮</h2>
            {renderImages(Seren)}<hr style={{ marginTop: '100px' }} />
            <h2>殺人鯨</h2>
            {renderImages(Orchid)}
        </DateContainer>
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
            </a> © Hiteku・資料來源：<a className="src" href="https://home.gamer.com.tw/Cieuakis" target="_blank" rel="noreferrer">ᴍʏᴜ ͜ꕤ̷⋆</a>、<a className="src" href="https://forum.gamer.com.tw/Co.php?bsn=7650&sn=6517594" target="_blank" rel="noreferrer">Joker2008717</a>
            </sub>
        </div><br></br>
    </Wrapper>
  );
}

export default Date;