import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../dizayn/dizayn.module.css';


const Header = () => {
  return (
    
    <div className={styles.header}>
      <div  className={styles.information}>
        <ul>
          <Link to='/haqqimizda' className={styles.haqqimizda}>
            <span>HAQQIMIZDA</span>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/çatdirilma' className={styles.çatdirilma}>
            <span>ÇATDIRILMA</span>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/faq' className={styles.faq}>
            <span>FAQ</span>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/elaqe' className={styles.elaqe}>
            <span>ƏLAQƏ</span>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ul>
      </div>
    </div>
  );
}

export default Header;
