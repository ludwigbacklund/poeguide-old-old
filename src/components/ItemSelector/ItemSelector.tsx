import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Autosuggest from 'react-autosuggest';

import { useItemSelectorLazyQuery, SearchItem } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';
import calculatePopoverPosition from '../../utils/calculate-popover-position';
import { Popover } from '../Popover/Popover';
import { UniqueConnector } from '../Unique/UniqueConnector';

interface ItemSelectorProps {
  onSelect: (suggestion: SearchItem) => void;
  visible: boolean;
  onClickOutside: () => void;
  onKeyUp: (e: KeyboardEvent) => void;
  className?: string;
}

export const ItemSelector: React.FC<ItemSelectorProps> = ({
  onSelect,
  visible,
  onClickOutside,
  onKeyUp,
  className,
  children,
}) => {
  const [
    fetchItemSelectorItems,
    { data: itemSelectorItems },
  ] = useItemSelectorLazyQuery();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const items = itemSelectorItems
      ? itemSelectorItems.search.nodes.filter(isNotNull)
      : [];
    setSuggestions(items);
  }, [itemSelectorItems]);

  useEffect(() => {
    if (!visible) setQuery('');
  }, [visible]);

  useLayoutEffect(() => {
    const onMouseUp = (e: MouseEvent) => {
      const anchor = anchorRef.current;
      if (anchor && !anchor.contains(e.target as Node)) onClickOutside();
    };

    if (visible) {
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('keyup', onKeyUp);
    } else {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('keyup', onKeyUp);
    }
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [visible, onClickOutside, onKeyUp]);

  const getSuggestions = ({ value }: { value: string }) => {
    const searchInput = value.trim().toLowerCase();
    fetchItemSelectorItems({ variables: { query: searchInput } });
  };

  const inputProps = {
    placeholder: 'Replace with...',
    value: query,
    autoFocus: true,
    tabIndex: 0,
    style: {
      padding: '8px',
      width: '100%',
      boxSizing: 'border-box' as 'border-box',
    },
    onChange: (_: any, { newValue }: { newValue: string }) =>
      setQuery(newValue),
  };

  return (
    <ItemSelectorWrapper
      className={className}
      onClick={({ clientX, clientY }) => {
        const { x, y } = calculatePopoverPosition(clientX, clientY, 190, 30);
        setPosition({ x, y });
      }}
    >
      {children}
      {visible && (
        <span
          ref={anchorRef}
          style={{
            top: 0,
            left: 0,
            position: 'absolute',
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <Autosuggest
            suggestions={suggestions}
            getSuggestionValue={({ name }) => name || ''}
            onSuggestionsFetchRequested={getSuggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            onSuggestionSelected={(_, { suggestion }) => onSelect(suggestion)}
            highlightFirstSuggestion={true}
            inputProps={inputProps}
            renderSuggestion={(
              { name, iconUrl, levelRequirement },
              { isHighlighted },
            ) => (
              <StyledPopover content={<UniqueConnector name={name || ''} />}>
                <Item>
                  <ItemLeft>
                    <Icon width={32} height={32} src={iconUrl || ''} />
                    <ItemName hasUnderline={isHighlighted}>{name}</ItemName>
                  </ItemLeft>
                  <LevelRequirement>
                    LVL{' '}
                    {levelRequirement &&
                      String(levelRequirement).padStart(2, '0')}
                  </LevelRequirement>
                </Item>
              </StyledPopover>
            )}
          />
        </span>
      )}
    </ItemSelectorWrapper>
  );
};

export const SEARCH_EQUIP_ITEMS_QUERY = gql`
  query ItemSelector($query: String!) {
    search(query: $query, first: 5) {
      nodes {
        name
        iconUrl
        levelRequirement
      }
    }
  }
`;

const ItemSelectorWrapper = styled.div`
  display: contents;

  .react-autosuggest__suggestions-container {
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    border-radius: 0 0 4px 4px;
  }

  .react-autosuggest__suggestions-list {
    padding-left: 0;
    list-style: none;
    margin: 0;
  }

  .react-autosuggest__suggestions-highlighted {
    padding-left: 0;
    list-style: none;
    margin: 0;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  object-fit: scale-down;
`;

interface ItemNameProps {
  hasUnderline: boolean;
}

const ItemName = styled.span`
  text-align: center;
  margin-left: 4px;
  ${({ hasUnderline }: ItemNameProps) =>
    hasUnderline && 'border-bottom: 2px solid #ea4c2b;'}
`;

const LevelRequirement = styled.span`
  margin-left: 16px;
  font-size: 0.8em;
  color: rgb(${({ theme }) => theme.darkShades});
  float: right;
`;

const StyledPopover = styled(Popover)`
  width: 100%;
`;
