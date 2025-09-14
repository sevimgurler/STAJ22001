import React from 'react'
import styles from "./page.module.scss";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { PiVideoConference } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { SlControlPlay } from "react-icons/sl";
import { GoZap } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { LiaMobileSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { CiLaptop } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";

function ozellikler() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className={`${styles.cloud}`}></div>
        <div className="container text-center text-white">
          <h1 className='bonero-title-lg'>Özellikler</h1>
          <p className='bonero-text'>Topluluk yönetiminde benzersiz çözümler</p>
        </div>
      </section>
      <section className={`${styles.section_two}`}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`${styles.badge} badge rounded-pill mb-3`}>Kullanım Süreci</div>
          </div>
          <h1 className={`${styles.title} bonero-title-lg text-center`}>Topluluk yönetiminde gerçek zamanlı analiz ve büyüme</h1>
          <div className={`bonero-container-lg text-center`}>
            <br/>
            <p className={`bonero-text`}>Bonero ile topluluk yönetimi artık çok daha kolay ve verimli. Sezgisel arayüzümüz ve güçlü özelliklerimizle topluluğunuzu profesyonel bir şekilde yönetin.</p>
          </div>
        </div>      
      </section>
      <section className={`${styles.section_three}`}>
        <div className='container'>
        <div className="row">
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex">
                <span className={`${styles.icon}`}><TbWorld/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Üye Analizi</h5>
                 <p>Topluluk üyelerinizin katılım verilerini analiz ederek daha etkili iletişim stratejileri geliştirin.</p>
                </div>
              </div>
              <h6>Özellikler</h6>
              <ul>
                <li className='mb-1'>
                  <span>Gerçek zamanlı üye aktivite takibi</span>
                </li>
                <li className='mb-1'>
                  <span>Katılım oranları ve trend analizi</span>
                </li>
                <li className='mb-1'>
                  <span>Kişiselleştirilmiş üye profilleri</span>
                </li>
                <li>
                  <span>Performans metrikleri ve raporlama</span>
                </li>
              </ul>
            </div>      
          </div>
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex">
                <span className={`${styles.icon}`}><VscGraph/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Gerçek Zamanlı Takip</h5>
                 <p>Etkinlik katılımı, aidat ödemeleri ve üye etkileşimlerini anlık olarak takip edin.</p>
                </div>
              </div>
              <h6>Özellikler</h6>
              <ul>
                <li className='mb-1'>
                  <span>Anlık bildirimler ve uyarılar</span>
                </li>
                <li className='mb-1'>
                  <span>Otomatik raporlama sistemi</span>
                </li>
                <li className='mb-1'>
                  <span>Mobil uygulama desteği</span>
                </li>
                <li>  
                  <span>Entegre takvim yönetimi</span>
                </li>
              </ul>
            </div>      
          </div>
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex">
                <span className={`${styles.icon}`}><FaUsers/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Topluluk Yönetimi</h5>
                 <p>Üyelerinizi organize edin, gruplar oluşturun ve etkinlikler düzenleyin.</p>
                </div>
              </div>
              <h6>Özellikler</h6>
              <ul>
                <li className='mb-1'>
                  <span>Gelişmiş üye kategorileri</span>
                </li>
                <li className='mb-1'>
                  <span>Otomatik grup yönetimi</span>
                </li>
                <li className='mb-1'>
                  <span>Etkinlik planlama araçları</span>
                </li>
                <li>
                  <span>Katılımcı yönetimi sistemi</span>
                </li>
              </ul>
            </div>      
          </div>
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex">
                <span className={`${styles.icon}`}><CiCreditCard1/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Finansal Yönetim</h5>
                 <p>Aidat toplama, ödeme takibi ve finansal raporlama işlemlerini otomatikleştirin.</p>
                </div>
              </div>
              <h6>Özellikler</h6>
              <ul>
                <li className='mb-1'>
                  <span>Otomatik faturalama sistemi</span>
                </li>
                <li className='mb-1'>
                  <span>Çoklu ödeme yöntemi desteği</span>
                </li>
                <li className='mb-1'>
                  <span>Detaylı finansal raporlar</span>
                </li>
                <li>                
                  <span>Bütçe planlama araçları</span>
                </li>
              </ul>
            </div>      
          </div>
        </div>
        </div>
      </section>
      <section className={`${styles.section_four}`}>
        <div className="row">
          <div className="col-lg-4">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><IoShieldOutline className={`${styles.icon}`}/></div>
                </div>
                <h5 className={`${styles.num } card-title`}>Güvenli Altyapı</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`card-text`}>
                  SSL sertifikası ve veri şifreleme ile güvenliğinizi garanti ediyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><CiHeadphones className={`${styles.icon}`}/></div>
                </div>
                <h5 className={`${styles.num } card-title`}>7/24 Destek</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`card-text`}>
                  Teknik destek ekibimiz her zaman yanınızda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><LuRefreshCw className={`${styles.icon}`}/></div>
                </div>         
                <h5 className={`${styles.num } card-title`}>Sürekli Güncelleme</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`card-text`}>
                  Yeni özellikler ve iyileştirmelerle platformumuz sürekli gelişiyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_five} text-center`}>
        <div className="bonero-container-lg">
          <h1 className="bonero-title-lg">Ücretsiz demo için hemen başvurun</h1>
          <p className={`${styles.demo_text} bonero-text`}>Bonero demo talebi ile ürünlerimizin ayrıntılarını keşfedin</p>
          <form className="row g-2 mb-4">
            <div className="col-12 col-md-11">
              <div className="row g-2">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Topluluk adınız..."
                    aria-label="Topluluk adı"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="E-posta adresiniz..."
                    aria-label="E-posta adresi"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 d-flex align-items-stretch">
              <button
                type="submit"
                className="btn custom-btn w-100 d-flex align-items-center justify-content-center"
                aria-label="Gönder"
              >
                <FaArrowRight />
              </button>
            </div>
          </form>
          <p className={`bonero-text`}>Demo talebiniz için size özel bilgilendirme yapılacaktır</p>
        </div> 
      </section>
    </main>
  )
}

export default ozellikler