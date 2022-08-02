import '../styles/repos.css'

function Repos( {reposData} ) {

    return(
        <div className='repo-list-wrap'>
        <div className='repo-list'>
            <ul>
                {reposData.map(repo => (
                    <li><a href={repo.svn_url}>
                    <div class='repo-info'>
                        <div class='repo-name'>{repo.name}</div>
                        <p class='repo-description'>{repo.description} </p>
                        <div class='stats'>
                            <div class='stats-left'>
                                <span>{repo.language}</span>
                                <span>{repo.stargazers_count}</span>
                                <span>{repo.forks_count}</span>
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