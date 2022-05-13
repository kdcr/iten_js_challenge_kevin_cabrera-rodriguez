import React from 'react';
import PropTypes from 'prop-types';

/**
 * An alternative button component to act as the 'a' element
 * @param {*} props
 * @returns
 */
const LinkButton = (props) => {
  const { children, onClick, className, style } = props;

  return (
    <div
      onClick={onClick}
      role="link"
      tabIndex={0}
      onKeyPress={onClick}
      className={className}
      style={{ cursor: 'pointer', ...style }}
    >
      {children}
    </div>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

LinkButton.defaultProps = {
  children: null,
  onClick: () => {},
  className: '',
  style: {},
};

export default LinkButton;
