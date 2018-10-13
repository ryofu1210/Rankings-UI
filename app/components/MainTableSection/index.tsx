import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';

const MainTableSection: React.SFC<{}> = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const FilterAreaText = styled.span`
  color: ${props => props.theme.textPrimary};
  font-style: italic;
  flex-basis: 100;
  text-align: left;
`;

export const SelectedFilters: React.SFC<{}> = props => {
  return props.children ? (
    <FiltersWrapper>
      <FilterAreaText>Currently Displaying</FilterAreaText>
      <SelectedFiltersArea>{props.children}</SelectedFiltersArea>
    </FiltersWrapper>
  ) : null;
};

const SelectedFiltersArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  margin-top: 1em;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackground};
  border: 1px solid ${props => props.theme.border};
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5em;
  box-shadow: 0px 0px 8px 1px ${props => props.theme.border};
  overflow: hidden;
  width: 100%;
  min-height: 100%;

  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em 1.2em 0px 1.2em;
  width: 100%;
  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;
export default MainTableSection;
