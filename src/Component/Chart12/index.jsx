import {useEffect} from "react"
import * as echarts from 'echarts';

const Chart12=()=>{
    useEffect(()=>{
        var app = {};

        var chartDom = document.getElementById('main_zhu');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '技术部日报数', '产品部日报书', '财务部日报书'],
                    ['4', 23.3, 45.8, 53.7],
                    ['8', 43.1, 33.4, 25.1],
                    ['12', 46.4, 35.2, 42.5]
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        };

        option && myChart.setOption(option);
    },[])
    return(
        <div id="main_zhu" style={{width:"100%" ,height:"100%"}}>
        </div>
    )
}

export default Chart12