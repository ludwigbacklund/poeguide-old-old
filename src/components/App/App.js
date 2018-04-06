import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ItemSection from '../ItemSection/ItemSection';
import TimelineSection from '../TimelineSection/TimelineSection';

import { addItem } from '../../features/timeline/actions';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  overflow-y: hidden;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (min-width: 1100px) {
    width: 50%;
  }
`;

const App = ({ uniquesData, gemsData, addItem }) => (
  <MainContainer>
    <ItemSection
      header="Uniques"
      items={uniquesData}
      type="unique"
      onItemClick={addItem}
    />
    <TimelineSection />
    <ItemSection
      header="Gems"
      items={gemsData}
      type="gem"
      onItemClick={addItem}
    />
  </MainContainer>
);

const mapState = state => ({
  uniquesData: state.uniques.uniquesData,
  gemsData: state.gems.gemsData,
});

export default connect(mapState, {
  addItem,
})(App);
