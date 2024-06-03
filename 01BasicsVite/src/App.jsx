import { useState } from "react";

import './App.css';
import Card from "./components/Card";

function App() {

  return (
   <>
      <h1>Hii There..</h1>
    <Card username="Laxman" post="Chief Executive Officer" />
    <Card />
   </>
  );
}

export default App;
