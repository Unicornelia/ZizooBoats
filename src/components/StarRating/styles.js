import styled from '@emotion/styled';

export const StarsContainer = styled('div')(() => ({
  display: 'flex',
  '& input': {
    display: 'none',
  },
  '& #ratingValue': {
    marginLeft: '10px',
  },
  '& .star': {
    cursor: 'pointer',
    transition: 'color 200ms',
  },
}));
