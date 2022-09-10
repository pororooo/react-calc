import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }){
    return <button 
    onClick={()=>dispatch({type: ACTIONS.CHHOOSE_OPERATION, payload: {operation}})}
    >{operation}</button>

}