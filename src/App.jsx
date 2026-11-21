
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
const categoryLabels = {
  ...menuData.categoryLabels,

  "Bhaja-Bhuji": "Snacks",
  "Dimer-Sombhar": "Egg",
  "Bhaat": "Rice",
  "China-Town": "Chinese",
  "Murgir-Bahar": "Chicken",
  "Mutton-Bahar": "Mutton",
  "Motso-Mukhi": "Fish",
  "Niramish Aahar": "Veg",
  "Bengali-Breads": "Breads",
  "Biriyani": "Biryani",
  "Mishti-Mukh": "Desserts",
};

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
  { to: "/celebrations", label: "Celebrations" },
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
    <section className="be-hero">
      <div className="container be-hero-inner">
        <div className="be-hero-heading">
          <span className="be-kicker">
            BANDANA'S KITCHEN · KOLKATA
          </span>
          <h1>
            Bengali food.
            <br />
            <em>Made with love.</em>
          </h1>
          <p>
            The familiar flavours of home, lovingly prepared
            for your everyday meals and special moments.
          </p>
          <div className="be-hero-actions">
            <Link to="/menu" className="be-hero-button">
              Explore the Menu <ArrowUpRight size={18} />
            </Link>
            <Link to="/thalis" className="be-hero-text-link">
              Our Thalis <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="be-hero-photos">
          <div className="be-hero-image be-hero-image-main">
            <img
              src="/images/mutton.jpg"
              alt="Homemade mutton dish from Bandana's Kitchen"
              fetchPriority="high"
            />
            <span>Mutton favourites</span>
          </div>
          <div className="be-hero-image be-hero-image-side">
            <img
              src="/images/prawn.jpg"
              alt="Prawn curry from Bandana's Kitchen"
            />
            <span>From the Bengali kitchen</span>
          </div>
          <div className="be-hero-image be-hero-image-side">
            <img
              src="/images/rui_chop.jpg"
              alt="Rui Chop from Bandana's Kitchen"
            />
            <span>Homemade delights</span>
          </div>
        </div>

        <div className="be-hero-footnote">
          <span lang="bn">ঘরের রান্না, ভালোবাসার ছোঁয়া</span>
          <span>EVERY MEAL, A MEMORY OF HOME.</span>
        </div>
      </div>
    </section>
  );
}


function ExploreWays() {
  const collections = [
    {
      title: "À La Carte",
      subtitle: "Something for every craving.",
      to: "/menu",
      number: "01",
    },
    {
      title: "Bengali Thalis",
      subtitle: "A complete meal, made with care.",
      to: "/thalis",
      number: "02",
    },
    {
      title: "Special Combos",
      subtitle: "For the moments worth sharing.",
      to: "/combos",
      number: "03",
    },
    {
      title: "Cakes & Cookies",
      subtitle: "A little something sweet.",
      to: "/cakes-cookies",
      number: "04",
    },
  ];

  return (
    <section className="be-collections">
      <div className="container">
        <div className="be-section-heading">
          <span className="be-kicker">EXPLORE OUR KITCHEN</span>
          <h2>
            What are you
            <br />
            <em>craving today?</em>
          </h2>
          <p>
            From everyday Bengali meals to special treats,
            find something delicious for every occasion.
          </p>
        </div>

        <div className="be-collections-grid">
          {collections.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="be-collection-card"
            >
              <div className="be-collection-top">
                <span>{item.number} / 04</span>
                <ArrowUpRight size={22} />
              </div>
              <div className="be-collection-bottom">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="be-collection-link">
                  Explore collection <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function HomeKitchenStory() {
  return (
    <section className="be-story">
      <div className="container be-story-inner">
        <div className="be-story-photo">
          <img
            src="/images/mother.jpg"
            alt="Bandana Dutta, the heart behind Bandana's Kitchen"
            loading="lazy"
          />
        </div>

        <div className="be-story-copy">
          <span className="be-kicker">THE HEART OF OUR KITCHEN</span>
          <h2>
            More than food.
            <br />
            <em>A feeling of home.</em>
          </h2>
          <p>
            Behind Bandana's Kitchen is a love for homemade
            cooking and the joy of sharing a good meal.
            Familiar recipes, thoughtful preparation and
            a little warmth in every serving.
          </p>
          <Link to="/about" className="be-story-link">
            Meet Bandana <ArrowUpRight size={18} />
          </Link>
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
  const [basket, setBasket] = useState({});
  const [basketOpen, setBasketOpen] = useState(false);

  const groupedMenu = useMemo(() => {
    const groups = new Map();

    menuItems.forEach((item) => {
      const key = item.category || "Other";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });

    return [...groups.entries()];
  }, []);

  const categories = ["All", ...groupedMenu.map(([key]) => key)];

  const visibleGroups = groupedMenu
    .filter(([key]) => category === "All" || key === category)
    .map(([key, items]) => [
      key,
      items.filter((item) =>
        `${item.name} ${key} ${categoryLabels[key] || ""}`
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      ),
    ])
    .filter(([, items]) => items.length > 0);

  const selectedItems = menuItems
    .filter((item) => (basket[item.id] || 0) > 0)
    .map((item) => ({
      ...item,
      count: basket[item.id],
    }));

  const itemCount = selectedItems.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const subtotal = selectedItems.reduce(
    (sum, item) =>
      sum + (typeof item.price === "number" ? item.price * item.count : 0),
    0
  );

  const hasUnpricedItems = selectedItems.some(
    (item) => typeof item.price !== "number"
  );

  const formatPrice = (price) =>
    typeof price === "number" ? `₹${price}` : "Ask for price";

  function changeQuantity(id, difference) {
    setBasket((previous) => {
      const next = { ...previous };
      const quantity = Math.max(0, (next[id] || 0) + difference);

      if (quantity === 0) {
        delete next[id];
      } else {
        next[id] = quantity;
      }

      return next;
    });
  }

  function clearBasket() {
    setBasket({});
    setBasketOpen(false);
  }

  function checkout() {
    if (!selectedItems.length) return;

    const lines = [
      "Hello Bandana's Kitchen!",
      "",
      "I'd like to enquire about the following order:",
      "",
      ...selectedItems.map((item, index) => {
        const amount =
          typeof item.price === "number"
            ? `₹${item.price * item.count}`
            : "Price to be confirmed";

        return [
          `${index + 1}. ${item.name}`,
          `   Portion: ${item.quantity || "Please confirm"}`,
          `   Quantity: ${item.count}`,
          `   Amount: ${amount}`,
        ].join("\n");
      }),
      "",
      `Estimated item subtotal: ₹${subtotal}`,
      ...(hasUnpricedItems
        ? ["Some item prices still need confirmation."]
        : []),
      "Delivery charges are not included.",
      "",
      "Please confirm availability, final price, preparation time and delivery.",
      "Thank you!",
    ];

    window.open(
      wa(lines.join("\n")),
      "_blank",
      "noopener,noreferrer"
    );
  }

  useEffect(() => {
    if (!basketOpen) return;

    function handleEscape(event) {
      if (event.key === "Escape") setBasketOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [basketOpen]);

  return (
    <main className="menu-redesign">
      {/* Editorial hero */}
      <section className="menu-new-hero">
        <div className="container menu-new-hero-inner">
          <div className="menu-new-hero-copy">
            <span className="menu-new-eyebrow">
              ✳ FRESH FROM BANDANA'S KITCHEN
            </span>

            <h1>
              The good food
              <br />
              <em>diaries.</em>
            </h1>

            <p>
              A little Bengali nostalgia, a lot of homemade goodness.
              From everyday comfort food to something special —
              there's always something lovely cooking.
            </p>

            <div className="menu-hero-details">
              <span>♡ Homemade with love</span>
              <span>✳ Bengali favourites & more</span>
            </div>
          </div>

          <div className="menu-hero-art" aria-hidden="true">
            <span className="menu-art-star">✳</span>
            <div className="menu-art-circle">
              <span>ঘরের রান্না</span>
              <strong>GOOD FOOD</strong>
              <em>GOOD MOOD</em>
              <small>EVERY MEAL, A MEMORY OF HOME</small>
            </div>
            <span className="menu-art-flower">✿</span>
          </div>
        </div>
      </section>

      <section className="container menu-new-content">
        {/* Search and category navigation */}
        <div className="menu-discovery">
          <div className="menu-discovery-heading">
            <div>
              <span className="eyebrow">WHAT ARE YOU CRAVING?</span>
              <h2>Explore our <em>kitchen.</em></h2>
            </div>
            <span className="menu-total-count">
              {menuItems.length} homemade favourites
            </span>
          </div>

          <div className="menu-search-box">
            <Search size={21} aria-hidden="true" />
            <input
              type="search"
              aria-label="Search dishes"
              placeholder="Search for your favourite dish..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                type="button"
                className="menu-search-clear"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="menu-category-scroll" aria-label="Menu categories">
            {categories.map((key) => (
              <button
                key={key}
                type="button"
                className={`menu-category-pill ${
                  category === key ? "is-active" : ""
                }`}
                aria-pressed={category === key}
                onClick={() => setCategory(key)}
              >
                {key === "All"
                  ? "✳ All Dishes"
                  : categoryLabels[key] || key}
              </button>
            ))}
          </div>

          <div className="menu-discovery-note">
            <span>✿</span>
            <p>
              Choose your favourites, add them to your basket,
              and send everything in one WhatsApp message.
            </p>
          </div>
        </div>

        {/* Food categories */}
        <div className="menu-new-groups">
          {visibleGroups.length ? (
            visibleGroups.map(([key, items], groupIndex) => (
              <section className="menu-new-group" key={key}>
                <div className="menu-new-group-heading">
                  <div>
                    <span className="menu-group-number">
                      FROM OUR KITCHEN ·
                      {" "}
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                    <h2>{categoryLabels[key] || key}<em> ✳</em></h2>
                  </div>
                  <span className="menu-group-count">
                    {items.length} {items.length === 1 ? "dish" : "dishes"}
                  </span>
                </div>

                <div className="menu-new-grid">
                  {items.map((item) => {
                    const count = basket[item.id] || 0;

                    return (
                      <article className="menu-new-card" key={item.id}>
                        <div className="menu-new-card-top">
                          
<div className="menu-new-card-copy">
  <h3>
    {item.name}
    {item.englishName && (
      <span className="menu-english-name">
        ({item.englishName})
      </span>
    )}
  </h3>

  <p>
    {item.quantity || "Portion on enquiry"}
  </p>
</div>


                          <strong className="menu-new-price">
                            {formatPrice(item.price)}
                          </strong>
                        </div>

                        <div className="menu-new-card-bottom">
                          <span className="menu-homemade-tag">
                            ♡ From our kitchen
                          </span>

                          {count === 0 ? (
                            <button
                              type="button"
                              className="menu-add-button"
                              onClick={() => changeQuantity(item.id, 1)}
                              aria-label={`Add ${item.name} to basket`}
                            >
                              <span aria-hidden="true">+</span> Add
                            </button>
                          ) : (
                            <div
                              className="menu-quantity"
                              aria-label={`${item.name} quantity`}
                            >
                              <button
                                type="button"
                                onClick={() => changeQuantity(item.id, -1)}
                                aria-label={`Remove one ${item.name}`}
                              >
                                −
                              </button>
                              <span aria-live="polite">{count}</span>
                              <button
                                type="button"
                                onClick={() => changeQuantity(item.id, 1)}
                                aria-label={`Add one ${item.name}`}
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <div className="menu-new-empty">
              <span aria-hidden="true">✿</span>
              <h2>Nothing cooking by that name!</h2>
              <p>Try another search or explore the full menu.</p>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Show All Dishes
              </button>
            </div>
          )}
        </div>

        <div className="menu-new-footer-note">
          <div>
            <span className="eyebrow">MORE TO EXPLORE</span>
            <h2>Still feeling <em>hungry?</em></h2>
            <p>
              Discover our complete Bengali thalis and
              thoughtfully curated special combos.
            </p>
          </div>
          <div className="menu-new-footer-links">
            <Link to="/thalis">
              Explore Thalis <ArrowUpRight size={17} />
            </Link>
            <Link to="/combos">
              Explore Combos <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating basket */}
      {itemCount > 0 && (
        <div className="menu-floating-basket">
          <div className="menu-floating-basket-inner">
            <div className="menu-floating-summary">
              <span className="menu-basket-count">{itemCount}</span>
              <div>
                <strong>Your little food basket ♡</strong>
                <small>
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                  {" · "}
                  ₹{subtotal}
                  {hasUnpricedItems ? " + price to confirm" : ""}
                </small>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setBasketOpen(true)}
            >
              View Order <ArrowRight size={17} />
            </button>
          </div>
        </div>
      )}

      {/* Basket drawer */}
      {basketOpen && (
        <div className="menu-basket-overlay" onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setBasketOpen(false);
          }
        }}>
          <aside
            className="menu-basket-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-basket-title"
          >
            <div className="menu-basket-heading">
              <div>
                <span className="eyebrow">MADE WITH LOVE ♡</span>
                <h2 id="menu-basket-title">Your food <em>basket.</em></h2>
              </div>
              <button
                type="button"
                className="menu-basket-close"
                aria-label="Close basket"
                onClick={() => setBasketOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            <div className="menu-basket-list">
              {selectedItems.length ? (
                selectedItems.map((item) => (
                  <div className="menu-basket-item" key={item.id}>
                    <div className="menu-basket-item-details">
                      <strong>{item.name}</strong>
                      <small>
                        {item.quantity || "Portion on enquiry"}
                      </small>
                      <span>
                        {typeof item.price === "number"
                          ? `₹${item.price * item.count}`
                          : "Price to confirm"}
                      </span>
                    </div>

                    <div className="menu-quantity">
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label={`Remove one ${item.name}`}
                      >
                        −
                      </button>
                      <span>{item.count}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label={`Add one ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your basket is empty.</p>
              )}
            </div>

            <div className="menu-basket-checkout">
              <div className="menu-basket-total">
                <span>Estimated subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>

              {hasUnpricedItems && (
                <p className="menu-price-warning">
                  Some items need price confirmation.
                </p>
              )}

              <p className="menu-basket-disclaimer">
                Final pricing, availability and delivery charges
                will be confirmed on WhatsApp.
              </p>

              <button
                type="button"
                className="menu-whatsapp-checkout"
                disabled={!selectedItems.length}
                onClick={checkout}
              >
                <MessageCircle size={19} />
                Send Order on WhatsApp
                <ArrowUpRight size={17} />
              </button>

              <button
                type="button"
                className="menu-clear-basket"
                onClick={clearBasket}
                disabled={!selectedItems.length}
              >
                Clear Basket
              </button>
            </div>
          </aside>
        </div>
      )}
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


function CelebrationsPage() {
  const [occasion, setOccasion] = useState("House Party");
  const [guests, setGuests] = useState("40–50");
  const [date, setDate] = useState("");
  const [requirements, setRequirements] = useState("");

  const occasions = [
    { icon: "✳", name: "House Party", detail: "Good food for good company." },
    { icon: "✿", name: "Puja", detail: "Traditional flavours for meaningful moments." },
    { icon: "♡", name: "Family Gathering", detail: "Bring everyone together around a meal." },
    { icon: "✦", name: "Other Occasion", detail: "Every celebration deserves something special." },
  ];

  const message = [
    "Hello Bandana's Kitchen!",
    "",
    "I'd like to enquire about a bulk food order.",
    `Occasion: ${occasion}`,
    `Expected guests: ${guests}`,
    `Event date: ${date || "To be confirmed"}`,
    `Food requirements: ${requirements || "Please share available options"}`,
    "",
    "Please let me know about menu options, pricing and availability.",
  ].join("\n");

  return (
    <main className="celebrations-page">
      <section className="celebrations-hero">
        <div className="container celebrations-hero-inner">
          <div className="celebrations-intro">
            <span className="eyebrow">BANDANA'S KITCHEN · SPECIAL OCCASIONS</span>
            <h1>
              You bring the people.
              <br />
              <em>We'll bring the food.</em>
            </h1>
            <p>
              A house party, a puja, a family get-together or a
              celebration close to your heart — make the day
              memorable with the warmth of homemade food.
            </p>
            <div className="celebrations-actions">
              <a className="btn btn-dark" href="#bulk-enquiry">
                Plan Your Gathering <ArrowRight size={18} />
              </a>
              <Link className="text-link" to="/menu">
                Explore Our Menu <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="celebrations-art" aria-label="Bulk food arrangements for 40 to 50 guests">
            <div className="celebrations-stamp">MADE WITH LOVE ✳</div>
            <span className="celebrations-art-small">GOOD FOOD · GOOD COMPANY</span>
            <strong>40–50</strong>
            <span className="celebrations-art-guests">GUESTS</span>
            <p>One beautiful gathering.<br />Many happy plates.</p>
            <span className="celebrations-art-flower" aria-hidden="true">✿</span>
          </div>
        </div>
      </section>

      <section className="container celebrations-occasions">
        <div className="celebrations-section-heading">
          <span className="eyebrow">EVERY OCCASION IS SPECIAL</span>
          <h2>More memories. <em>Less kitchen work.</em></h2>
          <p>
            Whether it's an intimate celebration or a gathering
            of around 40–50 people, tell us what you have in mind.
          </p>
        </div>

        <div className="occasion-grid">
          {occasions.map((item) => (
            <button
              type="button"
              key={item.name}
              className={`occasion-card ${occasion === item.name ? "occasion-selected" : ""}`}
              onClick={() => {
                setOccasion(item.name);
                document.getElementById("bulk-enquiry")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <span className="occasion-symbol" aria-hidden="true">{item.icon}</span>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
              <span className="occasion-arrow"><ArrowUpRight size={18} /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="celebrations-message">
        <div className="container celebrations-message-inner">
          <span className="eyebrow">FROM OUR HOME TO YOUR CELEBRATION</span>
          <h2>Let the conversations flow. <em>We'll take care of the food.</em></h2>
          <p>
            From comforting Bengali favourites to thoughtfully
            planned meals, we would love to discuss the food
            for your special day.
          </p>
          <span lang="bn">ঘরের রান্না, ভালোবাসার ছোঁয়া</span>
        </div>
      </section>

      <section className="container celebrations-enquiry" id="bulk-enquiry">
        <div className="enquiry-copy">
          <span className="eyebrow">LET'S PLAN SOMETHING LOVELY</span>
          <h2>Tell us about <em>your day.</em></h2>
          <p>
            Share a few details and we'll continue the conversation
            on WhatsApp. Menu, pricing, preparation and delivery
            will be confirmed directly with our kitchen.
          </p>
          <div className="enquiry-note">
            <MessageCircle size={22} />
            <div>
              <strong>Prefer to talk directly?</strong>
              <span>WhatsApp us at 7407224410</span>
            </div>
          </div>
        </div>

        <form
          className="bulk-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.open(wa(message), "_blank", "noopener,noreferrer");
          }}
        >
          <label>
            What's the occasion?
            <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              {occasions.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>
          </label>

          <label>
            Expected number of guests
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="e.g. 45"
              required
            />
          </label>

          <label>
            Event date (if decided)
            <input
              type="date"
              value={date}
              min={new Date().toLocaleDateString("en-CA")}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Tell us about your food preferences
            <textarea
              rows={5}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Veg or non-veg, lunch or dinner, preferred dishes, location, or anything you'd like us to know..."
            />
          </label>

          <button type="submit" className="btn btn-dark bulk-submit">
            Send Enquiry on WhatsApp <ArrowUpRight size={18} />
          </button>

          <small>
            This sends an enquiry, not a confirmed booking.
            Availability and final pricing will be discussed with you.
          </small>
        </form>
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
      <NavLink to="/" end>
        <Heart size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/menu">
        <ChefHat size={20} />
        <span>Menu</span>
      </NavLink>
      <NavLink to="/celebrations">
        <Star size={20} />
        <span>Events</span>
      </NavLink>
      <a href={wa()} target="_blank" rel="noreferrer">
        <MessageCircle size={20} />
        <span>Order</span>
      </a>
    </nav>
  );
}


function CelebrationsSpotlight() {
  return (
    <section className="bulk-home-section">
      <div className="container bulk-home-inner">
        <div className="bulk-home-copy">
          <span className="eyebrow">PLANNING SOMETHING SPECIAL?</span>
          <h2>
            A house full of people.
            <br />
            <em>A table full of love.</em>
          </h2>
          <p>
            House parties, pujas, family gatherings and special
            occasions — let Bandana's Kitchen help you plan
            food for around 40–50 guests.
          </p>
          <Link to="/celebrations" className="btn btn-dark">
            Explore Bulk Orders <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="bulk-home-visual">
          <span className="bulk-home-sparkle" aria-hidden="true">✳</span>
          <span className="bulk-home-small">GATHER. CELEBRATE. EAT.</span>
          <strong>40–50</strong>
          <span className="bulk-home-guests">PEOPLE</span>
          <span className="bulk-home-tag">Food made with love ♡</span>
        </div>
      </div>
    </section>
  );
}



function HomePage() {
  return (
    <main className="be-homepage">
      <HomeHero />
      <FeaturedFood />
      <ExploreWays />
      <HomeThaliSpotlight />
      <HomeKitchenStory />
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
        <Route path="/celebrations" element={<CelebrationsPage />} />
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
