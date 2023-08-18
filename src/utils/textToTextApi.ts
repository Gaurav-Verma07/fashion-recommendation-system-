/* eslint-disable @typescript-eslint/no-explicit-any */
import { OpenAI } from "langchain";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export const textToTextApi = (inputPrompt: string) => {
  const model = new OpenAI({
    temperature: 0,
    openAIApiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const prompt = PromptTemplate.fromTemplate(inputPrompt);
  const chainA = new LLMChain({ llm: model, prompt });
  // The result is an object with a `text` property.
  try {
    chainA.call({ product: "colorful socks" }).then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log({ err });
  }
};
