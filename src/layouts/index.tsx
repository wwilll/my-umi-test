import { IRouteComponentProps, Link } from 'umi';
import styles from './index.less';

const linkList = [
  { to: '/index', label: 'Index' },
  { to: '/home', label: 'home' },
  { to: '/settings', label: 'settings' },
  { to: '/settings/userinfo', label: 'userinfo' },
  { to: '/settings/testpage', label: 'testpage' },
  { to: '/login', label: 'login' },
];

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  // console.log(location);
  return (
    <>
      <div className={styles.tabWrapper}>
        {linkList.map((link) => (
          <Link
            to={link.to}
            key={link.to}
            className={`${styles.tab} ${
              location.pathname === link.to ? styles.select : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
