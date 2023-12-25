import {useState,useEffect} from"react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const[pacientes,setPacientes] = useState([]);
  const[paciente,setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes') )?? []; 
      setPacientes(pacientesLs); 
    }
    obtenerLS();
  }, []);//se ejecutara una sola vez, eso solo sucede cuando no hay dependencias. 

  useEffect(() => {
    localStorage.setItem("pacientes",JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteActualizados);
  }
  //Aca se pone todo el codigo de js. 
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <main className="mt-20 md:flex">
        <Formulario
          setPacientes = {setPacientes}
          pacientes = {pacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </main>
      
    </div>
  )
}

export default App
