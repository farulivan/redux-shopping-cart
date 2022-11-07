import { useState } from "react";
import { CartContainer } from "./components/CartContainer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
