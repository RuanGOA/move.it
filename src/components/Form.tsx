import { useState } from "react";

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { getDataFromGithub } from '../services/github';
import styles from '../styles/components/Form.module.css';

export function Form({ children }) {
  const [githubHandle, setGithubHandle] = useState("");
  const history = useRouter();

  const validateGithubHandle = async () => {
    if (githubHandle.length > 0) {
      const data = await getDataFromGithub(githubHandle)
        .then((data) => data)
        .catch((err) => { alert(err) });

      if (data["name"]) {
        const cookiesNames = ["currentExperience", "level", "githubImageUrl", "challengesCompleted", "githubName"];
        cookiesNames.map((name) => { Cookies.remove(name) });
        Cookies.remove('currentExperience')
        Cookies.set('githubName', String(data["name"]));
        Cookies.set('githubImageUrl', String(data["avatar_url"]));
        history.push("/home");
      } else {
        alert("Github handle does not exist");
      }
      setGithubHandle("");
    }
  }

  const handleChange = async (event) => {
    setGithubHandle(event.target.value);
  }

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      validateGithubHandle();
    }
  }

  return (
    <div className={styles.form}>
      {children}
      <div className={styles.input}>
        <p>Github handle</p>
        <input
          type="text"
          value={githubHandle}
          onChange={handleChange}
          name="githubName"
          className={styles.inputBox}
          onKeyDown={handleEnterKey}
        />
        <input
          type="submit"
          value="Submit"
          onClick={validateGithubHandle}
          className={styles.inputButton}
        />
      </div>
    </div>
  )
}