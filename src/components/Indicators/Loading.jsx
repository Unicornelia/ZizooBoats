import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IndicatorDiv } from './styles';

const Loading = () => {
  return (
    <IndicatorDiv color="#014b67">
      Loading <FaSpinner style={{ paddingLeft: '10px' }} />
    </IndicatorDiv>
  );
};

export default Loading;
