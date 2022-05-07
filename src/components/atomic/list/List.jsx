import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Label from '../label';
import ListItem from '../listItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListHeader = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 calc(2rem + 1px) 0 calc(2rem + 1px);
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

const List = (props) => {
  const { heads, data } = props;

  const { t } = useTranslation('common');

  const generateLabelStyle = (dataName) => {
    const relatedHead = heads.find((head) => head.dataName === dataName);
    return {
      width: relatedHead.width,
      'text-align': relatedHead.align,
    };
  };

  return (
    <ListContainer>
      <ListHeader>
        {heads.map((head) => (
          <Label color="secondary" style={{ width: head.width, 'text-align': head.align }}>
            {t(head.label)}
          </Label>
        ))}
      </ListHeader>
      <ListContent>
        {data.map((item) => (
          <ListItem>
            {Object.entries(item).map((column) => (
              <Label style={{ ...generateLabelStyle(column[0]) }}>{column[1]}</Label>
            ))}
          </ListItem>
        ))}
      </ListContent>
    </ListContainer>
  );
};

List.propTypes = {
  heads: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      label: PropTypes.string,
      dataName: PropTypes.string,
      align: PropTypes.string,
    }),
  ),
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

List.defaultProps = {
  heads: [],
  data: [],
};

export default List;
