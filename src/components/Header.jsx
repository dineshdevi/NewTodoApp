import "../index.css";
import { useState } from "react";
import Additems from "./Additems";

const Header = () => {
    const [box, setbox] = useState("")
    const [item, setitem] = useState([{ id: 1, activity: "Hi friends" }, { id: 2, activity: "Hello" }])
    console.log(item)
    const [edit,setedit]=useState(false)

    const change = (event) => {
        setbox(event.target.value)
    }
    const click = () => {
        if(edit !== false){
            setitem(
                item.map((item)=>
                    item.id===edit? {...item,activity:box}:item
                )
            )
            setedit(false)
        }
        else{
            setitem([...item, { id: item.length + 1, activity: box }])
        }
        setbox("")
    }
    

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="bg-[#200c2c] w-max p-6">
                <h1 className="text-white font-medium text-3xl text-center mb-5">Get Things Done!</h1>
                <input type="text" className="p-2 border border-purple-800 bg-inherit w-72 text-white hover:outline outline-none" placeholder="What is the task today?" value={box} onChange={change} />
                <button className="bg-[#850acc] text-white p-2 border-[#850acc] border mb-6" onClick={click} disabled={!box.trim()}>{edit !== false ? "Edit Task" : "Add Task"}</button>

                <Additems item={item} setitem={setitem} box={box} setbox={setbox} setedit={setedit}></Additems>
            </div>
        </div>
    );
};

export default Header;
