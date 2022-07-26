import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Testdata  from './userTestData'
import RepoTestData from './repoTestData'
import Userinfo  from './components/Userinfo'

function User() {
    const [userData,setUserData] = useState({})
    
    const navigateParams = useLocation()
    const { userName } = navigateParams.state

    useEffect(() => {
        getUserData()
        getRepoData()
        //setUserData(Testdata)
    },[])

    const getUserData = async () => {
        const rawData = await fetch('https://api.github.com/users/' + userName)
        const data = await rawData.json()

        setUserData(data)
    }

    const getRepoData = async () => {
        //const rawData = await fetch('https://api.github.com/users/' + userName + "/repos?per_page=100")
        //const data = await rawData.json()
        const data = RepoTestData
        //console.log(data[1].name)
        const sortedRepos = data.sort( (a,b) => {
            return b.stargazers_count - a.stargazers_count
        })
        console.log(sortedRepos[0].name)
    }

    return (
        <Userinfo userData={userData}/>
    )
}

export default User