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
          detail: 'يساعد على حماية البشرة من التجاعيد وعلامات التقدم في السن.',
        },
        {
          name: 'فيتامين C',
          detail: 'يمنح إشراقة طبيعية ويساعد على توحيد لون البشرة.',
        },
        {
          name: 'فيتامين B5',
          detail: 'يرطب بعمق، ويدعم مرونة البشرة، ويساعد على تهدئة التهيج.',
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
        'المكونات طبية 100% ومدعومة علمياً.',
        'جودة عالية، وترطيباً عميقاً، وإشراقة طبيعية.',
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
      description: 'لنعومة تدوم وإشراقة تلمع، لبشرة ناعمة وصحية ومتألقة كل يوم.',
      ingredients: [
        {
          name: 'زبدة الشيا الخام',
          detail: ' طبيعية 100%.',
        },
        {
          name: 'زبدة الكاكاو',
          detail: 'زبدة طبيعية ضمن مكونات زبدة الجسم.',
        },
        {
          name: 'زيوت وفيتامينات',
          detail: 'مجموعة مختارة بعناية من الزيوت الطبيعية والفيتامينات.',
        },
      ],
      highlights: ['تغذية', 'نعومة', 'ترطيب يدوم'],
      benefits: [
        'ترطيب عميق ونعومة ونضارة.',
        'تقوم بازالة القشرة الميتة',
        'تعالج الجفاف تماما',
      ],
      safetyNotes: [
        'المكونات الأساسية بأنها طبيعية 100%.',
        'خالية من البارابين والكحول والصبغات.',
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
        'تفتيح لون الجسم',
        'تدعم النضارة والنعومة.',
        'تساعد على توحيد مظهر لون البشرة.',
      ],
      safetyNotes: [
        'مطوّرة ومختارة بعناية لمنح البشرة مظهراً صحياً ومشرقاً.',
        'آمنة وفعالة لمختلف أنواع البشرة، ولا تسبب تقشراً أو جفافاً أو احمراراً أو تهيجاً.',
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
      description: 'تركيبة علاجية وتجميلية للوجه والنعومة ومظهر أكثر تجانساً.',
      ingredients: [],
      highlights: ['نضارة', 'نعومة', 'مظهر متجانس'],
      benefits: [
        'نضارة ونعومة وتفتيح',
        'معالجة مشاكل البشرة',
        'توحيد ونعومة لون البشرة',
        'مناسبة لجميع انواع البشرات',
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
  