import React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({ fill, style }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={style}>
    <g>
      <g>
        <path
          fill={fill}
          d="m251.6,185.7c-36.9,0-67,31.5-67,70.3 0,38.7 30,70.3 67,70.3 36.9,0 67-31.5 67-70.3 0-38.7-30.1-70.3-67-70.3z"
        />
        <path
          fill={fill}
          d="m251.6,367.1c-59.4,0-107.8-49.8-107.8-111.1 0-61.3 48.4-111.1 107.8-111.1s107.8,49.8 107.8,111.1c0,61.3-48.4,111.1-107.8,111.1zm246.3-121.9c-63.8-102.4-149.8-158.8-241.9-158.8-92.1,0-178.1,56.4-241.9,158.8-4.1,6.6-4.1,15 0,21.6 63.8,102.4 149.8,158.8 241.9,158.8 92.1,0 178-56.4 241.9-158.8 4.1-6.6 4.1-15 0-21.6z"
        />
      </g>
    </g>
  </svg>
);

EyeIcon.propTypes = {
  fill: PropTypes.string,
  style: PropTypes.shape({}),
};

EyeIcon.defaultProps = {
  fill: 'black',
  style: {},
};

export default EyeIcon;
