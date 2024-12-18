import { useState } from "react";
import Form from "./components/Form.jsx";
import "./styles/index.css";

function App() {
  const [fullData, setFullData] = useState();

  const handleSubmit = (data) => {
    setFullData(data);
  };

  console.log(fullData);

  return (
    <div id="App">
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
