/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';
import DataContext from '../../context/dataContext';
import classes from './promptBased.module.css';
import { Title, Textarea, Button, Text, Skeleton } from '@mantine/core';

const PromptBased = () => {
  const [prompt, setPrompt] = useState<string>('');
  const { setData } = useContext(DataContext);

  const handleSearch = async () => {
    const res = fetch(`/`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });
    setData({ result: res, isSearched: true, isPrompt: true });
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.prompt}>
          <div className={classes.promptHeading}>
            <Title order={2} mb={6}>
              Describe your fashion
            </Title>
          </div>
          <Textarea
            placeholder="A floral frock with natural colors..."
            description="What do you want to wear, you can use a single word or complete sentence"
            withAsterisk
            autosize
            minRows={6}
            onChange={(e: any) => {
              setPrompt(e.target.value);
            }}
          />
          <div className={classes.searchButton}>
            <Button sx={{width: '50%', background:'linear-gradient(90deg,#04a0f4,#11b7da,#23d5b8)'}} onClick={handleSearch}>Generate</Button>
          </div>
        </div>
        <div className={classes.generatedImage}>
            <Text mb={5} fw={500} >Your Desired GenAI Image</Text>
          <Skeleton className={classes.genAiImage}/>
        </div>
      </div>
    </section>
  );
};
export default PromptBased;
