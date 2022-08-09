import {StarFillIcon, RepoPullIcon, RepoForkedIcon} from '@primer/octicons-react'
import '../styles/repos.css'

function Repos( {reposData} ) {

    return(
        <div className='repo-list-wrap'>
        <div className='repo-list'>
            <ul>
                {reposData.map(repo => (
                    <li><a href={repo.svn_url}>
                    <div class='repo-info'>
                        <div className='repo-header'>
                            <div className='icon-container'><RepoPullIcon size='20' /></div>
                            <div class='repo-name'>{repo.name}</div>
                        </div>
                        <p class='repo-description'>{repo.description} </p>
                        <div class='stats'>
                            <div class='stats-left'>
                                <span>{repo.language}</span>
                                <span><StarFillIcon/>{repo.stargazers_count.toLocaleString()}</span>
                                <span><RepoForkedIcon />{repo.forks_count.toLocaleString()}</span>
                            </div>
                            <div class='stats-right'>
                                <span>{repo.size.toLocaleString()}Kb</span>
                            </div>
                        </div>
                    </div>
                </a></li>                    
                ))}
            </ul>
        </div>
        </div>
    )
}

export default Repos