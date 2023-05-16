
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/DashBoard';
import { Grid } from '@mui/material';
import Chart from 'react-apexcharts'

function App() {
  const getTasks = async () => {
    await axios.get("http://localhost:8000/tarefas")
      .then(res => setTasks(res.data.tasks))
  }
  const [tasks, setTasks] = useState([])
  const [tasksDate, SetTaskDate] = useState([])
  /*useEffect( ()=>{
     getTasks()
  },[])*/


  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item  xs={5}>
        <Chart options={{
            chart: {
                height: 380,
                width: 380,
                type: "area",
                animations: {
                    initialAnimation: {
                        enabled: false
                    }
                }
            },
            xaxis: {
                type: 'datetime'
              }
        }} series=
            {[
                {
                    name: "Series 1",
                    data: [
                        [1486684800000, 34],
                        [1486771200000, 43],
                        [1486857600000, 31],
                        [1486944000000, 43],
                        [1487030400000, 33],
                        [1487116800000, 52]
                    ]
                }
            ]
            } ></Chart>
        </Grid>
      </Grid>


      {/*{tasks.map(task =>(<p key={task.id}>{task.name}</p>))}*/}
    </div>
  );
}

export default App;
