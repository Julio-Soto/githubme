import githubLogo from '../github-logo.svg';


function Userinfo( { userData } ) {

    return (
        <div className='container'>
            <div className='title'>
                <img src={githubLogo} alt='github-logo'/>
                <span className='title-text'>GitHub ME</span>
            </div>
            <div class='img-container'>
		        <img src={userData.avatar_url} className='user-img' alt='' />
	        </div>
            <h1 className='user-name'>{userData.name}</h1>
	        <h2 className='user-login'>@{userData.login}</h2>
            <div className='personal-info'>
                <span class='personal-item'>
                    <span class="material-icons md-em">business</span>
                    <span class='company-name info-text'>{userData.company}</span>
		        </span>
            </div>
        </div>
    )
}

export default Userinfo