import React, { useEffect, useState } from 'react';
import styles from '../dizayn/dizayn.module.css';
import { Link } from 'react-router-dom';

const Middle = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageTransformStyle = {
    transform: `translateY(${scrollY * -0.3}px)`
  };

  return (
    <div>
      <div><Link to='/' className={styles.middle}>CAFECITY</Link></div>
      <div className={styles.restoranContainer}>
        <div className={styles.restaurant}>
          <Link to='/restoran' className={styles.restoran}>
            RESTORANLAR
            <svg className="feather feather-chevron-down" fill="none" height="24"
             stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
             strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
      </div>

      <main>
        <section>
          <img src='./images/şuşa.jpg' style={{ position: 'relative', top: 50, width: '100%', height: 700 }} alt="Şuşa" />
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <img src='./images/cafecity1.jpg' className={styles.image} style={imageTransformStyle} alt="CAFECITY 1" />
              <Link style={{position:'relative', top:-200, left:-200, textDecoration:'none', color:'white', fontSize:30, fontWeight:'bold'}}>Cafe City</Link>
              <img src='./images/cafecity2.jpg' className={styles.image} style={imageTransformStyle} alt="CAFECITY 2" />
              <Link style={{position:'relative', top:-200, left:-200,textDecoration:'none', color:'white', fontSize:30, fontWeight:'bold'}}>La Quzu</Link>
              <img src='./images/cafecity3.jpg' className={styles.image} style={imageTransformStyle} alt="CAFECITY 3" />
              <Link style={{position:'relative', top:-200, left:-200, textDecoration:'none', color:'white', fontSize:30, fontWeight:'bold'}}>City Pub</Link>
            </div>
          </div>
        </section>
      </main>

      <main>
        <section>
          <div style={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap', rowGap:80}}>
             <div><img src='./images/esasMenyu.jpg' style={{width:400, height:400, opacity:5}} className={styles.imageDark}/>
               <span style={{position:'absolute',left:130, bottom:-550, color:'white', fontSize:25, fontWeight:'bold', fontFamily:'cursive'}}>ƏSAS MENYU </span>
             </div>
             <div><img src='./images/cityParkEsas.png'style={{width:400, height:400}} className={styles.imageDark}/>
               <span style={{position:'absolute', left:600, bottom:-550, color:'white', fontSize:25, fontWeight:'bold', fontFamily:'cursive' }}>ƏSAS MENYU CİTY PARK</span>
             </div>
             <div><img src='./images/CityPubMenyu.jpg' style={{width:400, height:400}} className={styles.imageDark}/>
               <span style={{position:'absolute', left:1170, bottom:-550, color:'white', fontSize:25, fontWeight:'bold', fontFamily:'cursive'}}>CİTY PUB MENYU</span>
             </div>
             <div><img src='./images/ickilerMenyu.jpg' style={{width:400, height:400}} className={styles.imageDark}/>
               <span style={{position:'absolute', left:130, bottom:-1100, color:'white', fontSize:25, fontWeight:'bold', fontFamily:'cursive'}}>İÇKİLƏR MENYUSU</span>
             </div>
             <div><img src='./images/laquzuMenyu.jpg' style={{width:400, height:400}} className={styles.imageDark}/>
               <span style={{position:'absolute', left:650, bottom:-1100, color:'white', fontSize:25, fontWeight:'bold', fontFamily:'cursive'}}>LA QUZU MENYU</span>
             </div>
             <div><img src='./images/seherYemeyiMenyu.jpg' style={{width:400, height:400}} className={styles.imageDark}/>
               <span style={{position:'absolute', left:1080, bottom:-1100, color:'white', fontSize:25, fontWeight:'bold', fontFamily:'cursive'}}>SƏHƏR YEMƏYİ MENYUSU</span>
             </div>
          </div>
        </section>
      </main>





    </div>
  );
}

export default Middle;

