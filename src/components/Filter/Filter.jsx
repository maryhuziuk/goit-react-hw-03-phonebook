import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, LabelFilter, InputFilter } from './Filter.styled.js';

export function Filter({ value, onChangeFilter }) {
  return (
    <Wrapper>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={value} onChange={onChangeFilter} />
      </LabelFilter>
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

