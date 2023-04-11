import {useEffect} from  "react"
import * as echarts from 'echarts';
import "./style.scss"

const Chart15=()=>{
    useEffect(()=>{
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 300, name: '保额' },
                        { value: 700, name: ' ' }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);
    },[])
    return(
        <div id="main" style={{width:"100%" ,height:"100%"}}>

        </div>
    )
}

export default Chart15