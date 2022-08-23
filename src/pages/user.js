import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import Testdata  from '../util/userTestData'
//import RepoTestData from '../util/repoTestData'
import Userinfo from "../components/Userinfo";
import Repos from "../components/Repos";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

function User() {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState(null);
  const [pieData, setPieData] = useState(null);

  const navigateParams = useLocation();
  const { userName } = navigateParams.state;

  useEffect(() => {
    getUserData();
    getRepoData();
    //setUserData(Testdata)
  }, []);

  const getUserData = async () => {
    const rawData = await fetch("https://api.github.com/users/" + userName);
    const data = await rawData.json();

    setUserData(data);
  };

  const getRepoData = async () => {
    const rawData = await fetch(
      "https://api.github.com/users/" + userName + "/repos?per_page=100"
    );
    const data = await rawData.json();
    //const data = RepoTestData

    let languages = new Map();

    for (let i = 0; i < data.length; ++i) {
      if (data[i].language) {
        if (languages.has(data[i].language))
          languages.set(data[i].language, languages.get(data[i].language) + 1);
        else languages.set(data[i].language, 1);
      }
    }

    const pieLabels = Array.from(languages.keys());
    const pieData = Array.from(languages.values());

    setPieData({ labels: pieLabels, data: pieData });

    const sortedRepos = data
      .sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      })
      .splice(0, 8);

    setReposData(sortedRepos);
  };

  return (
    <div>
      {userData && <Userinfo userData={userData} />}
      <div className="charts-container">
        {pieData && <PieChart pieData={pieData} />}
        {reposData && <BarChart reposData={reposData} />}
      </div>
      {reposData && <Repos reposData={reposData} />}
    </div>
  );
}

export default User;
