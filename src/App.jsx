
import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter, Link, NavLink, Route, Routes, useLocation,
} from "react-router-dom";
import {
   ArrowRight,
  ArrowUpRight,
  ChefHat,
  Heart,
  Menu as MenuIcon,
  MessageCircle,
  Search,
  Star,
  X,
} from "lucide-react";
import * as menuData from "./data/menu";
import "./App.css";

const PHONE = "917407224410";
const REVIEW = "https://maps.app.goo.gl/CF5BEdBvNj9ULXHY6?g_st=aw";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61591407665103";
const INSTAGRAM = "https://www.instagram.com/bandanaskitchen?igsh=MWV1Nms1b285bnRwNw==";
const ARTWORK = "https://notsomighty.vercel.app/";

const menuItems = menuData.menuItems ?? [];
const categoryLabels = menuData.categoryLabels ?? {};

const foodPhotos = [
  { name: "Prawn Special", image: "prawn.jpg" },
  { name: "Mutton Special", image: "mutton.jpg" },
  { name: "Rui Chop", image: "rui_chop.jpg" },
  { name: "Chilli Chicken", image: "chilichicken.jpg" },
  { name: "Potoler Dolma", image: "potoler_dolma.jpg" },
  { name: "Fish Rezala", image: "fish_rezala.jpg" },
  { name: "Egg Devil", image: "egg_davil.jpg" },
  { name: "Doi Chicken", image: "doi_chicken.jpg" },
];

const thalis = [
  {
    name: "Veg Thali",
    price: 130,
    type: "Vegetarian",
    contents: [
      "Rice", "Dal", "Sabji 1 (Chhanar Kofta / Sukto)",
      "Sabji 2", "Bhaja", "Doi / Chutney",
    ],
  },
  {
    name: "Rui Thali",
    price: 150,
    type: "Fish",
    contents: [
      "Rice", "Dal", "Sabji 1", "Bhaja",
      "Rui Kaliya (100 g)", "Doi / Chutney",
    ],
  },
  {
    name: "Katla Thali",
    price: 160,
    type: "Fish",
    contents: [
      "Rice", "Dal", "Sabji 1", "Bhaja",
      "Katla Kaliya (100 g)", "Doi / Chutney",
    ],
  },
  {
    name: "Egg Thali",
    price: 120,
    type: "Egg",
    contents: [
      "Rice", "Dal", "Sabji 1", "Bhaja",
      "Egg Curry (2 pieces)", "Doi / Chutney",
    ],
  },
  {
    name: "Chicken Thali",
    price: 150,
    type: "Chicken",
    contents: [
      "Rice", "Dal", "Sabji 1", "Bhaja",
      "Chicken Kosha (2 pieces)", "Doi / Chutney",
    ],
  },
];

const combos = [
  {
    name: "Classic Chicken Kosha Combo",
    price: 350,
    label: "A festive favourite",
    contents: [
      "Egg Devil", "Basanti Pulao", "Chicken Kosha",
      "Kheer", "Mouth Freshener",
    ],
  },
  {
    name: "Gondhoraj Chicken Combo",
    price: 299,
    label: "A fragrant Bengali feast",
    contents: [
      "Egg Devil", "Basanti Pulao", "Gondhoraj Chicken",
      "Sweet", "Mouth Freshener",
    ],
  },
  {
    name: "Mutton Gorgora Special Combo",
    price: 550,
    label: "Something extra special",
    contents: [
      "Choose one starter: Rui Chop / Kada Chingri Bora / Egg Devil",
      "Choose one: Steamed Basmati Rice / Afghani Chicken Pulao",
      "Mutton Gorgora", "Chutney", "Sweet",
    ],
  },
];

function wa(message = "") {
  return `https://wa.me/${PHONE}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

function OrderButton({ name, className = "" }) {
  return (
    <a
      className={`order-button ${className}`}
      href={wa(`Hello Bandana's Kitchen! I'd like to order ${name}. Please confirm availability and the total.`)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={17} />
      Order on WhatsApp
      <ArrowUpRight size={16} />
    </a>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Brand() {
  return (
    <Link to="/" className="brand">
      <img src="/images/favicon.png" alt="" />
      <span>
        <strong>Bandana's</strong>
        <small>KITCHEN</small>
      </span>
    </Link>
  );
}


const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/thalis", label: "Thalis" },
  { to: "/combos", label: "Combos" },
  { to: "/cakes-cookies", label: "Cakes & Cookies" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
];


function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="announcement">
        ✳ EVERY MEAL, A MEMORY OF HOME ✳
      </div>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-order" href={wa()} target="_blank" rel="noreferrer">
          Order Now <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label} <ArrowUpRight size={18} />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, first, accent, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{first} <em>{accent}</em></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">A LITTLE KITCHEN. A LOT OF LOVE.</span>
          <h1>A taste of <em>home,</em> in every bite.</h1>
          <p>
            Authentic homemade Bengali flavours, comforting favourites,
            and the warmth of a meal made with love.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-dark" to="/menu">
              Explore the Menu <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" to="/thalis">
              Discover Our Thalis <ArrowRight size={17} />
            </Link>
          </div>
          <div className="bengali-line">
            <span lang="bn">ঘরের রান্না, ভালোবাসার ছোঁয়া</span>
            <small>Home-cooked food, touched with love.</small>
          </div>
        </div>
        <div className="hero-artwork">
          <img src="/images/hero.jpg" alt="Bandana's Kitchen original artwork" />
        </div>
      </div>
    </section>
  );
}

function ExploreWays() {
  const options = [
    {
      number: "01",
      eyebrow: "YOUR EVERYDAY CRAVINGS",
      name: "À La Carte",
      text: "Explore the full kitchen menu, from comforting classics to Bengali favourites.",
      to: "/menu",
      cta: "View Menu",
      className: "explore-menu",
      symbol: "✳",
    },
    {
      number: "02",
      eyebrow: "A COMPLETE HOMEMADE MEAL",
      name: "Bengali Thalis",
      text: "Rice, dal, sides and a delicious main, all together on one plate.",
      to: "/thalis",
      cta: "Explore Thalis",
      className: "explore-thali",
      symbol: "✿",
    },
    {
      number: "03",
      eyebrow: "MORE TO CELEBRATE",
      name: "Special Combos",
      text: "Thoughtfully paired dishes for celebrations and special meals.",
      to: "/combos",
      cta: "See Combos",
      className: "explore-combo",
      symbol: "❋",
    },
  ];

  return (
    <section className="explore-section">
      <div className="container">
        <SectionTitle
          eyebrow="WHAT ARE YOU CRAVING?"
          first="Find your kind of"
          accent="comfort."
          description="Three delicious ways to enjoy Bandana's Kitchen."
        />
        <div className="explore-grid">
          {options.map((option) => (
            <Link to={option.to} className={`explore-card ${option.className}`} key={option.to}>
              <div className="explore-card-top">
                <span>{option.number} / 03</span>
                <span className="explore-symbol">{option.symbol}</span>
              </div>
              <div>
                <span className="explore-eyebrow">{option.eyebrow}</span>
                <h3>{option.name}</h3>
                <p>{option.text}</p>
                <span className="explore-cta">
                  {option.cta} <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedFood() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-top">
          <SectionTitle
          eyebrow="FRESH FROM OUR KITCHEN"
          first="A little taste of"
          accent="home."
          description="Familiar Bengali flavours, cherished recipes, and the comfort of something homemade."
        />
          <Link className="text-link" to="/menu">
            Full Menu <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="food-grid">
          {foodPhotos.map((food) => (
            <Link to="/menu" className="food-card" key={food.image}>
              <div className="food-photo">
                <img src={`/images/${food.image}`} alt={food.name} loading="lazy" />
              </div>
              <div className="food-card-bottom">
                <h3>{food.name}</h3>
                <span><ArrowUpRight size={18} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeThaliSpotlight() {
  return (
    <section className="spotlight-section">
      <div className="container spotlight-grid">
        <div className="spotlight-copy">
          <span className="eyebrow">THE COMFORT OF A COMPLETE MEAL</span>
          <h2>One plate. <em>So much love.</em></h2>
          <p>
            Discover our Bengali thalis, thoughtfully put together
            for the comfort of a home-cooked lunch or dinner.
          </p>
          <div className="thali-offer">
  <div className="thali-offer-price">
    <span>STARTING AT</span>
    <strong>₹120</strong>
  </div>

  <div className="thali-offer-info">
    <strong>Homemade Bengali Thalis</strong>
    <span>Five comforting choices</span>
  </div>
</div>

<Link className="btn btn-dark spotlight-btn" to="/thalis">
  See All Thalis <ArrowRight size={18} />
</Link>
        </div>
        <div className="spotlight-art">
          <div className="spotlight-circle">
            <span>ঘরের রান্না</span>
            <strong>THE THALI<br />CLUB</strong>
            <small>MADE WITH LOVE ✳</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetBandana() {
  return (
    <section className="meet-section">
      <div className="container meet-grid">
        <div className="meet-photo">
          <img src="/images/mother.jpg" alt="Bandana, the heart behind Bandana's Kitchen" loading="lazy" />
        </div>
        <div className="meet-copy">
          <span className="eyebrow">THE HEART BEHIND THE KITCHEN</span>
          <h2>Meet <em>Bandana.</em></h2>
          <p>
            Some meals remind us of family, familiar conversations,
            and the simple happiness of eating together.
          </p>
          <p>
            That's the feeling Bandana's Kitchen hopes to bring
            to your table, one homemade meal at a time.
          </p>
          <Link className="btn btn-dark" to="/about">
            Our Story <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section className="reviews-section">
      <div className="container reviews-inner">
        <div>
          <span className="eyebrow">YOUR WORDS MATTER</span>
          <h2>Good food. <em>Kind words.</em></h2>
          <p>Enjoyed your meal? Share your experience and help our little kitchen grow.</p>
        </div>
        <a className="btn btn-dark" href={REVIEW} target="_blank" rel="noreferrer">
          <Star size={18} /> Review Us on Google <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, accent, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title} <em>{accent}</em></h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const groups = useMemo(() => {
    const result = new Map();
    menuItems.forEach((item) => {
      const key = item.category || "Other";
      if (!result.has(key)) result.set(key, []);
      result.get(key).push(item);
    });
    return result;
  }, []);

  const categories = ["All", ...groups.keys()];

  const visibleGroups = [...groups.entries()]
    .filter(([key]) => category === "All" || key === category)
    .map(([key, items]) => [
      key,
      items.filter((item) =>
        `${item.name} ${key}`.toLowerCase().includes(query.toLowerCase())
      ),
    ])
    .filter(([, items]) => items.length > 0);

  return (
    <main>
      <PageHero
        eyebrow="THE COMPLETE KITCHEN MENU"
        title="Made for your"
        accent="cravings."
        description="Explore homemade favourites, find your dish, and order directly on WhatsApp."
      />
      <div className="container menu-layout">
        <div className="menu-toolbar">
          <label className="search-field">
            <Search size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What are you craving?"
              type="search"
            />
          </label>
          <div className="category-tabs">
            {categories.map((key) => (
              <button
                type="button"
                key={key}
                className={category === key ? "selected" : ""}
                onClick={() => setCategory(key)}
              >
                {key === "All" ? "All Dishes" : categoryLabels[key] || key}
              </button>
            ))}
          </div>
        </div>

        {visibleGroups.length ? (
          visibleGroups.map(([key, items], groupIndex) => (
            <section className="menu-group" key={key}>
              <div className="menu-group-heading">
                <div>
                  <span className="eyebrow">FROM OUR KITCHEN · {String(groupIndex + 1).padStart(2, "0")}</span>
                  <h2>{categoryLabels[key] || key}</h2>
                </div>
                <span>{items.length} dishes</span>
              </div>
              <div className="menu-items-grid">
                {items.map((item, index) => (
                  <article className="menu-dish" key={item.id ?? `${key}-${item.name}-${index}`}>
                    <div className="menu-dish-main">
                      <h3>{item.name}</h3>
                      {item.quantity && <p>{item.quantity}</p>}
                    </div>
                    <div className="menu-dish-bottom">
                      <strong>
                        {item.price !== undefined && item.price !== null && item.price !== ""
                          ? `₹${item.price}`
                          : "Ask for price"}
                      </strong>
                      <OrderButton name={item.name} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="empty-state">
            <h2>No dishes found</h2>
            <p>Try another search or category.</p>
            <button onClick={() => { setQuery(""); setCategory("All"); }}>
              Show All Dishes
            </button>
          </div>
        )}
        <div className="menu-end-note">
          Looking for a complete meal or a special spread?
          <Link to="/thalis">Explore Thalis <ArrowRight size={16} /></Link>
          <Link to="/combos">Explore Combos <ArrowRight size={16} /></Link>
        </div>
      </div>
    </main>
  );
}

function ThaliPage() {
  return (
    <main>
      <PageHero
        eyebrow="HOMEMADE BENGALI THALIS"
        title="The joy of a"
        accent="complete meal."
        description="A little bit of everything you love, thoughtfully brought together."
      />
      <section className="container listing-section">
        <div className="listing-intro">
          <span className="eyebrow">FIVE HOMESTYLE FAVOURITES</span>
          <h2>Choose your <em>thali.</em></h2>
          <p>Comforting rice, dal, sides, and a satisfying main.</p>
        </div>
        <div className="thali-grid">
          {thalis.map((thali, index) => (
            <article className="thali-card" key={thali.name}>
              <div className="card-topline">
                <span>THALI NO. {String(index + 1).padStart(2, "0")}</span>
                <span className="type-pill">{thali.type}</span>
              </div>
              <div className="thali-title-row">
                <h3>{thali.name}</h3>
                <strong>₹{thali.price}</strong>
              </div>
              <div className="thali-divider" />
              <p className="includes-label">WHAT'S ON YOUR PLATE</p>
              <ul className="dish-contents">
                {thali.contents.map((content) => <li key={content}>{content}</li>)}
              </ul>
              <OrderButton name={thali.name} />
            </article>
          ))}
        </div>
        <p className="order-note">
          Please confirm availability, preparation time, and delivery charges before ordering.
        </p>
      </section>
    </main>
  );
}

function ComboPage() {
  return (
    <main>
      <PageHero
        eyebrow="SPECIAL MEALS, MADE WITH LOVE"
        title="More flavours."
        accent="More joy."
        description="Thoughtfully paired Bengali favourites for when one dish simply isn't enough."
      />
      <section className="container listing-section">
        <div className="listing-intro">
          <span className="eyebrow">THREE DELICIOUS COMBINATIONS</span>
          <h2>Our special <em>combos.</em></h2>
          <p>Choose your favourite feast and order directly from our kitchen.</p>
        </div>
        <div className="combo-grid">
          {combos.map((combo, index) => (
            <article className="combo-card" key={combo.name}>
              <div className="combo-topline">
                <span>COMBO {String(index + 1).padStart(2, "0")}</span>
                <span>✳</span>
              </div>
              <span className="combo-label">{combo.label}</span>
              <h3>{combo.name}</h3>
              <strong className="combo-price">₹{combo.price}</strong>
              <div className="combo-rule" />
              <p className="includes-label">INCLUDED IN YOUR COMBO</p>
              <ul className="dish-contents">
                {combo.contents.map((content) => <li key={content}>{content}</li>)}
              </ul>
              <OrderButton name={combo.name} />
            </article>
          ))}
        </div>
        <p className="order-note">
          For the Mutton Gorgora combo, please mention your starter and rice/pulao choices when ordering.
        </p>
      </section>
    </main>
  );
}


function CakesCookiesPage() {
  return (
    <main className="cakes-page">
      <section className="cakes-coming-soon">
        <div className="container cakes-content">
          <div className="cakes-decor cakes-decor-one">✳</div>
          <div className="cakes-decor cakes-decor-two">✿</div>

          <span className="eyebrow">
            SOMETHING SWEET IS ON ITS WAY
          </span>

          <div className="cakes-icon">♡</div>

          <h1>
            Cakes <span>&</span> Cookies
          </h1>

          <div className="cakes-coming-badge">
            COMING SOON
          </div>

          <p>
            A little sweetness is baking behind the scenes.
            Something delicious, homemade, and made with love
            is coming to Bandana's Kitchen.
          </p>

          <div className="cakes-bottom">
            <span>Made with love. Worth the wait.</span>
            <Link to="/" className="btn btn-dark">
              Back to Home <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR STORY"
        title="A kitchen with"
        accent="heart."
        description="Every Meal, A Memory of Home."
      />
      <section className="container about-grid">
        <div className="about-image">
          <img src="/images/mother.jpg" alt="Bandana" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">THE STORY BEHIND THE FOOD</span>
          <h2>Meet <em>Bandana.</em></h2>
          <p>
            Bandana's Kitchen is rooted in the simple joy of home-cooked
            Bengali food: comforting flavours, familiar recipes, and
            meals made to be shared.
          </p>
          <p>
            From everyday favourites to festive spreads, our kitchen
            is all about bringing a little warmth to your table.
          </p>
          <p className="bengali-quote" lang="bn">ঘরের রান্না, ভালোবাসার ছোঁয়া</p>
          <Link className="btn btn-dark" to="/menu">
            Explore Our Food <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="LET'S TALK FOOD"
        title="Say hello,"
        accent="anytime."
        description="Ready to order? Have a question? We'd love to hear from you."
      />
      <section className="container contact-section">
        <div className="contact-feature">
          <MessageCircle size={34} />
          <h2>Order directly from our kitchen.</h2>
          <p>WhatsApp us for orders, availability, and special occasions.</p>
          <a className="btn btn-dark" href={wa()} target="_blank" rel="noreferrer">
            WhatsApp 7407224410 <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-social">
          <h3>Follow our food journey</h3>
          <a href={FACEBOOK} target="_blank" rel="noreferrer">
            Facebook <ArrowUpRight size={17} />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight size={17} />
          </a>
          <a href={REVIEW} target="_blank" rel="noreferrer">
            Google Reviews <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>Every Meal, A Memory of Home.</p>
            <span lang="bn">ঘরের রান্না, ভালোবাসার ছোঁয়া</span>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            {links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>
          <div className="footer-links">
            <h3>Let's Connect</h3>
            <a href={wa()} target="_blank" rel="noreferrer">WhatsApp 7407224410</a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            <a href={REVIEW} target="_blank" rel="noreferrer">Google Reviews</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bandana's Kitchen. All rights reserved.</span>
          <span>FSSAI License No. 22826034000069</span>
        </div>
        <div className="footer-credits">
          <span>Website by Brishti Maitra &amp; Swarnendu Dutta</span>
          <span className="credit-dot">·</span>
          <span>
            Original artwork by{" "}
            <a href={ARTWORK} target="_blank" rel="noreferrer">
              NotSoMighty <ArrowUpRight size={12} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Quick actions">
      <Link to="/menu"><ChefHat size={20} /><span>Menu</span></Link>
      <Link to="/thalis"><Heart size={20} /><span>Thalis</span></Link>
      <Link to="/combos"><Star size={20} /><span>Combos</span></Link>
      <a href={wa()} target="_blank" rel="noreferrer">
        <MessageCircle size={20} /><span>Order</span>
      </a>
    </nav>
  );
}

function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeaturedFood />
      <ExploreWays />
      <HomeThaliSpotlight />
      <MeetBandana />
      <ReviewSection />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/thalis" element={<ThaliPage />} />
        <Route path="/combos" element={<ComboPage />} />
        <Route path="/cakes-cookies" element={<CakesCookiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <MobileBottomBar />
    </BrowserRouter>
  );
}
