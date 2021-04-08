import './App.css';
import MainContainer from './styles';
import Header from './sections/Header/Header';
import Map from './components/Map/Map';

function App() {
  return (
    <MainContainer>
      <Header />
      
      <Map />
    </MainContainer>
  );
}

export default App;

