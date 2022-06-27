
import "./App.css";
import MeComponent from "./components/Me/MeComponent";
import Bio from "./components/Biography/bio";
import About from "./components/About/About";

function App() {
  return (
    <div className="min-h-screen px-3 px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <MeComponent />
        <About></About>
        <Bio></Bio>

      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      ></div>
    </div>
  );
}

export default App;
