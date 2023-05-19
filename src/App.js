
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'

function App() {
  const getTasks = async () => {
    await axios.get("http://localhost:8000/tarefas")
      .then(res => setTasks(res.data.tasks))
  }
  const [tasks, setTasks] = useState([])
  const columns = [
    {field:"id", headerName: "ID", width:"100" },
    {field:"tarefa", headerName: "Tarefa", width:"100" },
    {field:"projeto", headerName: "Projeto", width:"100" },
    {field:"priority", headerName: "Priority", width:"100" },
    {field:"tags", headerName: "Tags", width:"100" },
    {field:"desenvolvedor", headerName: "Desenvolvedor", width:"100" },
    {field:"situação", headerName: "Situação", width:"100" }
  ]

  const rows = [ 
    {id:'1',tarefa:'Mudar Layout',projeto:'MUI',priority:'urgente',tags:'#bug',desenvolvedor:'Luiz',situação:'Completo'}
  ]

  useEffect( ()=>{
     getTasks()
  },[])

console.log(tasks)


  return (
    <div className="App">
        <DataGrid
          columns={columns}
          rows={rows}
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
