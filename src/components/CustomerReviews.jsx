import { MessageCircle, Quote, Sparkles, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    reviewer: "عميلة Glow Face",
    text: "عنجد م عارفة اشكرك كيف علي الفيس الجميل دا بقيت نجفة بالرقم انو م قاعدة استخدمها يوميا بالذات اليومين ديل وشي ضرب ولمن امشي حتة اي زول بسالني يقول قاعدة تعملي شنو الكريم رهيب جنس رهابة مشاءالله شكراً جدا جدا جدا 💙💚💖❤️💜😂💝",
    rating: 5, // أدخلي تقييمًا فعليًا من 1 إلى 5 عند توفره
  },
  {
    id: 2,
    reviewer: "عميلة Glow Face",
    text: "ابشرك الليلة تميت ١٠ يوم مع المرطب والتركيبة ماشاء الله طفت لي الحبوب وضيقت المسام وخلته ناعم ونضيف وفيهو نوررة 😍 😍 😍 تسلم يدك تتلف من حريير حأواصل فيهو للنهاية لحد ما يبقى فاتح اكتر ومشدود ويلمع اكتر ❤️ 🌹 🌹 ❤️ ❤️",
    rating: 5,
  },
  {
    id: 3,
    reviewer: "عميلة Glow Face",
    text: "السلام عليكم ورحمة وبركاته عايزة اكتب ريفيو عن تركيبة دكتورة نجاة   والله م مجاملة لكن كلمة حق في المنتج حقها انا وشي دهني وفيهو آثار وتصبغات وندوب لما ملامح وشي م كانت ظاهرة ومشيت لي كم دكتور واستخدمت منتجات طبية ومن أحسن الماركات العالمية   لكن ربنا يشهد ذي تركيبتها انا م حصل لقيت نتيجة وبتظهر من اول اسبوع الفرق ،   اولا شي كل التصبغات اختفت الحمدلله والشكرلله ولون وشي بقا موحد وبقا فيهو نورة ونعومة ونضاااااارة الحمدلله والشكر لله.   ربنا يفتحها عليها ان شاءالله ويبارك في رزقها ويوسعها عليها   صراحه كنت بشوف اعلان التركيبة هنا في القروب وكنت مترددة لكن قلتا اجرب بعد شوفتا الريفوز عن التركيبة والحمدلله",
    rating: 5,
  },
  {
    id: 4,
    reviewer: "عميلة Glow Face",
    text: "السلام عليكم من لا يشكر الناس لا يشكر الله حابه اشكرك واشكر الدكتوره على التركيبه الاررررررررهب من رهيبه دي ❤️   وشي كااان باهت وكئيب وكلو تصبغات وضربة شمس قديمه شديد ودهنيات ما ليها اول ولا اخر   احكي ليك عن النعومه ولا النوره ولا اثار الحبوب اللي ليها سنين طويله شديد في خدي ما عايزه تروح ويئست منها عديل 😭  حتى احماض الفواكه ما شالت لي الاثار ولا التصبغات   استعملت التركيبه والمرطب وما كنت منتظمه حالتي   الله يبارك ليكم ف شغلكم ويفتحها عليكم من اوسع ابواب رزقو يااااااارب ❤️ ❤️ ❤️",
    rating: 5,
  },
];

function ReviewStars({ rating }) {
  const filledStars = rating ?? 0;

  return (
    <div
      className="flex items-center gap-1"
      dir="ltr"
      aria-label={
        rating
          ? `تقييم ${rating} من 5 نجوم`
          : "التقييم غير محدد حتى الآن"
      }
    >
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < filledStars;

        return (
          <Star
            key={index}
            aria-hidden="true"
            className={
              isFilled
                ? "h-[18px] w-[18px] fill-amber-400 text-amber-400"
                : "h-[18px] w-[18px] text-[#e4bfd0]"
            }
            strokeWidth={2}
          />
        );
      })}
    </div>
  );
}

export default function WrittenReviewsSection() {
  return (
    <section
      id="results"
      dir="rtl"
      lang="ar"
      aria-labelledby="written-reviews-title"
      className="relative overflow-hidden bg-[#fff0f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#f8d9e8] opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#f9d5e6] opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl">
        <header className="mb-9 text-center sm:mb-11">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dd8593] bg-white/80 px-4 py-2 text-sm font-semibold text-[#d51b82] shadow-sm">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            من رسائل عميلاتنا
          </span>

          <h2
            id="written-reviews-title"
            className="mt-5 text-3xl font-extrabold leading-tight text-[#563343] sm:text-4xl"
          >
            تجاربهن، بكلماتهن
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#876b77] sm:text-base">
            مقتطفات من رسائل شاركتها عميلات Glow Face.
          </p>
        </header>

        <div className="space-y-4 sm:space-y-5">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="overflow-hidden rounded-2xl border border-[#f0cddd] bg-white shadow-[0_8px_24px_rgba(115,43,81,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(115,43,81,0.13)]"
            >
              <div className="flex items-center justify-between gap-3 bg-[#dd8593] px-4 py-3 text-white sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      strokeWidth={2}
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold sm:text-base">
                      {review.reviewer}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/80">
                      رسالة من عميلة
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                  Glow Face
                </span>
              </div>

              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-start gap-3">
                  <Quote
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[#e89abd]"
                    strokeWidth={2.2}
                  />

                  <p className="text-base font-medium leading-8 text-[#563343] sm:text-lg sm:leading-9">
                    {review.text}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#f6e6ed] pt-3">
                  <span className="text-xs text-[#a0828f]">
                    تقييم العميلة
                  </span>
                  <ReviewStars rating={review.rating} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}