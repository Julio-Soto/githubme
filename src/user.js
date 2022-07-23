import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Testdata  from './userTestData'
import Userinfo  from './components/Userinfo'

function User() {
    const [userData,setUserData] = useState({})
    const [name, setName] = useState('')
    const [company, setCompany] = useState('Company')
    const [avatar_url,setAvatar_url] = useState('')
    const [login, setLogin] = useState('')

    const navigateParams = useLocation()
    const { userName } = navigateParams.state

    useEffect(() => {
        //getData()
        setTestData()
    },[])

    const getData = async () => {
        const rawData = await fetch('https://api.github.com/users/' + userName)
        const data = await rawData.json()

        setUserData(data)
        /*
        setName(data.name)
        if(data.company) setCompany(data.company)
        setAvatar_url(data.avatar_url)
        setLogin(data.login)
        */
    }

    const setTestData = () => {
        setUserData(Testdata)
    }


    return (
        <Userinfo userData={userData}/>
    )
}

export default User