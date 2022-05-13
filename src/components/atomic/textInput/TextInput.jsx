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

/**
 * Styled input element
 * @param {*} props
 * @returns
 */
const TextInput = (props) => {
  const { onChange, placeholder, className, style } = props;
  return (
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      style={style}
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

TextInput.defaultProps = {
  onChange: () => {},
  placeholder: '',
  className: '',
  style: {},
};

export default TextInput;
