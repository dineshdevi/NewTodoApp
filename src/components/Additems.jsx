import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Additems=(props)=>{
    const item=props.item
    const setitem=props.setitem
    const setedit=props.setedit
    
    const setbox=props.setbox
    const del = (removeid) => {

        var temparr = item.filter((item) =>
            item.id !== removeid
        )
        setitem(temparr)
    }

    const update=(activity,id)=>{
        setbox(activity)
        setedit(id)
    }
    return(
        
        <div>
            {
                    item.map((item) => {
                        return (
                            <div className="bg-[#850acc] mt-3 p-3 rounded-md flex justify-between items-center">
                                <p className="text-white">{item.activity}</p>
                                <div className="w-10 flex justify-between">
                                <FontAwesomeIcon icon={faEdit} className="text-white" onClick={()=>update(item.activity,item.id)}/>
                                <FontAwesomeIcon icon={faTrash} className="text-white items-center cursor-pointer" onClick={() => del(item.id)} />
                                </div>
                                
                            </div>
                        )
                    })
                }
        </div>
    )
}
export default Additems