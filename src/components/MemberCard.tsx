import { GitHubSvg } from './svg/GitHubSvg';
import { TelegramSvg } from './svg/TelegramSvg';
import { MailSvg } from './svg/MailSvg';
import styles from './MemberCard.module.scss';
import { Link } from 'react-router-dom';

export type MemberInfo = {
  name: string;
  photo: string;
  links: string[];
  about: string;
};

export type MemberCardProps = {
  memberInfo: MemberInfo;
};

export const MemberCard = ({ memberInfo }: MemberCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardMember}>
        <img
          src={memberInfo.photo}
          alt="member photo"
          className={styles.memberPhoto}
        />
        <div>
          <h3 className={styles.tabletName}>{memberInfo.name}</h3>
          <div className={styles.cardLinks}>
            <Link to={memberInfo.links[0]}>
              <GitHubSvg />
            </Link>
            <Link to={memberInfo.links[1]}>
              <TelegramSvg />
            </Link>
            <Link to={memberInfo.links[2]}>
              <MailSvg />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.cardMemberInfo}>
        <h3 className={styles.desktopName}>{memberInfo.name}</h3>
        <p className={styles.cardMemberInfoText}>{memberInfo.about}</p>
      </div>
    </div>
  );
};
