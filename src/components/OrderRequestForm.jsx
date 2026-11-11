// import { useEffect, useRef, useState } from 'react';
// const countries = [
//   'السودان',
//   'مصر',
//   'امريكا',
//   'كندا',
//   'فرنسا',
//   'هولندا',
//   'بريطانيا',
//   'قطر',
//   'الإمارات',
//   'السعودية',
//   'تركيا',
// ];
// const products = ['تركيبة الوجه', 'تركيبة الزبدة', 'تركيبة الجسم', 'المرطب'];
// const paymentMethods = ['كاش', 'بنكك', 'فوري', 'اووكاش', 'فودافون كاش', 'انستا باي', 'حساب اخر'];
// // إذا كان للدولة أكثر من وكيلة، يُستخدم أول رقم في القائمة.
// const whatsappByCountry = {
//   السودان: '+249116340339',
//   مصر: '+201021638719',
//   امريكا: '+17816009747',
//   كندا: '+18254409497',
//   فرنسا: '+31686069192',
//   هولندا: '+31686069192',
//   بريطانيا: '+447877278769',
//   قطر: '+97470885447',
//   الإمارات: '+249965298019',
//   السعودية: '+249117082835',
//   تركيا: '+905314365015',
// };
// const initialForm = {
//     name: '',
//     phone: '',
//     backupPhone: '',
//     country: '',
//     address: '',
//     products: [],
//     quantity: '1',
//     notes: '',
//     payment: '',
//     confirmed: false,
//   };

//   function getInitialProducts(initialProduct) {
//     const selectedProducts = Array.isArray(initialProduct)
//       ? initialProduct
//       : initialProduct
//         ? [initialProduct]
//         : [];
//     return selectedProducts.filter((product) => products.includes(product));
//   }


// function toEnglishDigits(value) {
//   return value
//     .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))
//     .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)));
// }
// function OrderRequestForm({ onClose }) {
//     const dialogRef = useRef(null);
//     const [form, setForm] = useState(() => ({
//     ...initialForm,
//     products: getInitialProducts(initialForm),
//     }));
//     const [message, setMessage] = useState('');
//     const [messageType, setMessageType] = useState('');
//     const [fallbackLink, setFallbackLink] = useState('');
//     useEffect(() => {
//         const dialog = dialogRef.current;
//         if (!dialog) return undefined;
//         if (!dialog.open) dialog.showModal();
//         return () => {
//         if (dialog.open) dialog.close();
//         };
//   }, []);

//   function toggleProduct(product) {
//     setForm((current) => ({
//       ...current,
//       products: current.products.includes(product)
//         ? current.products.filter((selectedProduct) => selectedProduct !== product)
//         : [...current.products, product],
//     }));
//     setMessage('');
//     setMessageType('');
//     setFallbackLink('');
//   }

//   function updateField(event) {
//     const { name, value, checked, type } = event.target;
//     setForm((current) => ({
//       ...current,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     setMessage('');
//     setMessageType('');
//     setFallbackLink('');
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     setMessage('');
//     setMessageType('');
//     setFallbackLink('');
//     const phoneDigits = toEnglishDigits(form.phone).replace(/\D/g, '');
//     const backupDigits = toEnglishDigits(form.backupPhone).replace(/\D/g, '');
//     if (
//       phoneDigits.length < 7 ||
//       phoneDigits.length > 15 ||
//       backupDigits.length < 7 ||
//       backupDigits.length > 15
//     ) {
//       setMessage('يرجى إدخال رقمي هاتف صحيحين، من 7 إلى 15 رقماً لكل رقم.');
//       setMessageType('error');
//       return;
//     }
//     const whatsappNumber = whatsappByCountry[form.country];
//     if (!whatsappNumber) {
//       setMessage(
//         'تعذر العثور على رقم الوكيلة لهذه الدولة. اختاري الدولة مرة أخرى أو تواصلي مع خدمة العملاء.',
//       );
//       setMessageType('error');
//       return;
//     }
//     const orderMessage = [
//       'مرحباً Glow Face، أود تأكيد طلب جديد:',
//       '',
//       `الاسم: ${form.name}`,
//       `رقم الهاتف: ${form.phone}`,
//       `رقم احتياط: ${form.backupPhone}`,
//       `الدولة: ${form.country}`,
//       `السكن بالتفصيل: ${form.address}`,
//       `أنواع التركيبة: ${form.products.join('، ')}`,
//       `عدد الطلبية: ${form.quantity}`,
//       `طرق الدفع: ${form.payment}`,
//       `ملاحظات: ${form.notes.trim() || 'لا توجد'}`,
//       '',
//       'أقر بأن البيانات المدخلة صحيحة.',
//     ].join('\n');
//     const link = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(orderMessage)}`;
//     setFallbackLink(link);
//     try {
//       const whatsappWindow = window.open(link, '_blank');
//       if (!whatsappWindow) {
//         setMessage(
//           'تم تجهيز طلبك، لكن تعذر فتح واتساب تلقائياً. استخدمي الزر أدناه لإكمال الإرسال.',
//         );
//         setMessageType('error');
//         return;
//       }
//       whatsappWindow.opener = null;
//       setMessage(
//         'تم تجهيز طلبك وفتح واتساب للوكيلة. اضغطي «إرسال» داخل واتساب لإتمام الطلب، وشكراً لاختيارك Glow Face.',
//       );
//       setMessageType('success');
//     } catch {
//       setMessage('تعذر فتح واتساب. تحققي من اتصالك بالإنترنت ثم حاولي مرة أخرى.');
//       setMessageType('error');
//     }
//     if (form.products.length === 0) {
//         setMessage('يرجى اختيار تركيبة واحدة على الأقل لإكمال الطلب.');
//         setMessageType('error');
//         return;
//       }
//   }
// //   
//   return (
//     <dialog
//       className="order-dialog"
//       ref={dialogRef}
//       aria-labelledby="order-dialog-title"
//       onClose={onClose}
//       onCancel={onClose}
//       onClick={(event) => {
//         if (event.target === event.currentTarget) onClose();
//       }}
//     >
//       <div className="order-modal-content" dir="rtl" lang="ar">
//         <div className="order-modal-heading">
//           <div>
//             <span className="eyebrow">خطوة بسيطة لبداية رحلتك</span>
//             <h2 id="order-dialog-title">بيانات طلبك</h2>
//             <p>املئي البيانات وسنوصلك مباشرة بمندوبة Glow Face في دولتك.</p>
//           </div>
//           <button
//             className="order-close"
//             type="button"
//             onClick={onClose}
//             aria-label="إغلاق نموذج الطلب"
//           >
//             <span aria-hidden="true">×</span>
//           </button>
//         </div>
//         <form className="order-form" onSubmit={handleSubmit}>
//           <label className="order-field">
//             <span>الاسم <i>*</i></span>
//             <input
//               name="name"
//               type="text"
//               autoComplete="name"
//               value={form.name}
//               onChange={updateField}
//               required
//               maxLength={100}
//               placeholder="اكتبي اسمك الكامل"
//             />
//           </label>
//           <label className="order-field">
//             <span>رقم الهاتف <i>*</i></span>
//             <input
//               name="phone"
//               type="tel"
//               inputMode="tel"
//               autoComplete="tel"
//               value={form.phone}
//               onChange={updateField}
//               required
//               minLength={7}
//               maxLength={24}
//               placeholder="مثال: +249 11 234 5678"
//             />
//           </label>
//           <label className="order-field">
//             <span>رقم احتياط <i>*</i></span>
//             <input
//               name="backupPhone"
//               type="tel"
//               inputMode="tel"
//               value={form.backupPhone}
//               onChange={updateField}
//               required
//               minLength={7}
//               maxLength={24}
//               placeholder="رقم بديل للتواصل"
//             />
//           </label>
//           <label className="order-field">
//             <span>الدولة <i>*</i></span>
//             <select
//               name="country"
//               value={form.country}
//               onChange={updateField}
//               required
//             >
//               <option value="" disabled>اختاري الدولة</option>
//               {countries.map((country) => (
//                 <option value={country} key={country}>{country}</option>
//               ))}
//             </select>
//           </label>
//           <label className="order-field order-field-wide">
//             <span>السكن بالتفصيل <i>*</i></span>
//             <textarea
//               name="address"
//               value={form.address}
//               onChange={updateField}
//               required
//               rows={3}
//               maxLength={500}
//               placeholder="المدينة، الحي، الشارع وأقرب علامة مميزة"
//             />
//           </label>
//             <fieldset
//                 className="order-field order-field-wide order-products-fieldset"
//                 aria-required="true"
//                 >
//                 <legend>نوع التركيبة <i>*</i></legend>
//                 <p className="order-products-hint">يمكنك اختيار أكثر من منتج</p>
//                 <div className="order-product-options">
//                     {products.map((product) => (
//                     <label className="order-product-choice" key={product}>
//                         <input
//                         type="checkbox"
//                         name="products"
//                         value={product}
//                         checked={form.products.includes(product)}
//                         onChange={() => toggleProduct(product)}
//                         />
//                         <span>{product}</span>
//                     </label>
//                     ))}
//                 </div>
//             </fieldset>
//           <label className="order-field">
//             <span>عدد الطلبية <i>*</i></span>
//             <input
//               name="quantity"
//               type="number"
//               inputMode="numeric"
//               min="1"
//               max="99"
//               step="1"
//               value={form.quantity}
//               onChange={updateField}
//               required
//             />
//           </label>
//           <label className="order-field">
//             <span>طرق الدفع <i>*</i></span>
//             <select
//               name="payment"
//               value={form.payment}
//               onChange={updateField}
//               required
//             >
//               <option value="" disabled>اختاري طريقة الدفع</option>
//               {paymentMethods.map((method) => (
//                 <option value={method} key={method}>{method}</option>
//               ))}
//             </select>
//           </label>
//           <label className="order-field order-field-wide">
//             <span>ملاحظات <small>(اختياري)</small></span>
//             <textarea
//               name="notes"
//               value={form.notes}
//               onChange={updateField}
//               rows={2}
//               maxLength={500}
//               placeholder="أي تفاصيل إضافية تحبي تضيفيها؟"
//             />
//           </label>
//           <label className="order-confirm order-field-wide">
//             <input
//               name="confirmed"
//               type="checkbox"
//               checked={form.confirmed}
//               onChange={updateField}
//               required
//             />
//             <span>أقر بأن هذه البيانات صحيحة<i>*</i></span>
//           </label>
//           {message && (
//             <div
//               className={`order-feedback order-feedback-${messageType}`}
//               role={messageType === 'error' ? 'alert' : 'status'}
//               aria-live="polite"
//             >
//               <p>{message}</p>
//               {fallbackLink && messageType === 'error' && (
//                 <a
//                   href={fallbackLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   فتح واتساب وإكمال الإرسال
//                 </a>
//               )}
//             </div>
//           )}
//           <div className="order-form-actions order-field-wide">
//             <button className="btn btn-primary order-submit" type="submit">
//               إرسال الطلب <span aria-hidden="true">←</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// }
// export default OrderRequestForm;

import { useEffect, useRef, useState } from 'react';

const countries = [
  'السودان',
  'مصر',
  'امريكا',
  'كندا',
  'فرنسا',
  'هولندا',
  'بريطانيا',
  'قطر',
  'الإمارات',
  'السعودية',
  'تركيا',
];

const products = ['تركيبة الوجه', 'تركيبة الزبدة', 'تركيبة الجسم', 'المرطب'];

const paymentMethods = [
  'كاش',
  'بنكك',
  'فوري',
  'اووكاش',
  'فودافون كاش',
  'انستا باي',
  'حساب اخر',
];

// إذا كان للدولة أكثر من وكيلة، يُستخدم أول رقم في القائمة.
const whatsappByCountry = {
  السودان: '+249116340339',
  مصر: '+201021638719',
  امريكا: '+17816009747',
  كندا: '+18254409497',
  فرنسا: '+31686069192',
  هولندا: '+31686069192',
  بريطانيا: '+447877278769',
  قطر: '+97470885447',
  الإمارات: '+249965298019',
  السعودية: '+249117082835',
  تركيا: '+905314365015',
};

const initialForm = {
  name: '',
  phone: '',
  backupPhone: '',
  country: '',
  address: '',
  products: [],
  productQuantities: {},
  notes: '',
  payment: '',
  confirmed: false,
};

function getInitialProducts(initialProduct) {
  const selectedProducts = Array.isArray(initialProduct)
    ? initialProduct
    : initialProduct
      ? [initialProduct]
      : [];

  return selectedProducts.filter((product) => products.includes(product));
}

function toEnglishDigits(value) {
  return value
    .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))
    .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)));
}

function OrderRequestForm({ onClose }) {
  const dialogRef = useRef(null);

  const [form, setForm] = useState(() => ({
    ...initialForm,
    products: getInitialProducts(initialForm.products),
    productQuantities: {},
  }));

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [fallbackLink, setFallbackLink] = useState('');

  const totalQuantity = form.products.reduce(
    (total, product) => total + (form.productQuantities[product] || 1),
    0,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  function clearFeedback() {
    setMessage('');
    setMessageType('');
    setFallbackLink('');
  }

  function toggleProduct(product) {
    setForm((current) => {
      const isSelected = current.products.includes(product);
      const nextQuantities = { ...current.productQuantities };

      if (isSelected) {
        delete nextQuantities[product];

        return {
          ...current,
          products: current.products.filter(
            (selectedProduct) => selectedProduct !== product,
          ),
          productQuantities: nextQuantities,
        };
      }

      nextQuantities[product] = 1;

      return {
        ...current,
        products: [...current.products, product],
        productQuantities: nextQuantities,
      };
    });

    clearFeedback();
  }

  function updateProductQuantity(product, change) {
    setForm((current) => {
      const currentQuantity = current.productQuantities[product] || 1;
      const nextQuantity = Math.min(99, currentQuantity + change);
      const nextQuantities = { ...current.productQuantities };

      // إذا وصلت الكمية إلى صفر، يُلغى اختيار هذا المنتج.
      if (nextQuantity <= 0) {
        delete nextQuantities[product];

        return {
          ...current,
          products: current.products.filter(
            (selectedProduct) => selectedProduct !== product,
          ),
          productQuantities: nextQuantities,
        };
      }

      nextQuantities[product] = nextQuantity;

      return {
        ...current,
        productQuantities: nextQuantities,
      };
    });

    clearFeedback();
  }

  function updateField(event) {
    const { name, value, checked, type } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    clearFeedback();
  }

  function handleSubmit(event) {
    event.preventDefault();
    clearFeedback();

    if (form.products.length === 0) {
      setMessage('يرجى اختيار تركيبة واحدة على الأقل لإكمال الطلب.');
      setMessageType('error');
      return;
    }

    const phoneDigits = toEnglishDigits(form.phone).replace(/\D/g, '');
    const backupDigits = toEnglishDigits(form.backupPhone).replace(/\D/g, '');

    if (
      phoneDigits.length < 7 ||
      phoneDigits.length > 15 ||
      backupDigits.length < 7 ||
      backupDigits.length > 15
    ) {
      setMessage('يرجى إدخال رقمي هاتف صحيحين، من 7 إلى 15 رقماً لكل رقم.');
      setMessageType('error');
      return;
    }

    const whatsappNumber = whatsappByCountry[form.country];

    if (!whatsappNumber) {
      setMessage(
        'تعذر العثور على رقم الوكيلة لهذه الدولة. اختاري الدولة مرة أخرى أو تواصلي مع خدمة العملاء.',
      );
      setMessageType('error');
      return;
    }

    const orderItems = form.products
      .map((product) => {
        const quantity = form.productQuantities[product] || 1;
        return `${product}: ${quantity}`;
      })
      .join('\n');

    const orderMessage = [
      'مرحباً Glow Face، أود تأكيد طلب جديد:',
      '',
      `الاسم: ${form.name}`,
      `رقم الهاتف: ${form.phone}`,
      `رقم احتياط: ${form.backupPhone}`,
      `الدولة: ${form.country}`,
      `السكن بالتفصيل: ${form.address}`,
      'المنتجات والكميات:',
      orderItems,
      `إجمالي القطع: ${totalQuantity}`,
      `طرق الدفع: ${form.payment}`,
      `ملاحظات: ${form.notes.trim() || 'لا توجد'}`,
      '',
      'أقر بأن البيانات المدخلة صحيحة.',
    ].join('\n');

    const link = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(orderMessage)}`;
    setFallbackLink(link);

    try {
      const whatsappWindow = window.open(link, '_blank');

      if (!whatsappWindow) {
        setMessage(
          'تم تجهيز طلبك، لكن تعذر فتح واتساب تلقائياً. استخدمي الزر أدناه لإكمال الإرسال.',
        );
        setMessageType('error');
        return;
      }

      whatsappWindow.opener = null;

      setMessage(
        'تم تجهيز طلبك وفتح واتساب للوكيلة. اضغطي «إرسال» داخل واتساب لإتمام الطلب، وشكراً لاختيارك Glow Face.',
      );
      setMessageType('success');
    } catch {
      setMessage(
        'تعذر فتح واتساب. تحققي من اتصالك بالإنترنت ثم حاولي مرة أخرى.',
      );
      setMessageType('error');
    }
  }

  return (
    <dialog
      className="order-dialog"
      ref={dialogRef}
      aria-labelledby="order-dialog-title"
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="order-modal-content" dir="rtl" lang="ar">
        <div className="order-modal-heading">
          <div>
            <span className="eyebrow">خطوة بسيطة لبداية رحلتك</span>
            <h2 id="order-dialog-title">بيانات طلبك</h2>
            <p>املئي البيانات وسنوصلك مباشرة بمندوبة Glow Face في دولتك.</p>
          </div>

          <button
            className="order-close"
            type="button"
            onClick={onClose}
            aria-label="إغلاق نموذج الطلب"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <label className="order-field">
            <span>
              الاسم <i>*</i>
            </span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={updateField}
              required
              maxLength={100}
              placeholder="اكتبي اسمك الكامل"
            />
          </label>

          <label className="order-field">
            <span>
              رقم الهاتف <i>*</i>
            </span>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={updateField}
              required
              minLength={7}
              maxLength={24}
              placeholder="مثال: +249 11 234 5678"
            />
          </label>

          <label className="order-field">
            <span>
              رقم احتياط <i>*</i>
            </span>
            <input
              name="backupPhone"
              type="tel"
              inputMode="tel"
              value={form.backupPhone}
              onChange={updateField}
              required
              minLength={7}
              maxLength={24}
              placeholder="رقم بديل للتواصل"
            />
          </label>

          <label className="order-field">
            <span>
              الدولة <i>*</i>
            </span>
            <select
              name="country"
              value={form.country}
              onChange={updateField}
              required
            >
              <option value="" disabled>
                اختاري الدولة
              </option>
              {countries.map((country) => (
                <option value={country} key={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <label className="order-field order-field-wide">
            <span>
              السكن بالتفصيل <i>*</i>
            </span>
            <textarea
              name="address"
              value={form.address}
              onChange={updateField}
              required
              rows={3}
              maxLength={500}
              placeholder="المدينة، الحي، الشارع وأقرب علامة مميزة"
            />
          </label>

          <fieldset className="order-field order-field-wide order-products-fieldset">
            <legend>
              نوع التركيبة <i>*</i>
            </legend>

            <p className="order-products-hint" id="order-products-help">
              اختاري منتجاً ثم حددي الكمية. زر الناقص عند 1 يلغي اختيار المنتج.
            </p>

            <div
              className="order-product-options"
              aria-describedby="order-products-help"
            >
              {products.map((product) => {
                const isSelected = form.products.includes(product);
                const quantity = form.productQuantities[product] || 1;

                return (
                  <div
                    className={`order-product-choice${isSelected ? ' is-selected' : ''}`}
                    key={product}
                  >
                    <label className="order-product-label">
                      <input
                        type="checkbox"
                        name="products"
                        value={product}
                        checked={isSelected}
                        onChange={() => toggleProduct(product)}
                      />
                      <span>{product}</span>
                    </label>

                    {isSelected && (
                      <div
                        className="order-product-stepper"
                        role="group"
                        aria-label={`كمية ${product}`}
                        dir="ltr"
                      >
                        <button
                          type="button"
                          onClick={() => updateProductQuantity(product, -1)}
                          aria-label={`تقليل كمية ${product}`}
                        >
                          −
                        </button>

                        <output
                          className="order-product-quantity"
                          aria-live="polite"
                          aria-label={`الكمية: ${quantity}`}
                        >
                          {quantity}
                        </output>

                        <button
                          type="button"
                          onClick={() => updateProductQuantity(product, 1)}
                          disabled={quantity >= 99}
                          aria-label={`زيادة كمية ${product}`}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {form.products.length > 0 && (
              <div className="order-products-total" aria-live="polite">
                إجمالي القطع: <strong>{totalQuantity}</strong>
              </div>
            )}
          </fieldset>

          <label className="order-field">
            <span>
              طرق الدفع <i>*</i>
            </span>
            <select
              name="payment"
              value={form.payment}
              onChange={updateField}
              required
            >
              <option value="" disabled>
                اختاري طريقة الدفع
              </option>
              {paymentMethods.map((method) => (
                <option value={method} key={method}>
                  {method}
                </option>
              ))}
            </select>
          </label>

          <label className="order-field order-field-wide">
            <span>
              ملاحظات <small>(اختياري)</small>
            </span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={updateField}
              rows={2}
              maxLength={500}
              placeholder="أي تفاصيل إضافية تحبي تضيفيها؟"
            />
          </label>

          <label className="order-confirm order-field-wide">
            <input
              name="confirmed"
              type="checkbox"
              checked={form.confirmed}
              onChange={updateField}
              required
            />
            <span>
              أقر بأن هذه البيانات صحيحة<i>*</i>
            </span>
          </label>

          {message && (
            <div
              className={`order-feedback order-feedback-${messageType}`}
              role={messageType === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              <p>{message}</p>

              {fallbackLink && messageType === 'error' && (
                <a
                  href={fallbackLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  فتح واتساب وإكمال الإرسال
                </a>
              )}
            </div>
          )}

          <div className="order-form-actions order-field-wide">
            <button className="btn btn-primary order-submit" type="submit">
              إرسال الطلب <span aria-hidden="true">←</span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default OrderRequestForm;