import './App.css';
import KidCard from './componentes/KidCard'
function App() {
  return (
    <div className="App">
      
      <div className='contenedor-principal' >
      <h1>Lista de Niños</h1>
      <KidCard
        name="Juan"
        lastName="Perez"
        birthDate="03-05-2015"
        ci="2900522"
        imagen="1"
      />

      <KidCard
        name="Pedro"
        lastName="Ramirez"
        birthDate="03-05-2013"
        ci="26262626"
        imagen="2"
      />

      <KidCard
        name="Pablo"
        lastName="Gonzales"
        birthDate="03-05-2016"
        ci="25262123"
        imagen="3"
      />

      <KidCard
        name="Carlos"
        lastName="Alvarez"
        birthDate="03-05-2017"
        ci="2622625"
        imagen="4"
      />

      <KidCard
        name="Roberto"
        lastName="Rojas"
        birthDate="03-05-2014"
        ci="24569875"
        imagen="5"
      />

      </div>
    </div>
  );
}

export default App;
