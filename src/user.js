import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Testdata  from './userTestData'
import RepoTestData from './repoTestData'
import Userinfo  from './components/Userinfo'
import Repos from './components/Repos'
import PieChart from './components/PieChart'

function User() {
    const [userData,setUserData] = useState(null)
    const [reposData, setReposData] = useState([])
    const [allRepos, setAllRepos] = useState(null)
    
    
    const navigateParams = useLocation()
    const { userName } = navigateParams.state

    useEffect(() => {
        //getUserData()
        getRepoData()
        setUserData(Testdata)
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
        
        const sortedRepos = data
        .sort( (a,b) => {
            return b.stargazers_count - a.stargazers_count
        })
        .splice(0,8)

        setReposData(sortedRepos) 
        setAllRepos(data)
    }

    return (
        <div>
            { userData &&  <Userinfo userData={userData}/> }
            { allRepos &&  <PieChart allRepos={allRepos}/> }
            { reposData && <Repos reposData={reposData}/> }
        </div>
    )
}

export default User