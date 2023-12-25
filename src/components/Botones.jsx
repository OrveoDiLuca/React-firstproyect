const Botones = ({paciente,setPaciente,eliminarPaciente,id}) => {
  const handleDelete = () => {
    const preguntar = confirm("Seguro que deseas eliminar este paciente"); 
    if(preguntar){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="flex justify-between px-10 mt-8">
      <button 
        className="py-2 px-10 bg-indigo-700 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg" 
        type="button"
        onClick={() => {
          setPaciente(paciente)
        }}>Editar</button>
      <button 
        className="py-2 px-10 bg-red-700 hover:bg-red-900 text-white font-bold uppercase rounded-lg" 
        type="button"
        onClick={() => handleDelete()}
        >Eliminar</button>
    </div>
  )
}

export default Botones
