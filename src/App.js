
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'
import { Login } from '@mui/icons-material';



function App() {
  const getTasks = async () => {
    await axios.get("http://localhost:8000/tarefas")
      .then(res => setTasks(res.data)
      
      )
  
  }

  const [tasks, setTasks] = useState([])
  

  const columns = [
    { field: "id", headerName: "ID", width: "150" },
    { field: "name", headerName: "Tarefa", width: "300" },
    { field: "project", headerName: "Projeto", width: "200" },
    { field: "priority", headerName: "Priority", width: "100" },
    { field: "tags", headerName: "Tags", width: "100" },
    { field: "dev", headerName: "Desenvolvedor", width: "300" },
    { field: "situacao", headerName: "Situação", width: "100" }
  ]
 

  useEffect(() => {
    getTasks()
  
  }, [])

 
  
  const dataRow = tasks.map(task => {
    return(
      {
        id : task.id,
        name : task.name,
        project: task.project ? task.project.name : ('-'),
        priority: task.priority ? task.priority.priority : ('-'),
        tags: task.tags.map(tags => tags.name),
        dev: task.assignees.map(devs => devs.username),
        situacao: task.status.status
      }
    )
  }
   
  )


console.log(dataRow)

  return (
    <div className="App">
      
      {<DataGrid
        sx={{m:2, border: 1}}
        columns={columns}
        rows={dataRow}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 50 ]}
        

      />}

    </div>
  );
}

export default App;
