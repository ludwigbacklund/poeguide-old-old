import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ItemSection from '../ItemSection/ItemSection';
import TimelineSection from '../TimelineSection/TimelineSection';

import { addItem } from '../../features/timeline/actions';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 1000px;
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
