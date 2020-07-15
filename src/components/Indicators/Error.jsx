import React from 'react';
import { IndicatorDiv } from './styles';

const Error = error => {
  return <IndicatorDiv color="#c51244">Error! {error.message}</IndicatorDiv>;
};

export default Error;
