

function Repos( {reposData} ) {

    return(
        <div>
            <ul>
                {reposData.map(repo => (
                    <li>{repo.name}</li>                    
                ))}
            </ul>
        </div>
    )
}

export default Repos