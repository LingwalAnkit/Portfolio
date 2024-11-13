import  { useEffect, useState } from "react";

export default function GitHub(){
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/LingwalAnkit")
        .then(Response=>Response.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    },[])
    return(
    <>
        <div className="conatiner bg-gray-700 p-8">
            <div className="flex flex-col gap-4 items-center">
                <div className="text-2xl text-gray-400 text-center"> Git-Hub Followers: {data.followers}</div>
                <div className="flex gap-8 items-center justify-center">
                    <img  src={data.avatar_url} alt="Avatar" />
                    <div className="text-2xl text-gray-400">Hello My name is Ankit , BTech Undergraduate</div>
                </div>
            </div>
        </div>
    </>    
    )
}