import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../dizayn/dizayn.module.css';

const Haqqimizda = () => {
  return (
    <>
       <div className={styles.header}>
        <div className={styles.information}>
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

      <Link to='/' className={styles.middle}>CAFECITY</Link>
      <div className={styles.restoranContainer}>
        <div className={styles.restaurant}>
          <Link to='/restoran' className={styles.restoran}>
            RESTORANLAR
            <svg className="feather feather-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </Link>
        </div>
        <div className={styles.restoranDropdown}>
          <div className={styles.restoranItem}><Link to='/CAFECITY'>CAFECITY</Link></div>
          <div className={styles.restoranItem}><Link to='/CITY PARK'>CITY PARK</Link></div>
          <div className={styles.restoranItem}><Link to='/LAQUZU'>LAQUZU</Link></div>
          <div className={styles.restoranItem}><Link to='/CITY PUB'>CITY PUB</Link></div>
          <div className={styles.restoranItem}><Link to='/ŞUŞA QALA'>ŞUŞA QALA</Link></div>
        </div>
      </div>
      
      <div className={styles.menyuContainer}>
        <div className={styles.menu}>
          <Link to='/menyu' className={styles.menyu}>
            MENYU
            <svg className="feather feather-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </Link>
        </div>
        <div className={styles.menyuDropdown}>
          <div className={styles.menyuItem}><Link to='/CAFECITY'>CAFECITY</Link></div>
          <div className={styles.menyuItem}><Link to='/CITY PARK'>CITY PARK</Link></div>
          <div className={styles.menyuItem}><Link to='/LAQUZU'>LAQUZU</Link></div>
          <div className={styles.menyuItem}><Link to='/CITY PUB'>CITY PUB</Link></div>
          <div className={styles.menyuItem}><Link to='/ŞUŞA QALA'>ŞUŞA QALA</Link></div>
        </div>
      </div><br/><br/><br/><br/>

      <main>
        <section>
          <img src='./images/cafecity1.jpg' style={{width:'100%', height:400, position:'relative', top:100}}/>
          <span style={{position:'relative', top:-200,left:570, fontSize:40, fontWeight:'bold', fontFamily:'cursive', color:'white'}}>ƏLAQƏ</span>
        </section>

        <section>
          <div style={{width:300,position:'relative', top:200, left:500}}>
              <pre style={{fontSize:20}}>CafeCity Fountain</pre>
          <pre style={{fontSize:15}}>İslam Səfərli küç. 1</pre>

          <pre style={{fontSize:15}}>(012) 5988686</pre>
            <pre style={{fontSize:15}}>(050) 5988686</pre>
  <pre style={{fontSize:15}}>bazar ertəsi - cümə axşamı 09:00 - 00:00,cümə - şənbə 09:00 - 02:00, bazar 09:00 - 00:00</pre>
          </div>
        </section>

        <section>
        <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9571873180816!2d49.867091715049156!3d40.40926147936424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d3ffb36b6e7%3A0x8d0b36d0b3f0d333!2sCafeCity%20Fountain!5e0!3m2!1sen!2saz!4v1623675864079!5m2!1sen!2saz" 
              width="100%" 
              height="100%" 
              
              style={{border:0, position:'relative', left:10}} 
              allowFullScreen="" 
              loading="lazy"
              title="CafeCity Fountain">
            </iframe>
        </section>
      </main>


      <footer>
        <div style={{width:'100%', height:300, background:'black', position:'relative', bottom:-400}}>
          <div className={styles.footerLink}>
            <Link to='/haqqimizda'>HAQQIMIZDA</Link>
            <Link to='/çatdirilma'>ÇATDIRILMA VƏ ÖDƏMƏ</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/elaqe'>ƏLAQƏ</Link>
          </div>
          <span style={{color:'white', position:'relative', left:950, top:-10}}>Kartla ödəmək olur</span>
          <div style={{position:'relative', left:900, width:300, display:'flex', columnGap:30}}>
            
            <img src='./images/VisaSecure.jpg' style={{width:100, height:100, position:'relative', float:'left', borderRadius:100}}/>
            <img src='./images/master.png' style={{width:100, height:100, borderRadius:100}}/>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Haqqimizda;
