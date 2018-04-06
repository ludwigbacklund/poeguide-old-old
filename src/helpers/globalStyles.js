// import Fontin from './static/Fontin-SmallCaps.ttf';
import bg from '../static/bg.png';

export default `
  html, body {
    /* font-family: Fontin; */
    width: 100%;
    height: 100%;
    background: url(${bg});
  }

  #root {
    display: flex;
    justify-content: center;
  }

  .ant-select-dropdown {
    background-color: #424242;
    color: rgba(255, 255, 255, 0.7);
  }

  .ant-select-dropdown-menu-item {
    background-color: #424242;
    color: rgba(255, 255, 255, 0.7);
  }

  .ant-select-dropdown-menu-item:hover {
    background-color: #515151;
    color: rgba(255, 255, 255, 0.7);
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
}
`;
