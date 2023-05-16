
import Chart from 'react-apexcharts'

const Dashboard = () => {


    return (
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
    )

}

export default Dashboard