import {
  StarFillIcon,
  RepoPullIcon,
  RepoForkedIcon,
} from "@primer/octicons-react";
import "../styles/repos.css";

function Repos({ reposData }) {
  return (
    <div className="repo-list-wrap">
      <div className="repo-list">
        <ul>
          {reposData.map((repo) => (
            <li key={repo.name}>
              <a href={repo.svn_url}>
                <div className="repo-info">
                  <div className="repo-header">
                    <div className="icon-container">
                      <RepoPullIcon size="20" />
                    </div>
                    <div className="repo-name">{repo.name}</div>
                  </div>
                  <p className="repo-description">{repo.description} </p>
                  <div className="stats">
                    <div className="stats-left">
                      <span>{repo.language}</span>
                      <span>
                        <StarFillIcon />
                        {repo.stargazers_count.toLocaleString()}
                      </span>
                      <span>
                        <RepoForkedIcon />
                        {repo.forks_count.toLocaleString()}
                      </span>
                    </div>
                    <div className="stats-right">
                      <span>{repo.size.toLocaleString()}Kb</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Repos;
