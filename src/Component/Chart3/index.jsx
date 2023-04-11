import React,{useState,useEffect} from "react"
import "./style.scss"
import "../../image/font/iconfont.css"

const Chart3=()=>{
    const [number,setNumber]=useState(6509)
    useEffect(()=>{
        let id=setInterval(()=>{
            setNumber(v=>{
                return v+1
            })
        },200)
        return ()=>clearInterval(id)
    },[])
    return(
        <div className="main">
            <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
            <span className="user">交易中心数</span>
            <span className="number">{number}</span>
        </div>
    )

}

export default Chart3