import {useEffect} from "react"
import * as echarts from 'echarts';
import "./style.scss"


const Chart11=()=>{
    useEffect(()=>{
        var chartDom = document.getElementById('main_map');
        var myChart = echarts.init(chartDom);
        var option;

        setTimeout(function () {
            option = {
                legend: {},
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                dataset: {
                    source: [
                        ['product', '1', '2', '3', '4', '5', '6'],
                        ['PC', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                        ['APP', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                        ['微信小程序', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5]
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: { gridIndex: 0 },
                grid: { top: '55%' },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'pie',
                        id: 'pie',
                        radius: '30%',
                        center: ['50%', '25%'],
                        emphasis: {
                            focus: 'self'
                        },
                        label: {
                            formatter: '{b}: {@1} ({d}%)'
                        },
                        encode: {
                            itemName: 'product',
                            value: '1',
                            tooltip: '1'
                        }
                    }
                ]
            };
            myChart.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    const dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });
            myChart.setOption(option);
        });

        option && myChart.setOption(option);

    },[])

    return(
        <div id="main_map" style={{width:"100%" ,height:"100%"}}>

        </div>
    )
}

export default Chart11