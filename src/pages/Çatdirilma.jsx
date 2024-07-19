import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../dizayn/dizayn.module.css';


const Çatdirilma = () => {
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
          <img src='./images/delivery.png' style={{width:'100%', height:500, position:'relative', top:100}}/>
          <span style={{position:'relative', top:-200,left:570, fontSize:40, fontWeight:'bold', fontFamily:'cursive', color:'white'}}>Çatdirilma</span>
        </section>

        <section>
          <div style={{display:'flex', justifyContent:'center', position:'relative', top:100}}>
            <span style={{fontSize:30,position:'relative', left:200, top:80}}>ƏZİZ MÜŞTƏRİ !</span><br/><br/><br/>
            <div style={{width:600, position:'relative', top:150, left:-130}}>
              <span style={{fontFamily:'monospace', fontSize:22}}>
              KAFE VƏ RESTORANLARIMIZDAN ÇATDIRILMA TƏRƏFDAŞIMIZ WOLT-UN KÖMƏYİ İLƏ HƏYATA KEÇİRİLİR.
              </span>
            </div>
          </div>

          <div style={{width:600, position:'relative', top:400, left:400}}>
            <span>
            «Wolt» vasitəsilə sifariş üçün debet və ya kredit kartdan (Visa, Visa Electron, MasterCard, American Express) 
            istifadə edə bilərsiniz. Vəsait yalnız sifariş çatdırıldıqdan sonra kartdan çıxarılacaq.
            </span>
          </div>
        </section>

        <section>
          <div style={{position:'relative', top:500,left:500, width:500, display:'flex', columnGap:50}}>
            <div><img src='./images/VisaSecure.jpg' style={{width:100, height:100, position:'relative', float:'left'}}/></div>
            <div><img src='./images/master.png' style={{width:100, height:100}}/></div>
          </div>
        </section>
      </main>



      <footer>
        <div style={{width:'100%', height:300, background:'black', position:'relative', bottom:-530}}>
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

export default Çatdirilma;
