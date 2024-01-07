import styles from './WelcomePage.module.scss';
import {
  ABOUT_MEMBERS,
  TRANSLATE_Welcome,
  TRANSLATE_Welcome_TEXT,
} from '../constants/aboutMembers';
import { MemberCard, MemberInfo } from '../components/MemberCard';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  TRANSLATE_ABOUT,
  TRANSLATE_TEXT,
} from '../language/translationOptions';
import { useAppSelector } from '../hooks/useRedux';

export const WelcomePage = () => {
  const auth = getAuth().currentUser;
  const navigate = useNavigate();
  const curLanguage = useAppSelector((state) => state.language.language);
  const welcomeInfo =
    curLanguage === 'ru' ? TRANSLATE_Welcome.ru : TRANSLATE_Welcome.en;
  const welcomeInfoText =
    curLanguage === 'ru'
      ? TRANSLATE_Welcome_TEXT.ru
      : TRANSLATE_Welcome_TEXT.en;
  const Login =
    curLanguage === 'ru' ? TRANSLATE_TEXT.login.ru : TRANSLATE_TEXT.login.en;
  const SingUp =
    curLanguage === 'ru' ? TRANSLATE_TEXT.signup.ru : TRANSLATE_TEXT.signup.en;
  return (
    <>
      <div className={styles.container}>
        {auth ? (
          <></>
        ) : (
          <section className={styles.section}>
            <div className={styles.offer}>
              <h2 className={styles.welcomeTitle}>{welcomeInfo}</h2>
              <p>{welcomeInfoText}</p>
              <div className={styles.welcomeButtonContainer}>
                <button
                  className={styles.welcomeButton}
                  onClick={() => navigate('/login')}
                >
                  {Login}
                </button>
                <button
                  className={styles.welcomeButton}
                  onClick={() => navigate('/registration')}
                >
                  {SingUp}
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
