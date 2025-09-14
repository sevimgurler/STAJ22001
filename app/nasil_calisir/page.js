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

function nasil_calisir() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className={`${styles.cloud}`}></div>
        <div className="container text-center text-white">
          <h1 className='bonero-title-lg'>Nasıl Çalışır</h1>
          <p className='bonero-text'>Topluluğunuzu yönetmenin en kolay yolu</p>
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
                <span className={`${styles.icon}`}><CiLaptop/></span> 
                <div className="px-2">
                  <h5 className="pb-2">Kullanıcı dostu panel yönetimi</h5>
                  <p>Bonero'nun sezgisel arayüzü sayesinde teknik bilgiye ihtiyaç duymadan topluluğunuzu kolayca yönetebilirsiniz</p>
                </div>
            </div>
              <ul className='row mt-4'>
                <li className='col-6 mb-2'>
                  <span>Sürükle-bırak arayüzü</span>
                </li>
                <li className='col-6 mb-2'>
                  <span>Özelleştirilebilir dashboard</span>
                </li>
                <li className='col-6'>
                  <span>Mobil uyumlu tasarım</span>
                </li>
                <li className='col-6'>
                  <span>Hızlı erişim menüleri</span>
                </li>
              </ul>
            </div>      
          </div>
          <div className="col-md-6 p-3">
             <div className={`${styles.card_sm}`}>
               <div className="d-flex ">
                <span className={`${styles.icon}`}><GoGear/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Otomatik süreç yönetimi</h5>
                 <p>Tekrarlayan görevleri otomatikleştirin, zaman kazanın ve topluluğunuzun büyümesine odaklanın</p>
                </div>
              </div>
              <ul className='row mt-4'>
                <li className='col-6 mb-2'>
                  <span>Otomatik bildirimler</span>
                </li>
                <li className='col-6 mb-2'>
                  <span>Akıllı hatırlatıcılar</span>
                </li>
                <li className='col-6'>
                  <span>Zamanlanmış görevler</span>
                </li>
                <li className='col-6'>  
                  <span>İş akışı otomasyonu</span>
                </li>
              </ul>
            </div>      
          </div>
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex ">
              <span className={`${styles.icon}`}><IoIosTrendingUp/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Gelişmiş raporlama araçları</h5>
                 <p>Topluluk katılımı, etkinlik başarısı ve finansal veriler hakkında kapsamlı raporlar ile performansınızı sürekli iyileştirin</p>
                </div>
              </div>
              <ul className='row mt-4'>
                <li className='col-6 mb-2'>
                  <span>Gerçek zamanlı analitik</span>
                </li>
                <li className='col-6 mb-2'>
                  <span>Otomatik veri yedekleme</span>
                </li>
                <li className='col-6'>
                  <span>Özelleştirilebilir raporlar</span>
                </li>
                <li className='col-6'>
                  <span>Excel/PDF export</span>
                </li>
              </ul>
            </div>      
          </div>
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex ">
                <span className={`${styles.icon}`}><IoShieldOutline/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Güvenli veri yönetimi</h5>
                  <p>KVKK ve GDPR uyumlu altyapımız ile tüm verileriniz güvenle korunur ve şifrelenir</p>
                </div>
              </div>               
              <ul className='row mt-4'>
                <li className='col-6 mb-2'>
                  <span>SSL şifreleme</span>
                </li>
                <li className='col-6 mb-2'>
                  <span>Düzenli güvenlik güncellemeleri</span>
                </li>
                <li className='col-6'>
                  <span>Yedekleme sistemi</span>
                </li>
                <li className='col-6'>  
                  <span>Erişim kontrolü</span>
                </li>
              </ul>
            </div>      
          </div>
        </div>
        </div>
      </section>
      <section className={`${styles.section_four} text-center`}>
        <h1 className="bonero-title-lg">Basit kullanım süreci</h1>
        <div className={`${styles.cards_wrapper}`}>
          <div className={`${styles.cards} row`}>
            <div className='col-lg-3 col-md-6'>
              <div className={`${styles.card}`}>
                <h5>Topluluğu tanımlayın</h5>
                <p>Topluluğunuzun adını, türünü ve temel bilgilerini girerek kuruluma başlayın.</p>
                <div className={`${styles.circle}`}>01</div>
              </div>  
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className={`${styles.card}`}>
                <h5>Üyeleri ekleyin</h5>
                <p>Mevcut üye listenizi içe aktarın veya yeni üyeler için kayıt formu oluşturun.</p>
                <div className={`${styles.circle}`}>02</div>
              </div>  
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className={`${styles.card}`}>
                <h5>Özelleştirmeye başlayın</h5>
                <p>Etkinlikler, aidat yapısı ve iletişim kanallarını topluluğunuza göre özelleştirin.</p>
                <div className={`${styles.circle}`}>03</div>
              </div>  
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className={`${styles.card}`}>
                <h5>Büyümeyi izleyin</h5>
                <p>Detaylı analizler ve raporlarla topluluğunuzun gelişimini takip edin.</p>
                <div className={`${styles.circle}`}>04</div>
              </div>  
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_five}`}>
        <div className='text-center'>
          <h1 className='bonero-text-lg fw-bold'>Sıkça Sorulan Sorular</h1>
        </div>
        <div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className="accordion" id="accordionCustom1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Destek hizmetleri nasıl çalışır?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      7/24 teknik destek ekibimiz e-posta, canlı sohbet ve telefon üzerinden hizmet vermektedir. Ayrıca kapsamlı yardım belgeleri ve video eğitimler de sunuyoruz.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Sosyal medya hesaplarımızla entegrasyon mümkün mü?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Evet, Bonero'nun gelişmiş API'leri sayesinde tüm popüler sosyal medya platformlarıyla entegrasyon sağlayabilirsiniz. Bu sayede içeriklerinizi tek noktadan yönetebilirsiniz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="accordion pb-5" id="accordionCustom2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      Kişisel verilerimiz güvende mi?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      Evet, Bonero'da veri güvenliği en önemli önceliğimizdir. KVKK ve GDPR uyumlu altyapımız ile tüm verileriniz şifrelenerek korunur ve üçüncü taraflarla paylaşılmaz.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Bonero'yu kullanmak için teknik bilgi gereki mi?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Hayır, Bonero kullanımı son derece kolaydır. Kullanıcı dostu arayüzü sayesinde herhangi bir teknik bilgiye ihtiyaç duymadan tüm özelliklerinden faydalanabilirsiniz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='mx-1'><p><FaEnvelope className={`${styles.icon} mx-3`}/> Yardıma mı ihtiyacınız var? Destek talebi oluşturun</p></div>
            <div className='mx-1'><p><FiMessageCircle className={`${styles.icon} mx-3`}/> İletişimde kalın. Sosyal medyada bizi takip edin</p></div>
          </div>
        </div>   
      </section>
    </main>
  )
}

export default nasil_calisir