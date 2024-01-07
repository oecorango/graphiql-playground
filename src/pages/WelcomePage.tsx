import styles from './WelcomePage.module.scss';
import { ABOUT_MEMBERS } from '../constants/aboutMembers';
import { MemberCard, MemberInfo } from '../components/MemberCard';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { TRANSLATE_ABOUT } from '../language/translationOptions';
import { useAppSelector } from '../hooks/useRedux';

export const WelcomePage = () => {
  const auth = getAuth().currentUser;
  const navigate = useNavigate();
  const curLanguage = useAppSelector((state) => state.language.language);

  return (
    <>
      <div className={styles.container}>
        {auth ? (
          <></>
        ) : (
          <section className={styles.section}>
            <div className={styles.offer}>
              <h2 className={styles.welcomeTitle}>Welcome to the RSGraphiQL</h2>
              <p>
                To get started with GraphQL,log in your account. If this is your
                first time sign up with us.
              </p>
              <div className={styles.welcomeButtonContainer}>
                <button
                  className={styles.welcomeButton}
                  onClick={() => navigate('/login')}
                >
                  Log in
                </button>
                <button
                  className={styles.welcomeButton}
                  onClick={() => navigate('/registration')}
                >
                  Sign up
                </button>
              </div>
            </div>
          </section>
        )}

        <section className={styles.section}>
          <h2>{curLanguage === 'ru' ? 'О Нас' : 'About'}</h2>
          <p className={styles.aboutText}>
            {curLanguage === 'ru' ? TRANSLATE_ABOUT.ru : TRANSLATE_ABOUT.en}
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
