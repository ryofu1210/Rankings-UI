/**
 *
 * TitleLogo
 *
 */

import * as React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import isaLogo = require('./isaLogo.svg');
import messages from './messages';
import styled from 'styles/styled-components';

const TitleLogo: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <FormattedMessage {...messages.titleLogoAltText}>
        {msg => <img src={isaLogo as any} alt={msg as string} />}
      </FormattedMessage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  line-height: 0;

  img {
    max-width: 100%;
    display: block;
  }
`;
export default TitleLogo;
