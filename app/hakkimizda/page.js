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
import { FiTarget } from "react-icons/fi";

function hakkimizda() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className={`${styles.cloud}`}></div>
        <div className="container text-center text-white">
          <h1 className='bonero-title-lg'>Hakkımızda</h1>
          <p className='bonero-text'>Topluluk yönetimini kolaylaştırıyoruz</p>
        </div>
      </section>
      <section className={`${styles.section_two}`}>
        <div>
          <div className="row">
            <div className={`${styles.img_container} col-lg-6`}>
              <img src="/main/man3.svg" alt="man1" width="100%" height="600"></img>
            </div>
            <div className="col-lg-6">
              <div className="container py-5">
                <div className="d-flex">
                  <div className={`green-badge badge rounded-pill `}>Topluluk Yönetimi Uzmanı</div>
                </div> 
                <div>
                  <h1 className={`${styles.title} mt-3`}>Topluluğunuzu etkili şekilde yönetin</h1>
                  <br/>
                  <br/>
                  <p>Bonero, topluluk yönetimini kolaylaştırmak ve verimliliği artırmak için tasarlanmış kapsamlı bir platformdur. Sezgisel arayüzü ve güçlü özellikleriyle üye yönetimi, etkinlik organizasyonu ve finansal süreçleri otomatikleştirerek topluluğunuzun gelişimine odaklanmanızı sağlar.</p>
                </div>
              </div>
            </div>         
          </div> 
        </div>
      </section>
      <section className={`${styles.section_three}`}>
        <div className='container'>
          <div className={`${styles.cards} row`}>
            <div className={`${styles.margin} col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className={`${styles.img_badge} ${styles.badge_top_left}`}></div>
                <div className={`${styles.img_badge} ${styles.badge_bottom_right} d-flex align-items-center`}></div>
                <div className="card-img-top text-center">
                  <h5 className={`${styles.num } card-title`}>500+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Aktif Topluluk
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.margin} col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className={`${styles.img_badge} ${styles.badge_top_left}`}></div>
                <div className={`${styles.img_badge} ${styles.badge_bottom_right} d-flex align-items-center`}></div>
                <div className="card-img-top text-center">
                  <h5 className={`${styles.num } card-title`}>25K+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Yönetilen etkinlik
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.margin} col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className={`${styles.img_badge} ${styles.badge_top_left}`}></div>
                <div className={`${styles.img_badge} ${styles.badge_bottom_right} d-flex align-items-center`}></div>
                <div className="card-img-top text-center">       
                  <h5 className={`${styles.num } card-title`}>1M+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Topluluk üyesi
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.margin} col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className={`${styles.img_badge} ${styles.badge_top_left}`}></div>
                <div className={`${styles.img_badge} ${styles.badge_bottom_right} d-flex align-items-center`}></div>
                <div className="card-img-top text-center">              
                  <h5 className={`${styles.num } card-title`}>98%</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Müşteri memnuniyeti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_five}`}>
        <div className='container'>
          <div className='text-center'>
            <h1 className={`${styles.title} mt-3`}>Zaman Çizelgesi</h1>
          </div>
          <br/>
          <div className='row'>
            <div className='col-lg-6'>  
              <div className={`${styles.card} card card2 mb-3`}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><span className={`${styles.icon}`}>2018</span></div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Şirket kuruluşu</h5>
                      <p className="card-text">
                        Bonero, topluluk yönetimini kolaylaştırmak amacıyla küçük bir ekip tarafından kuruldu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className={`${styles.card} card card2 mb-3`}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><span className={`${styles.icon}`}>2019</span></div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">İlk platform sürümü</h5>
                      <p className="card-text">Temel topluluk yönetim özelliklerini içeren ilk Bonero platformu piyasaya sürüldü.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className={`${styles.card} card card2 mb-3`}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><span className={`${styles.icon}`}>2021</span></div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Büyüme ve genişleme</h5>
                      <p className="card-text">
                        Artan talep doğrultusunda ekibimiz büyüdü ve yeni ofisimize taşındık.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className={`${styles.card} card card2 mb-3`}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><span className={`${styles.icon}`}>2023</span></div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">100.000 topluluk üyesi</h5>
                      <p className="card-text">
                        Platformumuz aracılığıyla yönetilen üye sayısı 1 milyonu geçti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      <section className={`${styles.section_four}`}>
        <div>
          <div className="row">
            <div className={`${styles.img_container} col-lg-6`}>
              <img src="/main/man3.svg" alt="man1" width="100%" height="600"></img>
            </div>
            <div className="col-lg-6">
              <div className="container py-5">
                <div>
                  <h1 className={`${styles.title} mt-3`}>Topluluğunuzun büyümesi için neler yapıyoruz?</h1>
                  <br/>
                  <br/>
                  <p>Bonero, topluluğunuzun büyümesini ve etkili yönetimini sağlayan kapsamlı çözümler sunar. Üye katılımını artıran, iletişimi güçlendiren ve yönetim süreçlerini otomatikleştiren araçlarımızla topluluğunuzun potansiyelini maksimuma çıkarın.</p>
                  <div className={`${styles.button} btn`}>
                    Daha fazla bilgi
                    <span className='ms-2'>
                      <FaArrowRight />
                    </span> 
                  </div>
                </div>
              </div>
            </div>         
          </div> 
        </div>
      </section>
      <section className={`${styles.section_six}`}>
              <div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className={`${styles.card} card`}>
                      <div className="card-img-top text-center">
                        <div className={`${styles.iconarea}`}><FiTarget className={`${styles.icon}`}/></div>
                        <h5 className={`${styles.title } card-title`}>Stratejik Planlama</h5>
                      </div>
                      <div className="card-body text-center">  
                        <p className="card-text">
                          Detaylı analiz ve veri odaklı yaklaşımlarla iş hedeflerinize ulaşmanıza destek oluyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={`${styles.card} card`}>
                      <div className="card-img-top text-center">
                        <div className={`${styles.iconarea}`}><TbWorld className={`${styles.icon}`}/></div>
                        <h5 className={`${styles.title } card-title`}>Global Çözümler</h5>
                      </div>
                      <div className="card-body text-center">  
                        <p className="card-text">
                          Uluslararası standartlarda hizmet anlayışıyla dünya çapında çözümler sunuyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={`${styles.card} card`}>
                      <div className="card-img-top text-center">
                        <div className={`${styles.iconarea}`}><FiAward className={`${styles.icon}`}/></div>
                        <h5 className={`${styles.title } card-title`}>Kalite Güvencesi</h5>
                      </div>
                      <div className="card-body text-center">  
                        <p className="card-text">
                          En yüksek kalite standartlarını benimseyen, güvenilir ve profesyonel çözümler üretiyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={`${styles.card} card`}>
                      <div className="card-img-top text-center">
                        <div className={`${styles.iconarea}`}><IoMdCheckmarkCircleOutline className={`${styles.icon}`}/></div>
                        <h5 className={`${styles.title } card-title`}>Sürekli İnovasyon</h5>
                      </div>
                      <div className="card-body text-center">  
                        <p className="card-text">
                          Teknolojinin ve sektörün nabzını tutarak sürekli olarak yenilikçi çözümler geliştiriyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </section>
      <section className={`${styles.section_seven}`}>
        <div className="text-center mt-5">
          <h2>Güvenilir Ortaklarımız</h2>
        </div>
        <div className='d-flex justify-content-center mb-5'>
          <img src='/main/musiad.jpg'></img>
        </div>
      </section>
    </main>
  )
}

export default hakkimizda