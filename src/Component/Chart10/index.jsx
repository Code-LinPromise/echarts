import * as echarts from 'echarts';
import {useEffect} from "react"
import "./style.scss"

const Chart10=()=>{
    useEffect(()=>{
        var chartDom = document.getElementById('main_2');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: 'center',
                left: '1%',
                orient : 'vertical'
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
                        { value: 1048, name: '类型一' },
                        { value: 735, name: '类型二' },
                        { value: 580, name: '类型三' },
                        { value: 484, name: '类型四' },
                        { value: 300, name: '类型五' }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);

    },[])
    return(
        <div id="main_2" style={{width:"100%" ,height:"100%"}}>
        </div>
    )
}
export default Chart10