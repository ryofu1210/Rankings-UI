import * as React from 'react';
import styled from 'styles/styled-components';
import Aerial from './disciplines/Aerial';
import Contact from './disciplines/Contact';
import Rigging from './disciplines/Rigging';
import Blind from './disciplines/Blind';
import StaticJib from './disciplines/StaticJib';
import SpeedlineHighLong from './disciplines/SpeedlineHighLong';
import SpeedlineSprint from './disciplines/SpeedlineSprint';
import Endurance from './disciplines/Endurance';
import Transfer from './disciplines/Transfer';

interface DisciplineIconProps {
  readonly discipline: string;
}

/* tslint:disable:max-line-length */
class DisciplineIcon extends React.PureComponent<DisciplineIconProps> {
  public render() {
    const discipline = this.props.discipline;
    return <Wrapper>{renderSwitch(discipline)}</Wrapper>;
  }
}

function renderSwitch(param: string) {
  switch (param) {
    case '2':
      return <Aerial />;
    case '3':
      return <StaticJib />;
    case '4':
      return <Transfer />;
    case '5':
      return <Contact />;
    case '7':
      return <SpeedlineSprint />;
    case '8':
      return <SpeedlineHighLong />;
    case '9':
      return <Endurance />;
    case '10':
      return <Blind />;
    case '11':
      return <Rigging />;
    default:
      return <div />;
  }
}

const Wrapper = styled.div`
  max-width: 30px;
  max-height: 30px;
`;
export default DisciplineIcon;
