import "./App.css";
import Card from "./components/Card";
const App = () => {
  // const data = ["osama", "bilal", "fatima", "sawera"];
  return (
    <div>
      {/* {data.map((elment, index) => (
        <div className="w-fit rounded-md bg-zinc-300 px-3 py-4" key={index}>
          {elment}
        </div>
      ))} */}
      <Card />
    </div>
  );
};

export default App;
