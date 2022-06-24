import logo from './logo.svg';
import './App.css';
import MeComponent from './components/Me/MeComponent'

function App() {
  return (
    <div style={{
        backgroundColor: 'white'
      }} className="main grid place-items-center h-screen">
       <MeComponent></MeComponent>
    </div>
  );
}

export default App;
