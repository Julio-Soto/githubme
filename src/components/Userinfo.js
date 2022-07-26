import githubLogo from '../github-logo.svg';


function Userinfo( { userData } ) {



    const formatDate = rawDate => {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
        let d = new Date(rawDate);
        let curr_date = d.getDate();
        let curr_month = months[d.getMonth()] 
        let curr_year = d.getFullYear();
        return (curr_month + ' ' + curr_date + ', ' + curr_year);
    }


    return (
        <div className='container'>
            <div className='title'>
                <img src={githubLogo} alt='github-logo'/>
                <span className='title-text'>GitHub ME</span>
            </div>
            <div className='img-container'>
		        <img src={userData.avatar_url} className='user-img' alt='' />
	        </div>
            <h1 className='user-name'>{userData.name}</h1>
	        <h2 className='user-login'>@{userData.login}</h2>
            <div className='personal-info'>
                <span className='personal-item'>
                    <span className="material-icons md-em">business</span>
                    <span className='company-name info-text'>{userData.company}</span>
		        </span>
                <span className='personal-item'>
                    <span className="material-icons md-em">place</span>
                    <span className='location info-text'>{userData.location}</span>
	        	</span>
                <span className='personal-item'>
                    <span className="material-icons md-em ">event</span>
                    <span className='joined-date info-text'>Joined {formatDate(userData.created_at)}</span>
	        	</span>
            </div>
        </div>
    )
}

export default Userinfo