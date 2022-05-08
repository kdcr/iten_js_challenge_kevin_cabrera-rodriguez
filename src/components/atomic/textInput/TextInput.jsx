import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 33px;
  padding: 0 0.5rem 0 0.5rem;

  background-color: var(--color-input-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
`;

const TextInput = (props) => {
  const { onChange, className, style } = props;
  return <StyledInput onChange={onChange} className={className} style={style} />;
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

TextInput.defaultProps = {
  onChange: () => {},
  className: '',
  style: {},
};

export default TextInput;
