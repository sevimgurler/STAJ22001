import styles from "./page.module.scss";
import Script from "next/script";
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

export default function Home() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className={`${styles.cloud}`}></div>
        <div className="row">
          <div className={`${styles.content_s} col-lg-6`} >
            <div className={`green-badge badge rounded-pill`}>Topluluk Yönetim Platformu</div>
            <h1 className= {`${styles.title_2}`}>Modern Topluluk Yönetimi</h1>
            <p>Topluluk yönetimini dijitalleştirin, üye etkileşimini artırın ve <span>%40 daha verimli</span> çalışın.</p>
            <div>
              <div className={`${styles.ucretsiz_deneyin} btn`}>
                Ücretsiz Deneyin
                <span>
                  <FaArrowRight />
                </span> 
              </div>
              <div className={`${styles.tanitim} btn ms-2`}>
                <MdSlowMotionVideo /> Tanıtım Videosu
              </div>
            </div>
          </div>
          <div className={`${styles.img_container} col-lg-6`}>
            <img src="/main/man7.svg" alt="man2" width="100%" height="600"></img>
            <span className={`${styles.img_badge} ${styles.badge_top_left}`}><FaCircle className={`${styles.circle}`}/> 2,547 Aktif Kullanıcı</span>
            <span className={`${styles.img_badge} ${styles.badge_bottom_right}`}><FaCircle className={`${styles.circle}`} /> %40 Verimlilik Artışı</span>
          </div>
        </div>
      </section>
      <section className={`${styles.section_two}`}>
        <div className="bonero-container text-center">
          <br/>
          <h1 className={`${styles.title} bonero-title-lg mt-5`}>Topluluğunuza Özel Çözümler</h1>
          <br/>
          <br/>
          <p className="bonero-text">Topluluğunuzun ihtiyaçlarına özel çözümler sunuyoruz. Her hizmet, topluluğunuzun büyümesi ve gelişmesi için tasarlanmıştır.</p>
        </div>
      </section>
      <section className={`${styles.section_three}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><FaGraduationCap className={`${styles.icon}`}/></div>
                  </div>
                  <h5 className={`${styles.title } card-title`}>Eğitimler</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Topluluğunuz için özel ve profesyonel eğitimler sunuyoruz. Üyelerinizin gelişimine katkı sağlayan interaktif öğrenme deneyimleri oluşturuyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><PiVideoConference className={`${styles.icon}`}/></div>
                  </div>
                  <h5 className={`${styles.title } card-title`}>Toplantılar</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Topluluğunuz için verimli ve organize toplantılar düzenliyoruz. Etkinlik yönetimi ile katılımcıların aktif olduğu toplantı deneyimleri sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><MdPayment className={`${styles.icon}`}/></div>
                  </div>         
                  <h5 className={`${styles.title } card-title`}>Aidat Yönetimi</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Topluluğunuz için pratik ve şeffaf aidat sistemleri kuruyoruz. Otomatik ödeme takibi ve raporlama ile finansal süreçlerinizi kolaylaştırıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><IoShareSocialOutline className={`${styles.icon}`}/></div>
                  </div>                
                  <h5 className={`${styles.title } card-title`}>Sosyal Medya</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Topluluğunuz için etkileyici ve stratejik sosyal medya yönetimi sunuyoruz. İçerik üretimi ve etkileşim stratejileri ile dijital varlığınızı güçlendiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bonero-container text-center">
            <br/> 
            <p className={`${styles.text} bonero-text`}>Daha fazla bilgi için bizimle iletişime geçin ve topluluğunuzun potansiyelini keşfedin.</p>
          </div> 
        </div>
      </section>
      <section className={`${styles.section_four}`}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`green-badge badge rounded-pill `}><IoIosTrendingUp /> Başarı Hikayelerimiz</div>
          </div> 
          <div className={`bonero-container text-center`}>
            <h1 className={`${styles.title}`}>Bonero İle <span className="text-success">Büyüyen</span> Topluluklar</h1>
            <br/>
            <br/>
            <p>Topluluk yönetiminde uzmanlaşmış ekibimiz, yüzlerce topluluğun dijital dönüşümüne öncülük ediyor. Her projede mükemmellik hedefiyle çalışıyoruz.</p>
          </div>
        </div>
      </section>
      <section className={`${styles.section_five}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className={`d-flex justify-content-center align-items-center`}>
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><FaUsers className={`${styles.icon}`}/></div>
                  </div> 
                  <div className={`${styles.linearea}`}>
                    <h5 className={`${styles.number } card-title fw-bold`}>500+</h5>
                  </div>                          
                  <h5 className={`${styles.title } card-title mt-2 fw-bold`}>Aktif Topluluk Bizimle Büyüyor</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Sürekli büyüyen ve güncellenen verilerimizle topluluk yönetiminde öncüyüz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><CiStar className={`${styles.icon}`}/></div>
                  </div>
                  <div className={`${styles.linearea}`}>
                    <h5 className={`${styles.number } card-title fw-bold`}>4.9</h5>
                  </div>              
                  <h5 className={`${styles.title } card-title mt-2 fw-bold`}>Kullanıcı Mumnuniyet Puanı</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Sürekli büyüyen ve güncellenen verilerimizle topluluk yönetiminde öncüyüz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><IoIosTrendingUp className={`${styles.icon}`}/></div>
                  </div>
                  <div className={`${styles.linearea}`}>
                    <h5 className={`${styles.number } card-title fw-bold`}>95%</h5>
                  </div>
                  <h5 className={`${styles.title } card-title mt-2 fw-bold`}>Topluluk Katılınında Artış</h5>
                </div>
                <div className="card-body text-center">  
                  <p className="card-text">
                    Sürekli büyüyen ve güncellenen verilerimizle topluluk yönetiminde öncüyüz.
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
      <section className={`${styles.section_six}`}>
        <div className="container">
          <div className={`${styles.area}`}>
            <div className={`${styles.container} bonero-container text-center`}>
              <br/>
              <h1 className={`${styles.title} mt-5 bonero-title-lg`}>Topluluğunuzu Büyütmeye Hazır Mısınız?</h1>
              <br/>
              <br/>
              <p className="bonero-text">Profesyonel topluluk yönetimi hizmetlerimizle tanışın ve dijital dönüşümünüzü başlatın.</p>            
              <div className={`${styles.hemen_baslayin} btn`}>
                Hemen Başlayın
                <span>
                  <FaArrowRight />
                </span> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_seven}`}>
        <div>
          <div className={`text-center bonero-container`}>
            <br/>
            <div className="d-flex justify-content-center align-items-center">
              <div className={`green-badge badge rounded-pill `}>Kullanım Aracı</div>
            </div> 
            <h1 className={`${styles.title} bonero-title-lg`}>Topluluğunuzu yönetmek artık çok <span className="text-success">kolay</span></h1>
            <br/>
            <br/>
            <p className="bonero-text">Bonero, topluluk yönetiminizi kolaylaştırmak için tasarlanmış, kullanımı basit ve etkili bir yazılımdır. Tek bir platformda üye yönetimi, etkinlik organizasyonu, aidat takibi ve iletişim araçlarını birleştirerek topluluğunuzu güçlendiriyoruz.</p>
          </div>
        </div>
      </section>
      <section className={`${styles.section_eight}`}>
        <div className="container">
          <div className="row">
            <div className={`${styles.img_container} col-lg-6`}>
              <img src="/main/man1.svg" alt="man1" width="100%" height="600"></img>
              <div className={`${styles.img_badge} ${styles.badge_top_left}`}></div>
              <div className={`${styles.img_badge} ${styles.badge_bottom_right} d-flex align-items-center`}>
                <FaCircle className={`${styles.circle} me-2`}/>
                <div className="d-flex flex-column">
                  <h6 className="mb-0 fw-bold">500+</h6>
                  <small className="text-muted">Aktif Topluluk</small>
                </div>
              </div>
              <span className={`${styles.video} d-flex justify-content-center align-items-center`}><SlControlPlay /></span>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.card_padding}`}>
                <div className={`${styles.card} card card2 mb-3`}>
                  <div className="row g-0">
                    <div className="col-md-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className={`${styles.iconarea_green} d-flex justify-content-center align-items-center`}><GoZap className={`${styles.icon}`}/></div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">Hızlı Kurulum</h5>
                        <p className="card-text">
                          Topluluğunuzu dakikalar içinde sisteme ekleyin ve yönetmeye başlayın.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.card} card card2 mb-3`}>
                  <div className="row g-0">
                    <div className="col-md-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className={`${styles.iconarea_emerald} d-flex justify-content-center align-items-center`}><FaUsers className={`${styles.icon}`}/></div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">Üye Yönetimi</h5>
                        <p className="card-text">
                          Üyelerinizi kolayca ekleyin, düzenleyin ve organize edin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.card} card card2 mb-3`}>
                  <div className="row g-0">
                    <div className="col-md-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className={`${styles.iconarea_teal} d-flex justify-content-center align-items-center`}><FaRegCalendar className={`${styles.icon}`}/></div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">Etkinlik Organizasyonu</h5>
                        <p className="card-text">
                          Etkinliklerinizi planlayın ve katılımcıları yönetin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.card} card card2 mb-3`}>
                  <div className="row g-0">
                    <div className="col-md-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className={`${styles.iconarea_green2} d-flex justify-content-center align-items-center`}><VscGraph className={`${styles.icon}`}/></div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">Analiz ve Raporlama</h5>
                        <p className="card-text">
                          Topluluğunuzun performansını takip edin ve geliştirin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>         
          </div> 
        </div>
      </section>
      <section className={`${styles.section_nine} text-center`}>
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
      <section className={`${styles.section_ten}`}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group active-btn-group" role="group">
              <button type="button" className="btn btn-outline-secondary active-btn active menu1-button">Üye Yönetimi</button>
              <button type="button" className="btn btn-outline-secondary active-btn menu2-button">Etkinlik Yönetimi</button>
              <button type="button" className="btn btn-outline-secondary active-btn menu3-button">Aidat takibi</button>
              <button type="button" className="btn btn-outline-secondary active-btn menu4-button">İletişim Araçları</button>
            </div>
          </div>
          <div className="menus">
            <div className="menu1 row p-5">
              <div className="col-lg-6">
                <img src="/main/demo-seo-agency-tab-01.webp" alt="man1" width="100%"></img>
              </div>
              <div className="col-lg-6 p-3">
                <div className={`green-badge badge rounded-pill`}>Üye Yönetimi</div>
                  <h1 className= {`${styles.title}`}>Üyelerinizi tek platformda yönetin</h1>
                  <p>Bonero ile topluluk üyelerinizin bilgilerini kolayca yönetin, profil sayfaları oluşturun ve kişiselleştirilmiş iletişim kurun. Üye kaydı, onayı ve yetkilendirme süreçlerini otomatikleştirerek yönetim yükünüzü azaltın.</p>
                  <div className={`${styles.button} btn`}>
                    Detaylı Bilgi
                    <span>
                      <FaArrowRight />
                    </span> 
                  </div>
                </div>
            </div>
            <div className="menu2 row p-5">
              <div className="col-lg-6">
                <img src="/main/demo-seo-agency-tab-02.png" alt="man1" width="100%"></img>
              </div>
              <div className="col-lg-6 p-3">
                <div className={`green-badge badge rounded-pill`}>Etkinlik Yönetimi</div>
                  <h1 className= {`${styles.title}`}>Topluluk etkinliklerinizi planlayın</h1>
                  <p>Etkinlik oluşturma, katılımcı yönetimi, biletleme ve check-in süreçlerini tek platformda yönetin. Toplantı takvimi, hatırlatmalar ve otomatik bildirimlerle etkinliklerinizin katılımını artırın.</p>
                  <div className={`${styles.button} btn`}>
                    Detaylı Bilgi
                    <span>
                      <FaArrowRight />
                    </span> 
                  </div>
                </div>
            </div>
            <div className="menu3 row p-5">
              <div className="col-lg-6">
                <img src="/main/demo-seo-agency-tab-03.png" alt="man1" width="100%"></img>
              </div>
              <div className="col-lg-6 p-3">
                <div className={`green-badge badge rounded-pill`}>Finansal Yönetim</div>
                  <h1 className= {`${styles.title}`}>Aidat ve ödemeleri otomatikleştirin</h1>
                  <p>Topluluk aidatlarını ve ödemelerini kolayca takip edin. Otomatik faturalama, ödeme hatırlatıcıları ve finansal raporlama araçlarıyla finansal süreçlerinizi şeffaf ve verimli hale getirin.</p>
                  <div className={`${styles.button} btn`}>
                    Detaylı Bilgi
                    <span>
                      <FaArrowRight />
                    </span> 
                  </div>
                </div>
            </div>
            <div className="menu4 row p-5">
              <div className="col-lg-6">
                <img src="/main/demo-seo-agency-tab-04.webp" alt="man1" width="100%"></img>
              </div>
              <div className="col-lg-6 p-3">
                <div className={`green-badge badge rounded-pill`}>İletişim Yönetimi</div>
                  <h1 className= {`${styles.title}`}>Topluluğunuzla etkili iletişim kurun</h1>
                  <p>Toplu e-posta, SMS, anlık bildirimler ve forum özellikleriyle üyelerinizle sürekli iletişimde kalın. Özelleştirilmiş şablonlar ve otomatik mesajlaşma ile iletişim süreçlerinizi verimli hale getirin.</p>
                  <div className={`${styles.button} btn`}>
                    Detaylı Bilgi
                    <span>
                      <FaArrowRight />
                    </span> 
                  </div>
                </div>
            </div>
          </div>                  
        </div>
      </section>
      <section className={`${styles.section_eleven}`}>
        <div className="bonero-container">
          <h1 className="bonero-title-lg text-center">Tüm Özelliklerimiz Tek Fiyatla</h1>
          <p className="bonero-text text-center">Bonero'da ekstra modül veya paket yok. Üye başına tek fiyatla tüm özelliklere sınırsız erişin.</p>
          <div className={`${styles.card} card my-5`}>
            <div className="row g-0">
              <div className={`${styles.card_left} col-md-6`}>
                <div className="card-body">
                  <div className="d-flex mb-3">
                    <div className={`${styles.price_left}`}>
                      20₺
                    </div>
                    <div className={`${styles.price_right}`}>
                      <p>üye başına</p>
                      <span>aylık</span>
                    </div>
                  </div>
                  <p>Üye sayınız arttıkça indirimli fiyatlarla tüm özelliklerden faydalanmaya devam edersiniz.</p>
                  <div className="d-flex">
                    <div className="col-md-6 p-1">
                      <div className={`${styles.button} btn`}>
                      <span>
                        <FaArrowRight />
                      </span> 
                      Demo İste
                      </div>
                    </div>
                    <div className="col-md-6 p-1">
                      <div className={`${styles.button2} btn`}>
                      <span>
                        <FaArrowRight />
                      </span> 
                      Özellikler
                      </div>
                    </div>
                  </div>
                </div>        
              </div>
              <div className={`${styles.card_right} col-md-6`}>
                <div className="card-body">
                  <h4 className="card-title">Tek paket, tüm özellikler:</h4>
                  <ul>
                    <li>
                      <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                      <span>100+ özelliğin tamamına erişim</span>
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                      <span>Ücretsiz teknik destek ve eğitim</span>
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                      <span>Sürekli güncellenen yeni özellikler</span>
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                      <span>Sınırsız veri depolama alanı</span>
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                      <span>Yıllık ödemede %15 indirim</span>
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                      <span>30 gün para iade garantisi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h1 className="bonero-title text-center">100+ Özellik, 6 Kategoride</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaUsers/></span> Üye Yönetimi</h5>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Detaylı üye profilleri</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Gruplama ve segmentasyon</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Üye yetkilendirme</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Toplu üye işlemleri</span>
                  </li>
                </ul>
              </div>      
            </div>
            <div className="col-md-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaRegCalendar/></span> Etkinlik Yönetimi</h5>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Etkinlik takvimi</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Online kayıt</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Katılım takibi</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Otomatik hatırlatmalar</span>
                  </li>
                </ul>
              </div>      
            </div>
            <div className="col-md-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><CiCreditCard1/></span> Aidat ve Finans</h5>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Otomatik faturalama</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Çoklu ödeme seçenekleri</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Finansal raporlama</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Borç takibi</span>
                  </li>
                </ul>
              </div>      
            </div>
            <div className="col-md-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FiMessageCircle/></span> İletişim Araçları</h5>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Toplu e-posta</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>SMS bildirimleri</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Forum ve tartışma</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Anket oluşturma</span>
                  </li>
                </ul>
              </div>      
            </div>
            <div className="col-md-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><LiaMobileSolid /></span> Mobil ve Erişim</h5>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>iOS ve Android uygulamaları</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Responsive arayüz</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Offline çalışma</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Bildirim yönetimi</span>
                  </li>
                </ul>
              </div>      
            </div>
            <div className="col-md-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><VscGraph/></span> Raporlama</h5>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Özelleştirilebilir dashboardlar</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Veri filtreleme</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Görsel analiz</span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={`${styles.icon}`}/>
                    <span>Otomatik raporlar</span>
                  </li>
                </ul>
              </div>      
            </div>
          </div>
        </div>       
      </section>
      <section className={`${styles.section_twelve}`}>
        <div className="container">
          <div className={`${styles.card} card my-5 m-3`}>
            <div className="row g-0">
              <div className={`${styles.card_left} col-lg-6`}>
                <div className="card-body">
                  <div className={`white-badge-default badge rounded-pill`}><IoMdCheckmarkCircleOutline/> 14 Gün Ücretsiz Deneme</div>
                  <h2 className="bonero-title-lg">Topluluğunuzu bugün <span>güçlendirin</span></h2>
                  <p>500+ dernek ve vakıf Bonero ile üye yönetimini kolaylaştırıyor. Siz de hemen başlayın, kredi kartı gerekmez.</p>
                  <div className={`${styles.ticks} py-2`}>
                    <div className="d-inline-block pe-3">
                      <IoMdCheckmarkCircleOutline className={`me-1`}/>
                      <span>Anında kurulum</span>
                    </div>
                    <div className="d-inline-block pe-3">
                      <IoMdCheckmarkCircleOutline className={`me-1`}/>
                      <span>7/24 destek</span>
                    </div>
                    <div className="d-inline-block pe-3">
                      <IoMdCheckmarkCircleOutline className={`me-1`}/>
                      <span>Veri güvenliği</span>
                    </div>
                  </div>
                </div>        
              </div>
              <div className={`${styles.card_right} col-lg-6`}>
                <div className="card-body">
                  <div className={`${styles.body}`}>
                    <h4 className="card-title text-end">20₺</h4>
                    <p className="text-end">üye başına aylık</p>
                    <div className={`${styles.button} btn`}>
                      <span>
                        <SlControlPlay />
                      </span> 
                      Ücretsiz Demo İste
                    </div>
                    <div className={`${styles.button2} btn`}>
                      <span>
                        <FaArrowRight />
                      </span> 
                      Tüm Özellikleri İncele
                    </div>
                    <p className="text-center">💳 Kredi kartı gerekmez • 🔒 Verileriniz güvende</p>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`green-badge-default badge rounded-pill `}>Topluluk Yönetimi Uzmanı</div>
          </div> 
          <div className={`bonero-container text-center`}>
            <h1 className={`${styles.title} bonero-title-lg`}>Kullanıcılarımız Ne Diyor?</h1>
            <br/>
            <br/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className={`${styles.card_sm}`}>
                <div className={`${styles.circle}`}></div>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <p>"Bonero sayesinde derneğimizin üye yönetimi ve etkinlik organizasyonu süreçleri çok daha verimli hale geldi. Artık tüm işlerimizi tek bir platformdan yönetebiliyoruz ve kağıt işleriyle uğraşmak zorunda kalmıyoruz."</p>
                <div className={`${styles.person} d-flex align-items-center`}>
                  <div>
                    <img src="/main/demo-seo-agency-avtar-01.jpg" alt="man2" width="100%" height="65"></img>
                  </div>
                  <div className="mx-2">
                    <p>Mehmet Yılmaz</p>
                    <small>Dernek Başkanı</small>
                  </div>
                </div>
              </div>
              <div className={`${styles.card_sm} mt-3`}>
                <div className={`${styles.circle}`}></div>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <p>
"Aidat takibi ve finansal raporlama özellikleri topluluğumuzun mali yönetimini tamamen değiştirdi. Otomatik hatırlatmalar ve kolay ödeme seçenekleri sayesinde tahsilat oranımız %40 arttı."</p>
                <div className={`${styles.person} d-flex align-items-center`}>
                  <div>
                    <img src="/main/demo-seo-agency-avtar-02.jpg" alt="man2" width="100%" height="65"></img>
                  </div>
                  <div className="mx-2">
                    <p>Ayşe Kaya</p>
                    <small>Dernek Başkanı</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className={`${styles.card_sm}`}>
                <div className={`${styles.circle}`}></div>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <p>
"Aidat takibi ve finansal raporlama özellikleri topluluğumuzun mali yönetimini tamamen değiştirdi. Otomatik hatırlatmalar ve kolay ödeme seçenekleri sayesinde tahsilat oranımız %40 arttı."</p>
                <div className={`${styles.person} d-flex align-items-center`}>
                  <div>
                    <img src="/main/demo-seo-agency-avtar-02.jpg" alt="man2" width="100%" height="65"></img>
                  </div>
                  <div className="mx-2">
                    <p>Ayşe Kaya</p>
                    <small>Dernek Başkanı</small>
                  </div>
                </div>
              </div>
              <div className={`${styles.card_sm} mt-3`}>
                <div className={`${styles.circle}`}></div>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <p>"Bonero sayesinde derneğimizin üye yönetimi ve etkinlik organizasyonu süreçleri çok daha verimli hale geldi. Artık tüm işlerimizi tek bir platformdan yönetebiliyoruz ve kağıt işleriyle uğraşmak zorunda kalmıyoruz."</p>
                <div className={`${styles.person} d-flex align-items-center`}>
                  <div>
                    <img src="/main/demo-seo-agency-avtar-01.jpg" alt="man2" width="100%" height="65"></img>
                  </div>
                  <div className="mx-2">
                    <p>Mehmet Yılmaz</p>
                    <small>Dernek Başkanı</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className={`${styles.card_sm}`}>
                <div className={`${styles.circle}`}></div>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <p>"Topluluk iletişimimizi Bonero ile yönetmeye başladıktan sonra etkinliklerimize katılım %60 arttı. Kullanımı kolay arayüzü ve güçlü özellikleriyle beklentilerimizin ötesinde bir performans sunuyor."</p>
                <div className={`${styles.person} d-flex align-items-center`}>
                  <div>
                    <img src="/main/demo-seo-agency-avtar-03.jpg" alt="man2" width="100%" height="65"></img>
                  </div>
                  <div className="mx-2">
                    <p>Ali Demir</p>
                    <small>Dernek Başkanı</small>
                  </div>
                </div>
              </div>
              <div className={`${styles.card_sm} mt-3`}>
                <div className={`${styles.circle}`}></div>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <p>"Topluluk iletişimimizi Bonero ile yönetmeye başladıktan sonra etkinliklerimize katılım %60 arttı. Kullanımı kolay arayüzü ve güçlü özellikleriyle beklentilerimizin ötesinde bir performans sunuyor."</p>
                <div className={`${styles.person} d-flex align-items-center`}>
                  <div>
                    <img src="/main/demo-seo-agency-avtar-03.jpg" alt="man2" width="100%" height="65"></img>
                  </div>
                  <div className="mx-2">
                    <p>Ali Demir</p>
                    <small>Dernek Başkanı</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>       
      </section>
      <section className={`${styles.section_thirteen}`}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`green-badge-default badge rounded-pill `}><IoMdCheckmarkCircleOutline className={`me-1`}/> Güvenilir Platform</div>
          </div> 
          <div className={`bonero-container text-center`}>
            <h1 className={`${styles.title} bonero-title-lg`}>500+ Topluluk Bize Güveniyor</h1>
            <br/>
            <br/>
            <p className={`bonero-text`}>Türkiye'nin önde gelen dernekleri, vakıfları ve toplulukları Bonero ile üye yönetimlerini kolaylaştırıyor.</p>
          </div>
        </div> 
        <div className="container">  
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><FaUsers className={`${styles.icon}`}/></div>
                </div>
                <h5 className={`${styles.num } card-title`}>500+</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  Aktif Topluluk
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><CiStar className={`${styles.icon}`}/></div>
                </div>
                <h5 className={`${styles.num } card-title`}>4.9/5</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  Kullanıcı Puanı
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><IoIosTrendingUp className={`${styles.icon}`}/></div>
                </div>         
                <h5 className={`${styles.num } card-title`}>95%</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  Memnuniyet Oranı
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${styles.card} card`}>
              <div className="card-img-top text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}><FiAward className={`${styles.icon}`}/></div>
                </div>                
                <h5 className={`${styles.num } card-title`}>25K+</h5>
              </div>
              <div className="card-body text-center">  
                <p className={`${styles.title } card-text`}>
                  Yönetilen Etkinlik
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className={`${styles.section_fourteen}`}>
        <div className="bonero-container-lg">
          <div className={`${styles.card} card my-5`}>
            <div className="g-0">
              <div className={`${styles.card_left}`}>
                <div className="card-body text-center">
                  <h5 className="bonero-title">Siz de topluluğunuzu Bonero ile yönetmeye başlayın</h5>
                  <p className="bonero-text-sm">Siz de topluluğunuzu Bonero ile yönetmeye başlayın. 14 günlük ücretsiz deneme ile başlayın.</p>
                  <div className="d-flex justify-content-center">
                    <div className="p-1">
                      <div className={`${styles.button} btn`}>
                      <span>
                        <FaArrowRight />
                      </span> 
                      Ücretsiz Demo İste
                      </div>
                    </div>
                    <div className="p-1">
                      <div className={`${styles.button2} btn`}>
                      Fiyatları Gör
                      </div>
                    </div>
                  </div>
                </div>        
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_fifteen}`}>
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
      <Script id="sticky">
        {`
          const divs = document.querySelectorAll(".card2");
          const activeClasses = ["green", "emerald", "teal", "green"];
          let index = 0;

          setInterval(() => {
            divs.forEach((d) => {
              activeClasses.forEach(cls => d.classList.remove(cls));
            });

            if (divs.length > 0) {
              divs[index].classList.add(activeClasses[index % activeClasses.length]);
              index = (index + 1) % divs.length;
            }
          }, 5000);
        `
        }
      </Script>
      <Script id="buttons">
        {`
          const customButtons = document.querySelectorAll(".active-btn");

          customButtons.forEach(btn => {
            btn.addEventListener("click", () => {
              customButtons.forEach(b => b.classList.remove("active"));
              btn.classList.add("active");
            });
          });
        `
        }
      </Script>
      <Script id="menu-handler" strategy="afterInteractive">
        {`
          (function() {
            var buttons = [
              document.querySelector('.menu1-button'),
              document.querySelector('.menu2-button'),
              document.querySelector('.menu3-button'),
              document.querySelector('.menu4-button')
            ];

            var menus = [
              document.querySelector('.menu1'),
              document.querySelector('.menu2'),
              document.querySelector('.menu3'),
              document.querySelector('.menu4')
            ];

            var menu1 = document.querySelector('.menu1');
            var menu2 = document.querySelector('.menu2');
            var menu3 = document.querySelector('.menu3');
            var menu4 = document.querySelector('.menu4');
            menu1.classList.add('active');
            menu2.classList.remove('active');
            menu3.classList.remove('active');
            menu4.classList.remove('active');

            for (var i = 0; i < buttons.length; i++) {
              if (!buttons[i] || !menus[i]) continue;

              (function(index){
                buttons[index].addEventListener('click', function() {
                  for (var j = 0; j < menus.length; j++) {
                    menus[j].classList.remove('active');
                  }
                  menus[index].classList.add('active');
                });
              })(i);
            }
          })();
        `}
      </Script>
    </main>
  );
}