import logo from './logo.svg';
import './App.css';
import AddXML from './components/xml-input/AddXML';

function App() {
  return (
    <div>
      <div style={{marginTop: 25, marginBottom: 25, marginLeft: 25, fontWeight: 600, fontSize: 25}}>VERIZON-5G</div>
      <div style={{margin: 25}}>
        <AddXML />
      </div>
    </div>
  );
}

export default App;
