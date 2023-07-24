import React, { useState, useEffect, useRef } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="sidebar-container" ref={sidebarRef}>
      {!isOpen && (
        <div className="sidebar-icon open" onClick={toggleSidebar}>
          <span className="icon-open">&#x2630;</span>
        </div>
      )}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="sidebar-icon close" onClick={toggleSidebar}>
            <span className="icon-close">&times;</span>
          </div>
        )}
        <div className="content">
          <div className="other-tools">
            <h2>其他工具</h2>
            <ul>
              <li>
                <h4>新楓之谷</h4>
                <ul>
                  <li>
                    <a href="https://hiteku.github.io/msScroll/">裝備卷軸計算機</a>
                    <img src={"https://hiteku.github.io/img/ms/icon/救世卷軸.png"} alt="" style={{ width: '27px' }} />
                  </li>
                  <li>
                    <a href="https://hiteku.github.io/msBoss/">BOSS篩選器</a>
                    <img src={"https://hiteku.github.io/img/ms/icon/furniture/殺人鯨兔子娃娃抱枕.png"} alt="" style={{ width: '23px', margin: '0 0 0 2px' }} />
                  </li>
                  <li>
                    <a href="https://hiteku.github.io/msClip/">裝備自動裁剪</a>
                    <img src={"https://hiteku.github.io/img/ms/icon/米特拉的憤怒選擇箱.png"} alt="" style={{ width: '25px', margin: '0 0 0 2px' }} />
                  </li>
                  <li>
                    <a href="https://hiteku.github.io/msRole/">職業列表：傳授戰地、萌獸終傷</a>
                    <img src={"https://hiteku.github.io/img/ms/icon/抓狂的家兔萌獸.png"} alt="" style={{ width: '18px', margin: '0 0 0 2.5px' }} />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
