import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextSizes = {
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  NORMAL: 'normal',
  SMALL: 'small',
};

const TextColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

// prettier-ignore
const LabelContainer = styled.span`
  font-size: ${({ size }) => (size === TextSizes.TITLE ? '48px' : '')};
  font-size: ${({ size }) => (size === TextSizes.SUBTITLE ? '24px' : '')};
  font-size: ${({ size }) => (size === TextSizes.NORMAL ? '14px' : '')};
  font-size: ${({ size }) => (size === TextSizes.SMALL ? '12px' : '')};

  color: ${({ color }) => (color === TextColors.PRIMARY ? 'var(--color-fg)' : 'var(--color-fg-light)')};
`;

const Label = (props) => {
  const { children, size, color } = props;

  return (
    <LabelContainer size={size} color={color}>
      {children}
    </LabelContainer>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(Object.values(TextSizes)),
  color: PropTypes.oneOf(Object.values(TextColors)),
};

Label.defaultProps = {
  children: null,
  size: TextSizes.NORMAL,
  color: TextColors.PRIMARY,
};

export default Label;
