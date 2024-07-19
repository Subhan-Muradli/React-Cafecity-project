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
          <img src='./images/haqqimizdaOnImage.jpg' style={{width:'100%', height:400}}/>
          <span style={{position:'relative', top:-200,left:660, fontSize:40, fontWeight:'bold', fontFamily:'cursive', color:'white'}}>Haqqimizda</span>
        </section>

        <section>
          <div style={{display:'flex', justifyContent:'center'}}>
            <h1 style={{fontSize:50,position:'relative', left:270}}>Biz Kimik</h1><br/><br/><br/>
            <div style={{width:600, position:'relative', top:150}}>
              <span style={{fontFamily:'monospace', fontSize:22}}>
                21 sentyabr 2009-cu il tarixində paytaxtımızın mərkəzində CafeCity 
                şəbəkəsinin ilk filialı öz qapılarını müştərilərin üzünə təntənəli surətdə açdı. 
                İldən-ilə sevginizi, etibarınızı, müsbət münasibət qazanmaq üçün təklif etdiyimiz 
                xidmətin hər seqmenti ilə çalışdıq, sizin bütün rəy və arzularınızı nəzərə alaraq 
                işimizin keyfiyyətini təkmilləşdiririk. Biz cəsarətlə deyə bilərik ki, kafemiz əsl 
                qurmanlar üçün əlamətdar yerdir, çünki CafeCity-nin 
                adı qeyri-ixtiyari olaraq xörəklərin ləzizliyi, çeşidin rəngarəngliyi və iri porsiyalarla təcəssüm olunur.
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.videoWrapper}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/B2lZedLsWFg?si=E4Pq6-sLZM4F862U" 
          title="YouTube video player" frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
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
