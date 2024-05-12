import React , {useEffect, useState} from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';




function App() {
  const [selectedImage,setSelectedImage] = useState(null);
  const [textResult,setTextResult] = useState("");

  const worker = createWorker();

  const convertImageToText = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data } = await worker.recognize(selectedImage);
    console.log(data);
    await worker.terminate();
    setTextResult(data.text);
  }
  useEffect(()=>{
    convertImageToText();
  },[selectedImage])

  const handleChangeImage = e =>{
    setSelectedImage(e.target.files[0])  
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
