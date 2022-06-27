import logo from "./logo.svg";
import "./App.css";
import MeComponent from "./components/Me/MeComponent";
import NavigationComp from "./components/nav/navigation";
import FormContact from "./components/FormContact/FormContact";
import Bio from "./components/Biography/bio";

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <MeComponent />
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
