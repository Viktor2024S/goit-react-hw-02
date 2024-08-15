import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Description />
      <Description />
      <Description />
    </>
  );
}
