import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import githubLogo from './github-logo.svg';

function User() {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')

    const navigateParams = useLocation()
    const { userName } = navigateParams.state
    //console.log(state)

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const rawData = await fetch('https://api.github.com/users/' + userName)

        const data = await rawData.json()
        setName(data.name)
        setCompany(data.company)
    }


    return (
        <div>
            <div>
                <img src={githubLogo} />
                <span>GitHub ME</span>
            </div>
            <h2>{ name }</h2>
            <h2>{company}</h2>
        </div>
    )
}

export default User