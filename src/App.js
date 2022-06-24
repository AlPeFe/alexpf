import logo from './logo.svg';
import './App.css';
import MeComponent from './components/Me/MeComponent'
import NavigationComp from './components/nav/navigation';

function App() {
  return (
    <div>
      <NavigationComp></NavigationComp>
    <div style={{
        backgroundColor: 'white'
      }} className="flex h-screen justify-center items-center">      
       <MeComponent class="m-auto"></MeComponent>
    </div>
    </div>
  );
}

export default App;
