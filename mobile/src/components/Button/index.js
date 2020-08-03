import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <TouchableOpacity activeOpacity={1} {...rest}>
      <Container {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text>{children}</Text>
        )}
      </Container>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
