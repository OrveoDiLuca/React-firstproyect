import {useState,useEffect} from "react";
import Error from "./Error";

const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
  const[nombre,setNombre]=useState("");
  const[propietario,setPropietario] = useState(""); 
  const[email,setEmail] = useState("");
  const[fecha,setFecha] = useState(""); 
  const[observacion,setObservacion] = useState(""); 
  const[error,setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setObservacion(paciente.observacion);
    }
  },[paciente])

  const generarId = () => {
    //cuando se necesita mostrar varias veces una informacion que viene de un arreglo con el mismo componente se debe generar un id unico. 
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //Validando el formulario. 
    if([nombre,propietario,email,fecha,observacion].includes("")){
      setError(true); 
      return;
    }
    setError(false);

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      observacion
    }

    if(paciente.id){
      //actualizacion de pacientes. 
      //Le estoy asignando el id de paciente ya que el objeto paciente no tiene id al darle editar. 
      objetoPacientes.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) => {
        if(pacienteState.id === paciente.id){
          return (objetoPacientes);
        }else{
          return (pacienteState);
        } 
      })
      setPacientes(pacientesActualizados); 
      setPaciente({})

    }else{
      //lo que se esta haciendo es que si no hay un paciente se crea
      objetoPacientes.id = generarId(); 
      //no se usa push porque en react se usa metodos inmutables.
     setPacientes([...pacientes,objetoPacientes]);
    }
    
     //reiniciar el form.
     setNombre(""); 
     setPropietario(""); 
     setEmail ("");
     setFecha ("");
     setObservacion (""); 
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
      <h2 className="font-black text-center text-3xl">Seguimiento del Paciente</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade al paciente y <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error ? <Error mensaje = "Todos los campos son obligatorios"/> : ""}
        <div className="mb-6">
          <label htmlFor="input" className="block text-grey-700 uppercase font-bold">Nombre de la mascota</label>
          <input 
            id="input" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
            type="text" 
            placeholder="Nombre de su mascota" 
            value={nombre}
            onChange={(evt) => {
              setNombre(evt.target.value);           
            }}/>
        </div>

        <div className="mb-6">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
          <input 
            id="propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
            type="text" 
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(evt) => {
                setPropietario(evt.target.value);
            }}
            />
        </div>  

        <div className="mb-6">
          <label htmlFor="correo" className="block text-grey-700 uppercase font-bold">Correo Electronico</label>
          <input 
            id="correo" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
            type="email" 
            placeholder="Correo electronico"
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}/>
        </div>  

        <div className="mb-6">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input 
            id="alta" 
            className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" 
            type="date"
            value={fecha}
            onChange={(evt) => {
              setFecha(evt.target.value); 
            }}/>
        </div> 

        <div>
          <label htmlFor="observaciones" className="block text-gray-700 uppercase font-bold">Observaciones</label>
          <textarea 
            id="observaciones" 
            className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" 
            placeholder="Describe los sintomas"
            value={observacion}
            onChange={(evt) => {
              setObservacion(evt.target.value); 
            }}/>
        </div> 

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white mt-3 font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? "Editar Paciente." : "Agregar Paciente."}/>
      </form>
    </div>
  )
}

export default Formulario

