import React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({ fill, style }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={style}>
    <g>
      <path
        fill={fill}
        d="M432,96h-48V32c0-17.672-14.328-32-32-32H160c-17.672,0-32,14.328-32,32v64H80c-17.672,0-32,14.328-32,32v32h416v-32C464,110.328,449.672,96,432,96z M192,96V64h128v32H192z"
      />
      <path
        fill={fill}
        d="M80,480.004C80,497.676,94.324,512,111.996,512h288.012C417.676,512,432,497.676,432,480.008v-0.004V192H80V480.004zM320,272c0-8.836,7.164-16,16-16s16,7.164,16,16v160c0,8.836-7.164,16-16,16s-16-7.164-16-16V272z M240,272c0-8.836,7.164-16,16-16s16,7.164,16,16v160c0,8.836-7.164,16-16,16s-16-7.164-16-16V272z M160,272c0-8.836,7.164-16,16-16s16,7.164,16,16v160c0,8.836-7.164,16-16,16s-16-7.164-16-16V272z"
      />
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
