import { useEffect } from "react"
// import { callbackify } from "util"

export default function NoPages(){
    useEffect(()=>{
        console.log("helo")
    })
    return (
        <div className="flex items-center justify-center text-black text-4xl">
            <p>404 Notfound ya aj</p>
        </div>
    )
}