import { useState } from "react";

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { getDataFromGithub } from '../services/github';
import styles from '../styles/components/Form.module.css';

export function Form() {
  const [githubHandle, setGithubHandle] = useState("");
  const history = useRouter();

  const validateGithubHandle = async () => {
    const data = await getDataFromGithub(githubHandle)
      .then((data) => data)
      .catch((err) => { alert(err) });

    if (data["name"]) {
      Cookies.set('githubName', String(data["name"]));
      Cookies.set('githubImageUrl', String(data["avatar_url"]));
      history.push("/home");
    } else {
      alert("Github handle does not exist");
    }
    setGithubHandle("");
  }

  const handleChange = async (event) => {
    setGithubHandle(event.target.value);
  }

  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <img src="/logo-full.svg" alt="Fechar modal" />
      </div>
      <div className={styles.input}>
        <p>Github handle</p>
        <input type="text" value={githubHandle} onChange={handleChange} name="githubName" className={styles.inputBox} />
        <input type="submit" value="Submit" onClick={validateGithubHandle} className={styles.inputButton} />
      </div>
    </div>
  )
}