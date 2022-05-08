import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Label from '../label';
import useOutsideAlerter from '../../../utils/CustomHooks';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 33px;
  padding: 0 0 0 5px;

  cursor: pointer;
  background-color: var(--color-input-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
`;

const SelectDropDown = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 35px;
  left: 0;

  width: 100%;

  background-color: var(--color-input-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
`;

const SelectItem = styled.div`
  padding: 0.5rem;

  &:hover {
    background-color: var(--color-fg-alt);
  }
  cursor: pointer;
  border-top: ${({ index }) => (index > 0 ? '1px solid var(--color-border)' : '0')};
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 33px;
  height: 100%;
  background-color: var(--color-fg-alt);
  border-left: 1px solid var(--color-border);
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  border-top: 10px solid var(--color-input-bg);

  transform: ${({ open }) => (open ? 'scaleY(-1)' : 'scaleY(1)')};
`;

const Select = (props) => {
  const { onChange, options, selectedOption, placeholder, className, style } = props;

  const { t } = useTranslation('common');

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useOutsideAlerter(containerRef, () => setIsOpen(false));

  return (
    <Container
      ref={containerRef}
      onClick={() => setIsOpen(!isOpen)}
      onChange={onChange}
      className={className}
      style={style}
      tabIndex={0}
      onKeyDown={() => !isOpen && setIsOpen(true)}
    >
      <Label style={{ width: '100%' }}>{selectedOption || placeholder}</Label>
      <SelectDropDown open={isOpen}>
        {options.map((option, index) => (
          <SelectItem
            key={`select_option_${option}`}
            onClick={() => onChange(option)}
            onKeyDown={(key) => {
              if (key.code === 'Enter') {
                onChange(option);
                setIsOpen(false);
              }
            }}
            tabIndex={0}
            index={index}
          >
            {t(option)}
          </SelectItem>
        ))}
      </SelectDropDown>
      <ArrowContainer>
        <Arrow open={isOpen} />
      </ArrowContainer>
    </Container>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  selectedOption: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Select.defaultProps = {
  onChange: () => {},
  options: [],
  selectedOption: '',
  placeholder: '',
  className: '',
  style: {},
};

export default Select;
