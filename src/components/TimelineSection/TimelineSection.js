import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import SaveIcon from 'material-ui-icons/Save';
import EditIcon from 'material-ui-icons/Edit';

import {
  getTimelineItems,
  getActs,
  getSelectedCharacterId,
} from '../../features/selectors';
import {
  removeItem,
  addCharacter,
  selectCharacter,
  saveItems,
} from '../../features/timeline/actions';

import SectionHeader from '../SectionHeader/SectionHeader';
import Item from '../Item/Item';
import Act from '../Act/Act';
import Modal from '../Modal/Modal';

const TimelineContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Toolbar = styled.div`
  padding-bottom: 10px;
`;

const CharacterSelect = styled(Select)`
  flex: 1;
`;

const TimelinePaper = styled.div`
  flex: 1;
  overflow: scroll;
  padding: 15px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.14);
`;

class TimelineSection extends Component {
  state = { showModal: false, saveInputValue: '' };

  onCharacterSelect = characterId => {
    const { selectCharacter, saveItems, selectedCharacterId } = this.props;

    if (characterId !== '0' && selectedCharacterId.toString() !== characterId) {
      saveItems();
      selectCharacter(characterId);
    }
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  saveInputOnChange = e => {
    this.setState({ saveInputValue: e.target.value });
  };

  saveInputOnSubmit = () => {
    const { addCharacter } = this.props;
    const { saveInputValue } = this.state;

    addCharacter(saveInputValue);
    this.setState({ saveInputValue: '' });
    this.handleCloseModal();
  };

  render() {
    const { showModal, saveInputValue } = this.state;
    const {
      items,
      removeItem,
      characters,
      selectedCharacterId,
      acts,
    } = this.props;

    return (
      <TimelineContainer>
        <SectionHeader text="Timeline" />
        <TimelinePaper>
          <Toolbar>
            <CharacterSelect
              value={selectedCharacterId.toString()}
              onChange={e => this.onCharacterSelect(e.target.value)}
            >
              {Object.entries(characters).map(character => {
                if (
                  Object.keys(characters).length > 1 &&
                  character[0] === '0'
                ) {
                  return null;
                }

                return (
                  <MenuItem key={character[0]} value={character[0]}>
                    {character[1].name || 'Not yet saved...'}
                  </MenuItem>
                );
              })}
            </CharacterSelect>
            <IconButton onClick={this.handleOpenModal}>
              <SaveIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
            <Modal
              showModal={showModal}
              handleCloseModal={this.handleCloseModal}
              inputValue={saveInputValue}
              inputOnChange={this.saveInputOnChange}
              inputOnSubmit={this.saveInputOnSubmit}
            />
          </Toolbar>
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
  selectCharacter,
  saveItems,
})(TimelineSection);
