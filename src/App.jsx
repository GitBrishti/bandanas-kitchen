
import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChefHat,
  Clock3,
  
  Heart,
  
  Leaf,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  Search,
  Star,
  X,
} from "lucide-react";
import * as menuData from "./data/menu";
import "./App.css";

const menuItems = menuData.menuItems ?? [];
const categories = menuData.categories ?? [];
const categoryLabels = menuData.categoryLabels ?? {};

const contacts = [
  { number: "917407224410", label: "74072 24410" },
  { number: "918240351593", label: "82403 51593" },
];

const reviewUrl =
  menuData.googleReviewLink ||
  "https://maps.app.goo.gl/CF5BEdBvNj9ULXHY6?g_st=aw";

const facebookUrl =
  "https://www.facebook.com/profile.php?id=61591407665103";

const instagramUrl =
  "https://www.instagram.com/bandanaskitchen?igsh=MWV1Nms1b285bnRwNw==";

const notSoMightyUrl = "https://notsomighty.vercel.app/";

const featuredDishes = [
  {
    name: "Chingrir Malaikari",
    subtitle: "A Bengali favourite",
    image: "/images/prawn.jpg",
  },
  {
    name: "Kosha Mangso",
    subtitle: "Slow-cooked comfort",
    image: "/images/mutton.jpg",
  },
  {
    name: "Rui Fish Chop",
    subtitle: "A homemade special",
    image: "/images/rui_chop.jpg",
  },
  {
    name: "Chilli Chicken",
    subtitle: "A little something spicy",
    image: "/images/chilichicken.jpg",
  },
];

function whatsappLink(number, message = "") {
  const query = message
    ? `?text=${encodeURIComponent(message)}`
    : "";

  return `https://wa.me/${number}${query}`;
}

function dishOrderLink(item, number) {
  const message =
    `Hello Bandana's Kitchen! I'd like to order ` +
    `${item.name}${item.quantity ? ` (${item.quantity})` : ""}. ` +
    `Please confirm availability and total price.`;

  return whatsappLink(number, message);
}

function getCategoryName(category) {
  if (typeof category === "object" && category !== null) {
    category = category.id ?? category.name ?? category.label;
  }

  return categoryLabels[category] || category || "Our Kitchen";
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
    <Link
      to="/"
      className="brand"
      aria-label="Bandana's Kitchen home"
    >
      <img
        src="/images/favicon.png"
        alt=""
        className="brand-logo"
      />

      <span className="brand-words">
        <strong>Bandana's</strong>
        <small>KITCHEN</small>
      </span>
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", menuOpen);

    return () => {
      document.body.classList.remove("nav-locked");
    };
  }, [menuOpen]);

  const navigation = [
    { to: "/", text: "Home" },
    { to: "/menu", text: "Menu" },
    { to: "/about", text: "Our Story" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="announcement">
        <span>✳</span>
        EVERY MEAL, A MEMORY OF HOME
        <span>✳</span>
      </div>

      <div className="header-main">
        <nav className="container navigation">
          <Brand />

          <div className="desktop-navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
              >
                {item.text}
              </NavLink>
            ))}

            <Link to="/menu" className="header-order">
              Order Now
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <MenuIcon size={27} />
            )}
          </button>
        </nav>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation-inner container">
          <span className="eyebrow">EXPLORE OUR KITCHEN</span>

          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {item.text}
              <ArrowUpRight size={22} />
            </NavLink>
          ))}

          <div className="mobile-navigation-tagline">
            <span lang="bn">
              ঘরের রান্না, ভালোবাসার ছোঁয়া
            </span>
            <small>
              Home-cooked food, touched with love.
            </small>
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  italic,
  description,
  centered = false,
}) {
  return (
    <div
      className={`section-heading ${
        centered ? "centered" : ""
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2>
        {title} <em>{italic}</em>
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="home-hero">
      <div className="container hero-layout">
        <div className="hero-content">
          <span className="eyebrow">
            A LITTLE KITCHEN. A LOT OF LOVE.
          </span>

          <h1>
            A taste of
            <br />
            <em>home,</em>
            <br />
            in every bite.
          </h1>

          <p className="hero-description">
            Familiar Bengali flavours, thoughtful cooking,
            and the warmth of a homemade meal.
            Because the best food always feels like home.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              Explore the Menu
              <ArrowUpRight size={18} />
            </Link>

            <a
              className="hero-whatsapp"
              href={whatsappLink(contacts[0].number)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>

          <div className="hero-bengali">
            <span lang="bn">
              ঘরের রান্না, ভালোবাসার ছোঁয়া
            </span>
            <small>
              Home-cooked food, touched with love.
            </small>
          </div>
        </div>

        {/* One original artwork, on desktop and mobile */}
        <div className="hero-artwork hero-artwork-bounce">
          <div className="hero-artwork-frame">
            <img
              src="/images/hero.jpg"
              alt="Original Bandana's Kitchen artwork"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedFood() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-heading-row">
          <SectionHeading
            eyebrow="FRESH FROM OUR KITCHEN"
            title="A few things we"
            italic="love making."
            description="Familiar flavours, comforting favourites, and food worth sharing."
          />

          <Link to="/menu" className="underlined-link">
            Explore Full Menu
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredDishes.map((dish) => (
            <article
              className="featured-card"
              key={dish.image}
            >
              <Link
                to="/menu"
                className="featured-image"
                aria-label={`Explore ${dish.name} on our menu`}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />
              </Link>

              <div className="featured-card-content">
                <span className="featured-subtitle">
                  {dish.subtitle}
                </span>

                <h3>{dish.name}</h3>

                <Link
                  to="/menu"
                  className="featured-card-link"
                >
                  View Menu
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-mobile-action">
          <Link to="/menu" className="btn btn-primary">
            See All Our Dishes
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MeetBandana() {
  return (
    <section className="meet-bandana">
      <div className="container meet-bandana-layout">
        <div className="meet-bandana-image">
          <img
            src="/images/mother.jpg"
            alt="Bandana, the heart behind Bandana's Kitchen"
            loading="lazy"
          />
        </div>

        <div className="meet-bandana-content">
          <span className="eyebrow">
            THE HEART BEHIND THE FOOD
          </span>

          <h2>
            Meet <em>Bandana.</em>
          </h2>

          <p>
            Behind Bandana's Kitchen is a love for
            the kind of food that brings everyone together.
          </p>

          <p>
            From comforting Bengali favourites to dishes
            made for special occasions, every order carries
            a little of the warmth of home.
          </p>

          <div className="meet-bandana-quote">
            <span lang="bn">মায়ের হাতের রান্না</span>
            <small>Food made with a mother's love.</small>
          </div>

          <Link to="/about" className="btn btn-primary">
            Read Our Story
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function KitchenPromises() {
  const promises = [
    {
      icon: Heart,
      title: "Made with care",
      description:
        "Thoughtfully prepared food with a personal touch.",
    },
    {
      icon: Leaf,
      title: "Familiar flavours",
      description:
        "Comforting favourites inspired by home cooking.",
    },
    {
      icon: ChefHat,
      title: "From our kitchen",
      description:
        "Homestyle dishes for everyday meals and celebrations.",
    },
  ];

  return (
    <section className="promises-section">
      <div className="container">
        <SectionHeading
          centered
          eyebrow="WHY OUR KITCHEN IS SPECIAL"
          title="The little things"
          italic="matter."
          description="Because a memorable meal is about more than what's on the plate."
        />

        <div className="promises-grid">
          {promises.map(
            ({ icon: Icon, title, description }) => (
              <article
                className="promise-card"
                key={title}
              >
                <Icon size={30} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section className="review-section">
      <div className="container review-layout">
        <div className="review-content">
          <span className="eyebrow">
            YOUR WORDS MEAN EVERYTHING
          </span>

          <div className="review-stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((number) => (
              <Star key={number} size={20} />
            ))}
          </div>

          <h2>
            Good food.
            <br />
            <em>Kind words.</em>
          </h2>

          <p>
            Enjoyed your meal? Share your experience.
            Every genuine review helps our little kitchen grow.
          </p>

          <a
            href={reviewUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star size={18} />
            Write a Google Review
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="review-note">
          <span className="review-note-top">
            A NOTE FROM OUR KITCHEN
          </span>

          <span className="review-note-star">✳</span>

          <p>
            Your love
            <br />
            is our <em>secret</em>
            <br />
            ingredient.
          </p>

          <span className="review-note-bottom">
            WITH LOVE, BANDANA'S KITCHEN
          </span>
        </div>
      </div>
    </section>
  );
}

function BottomCallToAction() {
  return (
    <section className="bottom-cta">
      <div className="container">
        <span className="eyebrow">
          GOOD FOOD IS JUST A MESSAGE AWAY
        </span>

        <h2>
          Something delicious <em>is waiting.</em>
        </h2>

        <p>
          Explore our menu and find something that
          feels like home.
        </p>

        <Link to="/menu" className="btn btn-light">
          Browse Our Menu
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedFood />
      <MeetBandana />
      <KitchenPromises />
      <ReviewSection />
      <BottomCallToAction />
    </main>
  );
}

function PageHero({
  eyebrow,
  title,
  italic,
  description,
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>

        <h1>
          {title} <em>{italic}</em>
        </h1>

        <p>{description}</p>
      </div>
    </section>
  );
}

function DishCard({ item }) {
  return (
    <article className="dish-card">
      <div className="dish-category">
        <span>{getCategoryName(item.category)}</span>
        <span>✳</span>
      </div>

      <h3>{item.name}</h3>

      <div className="dish-info">
        <span>
          {item.quantity || "Confirm portion"}
        </span>

        <strong>
          {item.price === null ||
          item.price === undefined ||
          item.price === ""
            ? "Ask price"
            : `₹${item.price}`}
        </strong>
      </div>

      <div className="dish-order-actions">
        {contacts.map((contact, index) => (
          <a
            key={contact.number}
            href={dishOrderLink(item, contact.number)}
            target="_blank"
            rel="noopener noreferrer"
            className={`dish-order-button ${
              index === 1 ? "secondary" : ""
            }`}
          >
            <MessageCircle size={16} />
            Order {index + 1}
            <ArrowUpRight size={15} />
          </a>
        ))}
      </div>
    </article>
  );
}

function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");

  const categoryNames = useMemo(() => {
    const suppliedCategories = Array.isArray(categories)
      ? categories.map((category) => {
          if (typeof category === "string") {
            return category;
          }

          return (
            category.id ??
            category.name ??
            category.label ??
            ""
          );
        })
      : [];

    return [
      ...new Set([
        ...suppliedCategories,
        ...menuItems.map((item) => item.category),
      ]),
    ].filter(
      (category) => category && category !== "All"
    );
  }, []);

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const searchableText =
        `${item.name ?? ""} ${item.category ?? ""}`.toLowerCase();

      return (
        matchesCategory &&
        (!query || searchableText.includes(query))
      );
    });
  }, [search, activeCategory]);

  return (
    <main>
      <PageHero
        eyebrow="THE BANDANA'S KITCHEN MENU"
        title="Made for your"
        italic="cravings."
        description="Explore our homemade favourites and order directly through WhatsApp."
      />

      <section className="menu-section container">
        <div className="menu-toolbar">
          <label className="menu-search">
            <Search size={20} />

            <input
              type="search"
              placeholder="Search for a dish..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </label>

          <span className="menu-count">
            {filteredItems.length} dishes
          </span>
        </div>

        <div className="category-scroll">
          <div className="category-chips">
            <button
              type="button"
              className={`category-chip ${
                activeCategory === "All" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("All")}
            >
              All dishes
            </button>

            {categoryNames.map((category) => (
              <button
                type="button"
                key={category}
                className={`category-chip ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="dish-grid">
            {filteredItems.map((item, index) => (
              <DishCard
                key={item.id ?? `${item.name}-${index}`}
                item={item}
              />
            ))}
          </div>
        ) : (
          <div className="empty-menu">
            <h2>No dishes found</h2>
            <p>Try another search or category.</p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Show All Dishes
            </button>
          </div>
        )}

        <div className="menu-notice">
          <Clock3 size={23} />
          <p>
            Please confirm availability, portion size,
            preparation time, and delivery charges
            when ordering.
          </p>
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
        italic="heart."
        description="Every Meal, A Memory of Home."
      />

      <section className="about-section container">
        <div className="about-photo-wrap">
          <div className="about-photo">
            <img
              src="/images/mother.jpg"
              alt="Bandana, the heart behind Bandana's Kitchen"
            />
          </div>

          <div className="about-photo-caption">
            <span lang="bn">মায়ের হাতের রান্না</span>
            <small>
              THE HEART BEHIND BANDANA'S KITCHEN
            </small>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">
            MORE THAN JUST A MEAL
          </span>

          <h2>
            A little tradition.
            <br />
            <em>A lot of love.</em>
          </h2>

          <p>
            Welcome to Bandana's Kitchen, where
            familiar recipes and the joy of home
            cooking come together.
          </p>

          <p>
            We believe the most memorable meals
            are the ones that remind you of family,
            celebrations, and everyday moments
            worth sharing.
          </p>

          <p>
            That's the feeling we hope to bring
            to your table, one thoughtfully prepared
            dish at a time.
          </p>

          <div className="about-tagline">
            <span lang="bn">
              ঘরের রান্না, ভালোবাসার ছোঁয়া
            </span>
            <small>
              Home-cooked food, touched with love.
            </small>
          </div>

          <Link to="/menu" className="btn btn-primary">
            Discover Our Menu
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <ReviewSection />
      <BottomCallToAction />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="LET'S TALK FOOD"
        title="Say hello,"
        italic="anytime."
        description="Questions about an order or planning something special? We'd love to hear from you."
      />

      <section className="contact-section container">
        <div className="contact-grid">
          <article className="contact-card">
            <MessageCircle size={29} />
            <h2>WhatsApp Orders</h2>
            <p>Message our kitchen directly.</p>

            {contacts.map((contact) => (
              <a
                key={contact.number}
                href={whatsappLink(contact.number)}
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 {contact.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </article>

          <article className="contact-card">
            <Phone size={29} />
            <h2>Call Us</h2>
            <p>Have a question about your order?</p>

            {contacts.map((contact) => (
              <a
                key={contact.number}
                href={`tel:+${contact.number}`}
              >
                +91 {contact.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </article>

          <article className="contact-card">
            <Heart size={29} />
            <h2>Follow Our Kitchen</h2>
            <p>
              Stay connected for food updates and
              little moments from our kitchen.
            </p>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
              <ArrowUpRight size={16} />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <ArrowUpRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <ReviewSection />
      <BottomCallToAction />
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

            <span lang="bn">
              ঘরের রান্না, ভালোবাসার ছোঁয়া
            </span>

            <small>
              Home-cooked food, touched with love.
            </small>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/menu">Our Menu</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>Let's Connect</h3>

            {contacts.map((contact) => (
              <a
                key={contact.number}
                href={whatsappLink(contact.number)}
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 {contact.label}
              </a>
            ))}

            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Reviews
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="footer-column">
            <h3>Follow Along</h3>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
              <ArrowUpRight size={14} />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Bandana's Kitchen. All rights reserved.
          </span>

          <span>
            FSSAI License No. 22826034000069
          </span>
        </div>

        {/* Subtle creator and artwork credits */}
        <div className="footer-credits">
          <span>
            Website by Brishti Maitra &amp; Swarnendu Dutta
          </span>

          <span className="credit-separator">·</span>

          <span>
            Original artwork by{" "}
            <a
              href={notSoMightyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              NotSoMighty
              <ArrowUpRight size={12} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomBar() {
  const { pathname } = useLocation();

  return (
    <div className="mobile-bottom-bar">
      <Link
        to="/menu"
        className={pathname === "/menu" ? "active" : ""}
      >
        <ChefHat size={21} />
        <span>Menu</span>
      </Link>

      <a
        href={whatsappLink(contacts[0].number)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={21} />
        <span>WhatsApp</span>
      </a>

      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Star size={21} />
        <span>Review</span>
      </a>
    </div>
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
      <MobileBottomBar />
    </BrowserRouter>
  );
}
