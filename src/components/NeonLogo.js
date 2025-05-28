import React from 'react';
import './NeonLogo.css';

const NeonLogo = ({ text = "ShowGirls" }) => {
  const styledText = text.split('').map((char, idx) =>
    idx % 2 === 1 ? <span key={idx}>{char}</span> : <React.Fragment key={idx}>{char}</React.Fragment>
  );

  return (
    <div className="logo">
      <b>{styledText}</b>
    </div>
  );
};

export default NeonLogo;
