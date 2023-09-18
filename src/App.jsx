import "./App.css";
import LineChart from "./components/LineChart/LineChart";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navber from "./components/Navber/Navber";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navber></Navber>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl bg-rose-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
