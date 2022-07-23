import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import githubLogo from './github-logo.svg';

function User() {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('Company')
    const [avatar_url,setAvatar_url] = useState('')
    const [login, setLogin] = useState('')

    const navigateParams = useLocation()
    const { userName } = navigateParams.state

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const rawData = await fetch('https://api.github.com/users/' + userName)

        const data = await rawData.json()
        setName(data.name)
        if(data.company) setCompany(data.company)
        setAvatar_url(data.avatar_url)
        setLogin(data.login)
    }


    return (
        <div className='container'>
            <div className='title'>
                <img src={githubLogo} alt='github-logo'/>
                <span className='title-text'>GitHub ME</span>
            </div>
            <div class='img-container'>
		        <img src={avatar_url} className='user-img' alt='' />
	        </div>
            <h1 className='user-name'>{name}</h1>
	        <h2 className='user-login'>@{login}</h2>
            <div className='personal-info'>
                <span class='personal-item'>
                    <span class="material-icons md-em">business</span>
                    <span class='company-name info-text'>{company}</span>
		        </span>
            </div>
        </div>
    )
}

export default User