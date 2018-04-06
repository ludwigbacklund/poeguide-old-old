import React, { Component } from 'react';
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
  saveItems,
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

class TimelineSection extends Component {
  onCharacterSelect = characterId => {
    const { selectCharacter, saveItems, selectedCharacterId } = this.props;

    if (characterId !== '0' && selectedCharacterId.toString() !== characterId) {
      saveItems();
      selectCharacter(characterId);
    }
  };

  saveInputOnChange = e => {
    this.setState({ newCharacterInputValue: e.target.value });
  };

  newCharacterOnOk = () => {
    const { addCharacter } = this.props;
    const { newCharacterInputValue } = this.state;

    addCharacter(newCharacterInputValue);
    this.setState({ newCharacterInputValue: '' });
    this.handleCloseNewCharacterModal();
  };

  deleteOnOk = () => {
    const { selectedCharacterId, removeCharacter } = this.props;

    removeCharacter(selectedCharacterId);
    this.handleCloseDeleteModal();
  };

  render() {
    const {
      items,
      removeItem,
      acts,
      selectedCharacterId,
      characters,
    } = this.props;

    return (
      <TimelineContainer>
        <SectionHeader text="Timeline" />
        <TimelinePaper>
          <TimelineToolbar
            characters={characters}
            selectedCharacterId={selectedCharacterId}
          />
          {Object.keys(acts).map(act => (
            <Act key={act} number={act}>
              {items[act]
                ? items[act].map(item => (
                  <Item
                    key={item.name}
                    id={item.id}
                    name={item.name}
                    levelReq={item.level_req}
                    dexReq={item.dex_req}
                    intReq={item.int_req}
                    strReq={item.str_req}
                    chosen
                    onClick={removeItem}
                  />
                  ))
                : null}
            </Act>
          ))}
        </TimelinePaper>
      </TimelineContainer>
    );
  }
}

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
  saveItems,
})(TimelineSection);
