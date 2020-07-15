import styled from '@emotion/styled';

export const IndicatorDiv = styled('div')(({ color }) => ({
  background: color,
  padding: '10px',
  borderRadius: 0,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '1px 1px 1px #aaaaaa',
  marginTop: '10px',
  color: 'white',
}));
