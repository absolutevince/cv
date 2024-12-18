import { useState } from "react";
import Form from "./components/Form.jsx";
import "./styles/index.css";
import Preview from "./components/Preview.jsx";

function App() {
  const [fullData, setFullData] = useState(null);

  const handleSubmit = (data) => {
    setFullData(data);
  };

  console.log(fullData);

  return (
    <div id="App">
      <Form onSubmit={handleSubmit} />
      {fullData && <Preview data={fullData} />}
    </div>
  );
}

export default App;
