import logo from './logo.svg';
import './App.css';
import MeComponent from './components/Me/MeComponent'
import NavigationComp from './components/nav/navigation';
import FormContact from './components/FormContact/FormContact';
import WorkComp from './components/Work/Work';

function App() {
  return (
    <div>
      <NavigationComp></NavigationComp>
    <div style={{
        backgroundColor: 'white'
      }}>      
       <MeComponent></MeComponent>
 
    </div> 
    </div>
  );
}

export default App;
