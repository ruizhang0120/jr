// src/components/ResourceCard.tsx
import React from "react";
import "../styles/ConsumerInfo/ResourceCard.css";

// 定义 props 类型
interface ResourceCardProps {
  title: string; // 必传字符串类型的 title
  description?: string; // 可选的 description，类型为字符串
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <div className="link-container">
        <a href="#" className="hover-link">
          <span className="text">Learn More</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
