import React from "react";
import ResourceCard from "./ResourceCard";
// import "../vite-project/src/styles/";
import "../styles/ConsumerInfo/ResourceCardGrid.css";

const ResourceCardGrid = () => {
  const cardData = [
    {
      title:
        "Medical & scientific research on hydrogen–rich, Electrolysed Reduced Water (ERW)",
      description: "",
    },
    {
      title:
        "The benefits of electrolysed reduced water (ERW) for your health, wellness and home",
      description:
        "Hear from hormonal health expert Dee Zibara as she explains the benefits of electrolysed reduced water for your health, wellness and home.",
    },
    {
      title:
        "Hydrogen–rich Kangen Water: Why High antioxidant, alkaline water is important",
      description:
        "Hear from hormonal health expert Dee Zibara as she explains the benefits of electrolysed reduced water for your health, wellness and home.",
    },
    {
      title:
        "What is Kangen Water®? And what are the five different types of water produced by the Leveluk K8?",
      description: "",
    },
    {
      title:
        "Medical & scientific research on hydrogen–rich, Electrolysed Reduced Water (ERW)",
      description: "",
    },
    {
      title:
        "The benefits of electrolysed reduced water (ERW) for your health, wellness and home",
      description:
        "Hear from hormonal health expert Dee Zibara as she explains the benefits of electrolysed reduced water for your health, wellness and home.",
    },
    {
      title:
        "Hydrogen–rich Kangen Water: Why High antioxidant, alkaline water is important",
      description:
        "Hear from hormonal health expert Dee Zibara as she explains the benefits of electrolysed reduced water for your health, wellness and home.",
    },
    {
      title:
        "What is Kangen Water®? And what are the five different types of water produced by the Leveluk K8?",
      description: "",
    },
    {
      title:
        "Medical & scientific research on hydrogen–rich, Electrolysed Reduced Water (ERW)",
      description: "",
    },
    {
      title:
        "The benefits of electrolysed reduced water (ERW) for your health, wellness and home",
      description:
        "Hear from hormonal health expert Dee Zibara as she explains the benefits of electrolysed reduced water for your health, wellness and home.",
    },
    {
      title:
        "Hydrogen–rich Kangen Water: Why High antioxidant, alkaline water is important",
      description:
        "Hear from hormonal health expert Dee Zibara as she explains the benefits of electrolysed reduced water for your health, wellness and home.",
    },
    {
      title:
        "What is Kangen Water®? And what are the five different types of water produced by the Leveluk K8?",
      description: "",
    },
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <ResourceCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ResourceCardGrid;
