import React from 'react';
import "./style.scss"
import Chart1 from "../Component/Chart1";
import Chart2 from "../Component/Chart2";
import Chart3 from "../Component/Chart3";
import Chart4 from  "../Component/Chart4"
import Chart5 from "../Component/Chart5";
import Chart6 from "../Component/Chart6";
import Chart7 from "../Component/Chart7";
import Chart8 from "../Component/Chart8";
import Chart9 from "../Component/Chart9";
import Chart10 from "../Component/Chart10";
import Chart11 from "../Component/Chart11";
import Chart12 from "../Component/Chart12";
import Chart13 from "../Component/Chart13";
import Chart14 from "../Component/Chart14";
import Chart15 from "../Component/Chart15";
import Chart16 from "../Component/Chart16";

const Home=()=>{
    return (
        <div className='home'>
            <div className='header'>
            </div>
            <main >
                <div className="test1">
                    <Chart1/>
                </div>
                <div className=" test2">
                    <Chart2/>
                </div>
                <div className=" test3">
                    <Chart3/>
                </div>
                <div className=" test4">
                    <Chart4/>
                </div>
                <div className=" test5">
                    <Chart5/>
                </div>
                <div className=" test6">
                    <Chart6/>
                </div>
                <div className=" test7">
                    <Chart7/>
                </div>
                <div className=" test8">
                    <Chart8/>
                </div>
                <div className=" test9">
                    <Chart9/>
                </div>
                <div className=" test10">
                    <div className="font">
                        <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
                        <span>物流类型</span>
                    </div>
                    <div className="main_pie">
                        <Chart10/>
                    </div>
                </div>
                <div className=" test11">
                    <div className="font">
                        <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
                        <span>订单来源</span>
                    </div>
                    <div className="main_map">
                        <Chart11/>
                    </div>
                </div>
                <div className=" test12">
                    <div className="font">
                        <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
                        <span>日报统计数据表</span>
                    </div>
                    <div className="main_zhu">
                        <Chart12/>
                    </div>
                </div>
                <div className=" test13">
                    <Chart13/>
                </div>
                <div className=" test14">
                    <Chart14/>
                </div>
                <div className=" test15">
                    <div className="main">
                        <div className="font">
                            <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
                            <span>保额</span>
                        </div>
                        <Chart15/>
                    </div>
                </div>
                <div className=" test16">
                    <div className="main">
                        <Chart16/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;