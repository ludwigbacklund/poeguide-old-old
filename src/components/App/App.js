import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ItemSection from '../ItemSection/ItemSection';
import TimelineSection from '../TimelineSection/TimelineSection';

import { addItem } from '../../features/timeline/actions';
import {
  getChosenItems,
  getAnnotatedGemsData,
  getAnnotatedUniquesData,
} from '../../features/selectors';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  overflow-y: hidden;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

const App = ({
  uniquesData, gemsData, addItem, chosenItems,
}) => (
  <MainContainer>
    <ItemSection
      header="Uniques"
      items={uniquesData}
      type="unique"
      chosenItems={chosenItems}
      onItemClick={addItem}
    />
    <TimelineSection />
    <ItemSection
      header="Gems"
      items={gemsData}
      type="gem"
      chosenItems={chosenItems}
      onItemClick={addItem}
    />
  </MainContainer>
);

const mapState = state => ({
  uniquesData: getAnnotatedUniquesData(state),
  gemsData: getAnnotatedGemsData(state),
  chosenItems: getChosenItems(state),
});

export default connect(mapState, {
  addItem,
})(App);
