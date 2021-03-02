import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  githubName: string;
  githubImageUrl: string;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile githubName={props.githubName} githubImageUrl={props.githubImageUrl} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    githubName,
    githubImageUrl
  } = ctx.req.cookies

  return {
    props: {
      'level': Number(level),
      'currentExperience': Number(currentExperience),
      'challengesCompleted': Number(challengesCompleted),
      'githubName': String(githubName),
      'githubImageUrl': String(githubImageUrl),
    }
  }
}
