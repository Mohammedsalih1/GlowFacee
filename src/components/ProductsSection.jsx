
const products = [
    {
      id: 'face-moisturizer',
      image: '/product1-refreshment.jpg',
      imageAlt: 'عبوة مرطب الوجه من Glow Face مع زهور وردية',
      category: 'ترطيب وإشراقة',
      title: 'مرطب الوجه',
      description: 'مرطب الوجه بفيتامينات مغذية لبشرة نضرة وصحية.',
      ingredients: [
        {
          name: 'فيتامين E',
          detail: 'يحمي البشرة من التجاعيد وعلامات التقدم في السن',
        },
        {
          name: 'فيتامين C',
          detail: 'يمنح إشراقة طبيعية ويساعد على توحيد لون البشرة.',
        },
        {
          name: 'فيتامين B5',
          detail: 'يرطب بعمق، ويعزز مرونة البشرة، ويهدئ التهيج.',
        },
      ],
      highlights: ['ترطيب', 'نعومة', 'إشراقة'],
      benefits: [
        'لكل انواع البشرة',
        'مكونات طبيعية',
        'نتائج سريعة',
        'تركيبة امنة',
      ],
      // benefits: [
      //   'يدعم إشراقة طبيعية ونعومة تدوم طوال اليوم.',
      //   'يساعد على علاج الحبوب والكلف والتصبغات والتخفيف من آثارها.',
      //   'يساعد على توحيد لون البشرة.',
      //   'مناسب لمختلف أنواع البشرة، بما فيها الحساسة.',
      // ],
      safetyNotes: [
        // 'المكونات طبية 100% ومدعومة علمياً.',
        // 'جودة عالية، وترطيباً عميقاً، وإشراقة طبيعية.',
      ],
      ingredientNote: '',
      pregnancyInfo: '',
      orderValue: 'المرطب',
    },
    {
      id: 'body-butter',
      image: '/product2-zibda.jpg',
      imageAlt: 'عبوة زبدة الجسم من Glow Face محاطة بزهور ناعمة',
      category: 'عناية الجسم',
      title: 'زبدة الجسم',
      description: 'لنعومة تدوم وإشراقة تلمع.',
      ingredients: [
        {
          name: 'زبدة الشيا الخام',
          detail: ' طبيعية 100%.',
        },
        {
          name: 'زبدة الكاكاو',
          detail: 'زبدة كاكاو طبيعية',
        },
        {
          name: 'زيوت وفيتامينات',
          // name: "مجموعة مختارة بعناية من الزيوت الطبيعية والفيتامينات.",
          detail: 'مجموعة مختارة بعناية من الزيوت الطبيعية والفيتامينات.',
        },
      ],
      highlights: ['تغذية', 'نعومة', 'ترطيب يدوم'],
      benefits: [
        'ترطيب عميق ونعومة ونضارة. : تمنح البشرة ترطيبا يدوم طويلا ولمعانا صحيا',
        'تقوم بازالة القشرة الميتة : تساعد على تجديد البشرة وتمنح ملمسا ناعما',
        'تعالج الجفاف تماما : تغذي البشرة بعمق وتعيد لها حيويتها',
      ],
      safetyNotes: [
        'خالية من  المواد الضارة : البارابين - الكحول - الصبغات.',
        'مناسبة لجميع أنواع البشرة وامنة للاستخدام اليومي.',
      ],
      ingredientNote: '',
      pregnancyInfo: '',
      orderValue: 'تركيبة الزبدة',
    },
    {
      id: 'body-brightening',
      image: '/product3-allbody.jpg',
      imageAlt: 'عبوة تركيبة الجسم من Glow Face على خلفية وردية',
      category: 'عناية الجسم',
      title: 'تركيبة تفتيح الجسم',
      description: 'تركيبة طبية متطورة مختارة بعناية لتمنحك بشرة صحية ومشرقة',
      ingredients: [],
      highlights: ['مظهر متجانس', 'نضارة', 'نعومة'],
      benefits: [
        'تفتيح لون الجسم : تمنح بشرتك اشراقة طبيعية ومظهرا اكثر تجانسا',
        'نضارة ونعومة : تركيبة تمنح البشرة نعومة فائقة ونضارة تدوم',
        'توحيد اللون : تساعد علي توحيد لون البشرة وتقليل مظهر التفاوت',
      ],
      safetyNotes: [
        'لا قشرة مزعجة : تركيبة ناعمة لا تسبب تقشر او جفاف',
        'لا احمرار : لطيفة علي البشرة ولا تسبب تهيجا',
        'لا يوجد اي رد فعل عكسي بعد ايقاف الاستخدام',
      ],
    //   ingredientNote: 'لم تُذكر أسماء المكونات التفصيلية في المعلومات المرسلة.',
      pregnancyInfo:
        'مناسبة للحامل ابتداءً من الشهر السابع وللمرضعات.',
      orderValue: 'تركيبة الجسم',
    },
    {
      id: 'face-formula',
      image: '/hero-image.jpg',
      imageAlt: 'عبوة تركيبة الوجه من Glow Face بتصميم وردي هادئ',
      category: 'عناية الوجه',
      title: 'تركيبة الوجه',
      description: 'تركيبة علاجية وتجميلية في نفس الوقت',
      ingredients: [
        {
          name: "مكونات طبية 100%"
        },
        {
          name: "تركيبة فعالة مدعومة علميا"
        },
        {
          name: "جودة عالية نتائج موثوقة"
        },
        {
          name: "امنة ولطيفة علي البشرة"
        }
      ],
      highlights: ['نضارة', 'نعومة', 'مظهر متجانس'],
      benefits: [
        'نضارة ونعومة وتفتيح : تركيبة تدعم اشراقة طبيعية ونعومة تدوم طوال اليوم',
        'معالجة مشاكل البشرة : تساعد في علاج الحبوب والكلف والتصبغات وتخفف من اثارها',
        'توحيد ونعومة لون البشرة : توحد لون البشرة وتمنحها ملمسا ناعما ومظهرا صحيا ومتجانسا',
        'مناسبة لجميع انواع البشرات : تركيبة لطيفة وامنة تناسب كل انواع البشرات حتي الحساسة',
      ],
      // benefits: [
      //   'تدعم إشراقة طبيعية ونعومة تدوم طوال اليوم.',
      //   'تساعد على العناية بالحبوب والكلف والتصبغات وآثارها.',
      //   'تساعد على توحيد لون البشرة.',
      //   'مناسبة لمختلف أنواع البشرة، بما فيها الحساسة.',
      // ],
      safetyNotes: [
        'تتكون من مكونات طبية 100% ومدعومة علمياً.',
        'تشمل الخصائص المذكورة جودة عالية ونتائج موثوقة.',
      ],
    //   ingredientNote: 'لم تُذكر أسماء المكونات التفصيلية في المعلومات المرسلة.',
    pregnancyInfo:
    'مناسبة للحامل ابتداءً من الشهر السابع وللمرضعات.',
    orderValue: 'تركيبة الوجه',
    },
  ];
  
  function ProductsSection({ onOrder }) {
    return (
      <section className="products-section" id="products" aria-labelledby="products-title">
        <div className="container">
          <div className="products-heading">
            <span className="eyebrow">اختاري عنايتك بطريقتك</span>
            <h2 className="section-title" id="products-title">منتجات Glow Face</h2>
            <p>تفاصيل مختارة لروتين عناية أقرب لاحتياجك، من الوجه إلى الجسم.</p>
          </div>
  
          <div className="products-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div className="product-visual">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                  />
                  <span className="product-category">{product.category}</span>
                  {/* <span className="product-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span> */}
                </div>
  
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p className="product-description">{product.description}</p>
  
                  <div className="product-ingredients">
                    <span className="product-detail-label">مكونات وخصائص</span>
                    {product.ingredients.length > 0 ? (
                      <ul>
                        {product.ingredients.map((ingredient) => (
                          <li key={ingredient.name}>{ingredient.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="product-ingredient-note">{product.ingredientNote}</p>
                    )}
                  </div>
  
                  <div className="product-highlights" aria-label="مميزات المنتج">
                    {product.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
  
                  {product.pregnancyInfo && (
                    <aside className="product-pregnancy">
                      <strong>معلومة للحامل والمرضع</strong>
                      <p>{product.pregnancyInfo}</p>
                    </aside>
                  )}
  
                  <details className="product-details">
                    <summary>عرض الفوائد والتفاصيل</summary>
                    <div className="product-details-content">
                      {product.ingredients.length > 0 && (
                        <div className="product-detail-block">
                          <h4>المكونات الأساسية</h4>
                          <ul className="product-long-list">
                            {product.ingredients.map((ingredient) => (
                              <li key={ingredient.name}>
                                <strong>{ingredient.name}:</strong> {ingredient.detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
  
                      <div className="product-detail-block">
                        <h4>الفوائد والمميزات</h4>
                        <ul className="product-long-list">
                          {product.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
  
                      <div className="product-detail-block">
                        <h4>خصائص التركيبة</h4>
                        <ul className="product-long-list">
                          {product.safetyNotes.map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
  
                  {/* <button
                    className="product-order"
                    type="button"
                    onClick={() => onOrder(product.orderValue)}
                    aria-label={`اطلبي ${product.title}`}
                  >
                    اطلبي هذا المنتج <span aria-hidden="true">←</span>
                  </button> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProductsSection;
  