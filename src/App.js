import Routes from './routes';
import styles from './App.module.scss';
import SideMenuComponent from './common/SideMenu/SideMenuComponent';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideMenuContainer}>
        <SideMenuComponent />
      </div>
      <div className={styles.topBarAndRoutesContainer}>
        <Routes />
      </div>
    </div>
  );
}

export default App;
