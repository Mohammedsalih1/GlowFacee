import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import OrderRequestForm from './components/OrderRequestForm';
import ProductsSection from './components/ProductsSection.jsx';
import CustomerReviews from './components/CustomerReviews.jsx';

import { useState } from 'react';

const Arrow = () => <span className="arrow" aria-hidden="true">←</span>;

// Temporary placeholder. Replace with the official international WhatsApp number.
const SUPPORT_WHATSAPP_NUMBER = '+201021638719';

function Icon({ name }) {
  if (name === 'sun') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
  if (name === 'heart') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>;
  if (name === 'flower') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-3.5-2.4-3.2-6.7 0-8 3.2 1.3 3.5 5.6 0 8Zm0 0c.6-4.2 4.4-6.2 7.2-4.2.2 3.4-3.2 5.8-7.2 4.2Zm0 0c4.1.8 5.8 4.7 3.6 7.3-3.4 0-5.6-3.6-3.6-7.3Zm0 0c-.8 4.1-4.7 5.8-7.3 3.6 0-3.4 3.6-5.6 7.3-3.6Zm0 0c-4.1-.8-5.8-4.7-3.6-7.3 3.4 0 5.6 3.6 3.6 7.3Z" /><circle cx="12" cy="12" r="1.2" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c2.8 3.7 5.4 6.2 5.4 10a5.4 5.4 0 1 1-10.8 0C6.6 9.2 9.2 6.7 12 3Z" /><path d="M9.3 14.3a2.8 2.8 0 0 0 2.7 2" /></svg>;
}

const questions = [
  {
    q: 'أبدأ روتيني منين؟',
    a: 'ابدئي بخطوات بسيطة تناسب يومك: تنظيف لطيف، ثم ترطيب، ومع الصباح أضيفي واقي الشمس المناسب لكِ. اختاري المنتجات بهدوء واتبعي طريقة الاستخدام الموضحة على كل منتج.',
  },
  {
    q: 'هل لازم أستخدم كل الخطوات؟',
    a: 'مش لازم. الروتين اليومي مش سباق؛ اختاري الأساسيات اللي تناسب احتياج بشرتك، وخلي العناية مساحة لطيفة ليكي من غير ضغط.',
  },
  {
    q: 'إزاي أختار المنتج المناسب لبشرتي؟',
    a: 'ابدئي بمعرفة نوع بشرتك وراجعي وصف المنتج وطريقة استخدامه. لو عندك حساسية أو حالة جلدية، استشيري طبيبًا مختصًا قبل إضافة منتج جديد.',
  },
  {
    q: 'أتابع جديد Glow Face إزاي؟',
    a: 'تابعي صفحات Glow Face على منصات التواصل الاجتماعي للاطلاع على المنتجات الجديدة ومحتوى العناية. روابط التواصل الرسمية تُضاف هنا عند توفرها.',
  },
];
const benefits = [
  {
    icon: 'sun',
    title: 'نضارة وتفتيح',
    description: 'إشراقة طبيعية وبشرة أكثر صفاءً من التصبغات الداكنة.',
  },
  {
    icon: 'heart',
    title: 'مناسبة لجميع أنواع البشرة',
    description: 'تركيبة آمنة للبشرة الدهنية والجافة والمختلطة والحساسة',
  },
  {
    icon: 'flower',
    title: 'علاج الحبوب والكلف',
    description: 'تقليل الحبوب والتصبغات الداكنة بلطف.',
  },
  {
    icon: 'water',
    title: 'توحيد اللون',
    description: 'لون موحّد ومظهر متناسق.',
  },
];
const clientResults = [
  {
    id: 'client-6',
    before: '/review1.jpeg',
    after: '/review2b.jpeg',
    text: "علاج الحبوب والاثار",
    noValue: true
  },
  {
    id: 'client-5',
    before: '/before6.jpeg',
    after: '/after6.jpeg',
    text: "مشاكل التصبغات وضربة الشمس",
    noValue: true

  },
  {
    id: 'client-9',
    before: '/review3.jpeg',
    after: '/review33.jpeg',
    text: "الاثار والكلف والتصبغات",
    noValue: true
  },
  {
    id: 'client-1',
    before: '/before1.jpeg',
    after: '/after1.jpeg',
    text: "علاج آثار الحبوب بفعالية",
    noValue: true

  },
  {
    id: 'client-2',
    before: '/before2.jpeg',
    after: '/after2.jpeg',
    text:"توحيد اللون",
    noValue: true

  },
  {
    id: 'client-3',
    before: '/before4.jpeg',
    after: '/after4.jpeg',
    text: "تخفيف التصبغات",
    noValue: true

  },
  // {
  //   id: 'client-4',
  //   before: '/before5.jpeg',
  //   after: '/after5.jpeg',
  //   text: "تخفيف التصبغات",
  //   noValue: true
  // },
  {
    id: 'client-7',
    before: '/after7.jpeg',
    after: '/after8.jpeg',
    text: "النضارة والدورة والنعومة",
  },
  {
    id: 'client-8',
    before: '/review2.jpeg',
    after: '/review22.jpeg',
    text: "علاج الحبوب والاثار",
    noValue: true
  },
];

const agents = [
  {
    country: 'السودان',
    flag: 'SD',
    cities: 'الخرطوم، بحري، أم درمان',
    agentName: 'علا الشيخ',
    whatsapp: '+249116340339',
  },
  {
    country: 'مصر',
    flag: 'EG',
    // cities: 'الرياض، مكة، جدة، الدمام',
    agentName: 'مودة',
    whatsapp: '+201021638719',
  },
  {
    country: 'مصر',
    flag: 'EG',
    cities: 'الإسكندرية',
    agentName: 'نهلة | الاسكندرية',
    whatsapp: '+201055958309',
  },
  {
    country: 'الإمارات',
    flag: 'AE',
    cities: 'دبي، أبوظبي، الشارقة',
    agentName: "دكتورة نجاة",
    whatsapp: '+249965298019',
  },
  {
    country: 'امريكا',
    flag: 'US',
    // cities: 'الدوحة، الوكرة',
    agentName: 'أمل',
    whatsapp: '+17816009747',
  },
  {
    country: 'قطر',
    flag: 'QA',
    // cities: 'الدوحة، الوكرة',
    agentName: "الاء",
    whatsapp: '+97470885447',
  },
  {
    country: 'السعودية',
    flag: 'SA',
    cities: 'نجران',
    agentName: 'دعاء | نجران',
    whatsapp: '+249117082835',
  },
  {
    country: 'السعودية',
    flag: 'SA',
    cities: 'الرياض',
    agentName: 'نهلة | الرياض',
    whatsapp: '+249127313767',
  },
  {
    country: "كندا",
    flag: 'CA',
    // cities: 'الرياض',
    agentName: 'نانسي',
    whatsapp: '+18254409497',
  },
  {
    country: "كندا",
    flag: 'CA',
    // cities: 'الرياض',
    agentName: "عبير",
    whatsapp: '+249910685985',
  },
  {
    country: "هولندا",
    flag: 'NL',
    // cities: 'الرياض',
    agentName: "نوال",
    whatsapp: '+31686069192',
  },
  {
    country: "فرنسا",
    flag: 'FR',
    // cities: 'الرياض',
    agentName: "نوال",
    whatsapp: '+31686069192',
  },
  {
    country: "تركيا",
    flag: 'TR',
    // cities: 'الرياض',
    agentName: "ام لين",
    whatsapp: '+905314365015',
  },
  {
    country: "بريطانيا",
    flag: "GB",
    // cities: 'الرياض',
    agentName: "الاء",
    whatsapp: '+447877278769',
  },
];

function getAgentWhatsAppLink(agent) {
  const message = encodeURIComponent(
    `مرحباً ${agent.agentName}، أود الاستفسار عن منتجات Glow Face في ${agent.country}.`,
  );
  return `https://wa.me/${agent.whatsapp}?text=${message}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [activeAgent, setActiveAgent] = useState(0);
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const openOrderForm = () => {
    closeMenu();
    setOrderFormOpen(true);
  };

  const supportPhoneDisplay = `+${SUPPORT_WHATSAPP_NUMBER.slice(0, 3)} ${SUPPORT_WHATSAPP_NUMBER.slice(3, 6)} ${SUPPORT_WHATSAPP_NUMBER.slice(6, 9)} ${SUPPORT_WHATSAPP_NUMBER.slice(9)}`;
  const supportMessage = encodeURIComponent(
    'مرحباً، لدي استفسار أو شكوى بخصوص Glow Face.',
  );
  const supportWhatsAppLink =
    `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${supportMessage}`;

  const showAgent = (index) => {
    setActiveAgent((index + agents.length) % agents.length);
  };

const selectedAgent = agents[activeAgent];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      {/* <div className="top-note">مساحتك الصغيرة للعناية بنفسك، كل يوم</div> */}
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#home" aria-label="Glow Face — الرئيسية" onClick={closeMenu}>
            {/* <img src="/glow-face-logo.jpeg" alt="شعار Glow Face" /> */}
            <div className="relative group">
              {/* التوهج الخلفي */}
              {/* <div className="absolute -inset-1 bg-pink-300/50 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div> */}
              
              {/* الشعار المموج */}
              <img 
                src="/glow-face-logo.jpeg" 
                alt="Glow Face Logo" 
                className="relative h-16 w-16 object-cover shadow-sm border-2 border-white rounded-[50%]"
                // style={{ borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
              />
            </div>
          </a>
          <nav className="nav-links" id="mobile-navigation" data-open={menuOpen} aria-label="التنقل الرئيسي">
            <a href="#home" onClick={closeMenu}>الرئيسية</a>
            <a href="#about" onClick={closeMenu}>عن Glow Face</a>
            <a href="#products" onClick={closeMenu}>المنتجات</a>
            <a href="#results" onClick={closeMenu}> تجارب وآراء العملاء</a>
            <a href="#support" onClick={closeMenu}>تواصلي معنا</a>
          </nav>
          {/* <a className="btn btn-primary header-action" href="#agents">اطلبي الان<Arrow /></a> */}
          <button
            className="btn btn-primary header-action"
            type="button"
            onClick={openOrderForm}
          >
            اطلبي الان<Arrow />
          </button>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
              : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">خبرة 15 عاما</span> <br />
              <p className='h1'>تركيبة <span className='eng-font'>Glow Face</span><br /><span className='eng-font'>By Dr Najat Salih</span></p>
              <p>تركيبة مصممة للعناية بالبشرة بخبرة 15 عاما في التركيبات الامنة, وهي عبارة عن تركيبة طبية وتجميلية في نفس الوقت. Glow face عيادة تجميل في علبة</p>
              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={openOrderForm} >احصلي علي تركيبتك الان<Arrow /></button>
                {/* <a className="btn btn-quiet" href="#about">حكاية Glow Face</a> */}
              </div>
              <div className="hero-meta ">
                <span className="meta-stamp"><Icon name="flower" /></span>
                <span>امنة 100%</span>
                <span className="meta-stamp"><Icon name="flower" /></span>
                <span>توصيل سريع</span>
                <span className="meta-stamp"><Icon name="flower" /></span>
                <span>20,000+ عميل</span>
              </div>
            </div>
            <div className="hero-art" aria-label="صورة تحريرية لمنتجات عناية عامة">
              <div className="hero-image"><img src="/hero-image.jpg" alt="ترتيب هادئ لعبوات عناية بالبشرة بألوان وردية دافئة" /></div>
              <div className="image-note"><strong>خديها واحدة واحدة</strong><span>للبشرة نضارة</span></div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="عناية بسيطة، لحظات أهدى، جمالك بطريقتك">
          <div className="container marquee-track">
            <span className="marquee-item">تركيبة سحرية<i /></span>
            <span className="marquee-item">#تحدي_10_يوم<i /></span>
            <span className="marquee-item">وداعا تصبغات<i /></span>
            <span className="marquee-item">وداعا حبوب<i /></span>
            <span className="marquee-item">وداعا اثار<i /></span>
          </div>
        </div>

        {/* <section className="routine" id="routine">
          <div className="container">
            <div className="routine-head">
              <span className="eyebrow">ببساطة ومن غير تعقيد</span>
              <h2 className="section-title">ثلاث لحظات صغيرة،<br />ليوم ألطف على بشرتك</h2>
              <p className="section-copy">مش محتاجة روتين طويل. خلي الأساس واضح، واختاري المنتجات اللي تناسب بشرتك وإيقاع يومك.</p>
            </div>
            <div className="routine-grid">
              <article className="routine-card">
                <span className="step-number">١</span><span className="routine-icon"><Icon name="water" /></span>
                <h3>تنظيف لطيف</h3>
                <p>ابدئي يومك أو انهيه بإحساس نظيف ومنتعش، واختاري غسولًا يناسب طبيعة بشرتك.</p>
                <span className="card-index" aria-hidden="true">١</span>
              </article>
              <article className="routine-card">
                <span className="step-number">٢</span><span className="routine-icon"><Icon name="flower" /></span>
                <h3>ترطيب وراحة</h3>
                <p>امنحي بشرتك لحظة ترطيب، وخلي الملمس اللي بتحبيه جزءًا من طقسك اليومي.</p>
                <span className="card-index" aria-hidden="true">٢</span>
              </article>
              <article className="routine-card">
                <span className="step-number">٣</span><span className="routine-icon"><Icon name="sun" /></span>
                <h3>عناية صباحية</h3>
                <p>في الصباح، أضيفي واقي الشمس المناسب لكِ إلى روتينك، مع اتباع تعليمات استخدامه.</p>
                <span className="card-index" aria-hidden="true">٣</span>
              </article>
            </div>
          </div>
        </section> */}

        {/* about */}
        <section className="manifesto" id="about">
        <div className="container manifesto-panel">
          <div
            className="manifesto-art"
            role="img"
            aria-label="منتجات Glow Face في مشهد عناية هادئ"
          />


          <div className="manifesto-copy">
            <span className="eyebrow">تركيبة Glow Face</span>
            <h2 className="section-title">تركيبة مركّزة، وعناية عن وعي.</h2>

            <p className="formula-description">
              أُعدّت تركيبة Glow Face على يد الصيدلانية د. نجاة صالح، بخبرة 15 عاماً
              في التركيبات الصيدلانية. تركيبة مركزة بوزن 15 جم وقوام غني؛ لذلك يُستخدم
              منها مقدار قليل وفق إرشادات الاستخدام. نهتم بجودة التركيبة أكثر من حجم العبوة.
            </p>

            <ul className="formula-highlights" aria-label="معلومات عن تركيبة Glow Face">
              <li><strong>١٥ جم</strong><span>تركيبة مركزة</span></li>
              <li><strong>د. نجاة صالح</strong><span>صيدلانية</span></li>
              <li><strong>قوام غني</strong><span>مقدار قليل للاستخدام</span></li>
            </ul>

            <a href="#support" className="btn btn-quiet">
              اسألي فريقنا <Arrow />
            </a>
          </div>
        </div>
        <div className='image-2 container manifesto-panel'>

        <div
            className="manifesto-art2"
            role="img"
            aria-label="منتجات Glow Face في مشهد عناية هادئ"
          />
        </div>
        </section>

        {/* why glowface */}
        <section className="routine" id="routine">
              <div className="container">
              <div className="routine-head">
                <span className="eyebrow">ببساطة ومن غير تعقيد</span>
                <h2 className="section-title">لماذا <span className='eng-font'>Glow Face؟</span></h2>
                <p className="section-copy">لأن بشرتك تستحق الأفضل، اخترنا لك تركيبة متكاملة تجمع بين العلم والطبيعة لتمنحك إشراقة لا تُنسى</p>
            </div>
                <div className="routine-grid">
                  {benefits.map((benefit) => (
                    <article className="routine-card" key={benefit.title}>
                      <span className="benefit-icon">
                        <Icon name={benefit.icon} />
                      </span>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </article>
                  ))}
                </div>
              </div>
        </section>
        <ProductsSection />
        {/* <section className="manifesto" id="about">
          <div className="container manifesto-panel">
            <div className="manifesto-art" role="img" aria-label="مشهد هادئ للعناية بالبشرة في ضوء دافئ" />
            <div className="manifesto-copy">
              <span className="eyebrow">حكايتنا تبدأ بيكي</span>
              <h2 className="section-title">الجمال مش نسخة واحدة.</h2>
              <p>في Glow Face بنحب إن العناية تبقى أقرب وأسهل، مساحة دافية تختاري فيها اللي يناسبك وتاخدي وقتك من غير استعجال.</p>
              <a href="#faq" className="btn btn-quiet">اعرفي أكتر <Arrow /></a>
            </div>
          </div>
        </section> */}

        <section
          className="results"
          id="results"
          aria-labelledby="results-title"
        >
          <div className="container">
            <div className="results-heading">
              <span className="eyebrow">#تحدي_10_أيام | نتائج حقيقية وموثوقة</span>
              <h2 className="section-title" id="results-title">
              قصص نجاح وإشراقة لا تُنسى مع <span className='eng-font'>Glow Face</span>
              </h2>
              <p>
              تعرفي على قصص حقيقية لعميلات استعدن نضارة وحيوية بشرتهن خلال أيام فقط بفضل التركيبة الآمنة.
              </p>
            </div>
            <div className="results-grid">
              {clientResults.map((result, index) => (
                <article className="result-card" key={result.id}>
                  <div className="result-pair" dir="ltr">
                    <figure className="result-photo">
                      <img
                        src={result.after}
                        alt={`بعد العناية — تجربة عميلة ${index + 1}`}
                      />
                      {result.noValue && 
                      <figcaption>بعد</figcaption>
                      }
                    </figure>
                    <figure className="result-photo">
                      <img
                        src={result.before}
                        alt={`قبل العناية — تجربة عميلة ${index + 1}`}
                      />
                      {result.noValue && 
                      <figcaption>قبل</figcaption>
                      }
                    </figure>
                  </div>
                  {result.text && 
                  <p className="result-caption">{result.text}</p>
                  }
                </article>
              ))}
            </div>
            {/* <p className="results-note">
              النتائج تختلف من شخص لآخر، والصور تعرض تجارب فردية ولا تضمن نتيجة محددة.
            </p> */}
          </div>
        </section>
        <CustomerReviews />

        {/* agents */}
        <section className="agents" id="agents" aria-labelledby="agents-title">
          <div className="container">
            <div className="agents-heading">
              <span className="eyebrow">Glow Face أقرب ليكي</span>
              <h2 className="section-title" id="agents-title">
                مناديب حول العالم
              </h2>
              <p>اختاري المندوبة الأقرب ليكي وتواصلي معاها مباشرة عبر واتساب.</p>
            </div>

            <div className="agents-carousel">
              <article
                className="agent-card"
                key={selectedAgent.country}
                role="group"
                aria-roledescription="شريحة"
                aria-label={`${activeAgent + 1} من ${agents.length}`}
                aria-live="polite"
              >
                <div className="agent-card-top">
                  <span className="agent-flag" aria-hidden="true">
                    {/* {selectedAgent.flag} */}
                    <ReactCountryFlag 
                      countryCode={selectedAgent.flag} 
                      svg 
                      style={{ width: '2em', height: '2em' }} 
                      title="Sudan" 
                  />
                  </span>
                  {/* <span className="agent-count">
                    {String(activeAgent + 1).padStart(2, '0')} /{' '}
                    {String(agents.length).padStart(2, '0')}
                  </span> */}
                </div>

                <h3>{selectedAgent.country}</h3>

                {/* <div className="agent-detail">
                  <span className="agent-detail-label">المدن</span>
                  <p>{selectedAgent.cities}</p>
                </div> */}

                <div className="agent-detail agent-name">
                  <span className="agent-detail-label">المندوبة</span>
                  <p>{selectedAgent.agentName}</p>
                </div>

                <a
                  className="btn agent-whatsapp"
                  href={getAgentWhatsAppLink(selectedAgent)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`تواصلي مع ${selectedAgent.agentName} في ${selectedAgent.country} عبر واتساب`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12.04 2a9.83 9.83 0 0 0-8.39 14.97L2.3 22l5.16-1.32A9.92 9.92 0 1 0 12.04 2Zm0 17.99a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.06.78.82-2.98-.2-.31a8.12 8.12 0 1 1 6.88 3.82Zm4.46-6.08c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.56.12-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
                  </svg>
                  تواصلي عبر الواتساب
                </a>
              </article>

              <div className="agents-controls" aria-label="التنقل بين الوكيلات">
                <button
                  type="button"
                  className="agent-arrow"
                  onClick={() => showAgent(activeAgent - 1)}
                  aria-label="الوكيلة السابقة"
                >
                  {/* <span aria-hidden="true"></span> */}
                  <ChevronRight size={30} />

                </button>

                <div className="agent-dots" role="group" aria-label="اختاري دولة">
                  {agents.map((agent, index) => (
                    <button
                      type="button"
                      className="agent-dot"
                      key={agent.country}
                      data-active={activeAgent === index}
                      aria-label={`عرض وكيلة ${agent.country}`}
                      aria-current={activeAgent === index ? 'true' : undefined}
                      onClick={() => showAgent(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="agent-arrow"
                  onClick={() => showAgent(activeAgent + 1)}
                  aria-label="الوكيلة التالية"
                >
                  {/* <span aria-hidden="true">التالي</span> */}
                  <ChevronLeft size={30} />

                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="support" id="support" aria-labelledby="support-title">
        <div className="container">
          <div className="support-panel">
            <div className="support-copy">
              <div className="support-heading-row">
                <span className="support-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 13v-2a9 9 0 0 1 18 0v2" />
                    <path d="M5 13h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm14 0h-1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" />
                    <path d="M17 20c-.8 1-2 1.5-4 1.5" />
                  </svg>
                </span>

                <div>
                  <span className="eyebrow">إحنا هنا علشانك</span>
                  <h2 className="section-title" id="support-title">
                    خدمة العملاء والدعم الفني
                  </h2>
                </div>
              </div>

              <p className="support-description">
                نسعد دائماً بخدمتكم والإجابة على استفساراتكم، أو استقبال مقترحاتكم
                وشكاويكم لضمان تقديم أفضل تجربة لكم مع منتجاتنا.
              </p>
            </div>

            <div className="support-contact-card">
              <div className="support-phone-block">
                <span className="support-label">
                  رقم الاستفسارات والشكاوى العام
                </span>
                {/* <a
                  className="support-phone"
                  href={supportWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {supportPhoneDisplay}
                </a> */}
              </div>

              <div className="support-hours">
                <span className="support-hours-icon" aria-hidden="true">◷</span>
                <div>
                  <span className="support-label">أوقات العمل</span>
                  <p>من السبت إلى الخميس</p>
                  <p>9 صباحاً – 10 مساءً</p>
                </div>
              </div>

              <a
                className="btn btn-primary support-whatsapp"
                href={supportWhatsAppLink}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M12.04 2a9.83 9.83 0 0 0-8.39 14.97L2.3 22l5.16-1.32A9.92 9.92 0 1 0 12.04 2Zm0 17.99a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.06.78.82-2.98-.2-.31a8.12 8.12 0 1 1 6.88 3.82Zm4.46-6.08c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.56.12-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                تواصلي معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
        </section>

        {/* <section className="values" aria-label="قيم Glow Face">
          <div className="container values-row">
            <article className="value">
              <span className="value-mark"><Icon name="heart" /></span>
              <div><h3>على راحتك</h3><p>روتين مرن يتشكل على احتياجك، مش العكس.</p></div>
            </article>
            <article className="value">
              <span className="value-mark"><Icon name="flower" /></span>
              <div><h3>لحظات ليكي</h3><p>تفاصيل يومية صغيرة تستاهل اهتمامك.</p></div>
            </article>
            <article className="value">
              <span className="value-mark"><Icon name="sun" /></span>
              <div><h3>اختيارات واعية</h3><p>اقرئي طريقة الاستخدام واختاري ما يلائمك.</p></div>
            </article>
          </div>
        </section> */}

        {/* <section className="faq" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="eyebrow">إجابات بهدوء</span>
              <h2 className="section-title">أسئلة بتدور في بالك؟</h2>
              <p className="section-copy">جمعنالك شوية إجابات تساعدك تبدئي ببساطة.</p>
            </div>
            <div className="faq-list">
              {questions.map((item, index) => (
                <article className="faq-item" data-open={openQuestion === index} key={item.q}>
                  <button className="faq-question" type="button" aria-expanded={openQuestion === index} onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}>
                    <span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer"><div><p>{item.a}</p></div></div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className="closing">
          <div className="container closing-panel">
            <span className="eyebrow">خلي لنفسك مساحة</span>
            <h2>ابدئي بلحظة…<br />والباقي هييجي براحتك.</h2>
            <p>خطوة صغيرة في روتينك ممكن تبقى أحلى جزء في يومك.</p>
            <a className="btn" href="#routine">شوفي خطواتك <Arrow /></a>
          </div>
        </section> */}
      </main>

      {orderFormOpen && (
      <OrderRequestForm onClose={() => setOrderFormOpen(false)} />
      )}

      {/* <footer className="footer"> */}
        {/* <div className="container">
          <div className="footer-main">
            <a className="footer-brand" href="#home" aria-label="Glow Face — العودة للأعلى">
              <img src="/glow-face-logo.jpeg" alt="" />
              <p>عنايتك بنفسك، كل يوم.</p>
            </a>
            <nav className="footer-links" aria-label="روابط إضافية">
              <a href="#home">الرئيسية</a>
              <a href="#routine">روتينك اليومي</a>
              <a href="#about">عن Glow Face</a>
              <a href="#faq">الأسئلة الشائعة</a>
            </nav>
          </div>
          <div className="footer-bottom"><span>© Glow Face — كل يوم، لحظة ليكي.</span><a href="#home">العودة للأعلى ↑</a></div>
        </div> */}
        <footer className="bg-pink-50/70 border-t border-pink-100 text-gray-700 pt-12 pb-6">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-right">
            
            {/* العمود الأول: الشعار والتعريف */}
            <div>
            <div className="relative group footer-brand">
              {/* التوهج الخلفي */}
              {/* <div className="absolute -inset-1 bg-pink-300/50 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div> */}
              
              {/* الشعار المموج */}
              <img 
                src="/glow-face-logo.jpeg" 
                alt="Glow Face Logo" 
                className="relative h-16 w-16 object-cover shadow-sm border-2 border-white"
              />
            </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                عنايتك بنفسك.. كل يوم، لحظة ليكي. تركيبة صيدلانية آمنة تمنح بشرتك النضارة والإشراقة الحقيقية.
              </p>
              {/* وسائل التواصل مع أيقونات SVG */}
              <div className="flex gap-3">
                {/* فيسبوك */}
                <a href="https://facebook.com/glowface12" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 border border-pink-200 hover:bg-[#dd8593] hover:text-white transition shadow-sm" title="فيسبوك">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@glowface41?_r=1&_t=ZS-9BIUJMR1mVN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 border border-pink-200 hover:bg-[#dd8593] hover:text-white transition shadow-sm" title="تيك توك">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.242V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002-.001a2.895 2.895 0 0 1 3.144-4.25v-3.47a6.345 6.345 0 0 0-5.345 6.273 6.347 6.347 0 0 0 9.805 5.304 6.34 6.34 0 0 0 2.54-5.082V9.083a8.196 8.196 0 0 0 4.786 1.516V7.154a4.81 4.81 0 0 1-1.053-.468z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* العمود الثاني: روابط التصفح */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 pr-2">روابط الموقع</h4>
              <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={closeMenu}>الرئيسية</a></li>
              <li><a href="#about" onClick={closeMenu}>عن Glow Face</a></li>
              <li><a href="#results" onClick={closeMenu}> تجارب وآراء العملاء</a></li>
              <li><a href="#support" onClick={closeMenu}>تواصلي معنا</a></li>
              </ul>
            </div>

            {/* العمود الثالث: التواصل والدعم */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4  pr-2">الدعم والطلب</h4>
              <p className="text-xs text-gray-500 mb-3">للطلبات اطلبي مباشرة من مندوب دولتك، وللاستفسارات والشكاوى تواصل معنا:</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span>📱 خدمة العملاء والشكاوى:</span>
                  <a href="https://wa.me/249116340339" className="font-bold text-pink-600" dir="ltr">+201021638719</a>
                </p>
              </div>
            </div>

          </div>

          {/* الخط السفلي وحقوق النشر */}
          <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-pink-200/60 flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-500 gap-4">
            <p>© 2026 Glow Face — جميع الحقوق محفوظة.</p> <p>Made with ❤️ by <a href="https://msm.technology" target="_blank" style={{color: "#dd8593"}} rel="noopener noreferrer">MSM Technology</a></p>
          </div>
        </footer>

      {/* </footer> */}
    </div>
  );
}

export default App;
