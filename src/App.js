import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Aks name='k**a' address='ase akta'></Aks>
      <Aks></Aks>
      <Abukawsar name='kawsar000' marrigeTarget='Keya'></Abukawsar>
      <Abukawsar name="AbuKawSar222"></Abukawsar>
    </div>
  );
}
function Aks(props) {
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <p>address: {props.address}</p>
        <h1>okeykkk</h1>
    </div>
  )
}
function Abukawsar(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>Khuje: {props.marrigeTarget}</h3>
    </div>
  )
}

export default App;
