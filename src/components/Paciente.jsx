import Botones from "./Botones"
const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const{nombre,propietario,email,fecha,observacion,id}=paciente
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="text-grey-700 font-bold uppercase mb-3">Nombre de mascota: <span className="font-normal normal-case">{nombre}</span></p>

        <p className="text-grey-700 font-bold uppercase mb-3">Nombre del propietario: <span className="font-normal normal-case">{propietario}</span></p>

        <p className="text-grey-700 font-bold uppercase mb-3">Correo electronico: <span className="font-normal normal-case">{email}</span></p>

        <p className="text-grey-700 font-bold uppercase mb-3">Fecha Alta: <span className="font-normal normal-case">{fecha}</span></p>
    
        <p className="text-grey-700 font-bold uppercase mb-3">Observaciones: <span className="font-normal normal-case">{observacion}</span></p>
        <Botones
          paciente = {paciente}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
          id = {id}
        />
  </div>
  )
}
export default Paciente
