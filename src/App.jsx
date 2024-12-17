import { useState } from "react";
import Form from "./components/Form.jsx";

function App() {
  const [fullData, setFullData] = useState();

  const handleSubmit = (data) => {
    setFullData(data);
  };

  console.log(fullData);

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  );
}

export default App;
