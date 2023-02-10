import PropTypes from "prop-types";
import React from "react";


export function FeatureCard({title, description }) {
  return (
    <div className="rounded-2xl shadow-lg shadow-gray-500/10">
      <div className="px-8 text-center">  
        <h5 variant="h5" className="mb-2" color="blue-gray">
          {title}
        </h5>
        <p className="font-normal text-blue-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
    "white",
    "black",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
