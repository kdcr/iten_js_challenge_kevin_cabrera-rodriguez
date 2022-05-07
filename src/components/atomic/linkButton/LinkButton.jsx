import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
  const { children, onClick } = props;

  return (
    <div
      onClick={onClick}
      role="link"
      tabIndex={0}
      onKeyPress={onClick}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

LinkButton.defaultProps = {
  children: null,
  onClick: () => {},
};

export default LinkButton;
