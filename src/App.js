
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'

function App() {
  const getTasks = async () => {
    await axios.get("http://localhost:8000/tarefas")
      .then(res => setTasks(res.data.tasks
      ))
  }
  const [tasks, setTasks] = useState([])
  const columns = [
    {field:"id", headerName: "ID", width:"150" },
    {field:"name", headerName: "Tarefa", width:"400" },
    {field:"project", headerName: "Projeto", width:"100" },
    {field:"priority", headerName: "Priority", width:"100" },
    {field:"tags", headerName: "Tags", width:"100" },
    {field:"desenvolvedor", headerName: "Desenvolvedor", width:"100" },
    {field:"situação", headerName: "Situação", width:"100" }
  ]


  useEffect( ()=>{
     getTasks()
  },[])

const dataRow = tasks.map(task => {
  return{
    id:task.id, 
    name:task.name,
    project:task.project.name
  }
})

/*const rows = ()=> tasks.map(task =>
  {'id':{{task.id}},tarefa:'Mudar Layout',projeto:'MUI',priority:'urgente',tags:'#bug',desenvolvedor:'Luiz',situação:'Completo'}
)*/


  return (
    <div className="App">
        <DataGrid
          columns={columns}
          rows={dataRow}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection

/>
      
    </div>
  );
}

export default App;
