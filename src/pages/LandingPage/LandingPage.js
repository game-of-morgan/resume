import React from 'react';
import Container from '../../components/Container/Container';
import StaticTypewriter from '../../components/Typewriter/StaticTypewriter';
import styles from './LandingPage.module.css';

const LandingPage = () => (
  <Container boundless center className={styles.LandingPage}>
    <StaticTypewriter text="Welcome to my open resume.-9- Press any key to continue..." />
  </Container>
);

export default LandingPage;
