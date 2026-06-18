const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfFsF2POnvK5N3aRLyvllEBhXX9CL3hMQqV1pZ09w53fsmZKw/viewform?usp=publish-editor";

const state = {
  lang: "zh",
  filter: "all",
  products: []
};

const copy = {
  zh: {
    brandName: "上品綜合工業",
    brandNameFooter: "上品綜合工業",
    navProducts: "展品",
    navBooth: "攤位",
    navBoothDesign: "攤位設計",
    navMedia: "資料",
    navContact: "預約",
    heroTitle: "上品綜合工業 SEMICON Taiwan 2026 展品導覽",
    heroCopy: "以高潔淨氟素材料、槽體、熱交換與模組化製程應用，支援半導體濕製程關鍵設備需求。",
    heroExplore: "探索展品",
    heroMeet: "預約洽談",
    factDate: "展期",
    factPlace: "地點",
    factBooth: "攤位",
    companyEyebrow: "Company",
    companyTitle: "半導體濕製程材料與設備應用夥伴",
    companyCopy: "上品綜合工業長期投入氟素材料加工、PFA/PTFE 應用、槽體與模組化零組件，服務高潔淨、高耐化與製程穩定性要求的產業應用。",
    metricMaterials: "氟素材料應用",
    metricProcess: "濕製程設備支援",
    metricBrand: "品牌與技術展示",
    productsEyebrow: "Exhibits",
    productsTitle: "互動展品探索",
    productsIntro: "依現場展示主題快速篩選，點開卡片可查看應用、亮點與規格摘要。",
    boothDesignEyebrow: "Booth Design",
    boothDesignTitle: "上品攤位形象設計",
    boothDesignCaption: "SEMICON Taiwan 2026｜上品綜合工業｜Booth L1116",
    boothEyebrow: "Booth Experience",
    boothTitle: "L1116 攤位亮點",
    mediaEyebrow: "Media Kit",
    mediaTitle: "法人與媒體快速資料",
    mediaIntro: "提供公司概況、展品重點與攤位資訊，協助法人與媒體快速掌握上品本次參展內容。",
    resourceProfileTitle: "公司簡介",
    resourceProfileCopy: "上品在氟素材料加工、半導體濕製程零組件與客製化模組上的核心能力摘要。",
    resourceProductsTitle: "展品摘要",
    resourceProductsCopy: "PFA 槽體、Vessel、熱交換器、Fitting、內襯板與研發材料模組一覽。",
    resourceBoothTitle: "攤位資訊",
    resourceBoothCopy: "SEMICON Taiwan 2026 展期、地點、攤位 L1116 與現場洽談安排。",
    contactEyebrow: "Book a Meeting",
    contactTitle: "預約現場洽談或索取資料",
    contactCopy: "請留下基本資訊與關注產品，展會期間將由上品團隊安排專人接待或後續聯繫。",
    contactForm: "開啟 Google 表單",
    contactWebsite: "前往公司網站",
    backTop: "回到頁首",
    all: "全部",
    featured: "主打展品",
    vessel: "槽體 / Vessel",
    thermal: "熱交換",
    components: "零組件",
    materials: "板材內襯",
    rd: "研發材料",
    application: "應用",
    specs: "規格摘要",
    learnMore: "查看細節",
    closeDetails: "收合細節",
    formPending: "Google 表單網址尚未填入。請將 app.js 裡的 GOOGLE_FORM_URL 換成正式表單連結。",
    boothHighlights: [
      ["兩層樓展場", "二樓規劃 VIP 會議空間，可支援約 10 人簡報與洽談。"],
      ["現場接待", "一樓設接待台、高腳圓桌與半開放交流區，方便快速導覽與名片交換。"],
      ["產品展示", "至少 3 組展示台面，搭配 Fitting 樣品櫃、PFA 槽與研發材料展示。"],
      ["法人簡報", "80 吋以上大型螢幕支援公司與核心產品簡報。"],
      ["品牌露出", "上品 LOGO 與 TEFPASS 品牌於攤位主視覺中清楚呈現。"]
    ]
  },
  en: {
    brandName: "Allied Supreme Corp.",
    brandNameFooter: "Allied Supreme Corp.",
    navProducts: "Exhibits",
    navBooth: "Booth",
    navBoothDesign: "Booth Design",
    navMedia: "Media",
    navContact: "Book",
    heroTitle: "Allied Supreme at SEMICON Taiwan 2026",
    heroCopy: "High-purity fluoropolymer materials, tanks, heat exchange, and modular process applications for semiconductor wet-process equipment.",
    heroExplore: "Explore Exhibits",
    heroMeet: "Book a Meeting",
    factDate: "Date",
    factPlace: "Venue",
    factBooth: "Booth",
    companyEyebrow: "Company",
    companyTitle: "A materials and equipment partner for semiconductor wet processes",
    companyCopy: "Allied Supreme focuses on fluoropolymer processing, PFA/PTFE applications, tanks, and modular components for demanding clean, chemical-resistant, and stable process environments.",
    metricMaterials: "Fluoropolymer applications",
    metricProcess: "Wet-process support",
    metricBrand: "Brand and technology showcase",
    productsEyebrow: "Exhibits",
    productsTitle: "Interactive Product Explorer",
    productsIntro: "Filter by exhibit theme and open each card to review applications, highlights, and specification summaries.",
    boothDesignEyebrow: "Booth Design",
    boothDesignTitle: "ASC Booth Identity Design",
    boothDesignCaption: "SEMICON Taiwan 2026 | Allied Supreme Corp. | Booth L1116",
    boothEyebrow: "Booth Experience",
    boothTitle: "Booth L1116 Highlights",
    mediaEyebrow: "Media Kit",
    mediaTitle: "Quick facts for investors and media",
    mediaIntro: "Company profile, exhibit highlights, and booth information for investors and media to quickly understand ASC's SEMICON Taiwan 2026 presence.",
    resourceProfileTitle: "Company Profile",
    resourceProfileCopy: "A concise summary of ASC capabilities in fluoropolymer processing, semiconductor wet-process components, and custom modules.",
    resourceProductsTitle: "Exhibit Summary",
    resourceProductsCopy: "Overview of PFA tanks, vessels, heat exchangers, fittings, lining panels, and R&D material modules.",
    resourceBoothTitle: "Booth Info",
    resourceBoothCopy: "SEMICON Taiwan 2026 dates, venue, booth L1116, and on-site meeting arrangements.",
    contactEyebrow: "Book a Meeting",
    contactTitle: "Schedule an on-site discussion or request materials",
    contactCopy: "Share your contact details and product interests so the ASC team can arrange a host during the show or follow up afterward.",
    contactForm: "Open Google Form",
    contactWebsite: "Company Website",
    backTop: "Back to Top",
    all: "All",
    featured: "Featured",
    vessel: "Tank / Vessel",
    thermal: "Heat Exchange",
    components: "Components",
    materials: "Lining Sheets",
    rd: "R&D Materials",
    application: "Application",
    specs: "Spec Summary",
    learnMore: "View Details",
    closeDetails: "Close Details",
    formPending: "The Google Form URL has not been configured yet. Replace GOOGLE_FORM_URL in app.js with the live form link.",
    boothHighlights: [
      ["Two-level booth", "The second floor is planned as a VIP meeting space for briefings and discussions with around 10 guests."],
      ["On-site reception", "The first floor includes a reception counter, high tables, and an open discussion area for fast booth tours."],
      ["Product display", "At least three display surfaces are planned for fittings, PFA tanks, and R&D material exhibits."],
      ["Investor briefings", "An 80-inch or larger display supports company and product presentations."],
      ["Brand visibility", "ASC and TEFPASS branding are clearly presented in the booth visual system."]
    ]
  }
};

const categories = ["all", "featured", "vessel", "thermal", "components", "materials", "rd"];

document.addEventListener("DOMContentLoaded", () => {
  bindLanguageSwitch();
  bindFormButton();
  loadProducts();
  renderStaticCopy();
});

async function loadProducts() {
  try {
    const response = await fetch(`data/products.json?v=${Date.now()}`, { cache: "no-store" });
    state.products = await response.json();
  } catch (error) {
    state.products = fallbackProducts;
  }

  renderFilters();
  renderProducts();
}

function bindLanguageSwitch() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
      document.querySelectorAll(".lang-button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderStaticCopy();
      renderFilters();
      renderProducts();
    });
  });
}

function bindFormButton() {
  document.getElementById("formButton").addEventListener("click", () => {
    if (GOOGLE_FORM_URL.includes("REPLACE_WITH")) {
      alert(copy[state.lang].formPending);
      return;
    }
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  });
}

function renderStaticCopy() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[state.lang][key] || node.textContent;
  });

  const highlights = document.getElementById("boothHighlights");
  if (highlights) {
    highlights.innerHTML = copy[state.lang].boothHighlights.map(([title, body], index) => `
      <article class="timeline-item">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      </article>
    `).join("");
  }
}

function renderFilters() {
  const filterBar = document.getElementById("filterBar");
  filterBar.innerHTML = categories.map((category) => `
    <button class="filter-button ${state.filter === category ? "is-active" : ""}" type="button" data-filter="${category}">
      ${copy[state.lang][category]}
    </button>
  `).join("");

  filterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  const products = state.products.filter((product) => {
    if (state.filter === "all") return true;
    if (state.filter === "featured") return product.featured;
    return product.category === state.filter;
  });

  productGrid.innerHTML = products.map((product) => {
    const title = product.name[state.lang];
    const summary = product.summary[state.lang];
    const highlights = product.highlights[state.lang].map((item) => `<li>${item}</li>`).join("");
    const imageList = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
    const isCarousel = imageList.length > 1;
    const mediaClass = isCarousel ? "product-media media-carousel" : "product-media";
    const mediaImages = imageList.map((src, index) => `<img src="${src}" alt="${title}${isCarousel ? ` ${index + 1}` : ""}">`).join("");
    return `
      <article class="product-card">
        <div class="${mediaClass}">
          ${isCarousel ? `
            <button class="media-nav prev" type="button" aria-label="Previous image">‹</button>
            <div class="media-track">${mediaImages}</div>
            <button class="media-nav next" type="button" aria-label="Next image">›</button>
            <div class="media-dots" aria-hidden="true">
              ${imageList.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("")}
            </div>
          ` : mediaImages}
          ${product.featured ? `<span>${copy[state.lang].featured}</span>` : ""}
        </div>
        <div class="product-body">
          <p class="category-label">${copy[state.lang][product.category]}</p>
          <h3>${title}</h3>
          <p>${summary}</p>
          <button class="detail-toggle" type="button" aria-expanded="false">
            ${copy[state.lang].learnMore}
          </button>
          <div class="product-details" hidden>
            <h4>${copy[state.lang].application}</h4>
            <p>${product.application[state.lang]}</p>
            <h4>${copy[state.lang].specs}</h4>
            <p>${product.specs[state.lang]}</p>
            <ul>${highlights}</ul>
          </div>
        </div>
      </article>
    `;
  }).join("");

  productGrid.querySelectorAll(".detail-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isOpen = !details.hidden;
      details.hidden = isOpen;
      button.setAttribute("aria-expanded", String(!isOpen));
      button.textContent = isOpen ? copy[state.lang].learnMore : copy[state.lang].closeDetails;
    });
  });

  productGrid.querySelectorAll(".media-carousel").forEach(bindMediaCarousel);
}

function bindMediaCarousel(carousel) {
  const track = carousel.querySelector(".media-track");
  const images = [...carousel.querySelectorAll(".media-track img")];
  const dots = [...carousel.querySelectorAll(".media-dots span")];
  let index = 0;

  const update = (nextIndex) => {
    index = (nextIndex + images.length) % images.length;
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };

  carousel.querySelector(".prev").addEventListener("click", () => update(index - 1));
  carousel.querySelector(".next").addEventListener("click", () => update(index + 1));
}

const fallbackProducts = [
  {
    id: "pfa-vessel",
    category: "vessel",
    featured: true,
    image: "assets/products/products-Vessel-01.webp",
    images: [
      "assets/products/products-Vessel-01.webp",
      "assets/products/products-vessel-02.webp"
    ],
    name: { zh: "PFA 槽 / Vessel 模組", en: "PFA Tank / Vessel Module" },
    summary: {
      zh: "可用於半導體與化學產業高純度液體的供應、輸送與儲存，內表面平滑並可依需求製作圓筒或方形槽體。",
      en: "For supplying, transporting, and storing high-purity liquids in semiconductor and chemical applications, with smooth inner surfaces and cylindrical or square configurations."
    },
    highlights: {
      zh: ["TEFPASS PFA HP Vessel：PFA-HP、PFA-HP PLUS 材質", "可應用於高純度化學液供應與輸送", "Vessel 容器設計可自然排液，支援高潔淨儲存需求"],
      en: ["TEFPASS PFA HP Vessel: PFA-HP and PFA-HP PLUS materials", "Designed for high-purity chemical supply and transportation", "Vessel container design supports natural drainage and ultra-high-purity storage"]
    },
    specs: { zh: "PFA HP Vessel：厚度 7 mm，容量 20-40 L，設計壓力 3.5 kg/cm²，設計溫度 110°C。TEFPASS Vessel：4” 容量 1.8-7.4 L、6” 容量 4.7-19 L、8” 容量 8.6-35.4 L，設計壓力 0-4 kg/cm²，設計溫度 -20-80°C。", en: "PFA HP Vessel: 7 mm thickness, 20-40 L capacity, 3.5 kg/cm² design pressure, 110°C design temperature. TEFPASS Vessel: 4 in. 1.8-7.4 L, 6 in. 4.7-19 L, 8 in. 8.6-35.4 L, 0-4 kg/cm² design pressure, -20-80°C design temperature." },
    application: { zh: "半導體與化學產業高純度液體供應、輸送、儲存及濕製程設備應用。", en: "High-purity liquid supply, transportation, storage, and wet-process equipment applications for semiconductor and chemical industries." }
  },
  {
    id: "heat-exchanger",
    category: "thermal",
    featured: true,
    image: "assets/products/products-heat-exchanger-01.webp",
    images: [
      "assets/products/products-heat-exchanger-01.webp",
      "assets/products/products-heat-exchanger-02.webp"
    ],
    name: { zh: "熱交換器與多孔板", en: "Heat Exchanger and Tube Sheet" },
    summary: {
      zh: "包含 8 吋熱交換器、10x8 Tube 熱熔、多孔板與 127 支熱交換器展示。",
      en: "Includes 8-inch heat exchanger, 10x8 tube fusion, tube sheet, and 127-tube heat exchanger exhibits."
    },
    highlights: {
      zh: ["高潔淨熱交換應用", "多孔板與管束結構展示", "展示焊接與熱熔加工能力"],
      en: ["High-purity heat exchange application", "Tube sheet and tube bundle structure display", "Shows welding and fusion-processing capability"]
    },
    specs: { zh: "展示項目含 8” 熱交換器、10x8 Tube、127 支熱交換器。", en: "Exhibits include 8-inch heat exchanger, 10x8 tube, and 127-tube unit." },
    application: { zh: "濕製程溫控、化學液熱交換與高潔淨流體處理。", en: "Wet-process temperature control, chemical heat exchange, and high-purity fluid handling." }
  },
  {
    id: "fittings-valves",
    category: "components",
    featured: true,
    image: "assets/products/products-pfafitting-01.webp",
    name: { zh: "PFA Fitting、閥件", en: "PFA Fittings and Valves" },
    summary: {
      zh: "以可組裝樣品展示擴口、對焊、閥件與 Tube 應用，方便現場互動說明。",
      en: "Interactive samples for flared, butt-welded, valve, and tube applications for easier on-site demonstrations."
    },
    highlights: {
      zh: ["約 40 件可組裝樣品", "規格含 1/4”、3/8”、1/2”、3/4”", "展示櫃搭配光源與 iPad 解說"],
      en: ["Around 40 assembly samples", "Sizes include 1/4, 3/8, 1/2, and 3/4 inch", "Display cabinet with lighting and iPad guidance"]
    },
    specs: { zh: "包含擴口、對焊、閥件與 Tube 樣品。", en: "Includes flared, butt-welded, valve, and tube samples." },
    application: { zh: "化學液管路、設備配管、客製化連接件。", en: "Chemical piping, tool plumbing, and custom connection components." }
  },
  {
    id: "sampling-bottles",
    category: "components",
    featured: false,
    image: "assets/products/products-pfa-sampling-bottles-01.webp",
    name: { zh: "PFA 取樣瓶", en: "PFA Sampling Bottles" },
    summary: {
      zh: "展示 PFA 取樣瓶，支援高潔淨樣品收集與保存需求。",
      en: "PFA sampling bottles for high-purity sample collection and storage."
    },
    highlights: {
      zh: ["PFA 取樣瓶兩組共 10 款", "適合高潔淨取樣情境", "支援樣品收集與保存需求"],
      en: ["Two PFA sampling-bottle sets with 10 styles", "Designed for high-purity sampling scenarios", "Supports sample collection and storage needs"]
    },
    specs: { zh: "PFA 取樣瓶規格依正式型錄更新。", en: "PFA sampling bottle specifications to be finalized with the official catalog." },
    application: { zh: "化學液取樣、實驗室保存、製程品質檢測。", en: "Chemical sampling, lab storage, and process quality inspection." }
  },
  {
    id: "lining-sheets",
    category: "materials",
    featured: false,
    image: "assets/products/products-ptfe-tank-01.webp",
    name: { zh: "四方槽、氟素板材", en: "PTFE Tank and Fluoropolymer Sheets" },
    summary: {
      zh: "展示內襯工藝、焊接、PFA Sheet、PTFE Etched Sheet 與 M-PTFE CBK 材料應用。",
      en: "Lining process, welding, PFA Sheet, PTFE Etched Sheet, and M-PTFE CBK material applications."
    },
    highlights: {
      zh: ["本體展示尺寸約 W395 x H329 x D300 mm", "呈現內襯與焊接工藝", "支援耐化與結構保護需求"],
      en: ["Display body approx. W395 x H329 x D300 mm", "Shows lining and welding workmanship", "Supports chemical resistance and structural protection"]
    },
    specs: { zh: "材料含 PFA Sheet、PTFE Etched Sheet、M-PTFE CBK。", en: "Materials include PFA Sheet, PTFE Etched Sheet, and M-PTFE CBK." },
    application: { zh: "槽體內襯、耐化板材、設備保護層。", en: "Tank lining, chemical-resistant panels, and equipment protective layers." }
  },
  {
    id: "rd-modules",
    category: "rd",
    featured: true,
    image: "assets/products/products-film-modules-all.webp",
    images: [
      "assets/products/products-film-modules-all.webp",
      "assets/products/products-plate-tubular-membrane-01.webp"
    ],
    name: { zh: "板模組、管模組與膜材", en: "Plate, Tube, and Film Modules" },
    summary: {
      zh: "展示板模組、管模組、微孔膜、微孔管與 ETFE Film 離型膜等研發材料。",
      en: "R&D materials including plate module, tube module, microporous film, microporous tube, and ETFE release film."
    },
    highlights: {
      zh: ["板模組：200 x 100 x 10 pcs", "管模組：4” 展示件", "ETFE Film 含鏡面與霧面"],
      en: ["Plate module: 200 x 100 x 10 pcs", "Tube module: 4-inch display piece", "ETFE Film includes glossy and matte surfaces"]
    },
    specs: { zh: "板模組 W180 x H375 x D225 mm；管模組 W480 x H110 x D130 mm。", en: "Plate module W180 x H375 x D225 mm; tube module W480 x H110 x D130 mm." },
    application: { zh: "研發材料展示、薄膜應用、微孔結構與客製模組討論。", en: "R&D material showcase, film applications, microporous structures, and custom module discussions." }
  }
];
