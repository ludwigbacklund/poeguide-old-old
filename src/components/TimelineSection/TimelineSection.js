import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  getTimelineItems,
  getActs,
  getSelectedCharacterId,
} from '../../features/selectors';
import {
  removeItem,
  addCharacter,
  removeCharacter,
  selectCharacter,
  clearItems,
} from '../../features/timeline/actions';

import SectionHeader from '../SectionHeader/SectionHeader';
import Item from '../Item/Item';
import Act from '../Act/Act';
import TimelineToolbar from '../TimelineToolbar/TimelineToolbar';

const TimelineContainer = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
`;

const TimelinePaper = styled.div`
  flex: 1;
  overflow: auto;
  padding: 15px;
  background-color: #303030;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.14);
`;

const TimelineSection = ({
  items,
  acts,
  selectedCharacterId,
  characters,
  removeItem,
  addCharacter,
  removeCharacter,
  selectCharacter,
  clearItems,
}) => {
  const firstOccurringAct = Object.keys(acts)
    .filter(act => items[act].length > 0)
    .reduce((min, act) => Math.min(min, parseInt(act, 10)), 10)
    .toString();

  return (
    <TimelineContainer>
      <SectionHeader text="Timeline" />
      <TimelinePaper>
        <TimelineToolbar
          characters={characters}
          selectedCharacterId={selectedCharacterId}
          removeItem={removeItem}
          addCharacter={addCharacter}
          removeCharacter={removeCharacter}
          selectCharacter={selectCharacter}
        />
        {Object.keys(acts)
          .filter(act => items[act].length > 0)
          .map(act => (
            <Act
              key={act}
              number={act}
              first={act === firstOccurringAct}
              onClick={clearItems}
            >
              {items[act].map(item => (
                <Item
                  key={item.name}
                  id={item.id}
                  name={item.name}
                  levelReq={item.level_req}
                  dexReq={item.dex_req}
                  intReq={item.int_req}
                  strReq={item.str_req}
                  onHoverColor="red"
                  onClick={removeItem}
                />
              ))}
            </Act>
          ))}
      </TimelinePaper>
    </TimelineContainer>
  );
};

const mapState = state => ({
  items: getTimelineItems(state),
  characters: state.timeline.characters,
  selectedCharacterId: getSelectedCharacterId(state),
  acts: getActs(state),
});

export default connect(mapState, {
  removeItem,
  addCharacter,
  removeCharacter,
  selectCharacter,
  clearItems,
})(TimelineSection);
