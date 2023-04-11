import React,{useState,useEffect} from "react"
import "./style.scss"
import "../../image/font/iconfont.css"

const Chart1=()=>{
    const [number,setNumber]=useState(461987)
    useEffect(()=>{
        let id=setInterval(()=>{
            setNumber(v=>{
                return v+1
            })
        },10)
        return ()=>clearInterval(id)
    },[])
    return(
        <div className="main">
            <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
            <span className="user">用户认证数</span>
            <span className="number">{number}</span>
        </div>
    )

}

export default Chart1