import React from 'react';

import { Consumer } from '../context';

const mapDispatchToProps = WrappededComponent => {
  return props => (
    <Consumer>
      {({ dispatch }) => <WrappededComponent dispatch={dispatch} {...props} />}
    </Consumer>
  );
};

export default mapDispatchToProps;
