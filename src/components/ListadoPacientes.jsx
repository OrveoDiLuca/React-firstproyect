import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
         <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
         <p className="text-xl text-center mt-5 mb-10">Administra a tus <span className="text-indigo-600 font-bold">Pacientes.</span></p>
   
         {pacientes.map((paciente)=> {
           return(
             //va a llamar tanta veces el componente como haya pacientes en el arreglo. 
             <Paciente
               key={paciente.id}
               paciente = {paciente}
               setPaciente = {setPaciente}
               eliminarPaciente = {eliminarPaciente}
             />
           )
         })}
        </>
      ):(
        <>
          <h2 className="font-black text-3xl text-center">No se han agregado ningun paciente</h2>
          <p className="text-xl text-center mt-5 mb-10">Agrega a tus <span className="text-indigo-600 font-bold">Pacientes.</span></p>
        </>
      )}
     
      
    </div>
  )
}

export default ListadoPacientes
