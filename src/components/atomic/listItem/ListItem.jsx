import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  height: 30px;
  padding: 0 2rem 0 2rem;

  border: 1px solid var(--color-border);
  border-radius: 4px;
`;

const ListItem = (props) => {
  const { children, className, style } = props;

  return (
    <ItemContainer className={className} style={style}>
      {children}
    </ItemContainer>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ListItem.defaultProps = {
  children: null,
  className: '',
  style: {},
};

export default ListItem;
