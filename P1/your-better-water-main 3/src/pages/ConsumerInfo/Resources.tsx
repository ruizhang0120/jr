import React from "react";
import ResourceHeader from "../../components/ResourceHeader.js";
import ResourcesCards from "../../components/ResourcesCards.js";
import ResourceCardGrid from "../../components/ResourceCardGrid.js";
import FAQ from "../../components/FAQ.js";
import "../../styles/ConsumerInfo/Resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <div className="resourcesBanner">
        <ResourceHeader />
        <ResourcesCards />
        <ResourceCardGrid />
        <FAQ />
      </div>
    </div>
  );
};

export default Resources;
