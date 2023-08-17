import { useState } from 'react';
import AllClothes from './AllClothes/AllClothes';
import './App.css';
import ChoiceBased from './ChoiceBased/ChoiceBased';
import PromptBased from './PromptBased/PromptBased';
import DataContext from './context/dataContext';
import Footer from './Footer/footer';
import HeaderMain from './Header/HeaderMain';
import { SegmentedControl } from '@mantine/core';

function App() {
  const [searchType, setSearchType] = useState('CHOICE');
  const [data, setData] = useState({
    result: {},
    isSearched: false,
    isPrompt: false,
  });

  return (
    <div>
      <HeaderMain />
      <DataContext.Provider value={{ data, setData }}>
        <div className="segmentControl">
          <SegmentedControl
          size="lg"
            radius="lg"
            color="blue"
            onChange={(value: string) => {
              setSearchType(value);
            }}
            data={[
              { label: 'Choice based', value: 'CHOICE' },
              { label: 'Prompt based', value: 'PROMPT' },
            ]}
          />
        </div>
        {searchType === 'CHOICE' && <ChoiceBased />}
        {searchType === 'PROMPT' && <PromptBased />}
        {data.isSearched && <AllClothes />}
      </DataContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
