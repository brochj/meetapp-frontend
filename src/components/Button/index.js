import React from 'react';
import PropTypes from 'prop-types';

import { NButton } from './styles';

export default function Button({ children, background, color }) {
  return (
    <NButton background={background} color={color}>
      {children}
    </NButton>
  );
}

Button.defaultProps = {
  background: '#d44059',
  color: '#fff',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
};
