import React from 'react';
import styles from './WelcomePage.module.scss';
import { ABOUT_MEMBERS } from '../constants/aboutMembers';
import { MemberCard, MemberInfo } from '../components/MemberCard';

export const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.offer}>
            <h2 className={styles.welcomeTitle}>Welcome to the RSGraphiQL</h2>
            <p>
              To get started with GraphQL,log in your account. If this is your
              first time sign up with us.
            </p>
            <div className={styles.welcomeButtonContainer}>
              <button className={styles.welcomeButton}>Log in</button>
              <button className={styles.welcomeButton}>Sign up</button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>About</h2>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur. Nisi diam elementum pulvinar
            dictum sem nulla aliquam. Quis sit ornare curabitur nibh a. Nulla
            senectus purus enim morbi. Sed tincidunt risus sed fringilla rutrum.
            Venenatis augue tempor ornare placerat quam habitant sed. Est duis
            nibh sed sed penatibus semper faucibus odio. Suscipit venenatis eros
            ornare nisi ultrices volutpat. Pharetra ultrices nisl urna sagittis
            eget ornare. Ornare ac suspendisse maecenas rhoncus integer amet
            bibendum morbi.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Sleep for weak team</h2>

          <div className={styles.membersCards}>
            {ABOUT_MEMBERS.map((memberInfo: MemberInfo, index: number) => (
              <MemberCard memberInfo={memberInfo} key={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
