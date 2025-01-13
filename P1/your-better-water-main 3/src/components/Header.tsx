import React from "react";
import { useLocation, Link } from "react-router-dom";  // 导入 Link 组件
import "./../styles/Header.css";

const Header: React.FC = () => {
  const location = useLocation(); // 获取当前路径

  const menuItems = [
    { label: "Enagic Products", link: "/products", subMenu: [{ label: "Product 1", link: "/product1" }, { label: "Product 2", link: "/product2" }] },
    { label: "Consumer Information", link: "/info", subMenu: [{ label: "Info 1", link: "/info1" }, { label: "Info 2", link: "/info2" }] },
    { label: "Become a Distributor", link: "/distributor", subMenu: [] },
    { label: "About Us", link: "/about", subMenu: [] },
    { label: "Contact Us", link: "/contact", subMenu: [] },
  ];

  // 检查是否为 Consumer Information 页面
  const isConsumerPage = location.pathname === "/info";

  return (
    <header className={`header ${isConsumerPage ? "consumer-page" : "transparent-page"}`}>
      <div className="header-container">
        {/* Logo */}
        {/* TODO: 完成 Logo 部分设计,要svg格式*/}
        <Link to="/" className="logo">
          <img src="/public/vite.svg" alt="Logo" />
        </Link>
        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={item.link}
                  className={`nav-link ${location.pathname === item.link ? "active" : ""}`}  // 使用 Link 组件
                >
                  {item.label}
                </Link>
                {item.subMenu.length > 0 && (
                  <ul className="sub-menu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.link} className="sub-menu-link">  {/* 使用 Link 组件替换 a 标签 */}
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Actions */}
        <div className="header-actions">
          <a href="#call" className="call-to-order"> {/* 如果这部分需要触发页面跳转，请使用 Link 替换 */}
            CALL TO ORDER
          </a>
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
