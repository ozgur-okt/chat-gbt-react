import { Configuration, OpenAIApi } from 'openai';
import './App.css';
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";
import Image from './components/Image';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const [usage, setUsage] = useState({});
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [input, setInput] = useState("");

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "flower",
      n: 1,
      size: "1024x1024"
    })
    //console.log(res.data.data[0].url)
  }
  
  const selectUsage = (use) => {
    setUsage(use);
  };

  const doText = async () => {
    let object = { ...usage.option, prompt: input };

    const response = await openai.createCompletion(object);

    setText(response.data.choices[0].text);
  };
  const doImage = async () => {
    let object = { ...usage.option, prompt: input };

    const response = await openai.createImage(object);

    setImage(response.data.data[0].url);
  };
  
  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} selectUsage={selectUsage} />
      {usage.id === "generateImage" ? (
        <Image doImage={doImage} setInput={setInput} result={image} />
      ) : (
        <Translation doText={doText} setInput={setInput} result={text} />
      )}
    </div>
  );
}

export default App;
