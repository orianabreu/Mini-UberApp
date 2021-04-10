import './App.css';
import MainContainer from './styles';
import Map from './components/Map/Map';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <MainContainer>
      <Calculator />
      <Map />
    </MainContainer>
  );
}

export default App;

