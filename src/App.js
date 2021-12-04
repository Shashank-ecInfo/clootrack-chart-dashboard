import "./App.css";
import BarChart from "./components/BarChart";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import PieChart from "./components/PieChart";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">
        <BarChart />
        <PieChart />
      </div>
    </Provider>
  );
}

export default App;
