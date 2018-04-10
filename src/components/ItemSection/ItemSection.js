import React, { Component } from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

import SectionHeader from '../SectionHeader/SectionHeader';
import Item from '../Item/Item';

const ItemsContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0px 15px;
`;

const ItemsList = styled.div`
  max-height: 100%;
  padding: 1px;
  overflow: auto;
  overflow-x: hidden;
`;

const FilterInput = styled(Input)`
  background-color: #424242;
  border: 1px solid #303030;
  color: rgba(255, 255, 255, 0.7);
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
    const { items } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? items
      : items.filter(item => item.name.toLowerCase().includes(inputValue));
  };

  render() {
    const { filterValue } = this.state;
    const { header } = this.props;

    return (
      <ItemsContainer>
        <SectionHeader text={header} />
        <FilterInput
          placeholder="Search items..."
          onChange={this.onChange}
          value={filterValue}
          theme="dark"
        />
        <ItemsList>
          {this.getSuggestions(filterValue).map(item => (
            <Item
              key={item.name}
              id={item.id}
              name={item.name}
              levelReq={item.level_req}
              dexReq={item.dex_req}
              intReq={item.int_req}
              strReq={item.str_req}
              primaryAttribute={item.primary_att}
              chosen={item.chosen}
              onHoverColor="blue"
              onClick={this.onClick}
            />
          ))}
        </ItemsList>
      </ItemsContainer>
    );
  }
}

export default ItemSection;
