import { useEffect, useState } from "react";

function Home(){

    const [counter, setCounter] = useState(0)
    
    useEffect(() => {
        let id = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

    }, [counter])

    return <>Welcome Home {counter}</>

}

export default Home;