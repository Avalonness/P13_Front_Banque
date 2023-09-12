import React from 'react';

function FeatureComposant(props) {
  return (
    <div className="feature-item">
      <img src={props.iconSrc} alt={props.altText} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default FeatureComposant;