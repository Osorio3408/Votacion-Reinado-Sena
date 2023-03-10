import "./App.css";
import { Body } from "./components/Layout/Body/Body";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";

function App() {
  return (
    <div className="md:bg-black">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;

