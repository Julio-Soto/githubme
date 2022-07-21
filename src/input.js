import { useState } from "react";
import { useNavigate } from 'react-router-dom'



function Input() {
    const [name, setName] = useState('')

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()

        navigate('/user',{ state: {userName : name}})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
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