import { useState } from "react";
import { useNavigate } from 'react-router-dom'



function Input() {
    const [userName, setUserName] = useState('')

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()

        navigate('user',{ state: {userName : userName}})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Github Username"
                type="text"
                name="Github Username"
                required
            />
      </form>
        </div>
    )
}

export default Input