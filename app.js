const { useEffect, useMemo, useState } = React;

const coffeeImages = {
  turkKahvesi: 'https://i.ibb.co/JWfhZg5n/IMG-2634.jpg',
  espresso: 'https://i.ibb.co/5byvxqY/IMG-2635.jpg',
  americano: 'https://i.ibb.co/3966GKYv/IMG-2636.jpg',
  milkCoffee: 'https://i.ibb.co/1fbFtgtn/IMG-2637.jpg',
  iceAmericano: 'https://i.ibb.co/pB538MHw/IMG-2638.jpg',
  iceLatte: 'https://i.ibb.co/Q3Xj6Sc1/IMG-2639.jpg',
  iceMocha: 'https://i.ibb.co/7NrcTShf/IMG-2641.jpg',
  frappe: 'https://i.ibb.co/G45S07tc/IMG-2642.jpg',
};

const menuImages = {
  kola: 'https://i.ibb.co/d0pSbR0b/IMG-2643.jpg',
  sprite: 'https://i.ibb.co/GQktmx3f/IMG-2644.jpg',
  fanta: 'https://i.ibb.co/7JJz4rdh/IMG-2645.jpg',
  cappy: 'https://i.ibb.co/yttNFCK/IMG-2646.jpg',
  su: 'https://i.ibb.co/MDCvxrf5/IMG-2647.jpg',
  meyveliWaffle: 'https://i.ibb.co/svWq2yN5/IMG-2612.jpg',
  dondurmaliWaffle: 'https://i.ibb.co/m5pbN9KL/IMG-2613.jpg',
  specialWaffle: 'https://i.ibb.co/j9yqkR8B/IMG-2614.jpg',
  nutellaliWaffle: 'https://i.ibb.co/tp55S7Hf/IMG-2615.jpg',
  waffleEkmegi: 'https://i.ibb.co/F4HKS67x/IMG-2616.jpg',
  antepSufle: 'https://i.ibb.co/DPJRMtGf/IMG-2617.jpg',
  sanSebastian: 'https://i.ibb.co/hxvhWDm1/IMG-2619.jpg',
  limonluCheesecake: 'https://i.ibb.co/h1hyKxs8/IMG-2620.jpg',
  cilekliCheesecake: 'https://i.ibb.co/tMJPGfQg/IMG-2621.jpg',
  kunefe: 'https://i.ibb.co/Tx8K1bDq/IMG-2624.jpg',
  dondurmaliKunefe: 'https://i.ibb.co/wZHNfMzN/IMG-2623.jpg',
  katmer: 'https://i.ibb.co/N2RcbGfk/IMG-2627.jpg',
  dondurmaliKatmer: 'https://i.ibb.co/LDGLdXWV/IMG-2629.png',
  havucDilimi: 'https://i.ibb.co/WpYBZXX7/IMG-2626.jpg',
  dondurmaliHavucDilimi: 'https://i.ibb.co/yFKfXRRV/IMG-2628.jpg',
  borek: 'https://i.ibb.co/xqNP3rdD/IMG-2630.jpg',
  pogaca: 'https://i.ibb.co/fYJN0bLM/IMG-2631.jpg',
  gozleme: 'https://i.ibb.co/PZChzgqw/IMG-2632.jpg',
  affogato: 'https://i.ibb.co/kVprCcGH/IMG-2694.png',
  bananaSplit: 'https://i.ibb.co/q3DSqgdP/IMG-2695.png',
  dondurma: 'https://i.ibb.co/5q2zSHy/IMG-2696.jpg',
};

const categories = [
  {
    id: 'waffles',
    name: 'Waffle’lar',
    layout: 'half',
    image: menuImages.meyveliWaffle,
    items: [
      {
        name: 'Meyveli Waffle',
        price: '400₺',
        description: 'Taze meyveler ve çikolata sosuyla hazırlanır.',
        image: menuImages.meyveliWaffle,
      },
      {
        name: 'Dondurmalı Waffle',
        price: '500₺',
        description: 'Waffle, taze meyve ve dondurma ile servis edilir.',
        image: menuImages.dondurmaliWaffle,
      },
      {
        name: 'Special Waffle',
        price: '600₺',
        description: 'Nurdos özel waffle sunumu.',
        image: menuImages.specialWaffle,
      },
      {
        name: 'Sadece Nutellalı',
        price: '250₺',
        description: 'Nutella ile hazırlanan sade waffle.',
        image: menuImages.nutellaliWaffle,
      },
      {
        name: 'Waffle Ekmeği',
        price: '100₺',
        description: 'Sade waffle ekmeği.',
        image: menuImages.waffleEkmegi,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Tatlılar',
    layout: 'feature',
    image: menuImages.antepSufle,
    items: [
      {
        name: 'Antep Fıstıklı Sufle',
        price: '300₺',
        description: 'Antep fıstığı dokunuşlu sıcak sufle.',
        image: menuImages.antepSufle,
      },
      {
        name: 'San Sebastian',
        price: '300₺',
        description: 'Kremamsı dokulu San Sebastian cheesecake.',
        image: menuImages.sanSebastian,
      },
      {
        name: 'Limonlu Cheesecake',
        price: '300₺',
        description: 'Limon aromalı cheesecake.',
        image: menuImages.limonluCheesecake,
      },
      {
        name: 'Çilekli Cheesecake',
        price: '300₺',
        description: 'Çilek soslu cheesecake.',
        image: menuImages.cilekliCheesecake,
      },
      {
        name: 'Künefe',
        price: '400₺',
        description: 'Sıcak künefe.',
        image: menuImages.kunefe,
      },
      {
        name: 'Dondurmalı Künefe',
        price: '500₺',
        description: 'Künefe, dondurma ile servis edilir.',
        image: menuImages.dondurmaliKunefe,
      },
      {
        name: 'Katmer',
        price: '400₺',
        description: 'Antep usulü katmer.',
        image: menuImages.katmer,
      },
      {
        name: 'Dondurmalı Katmer',
        price: '500₺',
        description: 'Katmer, dondurma ile servis edilir.',
        image: menuImages.dondurmaliKatmer,
      },
      {
        name: 'Havuç Dilimi',
        price: '500₺',
        description: 'Antep fıstıklı havuç dilimi.',
        image: menuImages.havucDilimi,
      },
      {
        name: 'Dondurmalı Havuç Dilimi',
        price: '600₺',
        description: 'Havuç dilimi, dondurma ile servis edilir.',
        image: menuImages.dondurmaliHavucDilimi,
      },
    ],
  },
  {
    id: 'ice-cream',
    name: 'Dondurmalar',
    layout: 'feature',
    image: menuImages.dondurma,
    items: [
      {
        name: 'Dondurma (1 Top)',
        price: '100₺',
        description: 'Günlük dondurma çeşitlerinden bir top.',
        image: menuImages.dondurma,
      },
      {
        name: 'Affogato',
        price: '300₺',
        description: 'Dondurma üzerine espresso ile servis edilir.',
        image: menuImages.affogato,
      },
      {
        name: 'Banana Split',
        price: '450₺',
        description: 'Muz, dondurma ve soslarla hazırlanan klasik sunum.',
        image: menuImages.bananaSplit,
      },
    ],
  },
  {
    id: 'snacks',
    name: 'Atıştırmalıklar',
    layout: 'feature',
    image: menuImages.borek,
    items: [
      {
        name: 'Börek',
        price: '70₺',
        description: 'Günlük atıştırmalık.',
        image: menuImages.borek,
      },
      {
        name: 'Poğaça',
        price: '30₺',
        description: 'Günlük poğaça.',
        image: menuImages.pogaca,
      },
      {
        name: 'Patatesli Gözleme',
        price: '300₺',
        description: 'Patatesli gözleme.',
        image: menuImages.gozleme,
      },
      {
        name: 'Peynirli Gözleme',
        price: '300₺',
        description: 'Peynirli gözleme.',
        image: menuImages.gozleme,
      },
      {
        name: 'Kıymalı Gözleme',
        price: '400₺',
        description: 'Kıymalı gözleme.',
        image: menuImages.gozleme,
      },
      {
        name: 'Otlu Gözleme',
        price: '300₺',
        description: 'Otlu gözleme.',
        image: menuImages.gozleme,
      },
    ],
  },
  {
    id: 'hot-coffees',
    name: 'Sıcak Kahveler',
    layout: 'half',
    image: coffeeImages.turkKahvesi,
    items: [
      {
        name: 'Türk Kahvesi',
        price: '150₺',
        description: 'Klasik Türk kahvesi.',
        image: coffeeImages.turkKahvesi,
      },
      {
        name: 'Espresso',
        price: '150₺',
        description: 'Yoğun espresso.',
        image: coffeeImages.espresso,
      },
      {
        name: 'Double Espresso',
        price: '300₺',
        description: 'Çift shot espresso.',
        image: coffeeImages.espresso,
      },
      {
        name: 'Americano',
        price: '250₺',
        description: 'Espresso ve sıcak su.',
        image: coffeeImages.americano,
      },
      {
        name: 'Cappuccino',
        price: '250₺',
        description: 'Espresso ve süt köpüğü.',
        image: coffeeImages.milkCoffee,
      },
      {
        name: 'Latte',
        price: '250₺',
        description: 'Espresso ve süt.',
        image: coffeeImages.milkCoffee,
      },
      {
        name: 'Flat White',
        price: '250₺',
        description: 'Yoğun espresso ve kadifemsi süt.',
        image: coffeeImages.milkCoffee,
      },
      {
        name: 'Mocha',
        price: '250₺',
        description: 'Espresso, süt ve çikolata.',
        image: coffeeImages.milkCoffee,
      },
    ],
  },
  {
    id: 'cold-coffees',
    name: 'Soğuk Kahveler',
    layout: 'half',
    image: coffeeImages.iceAmericano,
    items: [
      {
        name: 'Ice Americano',
        price: '250₺',
        description: 'Soğuk Americano.',
        image: coffeeImages.iceAmericano,
      },
      {
        name: 'Ice Latte',
        price: '250₺',
        description: 'Soğuk latte.',
        image: coffeeImages.iceLatte,
      },
      {
        name: 'Ice Mocha',
        price: '250₺',
        description: 'Soğuk mocha.',
        image: coffeeImages.iceMocha,
      },
      {
        name: 'Frappe',
        price: '250₺',
        description: 'Soğuk kahveli frappe.',
        image: coffeeImages.frappe,
      },
    ],
  },
  {
    id: 'flavored-coffees',
    name: 'Aromalı Kahveler',
    layout: 'feature',
    image: coffeeImages.milkCoffee,
    items: [
      {
        name: 'Vanilyalı Latte',
        price: '250₺',
        description: 'Vanilya aromalı latte.',
        image: coffeeImages.milkCoffee,
      },
      {
        name: 'Karamelli Latte',
        price: '250₺',
        description: 'Karamel aromalı latte.',
        image: coffeeImages.milkCoffee,
      },
    ],
  },
  {
    id: 'cold-drinks',
    name: 'Soğuk İçecekler',
    layout: 'feature',
    image: menuImages.kola,
    items: [
      {
        name: 'Milkshake',
        price: '175₺',
        description: 'Soğuk milkshake.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Kutu Kola (330 ml)',
        price: '120₺',
        description: 'Soğuk içecek.',
        image: menuImages.kola,
      },
      {
        name: 'Cam Şişe Kola (200 ml)',
        price: '100₺',
        description: 'Cam şişe kola.',
        image: menuImages.kola,
      },
      {
        name: 'Sprite',
        price: '120₺',
        description: 'Soğuk içecek.',
        image: menuImages.sprite,
      },
      {
        name: 'Fanta',
        price: '120₺',
        description: 'Soğuk içecek.',
        image: menuImages.fanta,
      },
      {
        name: 'Sade Soda',
        price: '60₺',
        description: 'Sade soda.',
        image: menuImages.su,
      },
      {
        name: 'Fuse Tea',
        price: '120₺',
        description: 'Soğuk çay.',
        image: menuImages.cappy,
      },
      {
        name: 'Cappy',
        price: '120₺',
        description: 'Meyve suyu.',
        image: menuImages.cappy,
      },
      {
        name: 'Erikli Cam Şişe Su',
        price: '60₺',
        description: 'Cam şişe su.',
        image: menuImages.su,
      },
      {
        name: 'Su',
        price: '40₺',
        description: 'Su.',
        image: menuImages.su,
      },
    ],
  },
];

function Header() {
  return React.createElement(
    'header',
    { className: 'topbar' },
    React.createElement('div', { className: 'brand' }, 'Nurdos'),
    React.createElement(
      'nav',
      { className: 'socials', 'aria-label': 'Sosyal medya bağlantıları' },
      React.createElement('a', { href: '#', 'aria-label': 'Facebook' }, 'f'),
      React.createElement('a', { href: '#', 'aria-label': 'Instagram' }, '◎'),
    ),
  );
}

function Footer() {
  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement('div', { className: 'brand' }, 'Nurdos'),
    React.createElement(
      'nav',
      { className: 'socials', 'aria-label': 'Sosyal medya bağlantıları' },
      React.createElement('a', { href: '#', 'aria-label': 'Facebook' }, 'f'),
      React.createElement('a', { href: '#', 'aria-label': 'Instagram' }, '◎'),
    ),
  );
}

function Home({ onSelect }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(
      'main',
      { className: 'menu-home' },
      React.createElement(
        'section',
        { className: 'intro-grid', 'aria-label': 'Nurdos tanıtımı' },
        React.createElement(
          'a',
          {
            className: 'category-tile',
            href: '#waffles',
            onClick: (event) => {
              event.preventDefault();
              onSelect('waffles');
            },
            'aria-label': 'Waffle’lar kategorisini aç',
          },
          React.createElement('img', { src: categories[0].image, alt: 'Meyveli çikolatalı waffle' }),
          React.createElement('span', { className: 'tile-label' }, 'Waffle’lar'),
        ),
        React.createElement(
          'div',
          { className: 'story' },
          React.createElement('h1', null, 'Waffle, Dondurma & Tatlı Molası'),
          React.createElement(
            'p',
            null,
            'Taze wafflelar, tatlılar, dondurmalar, atıştırmalıklar, kahveler ve soğuk içecekler.',
          ),
        ),
      ),
      React.createElement(
        'section',
        { className: 'tile-grid', 'aria-label': 'Menü kategorileri' },
        categories.slice(1).map((category) =>
          React.createElement(
            'a',
            {
              key: category.id,
              className: `category-tile ${category.layout === 'feature' ? 'feature' : ''}`,
              href: `#${category.id}`,
              onClick: (event) => {
                event.preventDefault();
                onSelect(category.id);
              },
              'aria-label': `${category.name} kategorisini aç`,
            },
            React.createElement('img', { src: category.image, alt: `${category.name} kategorisi` }),
            React.createElement('span', { className: 'tile-label' }, category.name),
          ),
        ),
      ),
    ),
    React.createElement(Footer),
  );
}

function CategoryNav({ activeId, onSelect, onHome }) {
  return React.createElement(
    'nav',
    { className: 'category-nav', 'aria-label': 'Menü kategorileri' },
    React.createElement(
      'a',
      {
        className: 'back-link',
        href: '#home',
        onClick: (event) => {
          event.preventDefault();
          onHome();
        },
        'aria-label': 'Ana menüye dön',
      },
      '‹',
    ),
    categories.map((category) =>
      React.createElement(
        'a',
        {
          key: category.id,
          className: `nav-pill ${category.id === activeId ? 'active' : ''}`,
          href: `#${category.id}`,
          onClick: (event) => {
            event.preventDefault();
            onSelect(category.id);
          },
        },
        category.name,
      ),
    ),
  );
}

function CategoryPage({ category, onSelect, onHome }) {
  return React.createElement(
    'main',
    { className: 'menu-page' },
    React.createElement(Header),
    React.createElement(CategoryNav, { activeId: category.id, onSelect, onHome }),
    React.createElement(
      'section',
      { className: 'items', 'aria-labelledby': `${category.id}-title` },
      React.createElement('h1', { id: `${category.id}-title`, className: 'section-title' }, category.name),
      category.items.map((item) =>
        React.createElement(
          'article',
          { className: 'product-card', key: item.name },
          React.createElement('img', { src: item.image, alt: item.name }),
          React.createElement(
            'div',
            { className: 'product-copy' },
            React.createElement(
              'div',
              { className: 'product-line' },
              React.createElement('span', null, item.name),
              React.createElement('span', { className: 'price' }, item.price),
            ),
            React.createElement('p', { className: 'description' }, item.description),
          ),
        ),
      ),
    ),
    React.createElement(Footer),
  );
}

function App() {
  const initialCategory = useMemo(() => {
    const fromHash = window.location.hash.replace('#', '');
    return categories.some((category) => category.id === fromHash) ? fromHash : null;
  }, []);
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory);
  const activeCategory = categories.find((category) => category.id === activeCategoryId);

  useEffect(() => {
    function syncFromHash() {
      const fromHash = window.location.hash.replace('#', '');
      setActiveCategoryId(categories.some((category) => category.id === fromHash) ? fromHash : null);
    }

    window.addEventListener('hashchange', syncFromHash);
    syncFromHash();
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  function selectCategory(id) {
    setActiveCategoryId(id);
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goHome() {
    setActiveCategoryId(null);
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return React.createElement(
    'div',
    { className: 'shell' },
    activeCategory
      ? React.createElement(CategoryPage, { category: activeCategory, onSelect: selectCategory, onHome: goHome })
      : React.createElement(Home, { onSelect: selectCategory }),
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
