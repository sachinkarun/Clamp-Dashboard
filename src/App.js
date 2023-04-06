import './App.css';
import Main from './components/main/Main';
import RightBar from './components/rightbar/RightBar';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Main/>
      <RightBar/>
    </div>
  );
}

export default App;
