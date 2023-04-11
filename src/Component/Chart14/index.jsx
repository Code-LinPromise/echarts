import React,{useState,useEffect} from "react"
import "./style.scss"
import "../../image/font/iconfont.css"


const Chart14=()=>{
    const [number,setNumber]=useState(56322)
    useEffect(()=>{
        let id=setInterval(()=>{
            setNumber(v=>{
                return v+1
            })
        },100)
        return ()=>clearInterval(id)
    },[])
    return(
        <div className="main">
            <span className="iconfont icon-shouye_shugang_shijiantixing"></span>
            <span className="user">总保额</span>
            <span className="number">￥{number}w</span>
        </div>
    )

}

export default Chart14