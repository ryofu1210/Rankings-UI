import * as React from 'react';
import SelectOption from './SelectOption';
import { UISelectOption } from 'types/application';

export interface CategorySelectProps {
  options: UISelectOption[];
  categorySelected(value: string);
  hasIcons?: boolean;
}

interface Props extends CategorySelectProps {}

class SelectOptionContainer extends React.PureComponent<Props> {
  private onSelect = (value: string) => () => {
    this.props.categorySelected(value);
  };

  public render() {
    const options = this.props.options;
    return (
      <React.Fragment>
        {options.map((option, i) => {
          // const inlineLevel = option.inlineLevel || 0;
          // const hideDivider = inlineLevel > 2;
          return (
            <SelectOption
              key={i}
              value={option.value}
              inlineLevel={option.inlineLevel}
              label={option.label}
              isContainerStyle={option.isContainerStyle}
              hideDivider={false}
              hasIcon={this.props.hasIcons}
              onSelect={this.onSelect(option.value)}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default SelectOptionContainer;
