import React from 'react';
import StickyHeaderTable from './StickyHeaderTable'
import {json} from './jsondata'
const tableHeaders = [
    "First Column",
    "Second Column",
    "Third Column",
    "Fourth Column",
    "Fifth Column",
    "Sixth Column",
    "Seventh Column",
    "Eight Column",
]

class App extends React.Component {
  
  render(){
  return (
    <StickyHeaderTable headers={tableHeaders} data={json}  />
  );
  }
}

export default App;


