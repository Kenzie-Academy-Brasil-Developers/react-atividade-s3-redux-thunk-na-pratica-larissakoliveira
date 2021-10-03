// 1 - importe o useDispatch
// 3 - importe o seu thunk

import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addCommentThunk } from "./store/modules/user/thunks";

const Input = () => {

 // 2 - atribuindo a variável
    const dispatch = useDispatch()
    const [userComment, setUserComment] = useState("")
    const user = useSelector(state => state.user)

     // 4 - dentro do seu componente faça o dispatch do thunk, passando o comentário

    const handleAddComment = () => {
        dispatch(addCommentThunk(userComment))
        setUserComment("")
    }

    return (
        <>
            <div>
                <h3>{user.name}</h3>
            </div>
            <input value={userComment} placeholder="faça um comentário" onChange={e => setUserComment(e.target.value)}/>

    
             <button onClick={() => handleAddComment(userComment)}>Comentário</button>
     
            
            <ul>
                {user.comments.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default Input