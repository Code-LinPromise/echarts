import {useEffect} from "react"
import * as echarts from 'echarts';
import "./style.scss"

const Chart16=()=>{
    useEffect(()=>{
        var chartDom = document.getElementById('main_end');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '业务模板',
                borderColor:'#1DF4FA'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0]
            },
            yAxis: {
                type: 'category',
                data: ['软件', '硬件', '保险', '短信']

            },
            series: [
                {
                    type: 'bar',
                    data: [1932, 2343, 3100, 12159, 13414, 68180]
                }
            ]
        };

        option && myChart.setOption(option);

    },[])
    return(
        <div id="main_end"  style={{width:"100%" ,height:"100%"}}>

        </div>
    )
}

export default Chart16