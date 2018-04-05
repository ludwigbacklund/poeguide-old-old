import React, { Component } from 'react';
import styled from 'styled-components';

import Input from 'antd/lib/input';

import SectionHeader from '../SectionHeader/SectionHeader';
import Item from '../Item/Item';

const ItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0px 15px;
`;

const ItemsList = styled.div`
  max-height: 100%;
  overflow: hidden;
  padding: 1px;

  &:hover {
    overflow: auto;
  }
`;

class ItemSection extends Component {
  constructor() {
    super();

    this.state = {
      filterValue: '',
    };
  }

  onChange = event => {
    this.setState({ filterValue: event.target.value });
  };

  onClick = id => {
    const { onItemClick } = this.props;

    this.clearFilterValue();
    onItemClick(id);
  };

  clearFilterValue = () => {
    this.setState({ filterValue: '' });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const { items } = this.props;

    return inputLength === 0
      ? []
      : items.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  render() {
    const { filterValue } = this.state;
    const { header, items } = this.props;

    return (
      <ItemsContainer>
        <SectionHeader text={header} />
        <Input
          placeholder="Filter items..."
          onChange={this.onChange}
          value={filterValue}
        />
        <ItemsList>
          {items
            .filter(item =>
                (filterValue !== ''
                  ? item.name.toLowerCase().slice(0, filterValue.length) ===
                    filterValue
                  : item))
            .map(item => (
              <Item
                key={item.name}
                id={item.id}
                name={item.name}
                levelReq={item.level_req}
                dexReq={item.dex_req}
                intReq={item.int_req}
                strReq={item.str_req}
                chosen={false}
                onClick={this.onClick}
              />
            ))}
        </ItemsList>
      </ItemsContainer>
    );
  }
}

export default ItemSection;
