import { GitHubSvg } from './svg/GitHubSvg';
import { TelegramSvg } from './svg/TelegramSvg';
import { MailSvg } from './svg/MailSvg';
import styles from './MemberCard.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';

export type MemberInfo = {
  name: { en: string; ru: string };
  photo: string;
  links: string[];
  about: { en: string; ru: string };
};

export type MemberCardProps = {
  memberInfo: MemberInfo;
};

export const MemberCard = ({ memberInfo }: MemberCardProps) => {
  const curLanguage = useAppSelector((state) => state.language.language);
  const name = curLanguage === 'ru' ? memberInfo.name.ru : memberInfo.name.en;
  const about =
    curLanguage === 'ru' ? memberInfo.about.ru : memberInfo.about.en;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardMember}>
        <img
          src={memberInfo.photo}
          alt="member photo"
          className={styles.memberPhoto}
        />
        <div>
          <h3 className={styles.tabletName}></h3>
          <div className={styles.cardLinks}>
            <Link to={memberInfo.links[0]}>
              <GitHubSvg />
            </Link>
            <Link to={memberInfo.links[1]}>
              <TelegramSvg />
            </Link>
            <a href={`mailto:${memberInfo.links[2]}`}>
              <MailSvg />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.cardMemberInfo}>
        <h3 className={styles.desktopName}>{name}</h3>
        <p className={styles.cardMemberInfoText}>{about}</p>
      </div>
    </div>
  );
};
