
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/DashBoard';
import { Grid } from '@mui/material';

function App() {
  const getTasks = async () => {
    await axios.get("http://localhost:8000/tarefas")
      .then(res => setTasks(res.data.tasks))
  }
  const [tasks, setTasks] = useState([])
  /*useEffect( ()=>{
     getTasks()
  },[])*/


  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item  xs={5}>
          <Dashboard />
        </Grid>
      </Grid>


      {/*{tasks.map(task =>(<p key={task.id}>{task.name}</p>))}*/}
    </div>
  );
}

export default App;
