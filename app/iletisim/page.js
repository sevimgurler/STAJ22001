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

function iletisim() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className={`${styles.cloud}`}></div>
        <div className="container text-center text-white">
          <h1 className='bonero-title-lg'>İletişim</h1>
          <p className='bonero-text'>Sorularınız için bize ulaşın</p>
        </div>
      </section>
      <section className={`${styles.section_two}`}>
        <div className="container">
          <div className={`bonero-container text-center`}>
            <h1 className={`${styles.title} bonero-title-lg`}>İletişim Bilgileri</h1>
            <br/>
            <br/>
            <p className={`bonero-text`}>Bizimle iletişime geçin ve projelerinizi hayata geçirelim</p>
          </div>
        </div>      
        <div className="row">
          <div className="col-lg-4">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><IoLocationOutline className={`${styles.icon}`}/></div>
                </div>
                <h5 className={`${styles.num } card-title`}>Bonero Ofisi</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  Maslak, Büyükdere Caddesi İstanbul, Türkiye
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><MdOutlinePhone className={`${styles.icon}`}/></div>
                </div>
                <h5 className={`${styles.num } card-title`}>Telefon</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  +90 850 322 12 12
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><FaEnvelope className={`${styles.icon}`}/></div>
                </div>         
                <h5 className={`${styles.num } card-title`}>Email</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  destek@bonero.com.tr
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_three}`}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`green-badge-default badge rounded-pill `}><IoMdCheckmarkCircleOutline className={`me-1`}/> İletişime Geçin</div>
          </div>
          <br/> 
          <div className={`text-center`}>
            <h1 className={`${styles.title} bonero-title-lg`}>Topluluğunuz için en iyi çözümü sunalım</h1>
          </div>
          <div className={`${styles.card_lg} card my-5`}>
            <div className="row g-0">
              <div className={`${styles.card_left} col-lg-6`}>
                <div className="card-body">
                  <h4 className="card-title">Bizimle İletişime Geçin</h4>
                  <div>
                    <div className={`${styles.card} card mb-3`}>
                      <div className="row g-0">
                        <div className="col-md-2">
                          <div className="d-flex justify-content-center align-items-center">
                            <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><FaUsers className={`${styles.icon}`}/></div>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">Bizi arayın</h5>
                            <p className="card-text">
                              +90 850 322 12 12
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.card} card mb-3`}>
                      <div className="row g-0">
                        <div className="col-md-2">
                          <div className="d-flex justify-content-center align-items-center">
                            <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><FaEnvelope className={`${styles.icon}`}/></div>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">E-posta gönderın</h5>
                            <p className="card-text">
                              bilgi@bonero.com.tr
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.card} card mb-3`}>
                      <div className="row g-0">
                        <div className="col-md-2">
                          <div className="d-flex justify-content-center align-items-center">
                            <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><FaUsers className={`${styles.icon}`}/></div>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">Ofisimizi ziyaret edin</h5>
                            <p className="card-text">
                              Maslak, İstanbul
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-5"/>
                  <h5>Sosyal Medyada Takip Edin</h5>
                  <div className={`${styles.social_media}`}>
                    <div className={`${styles.iconarea_green} d-inline-flex justify-content-center align-items-center me-2`}><SlSocialFacebook className={`${styles.icon}`}/></div>
                    <div className={`${styles.iconarea_green} d-inline-flex justify-content-center align-items-center me-2`}><CiTwitter className={`${styles.icon}`}/></div>
                    <div className={`${styles.iconarea_green} d-inline-flex justify-content-center align-items-center me-2`}><FaInstagram className={`${styles.icon}`}/></div>
                    <div className={`${styles.iconarea_green} d-inline-flex justify-content-center align-items-center me-2`}><FaLinkedinIn className={`${styles.icon}`}/></div>
                  </div>
                </div>        
              </div>
              <div className={`${styles.card_right} col-lg-6`}>
                <div className="card-body">
                  <h4 className="card-title">Mesaj Gönderin</h4>
                  <p>Projeleriniz için bizimle iletişime geçin</p>
                  <form>
                    <div className="position-relative mb-3">                
                      <input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Adınız Soyadınız"
                      />
                      <FaUsers className={styles.icon} />
                    </div>

                    <div className="position-relative mb-3">              
                      <input
                        type="text"
                        className="form-control ps-5"
                        placeholder="E-posta adresiniz"
                      />
                      <FaEnvelope className={styles.icon} />
                    </div>

                    <div className="position-relative mb-3">                  
                      <textarea
                        className="form-control ps-5"
                        rows="4"
                        placeholder="Mesajınızı giriniz"
                      />
                      <FiMessageCircle className={styles.icon} />
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                      Mesaj Gönder
                    </button>

                    <div className="position-relative mb-3 mt-4">    
                      <small className="form-control ps-5 text-muted">
                        Gizlilik politikasını ve kullanım koşullarını kabul ediyorum.  
                        Verileriniz güvenli bir şekilde saklanacaktır.
                      </small>
                      <IoShieldOutline className={`${styles.icon}`} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>
    </main>
  )
}

export default iletisim