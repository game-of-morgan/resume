import React from 'react';
import Container from '../../components/Container/Container';
import StaticTypewriter from '../../components/Typewriter/StaticTypewriter';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const lines = [
    'Welcome to my open resume.-9- Press the enter key to continue...',
    'Name: Morgan Wowk',
    'Current position: Software Developer',
    'Company: Bold Commerce',
    'Active languages: PHP, Golang, Javascript',
    'Years of experience: 3+ professional, 8+ independent',
    'Topics of interest: Software architecture, API design, enterprise development',
    'Core values: Culture, social impact, innovation, growth, community',
  ];

  return (
    <Container center className={styles.LandingPage}>
      <StaticTypewriter lines={lines} />
    </Container>
  );
};

export default LandingPage;
