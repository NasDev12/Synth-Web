import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Gamepad2,
  Globe,
  Code2,
  ShieldCheck,
  BrainCircuit,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Check,
  Languages,
} from "lucide-react";
import heroBg from "@/assets/hero.jpg";
import logo from "@/assets/synth-logo.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synth Studio — استوديو سينث للحلول البرمجية" },
      { name: "description", content: "نصمم ونطوّر منتجات رقمية استثنائية: ألعاب، تطبيقات، أنظمة ذكاء اصطناعي، وحلول أمن سيبراني." },
      { property: "og:title", content: "Synth Studio — استوديو سينث" },
      { property: "og:description", content: "حلول برمجية متكاملة بمعايير عالمية." },
    ],
  }),
  component: Index,
});

type Lang = "ar" | "en";

const translations = {
  ar: {
    dir: "rtl" as const,
    docTitle: "Synth Studio — استوديو سينث للحلول البرمجية",
    brandSub: "استوديو سينث",
    nav: [
      { href: "#about", label: "من نحن" },
      { href: "#services", label: "خدماتنا" },
      { href: "#creations", label: "إبداعاتنا" },
      { href: "#contact", label: "تواصل" },
    ],
    langBtn: "EN",
    startProject: "ابدأ مشروعك",
    availableBadge: "متاحون لمشاريع جديدة في 2026",
    heroTitle1: "نصنع البرمجيات",
    heroTitle2: "بمعايير المستقبل",
    heroDescPre: "استوديو سينث — شركة تقنية أسسها ",
    heroFounder: "ناصر الحارثي",
    heroDescPost: "، متخصصون في تطوير الألعاب، الويب، الذكاء الاصطناعي، والأمن السيبراني.",
    exploreWork: "استكشف أعمالنا",
    ourServices: "تعرّف على خدماتنا",
    stats: [
      { value: "+6", label: "مشروع منجز" },
      { value: "+6", label: "عميل سعيد" },
      { value: "5", label: "سنوات خبرة" },
      { value: "24/7", label: "دعم متواصل" },
    ],
    aboutTag: "من نحن",
    aboutTitle1: "رؤية تقنية",
    aboutTitle2: "وتنفيذ بلا حدود",
    aboutP1Pre: "تأسست ",
    aboutP1Post: " على يد المهندس ",
    aboutP1Post2: " بهدف بناء جيل جديد من المنتجات الرقمية التي تجمع بين الجماليات العالمية والهوية العربية.",
    aboutP2: "فريقنا يضم نخبة من المطورين والمصممين الذين يؤمنون بأن البرمجيات الحقيقية لا تُكتب فقط، بل تُصاغ كما تُصاغ الأعمال الفنية — بدقة، شغف، واهتمام بأدق التفاصيل.",
    aboutList: [
      "فريق متعدد التخصصات بخبرة عالمية",
      "منهجية تطوير رشيقة وشفافة",
      "التزام كامل بالجودة والمواعيد",
      "دعم مستمر بعد الإطلاق",
    ],
    founderName: "ناصر الحارثي",
    founderRole: "المؤسس والرئيس التنفيذي",
    founderQuote: "«نؤمن أن التقنية ليست أدوات فحسب، بل لغة جديدة نُعبّر بها عن طموحاتنا. في سينث، نبني المستقبل سطرًا تلو الآخر.»",
    servicesTag: "خدماتنا",
    servicesTitle1: "حلول ",
    servicesTitle2: "متكاملة",
    servicesDesc: "من الفكرة الأولى وحتى الإطلاق وما بعده، نوفّر مجموعة كاملة من الخدمات التقنية.",
    creationsTag: "إبداعاتنا",
    creationsTitlePre: "من ",
    creationsTitleGrad: "إبداعاتنا",
    creationsDesc: "مجموعة من المشاريع والإضافات والخوادم التي أطلقناها وعملنا عليها.",
    visitLink: "زيارة الرابط",
    contactTag: "تواصل معنا",
    contactTitle1: "لديك فكرة؟",
    contactTitle2: "لنبنها سويًا.",
    contactDesc: "نسعد بسماع تفاصيل مشروعك. تواصل معنا وسنرد عليك خلال 24 ساعة.",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    websiteLabel: "الموقع الشخصي",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "موضوع المشروع",
    formMessage: "أخبرنا عن مشروعك...",
    formSubmit: "إرسال الرسالة",
    footerLinks: [
      { href: "#about", label: "من نحن" },
      { href: "#services", label: "خدماتنا" },
      { href: "#contact", label: "تواصل" },
    ],
    services: [
      {
        icon: Gamepad2,
        title: "تطوير الألعاب",
        desc: "نبني تجارب لعب غامرة لمنصات الحاسب والجوال والواقع الافتراضي باستخدام Unity وUnreal Engine.",
        features: ["محركات AAA", "تصميم مستويات", "نشر متعدد المنصات"],
        id: "game-dev",
      },
      {
        icon: Globe,
        title: "تطوير الويب",
        desc: "مواقع وتطبيقات ويب فائقة السرعة بواجهات أنيقة تجمع بين الجمال والأداء العالي.",
        features: ["Next.js / React", "تصميم متجاوب", "تحسين SEO"],
        id: "web-dev",
      },
      {
        icon: Code2,
        title: "تطوير البرمجيات",
        desc: "أنظمة مؤسسية مخصصة، تطبيقات سطح المكتب، وحلول SaaS قابلة للتوسع.",
        features: ["معمارية سحابية", "APIs قوية", "DevOps متكامل"],
        id: "software-dev",
      },
      {
        icon: ShieldCheck,
        title: "الأمن السيبراني",
        desc: "حماية شاملة لبنيتك التحتية من خلال اختبار الاختراق والمراقبة الذكية.",
        features: ["اختبار الاختراق", "مراجعة الشيفرة", "استجابة الحوادث"],
        id: "cybersecurity",
      },
      {
        icon: BrainCircuit,
        title: "حلول الذكاء الاصطناعي",
        desc: "نماذج تعلّم آلي مخصصة، وكلاء AI، ومعالجة لغة طبيعية باللغة العربية.",
        features: ["LLMs مخصصة", "رؤية حاسوبية", "أتمتة ذكية"],
        id: "ai",
      },
      {
        icon: Sparkles,
        title: "تصميم المنتج",
        desc: "تصميم UX/UI متقدم يركّز على المستخدم العربي بمعايير عالمية.",
        features: ["أبحاث المستخدم", "نماذج تفاعلية", "نظام تصميم متكامل"],
        id: "design",
      },
    ],
    creations: [
      {
        title: "PerfectMOTD Plugin",
        desc: "إضافة احترافية لتخصيص رسالة اليوم (MOTD) لخوادم Minecraft — تصميم من تطوير ناصر.",
        tag: "Minecraft • Plugin",
        url: "https://builtbybit.com/resources/perfectmotd-plugin.66672/",
      },
      {
        title: "Java Developer Website",
        desc: "موقع تعريفي احترافي للمطورين معروض للبيع، بتصميم نظيف وأداء عالٍ.",
        tag: "Web • Template",
        url: "https://builtbybit.com/resources/java-developer-website.66009/",
      },
      {
        title: "SynthDev TabList Configuration",
        desc: "إعداد متقدّم لقائمة اللاعبين (TabList) لخوادم Minecraft بتصميم مميز.",
        tag: "Minecraft • Config",
        url: "https://builtbybit.com/resources/synthdev-studio-tablist.64129/",
      },
      {
        title: "RevonMC Server",
        desc: "سيرفر ماينكرفت تأسس في مارس 2026، ويُعتبر من أقوى السيرفرات في اللعبة — مشهور بلعبة P-BoxPvP بتصميم خاص.",
        tag: "Minecraft • Server",
        url: "https://discord.gg/revonmc",
      },
      {
        title: "Simple Game",
        desc: "لعبة بسيطة من تطويرنا — تجربة ممتعة بتصميم خفيف.",
        tag: "Game",
        url: "#",
      },
      {
        title: "Ask All You Can",
        desc: "مساعد ذكاء اصطناعي متكامل — اسأل ما تشاء واحصل على إجابات ذكية ومبتكرة.",
        tag: "AI • Assistant",
        url: "https://preview--ask-all-you-can.lovable.app/",
      },
      {
        title: "na99r.xyz",
        desc: "الموقع التعريفي الشخصي للمؤسس ناصر الحارثي.",
        tag: "Personal • Web",
        url: "https://na99r.xyz/",
      },
    ],
  },
  en: {
    dir: "ltr" as const,
    docTitle: "Synth Studio — Software Solutions",
    brandSub: "Synth Studio",
    nav: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#creations", label: "Creations" },
      { href: "#contact", label: "Contact" },
    ],
    langBtn: "ع",
    startProject: "Start a Project",
    availableBadge: "Available for new projects in 2026",
    heroTitle1: "We Craft Software",
    heroTitle2: "To Tomorrow's Standards",
    heroDescPre: "Synth Studio — a tech company founded by ",
    heroFounder: "Nasser Alharthi",
    heroDescPost: ", specializing in game development, web, AI, and cybersecurity.",
    exploreWork: "Explore Our Work",
    ourServices: "Our Services",
    stats: [
      { value: "+6", label: "Projects Delivered" },
      { value: "+6", label: "Happy Clients" },
      { value: "5", label: "Years of Experience" },
      { value: "24/7", label: "Ongoing Support" },
    ],
    aboutTag: "About Us",
    aboutTitle1: "A Technical Vision,",
    aboutTitle2: "Executed Without Limits",
    aboutP1Pre: "",
    aboutP1Post: " was founded by engineer ",
    aboutP1Post2: " with the goal of building a new generation of digital products that blend global aesthetics with authentic identity.",
    aboutP2: "Our team brings together elite developers and designers who believe real software isn't just written — it's crafted the way art is made: with precision, passion, and attention to the finest details.",
    aboutList: [
      "A multidisciplinary team with global experience",
      "Agile and transparent development methodology",
      "Full commitment to quality and deadlines",
      "Continuous post-launch support",
    ],
    founderName: "Nasser Alharthi",
    founderRole: "Founder & CEO",
    founderQuote: "\u201CWe believe technology isn't just tools — it's a new language for our ambitions. At Synth, we build the future one line at a time.\u201D",
    servicesTag: "Our Services",
    servicesTitle1: "Complete ",
    servicesTitle2: "Solutions",
    servicesDesc: "From the first idea to launch and beyond, we provide a full range of technical services.",
    creationsTag: "Creations",
    creationsTitlePre: "From Our ",
    creationsTitleGrad: "Creations",
    creationsDesc: "A selection of the projects, plugins, and servers we've launched and worked on.",
    visitLink: "Visit Link",
    contactTag: "Contact Us",
    contactTitle1: "Got an idea?",
    contactTitle2: "Let's build it together.",
    contactDesc: "We'd love to hear about your project. Reach out and we'll reply within 24 hours.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    websiteLabel: "Personal Website",
    formName: "Full name",
    formEmail: "Email address",
    formSubject: "Project subject",
    formMessage: "Tell us about your project...",
    formSubmit: "Send Message",
    footerLinks: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
    ],
    services: [
      {
        icon: Gamepad2,
        title: "Game Development",
        desc: "We build immersive gaming experiences for PC, mobile, and VR using Unity and Unreal Engine.",
        features: ["AAA engines", "Level design", "Multi-platform publishing"],
        id: "game-dev",
      },
      {
        icon: Globe,
        title: "Web Development",
        desc: "Blazing-fast websites and web apps with elegant interfaces that combine beauty with high performance.",
        features: ["Next.js / React", "Responsive design", "SEO optimization"],
        id: "web-dev",
      },
      {
        icon: Code2,
        title: "Software Development",
        desc: "Custom enterprise systems, desktop applications, and scalable SaaS solutions.",
        features: ["Cloud architecture", "Robust APIs", "Integrated DevOps"],
        id: "software-dev",
      },
      {
        icon: ShieldCheck,
        title: "Cybersecurity",
        desc: "End-to-end protection for your infrastructure through penetration testing and intelligent monitoring.",
        features: ["Penetration testing", "Code review", "Incident response"],
        id: "cybersecurity",
      },
      {
        icon: BrainCircuit,
        title: "AI Solutions",
        desc: "Custom machine learning models, AI agents, and natural language processing — including Arabic.",
        features: ["Custom LLMs", "Computer vision", "Intelligent automation"],
        id: "ai",
      },
      {
        icon: Sparkles,
        title: "Product Design",
        desc: "Advanced UX/UI design focused on the user, built to world-class standards.",
        features: ["User research", "Interactive prototypes", "Complete design systems"],
        id: "design",
      },
    ],
    creations: [
      {
        title: "PerfectMOTD Plugin",
        desc: "A professional plugin for customizing the Message of the Day (MOTD) on Minecraft servers — designed and developed by Nasser.",
        tag: "Minecraft • Plugin",
        url: "https://builtbybit.com/resources/perfectmotd-plugin.66672/",
      },
      {
        title: "Java Developer Website",
        desc: "A professional portfolio website for developers, listed for sale — clean design and high performance.",
        tag: "Web • Template",
        url: "https://builtbybit.com/resources/java-developer-website.66009/",
      },
      {
        title: "SynthDev TabList Configuration",
        desc: "An advanced TabList configuration for Minecraft servers with a distinctive design.",
        tag: "Minecraft • Config",
        url: "https://builtbybit.com/resources/synthdev-studio-tablist.64129/",
      },
      {
        title: "RevonMC Server",
        desc: "A Minecraft server founded in March 2026, considered one of the strongest servers in the game — famous for its custom-designed P-BoxPvP.",
        tag: "Minecraft • Server",
        url: "https://discord.gg/revonmc",
      },
      {
        title: "Simple Game",
        desc: "A simple game of our own making — a fun, lightweight experience.",
        tag: "Game",
        url: "#",
      },
      {
        title: "Ask All You Can",
        desc: "A full AI assistant — ask anything and get smart, creative answers.",
        tag: "AI • Assistant",
        url: "https://preview--ask-all-you-can.lovable.app/",
      },
      {
        title: "na99r.xyz",
        desc: "The personal website of founder Nasser Alharthi.",
        tag: "Personal • Web",
        url: "https://na99r.xyz/",
      },
    ],
  },
};

function LangToggle({ lang, onToggle, className }: { lang: Lang; onToggle: () => void; className?: string }) {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-semibold hover:bg-card transition-all ${className ?? ""}`}
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4 text-accent" />
      <span dir="ltr">{lang === "ar" ? "EN" : "عربي"}</span>
    </button>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "ar";
    return (localStorage.getItem("synth-lang") as Lang) || "ar";
  });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = t.docTitle;
    localStorage.setItem("synth-lang", lang);
  }, [lang, t.dir, t.docTitle]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-5 bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img src={logo} alt="Synth Studio" className="w-11 h-11 rounded-xl drop-shadow-[0_0_20px_oklch(0.62_0.25_295/0.7)] group-hover:scale-110 transition-transform" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight">Synth Studio</span>
              <span className="text-[10px] text-muted-foreground">{t.brandSub}</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-6px] after:right-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <LangToggle lang={lang} onToggle={toggleLang} />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-l from-primary to-accent text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_30px_oklch(0.62_0.25_295/0.6)] transition-all"
            >
              {t.startProject}
              <Arrow className="w-4 h-4" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LangToggle lang={lang} onToggle={toggleLang} />
            <button className="text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden glass mx-6 mt-3 rounded-2xl p-6 flex flex-col gap-4 animate-fade-up">
            {t.nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-gradient-to-l from-primary to-accent text-primary-foreground text-center py-3 rounded-full text-sm font-semibold">
              {t.startProject}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
            <span className="text-xs text-muted-foreground">{t.availableBadge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-up">
            {t.heroTitle1}
            <br />
            <span className="text-gradient">{t.heroTitle2}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {t.heroDescPre}
            <span className="text-foreground font-semibold">{t.heroFounder}</span>
            {t.heroDescPost}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#creations" className="group bg-gradient-to-l from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_40px_oklch(0.62_0.25_295/0.6)] transition-all inline-flex items-center gap-2">
              {t.exploreWork}
              <Arrow className="w-4 h-4 group-hover:-translate-x-1 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="glass px-8 py-4 rounded-full font-semibold hover:bg-card transition-all">
              {t.ourServices}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 max-w-4xl mx-auto">
            {t.stats.map((s, i) => (
              <div key={i} className="card-premium rounded-2xl p-6 animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-black text-gradient">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">{t.aboutTag}</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
              {t.aboutTitle1}
              <br />
              <span className="text-gradient">{t.aboutTitle2}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t.aboutP1Pre}
              <span className="text-foreground font-semibold">Synth Studio</span>
              {t.aboutP1Post}
              <span className="text-foreground font-semibold">{t.founderName}</span>
              {t.aboutP1Post2}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.aboutP2}</p>
            <ul className="space-y-3">
              {t.aboutList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-l from-primary to-accent flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="card-premium rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl animate-glow-pulse" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow">
                  <span className="text-3xl font-black text-primary-foreground">{lang === "ar" ? "ن" : "N"}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t.founderName}</h3>
                <p className="text-accent text-sm mb-4">{t.founderRole}</p>
                <p className="text-muted-foreground leading-relaxed">{t.founderQuote}</p>
                <div className="mt-6 pt-6 border-t border-border flex gap-4">
                  <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"><Github className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">{t.servicesTag}</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.servicesTitle1}
              <span className="text-gradient">{t.servicesTitle2}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.servicesDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="card-premium rounded-3xl p-8 group hover:-translate-y-2 hover:border-primary/50"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow transition-all">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CREATIONS */}
      <section id="creations" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">{t.creationsTag}</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4">
                {t.creationsTitlePre}
                <span className="text-gradient">{t.creationsTitleGrad}</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">{t.creationsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.creations.map((c) => (
              <a
                key={c.title}
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-premium rounded-3xl p-8 group hover:-translate-y-2 hover:border-primary/50 transition-all flex flex-col"
              >
                <span className="text-xs text-accent font-mono mb-3" dir="ltr">{c.tag}</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient" dir="auto">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {t.visitLink}
                  <Arrow className="w-4 h-4 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="card-premium rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-glow-pulse" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />

            <div className="relative grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">{t.contactTag}</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
                  {t.contactTitle1}
                  <br />
                  <span className="text-gradient">{t.contactTitle2}</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-10">{t.contactDesc}</p>

                <div className="space-y-5">
                  <a href="mailto:nassermh.alharthy@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:glow transition-all">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{t.emailLabel}</div>
                      <div className="font-semibold" dir="ltr">nassermh.alharthy@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+96892411172" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:glow transition-all">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{t.phoneLabel}</div>
                      <div className="font-semibold" dir="ltr">92411172</div>
                    </div>
                  </a>
                  <a href="https://na99r.xyz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:glow transition-all">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{t.websiteLabel}</div>
                      <div className="font-semibold" dir="ltr">na99r.xyz</div>
                    </div>
                  </a>
                </div>

              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t.formName}
                    className="w-full glass rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={t.formEmail}
                    className="w-full glass rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder={t.formSubject}
                  className="w-full glass rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  rows={6}
                  placeholder={t.formMessage}
                  className="w-full glass rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-l from-primary to-accent text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_40px_oklch(0.62_0.25_295/0.6)] transition-all inline-flex items-center justify-center gap-2"
                >
                  {t.formSubmit}
                  <Arrow className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Synth Studio" className="w-9 h-9 rounded-lg" />
            <span className="font-bold">Synth Studio</span>
            <span className="text-muted-foreground text-sm">© 2026</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {t.footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
