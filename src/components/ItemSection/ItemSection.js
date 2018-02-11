import React, { Component } from 'react';
import styled from 'styled-components';
// import List from 'react-virtualized/dist/commonjs/List';
// import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

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
  overflow: scroll;
  padding: 1px;
`;

const FilterInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 16px;
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

  onItemClick = id => {
    const { onClick } = this.props;

    this.clearFilterValue();
    onClick(id);
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
        <FilterInput
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
                levelRequirement={item.level_req}
                onClick={this.onItemClick}
              />
            ))}
        </ItemsList>
      </ItemsContainer>
    );
  }
}

// rowRenderer = ({ key, index, style }) => {
//   const item = this.props.items[index];
//   return (
//     <div key={key} style={style}>
//       <Item
//         key={item.name}
//         id={item.id}
//         name={item.name}
//         levelRequirement={item.level_req}
//         onClick={this.props.onClick}
//       />
//     </div>
//   );
// };

// <List
//   height={1200}
//   rowCount={items.length}
//   rowHeight={60}
//   rowRenderer={this.rowRenderer}
//   width={340}
// />

export default ItemSection;
