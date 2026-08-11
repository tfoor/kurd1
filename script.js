/* ============ إعدادات ============ */
const WHATSAPP_NUMBERS = {
  iq: "9647511429970", // خدمات في كردستان/العراق
  sy: "963984959066",  // خدمات في سوريا — تأكد من الرقم الكامل بصيغة دولية (كود سوريا 963)
};
const CURRENCY = "$";
const ORDERS_ENABLED = false; // غيّرها إلى true لتفعيل إرسال الطلبات عبر واتساب من جديد

let selectedCountry = "iq";
function selectCountry(code) {
  selectedCountry = code;
  document.querySelectorAll(".country-opt").forEach(b => {
    b.classList.toggle("active", b.dataset.country === code);
  });
}
document.querySelectorAll(".country-opt").forEach(btn => {
  btn.onclick = () => selectCountry(btn.dataset.country);
});

/* ============ نظام اللغات (عربي / إنكليزي / كرمانجي) ============ */
const translations = {
  ar: {
    marq1: "🚚 شحن مجاني لأول طلب", marq2: "🔥 خصومات تصل ٤٠٪", marq3: "🆕 قطع جديدة أسبوعياً", marq4: "💬 اطلب مباشرة عبر واتساب",
    nav_shop: "تسوّق", nav_deals: "عروض", nav_about: "من نحن", nav_contact: "تواصل معنا",
    editbar_text: "🔓 وضع تعديل الأسعار مفعّل — عدّل السعر بالبطاقة مباشرة", editbar_save: "حفظ التعديلات", editbar_cancel: "إلغاء",
    hero_eyebrow: "تشكيلة ٢٠٢٦", hero_title: "ستايلك يبدأ<br>من هون",
    hero_desc: "مئات القطع المختارة بعناية بأسعار تناسبك، وطلب سهل عبر واتساب بضغطة واحدة.",
    hero_cta1: "تسوّق الآن", hero_cta2: "شاهد العروض", hero_tag: "الأكثر طلباً 🔥",
    cat_men: "رجالي", cat_women: "حريمي", cat_girls: "بناتي", cat_acc: "إكسسوارات", cat_all: "الكل",
    cat_kids: "أطفال", cat_shoes: "أحذية",
    sub_top: "ملابس علوية", sub_sets: "أطقم منسقة", sub_bottom: "ملابس سفلية", sub_denim: "ملابس دينيم",
    sub_dresses: "فساتين", sub_skirts: "تنانير", sub_girls: "بناتي", sub_boys: "أولادي",
    sub_sandals: "صنادل", sub_heels: "كعوب", sub_classic: "كلاسيك",
    sub_hair: "شعر مستعار", sub_bags: "جنط", sub_jewelry: "مجوهرات",
    promo1_t: "خصم يصل إلى ٤٠٪", promo1_d: "على القطع المختارة هذا الأسبوع",
    promo2_t: "اشترِ ٢ واحصل على الثالثة هدية", promo2_d: "على تشكيلة الإكسسوارات",
    promo3_t: "توصيل مجاني", promo3_d: "للطلبات فوق ٥٠$",
    gal_eyebrow: "المعرض", gal_title: "اكتشف تشكيلتنا",
    sort_default: "الترتيب: افتراضي", sort_asc: "السعر: من الأقل للأعلى", sort_desc: "السعر: من الأعلى للأقل",
    sig_title: "ستايلك، قرارك", sig_desc: "في ستايل روج منختار كل قطعة بعين تهتم بالتفاصيل، ونوصلها لباب بيتك بأسهل طريقة. جودة تستمر، وأسعار تناسب الكل.",
    footer_brand: "ستايل روج", footer_brand_desc: "تسوّق أزياء رجالي، حريمي، وبناتي بأسلوب عصري وخدمة طلب مباشرة عبر واتساب.",
    footer_links: "روابط سريعة", footer_contact: "تواصل معنا", footer_wa: "واتساب:", footer_country: "العراق", footer_country2: "سوريا",
    footer_bottom: "© 2026 ستايل روج – جميع الحقوق محفوظة",
    cart_title: "سلة المشتريات", cart_total: "الإجمالي", cart_wa_btn: "إرسال الطلب عبر واتساب",
    cart_note: "سيتم فتح واتساب مع تفاصيل الفاتورة وروابط صور القطع المختارة لتأكيد الطلب.",
    cart_empty: "سلة التسوق فارغة<br>ابدأ بإضافة قطعتك المفضلة", add_btn: "🛍️ أضف للسلة", added_btn: "أُضيفت ✓",
    remove_btn: "إزالة", no_results: "😕 ما في نتائج مطابقة للبحث", edit_btn_title: "تعديل الأسعار",
    pwd_prompt: "أدخل كلمة سر تعديل الأسعار:", pwd_wrong: "كلمة السر غير صحيحة", saved_msg: "تم حفظ الأسعار الجديدة ✅",
    search_placeholder: "🔍 بحث برقم المنتج أو الاسم",
    service_off_title: "🚧 الخدمة متوقفة مؤقتاً", service_off_msg: "هذه صفحة تجريبية، وقريباً رح تتوفر جميع الخدمات.", service_off_ok: "تم",
    country_iq: "العراق", country_sy: "سوريا",
    footer_owner: "المالك:", footer_admin: "المسؤول  :",
  },
  en: {
    marq1: "🚚 Free shipping on your first order", marq2: "🔥 Discounts up to 40%", marq3: "🆕 New pieces weekly", marq4: "💬 Order directly via WhatsApp",
    nav_shop: "Shop", nav_deals: "Deals", nav_about: "About", nav_contact: "Contact",
    editbar_text: "🔓 Price edit mode on — edit the price on the card directly", editbar_save: "Save Changes", editbar_cancel: "Cancel",
    hero_eyebrow: "2026 Collection", hero_title: "Your style starts<br>right here",
    hero_desc: "Hundreds of carefully picked pieces at prices that suit you, with easy ordering via WhatsApp in one tap.",
    hero_cta1: "Shop Now", hero_cta2: "View Deals", hero_tag: "Best Seller 🔥",
    cat_men: "Men", cat_women: "Women", cat_girls: "Girls", cat_acc: "Accessories", cat_all: "All",
    cat_kids: "Kids", cat_shoes: "Shoes",
    sub_top: "Tops", sub_sets: "Matching Sets", sub_bottom: "Bottoms", sub_denim: "Denim",
    sub_dresses: "Dresses", sub_skirts: "Skirts", sub_girls: "Girls", sub_boys: "Boys",
    sub_sandals: "Sandals", sub_heels: "Heels", sub_classic: "Classic",
    sub_hair: "Wigs & Hair", sub_bags: "Bags", sub_jewelry: "Jewelry",
    promo1_t: "Up to 40% off", promo1_d: "On selected pieces this week",
    promo2_t: "Buy 2 get the 3rd free", promo2_d: "On the accessories collection",
    promo3_t: "Free delivery", promo3_d: "On orders over $50",
    gal_eyebrow: "Gallery", gal_title: "Discover Our Collection",
    sort_default: "Sort: Default", sort_asc: "Price: Low to High", sort_desc: "Price: High to Low",
    sig_title: "Your Style, Your Choice", sig_desc: "At Style Rouge we pick every piece with an eye for detail, and deliver it to your door the easy way. Lasting quality, prices for everyone.",
    footer_brand: "Style Rouge", footer_brand_desc: "Shop men's, women's, and girls' fashion with a modern style and direct WhatsApp ordering.",
    footer_links: "Quick Links", footer_contact: "Contact Us", footer_wa: "WhatsApp:", footer_country: "Iraq", footer_country2: "Syria",
    footer_bottom: "© 2026 Style Rouge – All rights reserved",
    cart_title: "Shopping Cart", cart_total: "Total", cart_wa_btn: "Send Order via WhatsApp",
    cart_note: "WhatsApp will open with the invoice details and photo links of the selected pieces to confirm your order.",
    cart_empty: "Your cart is empty<br>Start adding your favorite piece", add_btn: "🛍️ Add to Cart", added_btn: "Added ✓",
    remove_btn: "Remove", no_results: "😕 No matching results", edit_btn_title: "Edit Prices",
    pwd_prompt: "Enter the price-edit password:", pwd_wrong: "Incorrect password", saved_msg: "New prices saved ✅",
    search_placeholder: "🔍 Search by product number or name",
    service_off_title: "🚧 Service Temporarily Unavailable", service_off_msg: "This is a demo page. All services will be available soon.", service_off_ok: "OK",
    country_iq: "Iraq", country_sy: "Syria",
    footer_owner: "Owner:", footer_admin: "Page Admin:",
  },
  ku: {
    marq1: "🚚 Barkirina belaş bo siparîşa yekem", marq2: "🔥 Daşandin heta 40%", marq3: "🆕 Perçeyên nû hefteyane", marq4: "💬 Rasterast bi WhatsApp siparîş bike",
    nav_shop: "Kirîn", nav_deals: "Pêşkêşî", nav_about: "Der barê me", nav_contact: "Têkilî",
    editbar_text: "🔓 Moda guherandina biha çalak e — bihayê li ser kartê rasterast biguherîne", editbar_save: "Guherîn Tomar Bike", editbar_cancel: "Betal",
    hero_eyebrow: "Koleksiyona 2026", hero_title: "Şêwaza te ji vir<br>dest pê dike",
    hero_desc: "Bi sedan perçeyên bi baldarî hilbijartî bi rexneyên li gorî te, û siparîşkirin bi hêsanî bi rêya WhatsApp bi yek pêl.",
    hero_cta1: "Niha Bikire", hero_cta2: "Pêşkêşiyan Bibîne", hero_tag: "Herî Zêde Tê Xwestin 🔥",
    cat_men: "Mêr", cat_women: "Jin", cat_girls: "Keç", cat_acc: "Aksesûar", cat_all: "Hemû",
    cat_kids: "Zarok", cat_shoes: "Sol",
    sub_top: "Kincên Jorîn", sub_sets: "Setên Hevgirtî", sub_bottom: "Kincên Jêrîn", sub_denim: "Cins",
    sub_dresses: "Fistan", sub_skirts: "Îtek", sub_girls: "Keç", sub_boys: "Kur",
    sub_sandals: "Sandal", sub_heels: "Sole Bilind", sub_classic: "Klasîk",
    sub_hair: "Porê Çêkirî", sub_bags: "Çente", sub_jewelry: "Zêr û Zîv",
    promo1_t: "Daşandin heta 40%", promo1_d: "Li ser perçeyên vê heftê hilbijartî",
    promo2_t: "2 Bikire, ya 3an belaş", promo2_d: "Li ser koleksiyona aksesûaran",
    promo3_t: "Gihandina belaş", promo3_d: "Bo siparîşên ji 50$ zêdetir",
    gal_eyebrow: "Galerî", gal_title: "Koleksiyona Me Bibîne",
    sort_default: "Rêzkirin: Standard", sort_asc: "Biha: Ji Kêm bo Zêde", sort_desc: "Biha: Ji Zêde bo Kêm",
    sig_title: "Şêwaza Te, Biryara Te", sig_desc: "Li style Roj em her perçeyek bi baldarî hilbijartin, û bi hêsanî radigihînin ber deriyê te. Kalîteyeke domdar, û rexneyên bo her kesî.",
    footer_brand: "style Roj", footer_brand_desc: "Cilûbergên mêr, jin û keçan bi şêwazeke nûjen û xizmeta siparîşkirinê rasterast bi WhatsApp bikire.",
    footer_links: "Girêdanên Bilez", footer_contact: "Têkilî Bi Me", footer_wa: "WhatsApp:", footer_country: "Iraq", footer_country2: "Sûriye",
    footer_bottom: "© 2026 style Roj – Hemû mafên parastî ne",
    cart_title: "Selika Kirînê", cart_total: "Giştî", cart_wa_btn: "Siparîşê bi WhatsApp Bişêne",
    cart_note: "WhatsApp wê bi hûrguliyên fatûre û lînkên wêneyên perçeyên hilbijartî vebe da ku siparîş were piştrastkirin.",
    cart_empty: "Selika te vala ye<br>Dest pê bike û perçeya xweya xweştirîn zêde bike", add_btn: "🛍️ Zêde Bike Selikê", added_btn: "Zêde Bû ✓",
    remove_btn: "Rake", no_results: "😕 Encamek li gorî lêgerînê nehat dîtin", edit_btn_title: "Bihayan Biguherîne",
    pwd_prompt: "Şîfreya guherandina biha binivîse:", pwd_wrong: "Şîfre şaş e", saved_msg: "rexneyên nû hatin tomarkirin ✅",
    search_placeholder: "🔍 Li gorî hejmar an navê hilberê bigere",
    service_off_title: "🚧 Xizmet Demildî Sekinî ye", service_off_msg: "Ev rûpelek ceribandinê ye. Bi zûtirîn dem hemû xizmet berdest dibin.", service_off_ok: "Baş e",
    country_iq: "Iraq", country_sy: "Sûriye",
    footer_owner: "Xwedan:", footer_admin: "Rêvebirê Rûpelê:",
  }
};

let currentLang = localStorage.getItem("boutique_lang") || "ar";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.ar[key] || key;
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "ar";
  localStorage.setItem("boutique_lang", currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });

  renderFilters();
  renderGallery();
  updateCartUI();
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.onclick = () => applyLanguage(btn.dataset.lang);
});

/* ============ نظام المظهر (فاتح / داكن) ============ */
function applyTheme(theme) {
  const th = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", th);
  localStorage.setItem("boutique_theme", th);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = th === "dark" ? "☀️" : "🌙";
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}
applyTheme(localStorage.getItem("boutique_theme") || "light");



/* ============ بيانات المنتجات ============ */
const products = [
  // أطفال (مثال جاهز - فعّل السطر لما توصل الصور)
  // { id: 7, name: "طقم رومبير وردي بدانتيل", cat: "أطفال", sub: "بناتي", price: 38, img: "images/children/product-romper.webp", badge: "جديد" },
  // { id: 10, name: "فستان قميصي وردي بحزام", cat: "أطفال", sub: "بناتي", price: 42, img: "images/children/product-dress.jpg" },
  // { id: 11, name: "طقم بنطلون وقميص أزرق", cat: "أطفال", sub: "أولادي", price: 40, oldPrice: 52, img: "images/children/product-set.webp", badge: "خصم 20%", sale: true },

  // رجالي 
  { id: 1, name: "طقم رجالي أبيض قميص بأزرار وبنطال مريح", cat: "رجالي", sub: "أطقم منسقة", price: 19, color: "أبيض", img: "men's/1.png", badge: "" },
  { id: 2, name: "طقم بولو رجالي 3 قطع بألوان كلاسيكية", cat: "رجالي", sub: "ملابس علوية", price: 25.23, color: "", img: "men's/2.png", badge: "" },
  { id: 3, name: "طقم بولو رجالي 3 قطع كاجوال", cat: "رجالي", sub: "ملابس علوية", price: 23.63, color: "", img: "men's/3.png", badge: "" },
  { id: 43, name: "طقم رياضي رجالي ابيض قطعتين", cat: "رجالي", sub: "ملابس دينيم", price: 11.95, color: "أبيض", img: "men's/4.png", badge: "" },
  { id: 44, name: "طقم رياضي رجالي اسود قطعتين", cat: "رجالي", sub: "ملابس دينيم", price: 11.95, color: "اسود", img: "men's/5.png", badge: "" },
  { id: 45, name: "قميص بولو رجالي أسود مضلع", cat: "رجالي", sub: "ملابس علوية", price: 14, color: "اسود", img: "men's/6.png", badge: "" },
  { id: 46, name: "تيشيرت رجالي أبيض سادة", cat: "رجالي", sub: "ملابس علوية", price: 8.50, color: "أبيض", img: "men's/7.png", badge: "" },
  { id: 47, name: "طقم كتان رجالي أبيض فاخر", cat: "رجالي", sub: "أطقم منسقة", price: 29.50, color: "أبيض", img: "men's/8.png", badge: "" },
  { id: 48, name: "بلوزة رجالية بدون أكمام سوداء", cat: "رجالي", sub: "ملابس علوية", price: 6.86, color: "اسود", img: "men's/9.png", badge: "" },
  { id: 49, name: "طقم رجالي كاجوال أبيض وكحلي", cat: "رجالي", sub: "أطقم منسقة", price: 24.50, color: "أبيض", img: "men's/10.png", badge: "" },
  { id: 50, name: "قميص بولو رجالي أبيض بنقشة بارزة", cat: "رجالي", sub: "ملابس علوية", price: 14.05, color: "أبيض", img: "men's/11.png", badge: "" },
  { id: 51, name: "تيشيرت رجالي أسود مضلع", cat: "رجالي", sub: "ملابس علوية", price: 14.58, color: "اسود", img: "men's/12.png", badge: "" },
  { id: 52, name: "باك 4 تيشيرتات رجالية قطنية", cat: "رجالي", sub: "ملابس علوية", price: 24.43, color: "أبيض", img: "men's/13.png", badge: "" },
  { id: 53, name: "طقم رجالي بيج فاخر بقماش محبوك", cat: "رجالي", sub: "أطقم منسقة", price: 10.32, color: "أبيض", img: "men's/14.png", badge: "" },
  { id: 54, name: "تيشيرت رجالي أسود بتدرج رمادي", cat: "رجالي", sub: "ملابس علوية", price: 10.32, color: "أبيض", img: "men's/15.png", badge: "" },
  { id: 55, name: "طقم رجالي بني مع بنطال أبيض", cat: "رجالي", sub: "أطقم منسقة", price: 19.64, color: "أبيض", img: "men's/16.png", badge: "" },
  { id: 56, name: "طقم صيفي رجالي بيج بقميص وبنطال", cat: "رجالي", sub: "أطقم منسقة", price: 21, color: "أبيض", img: "men's/18.png", badge: "" },
  { id: 57, name: "طقم رجالي بني أنيق بقميص ياقة صينية", cat: "رجالي", sub: "أطقم منسقة", price: 23.63, color: "أبيض", img: "men's/19.png", badge: "" },
  { id: 58, name: "طقم رجالي صيفي أخضر فاتح (تيشيرت وشورت)", cat: "رجالي", sub: "أطقم منسقة", price: 19.90, color: "أبيض", img: "men's/20.png", badge: "" },
  { id: 59, name: "طقم رجالي بيج فاخر بنقشة مربعات", cat: "رجالي", sub: "ملابس علوية", price: 16.71, color: "أبيض", img: "men's/21.png", badge: "" },
  { id: 60, name: "بولو رجالي أبيض محبوك بسحاب ويا", cat: "رجالي", sub: "أطقم منسقة", price: 19.64, color: "أبيض", img: "men's/22.png", badge: "" },
  { id: 61, name: "طقم رجالي صيفي أبيض بقماش كريب مجعد", cat: "رجالي", sub: "أطقم منسقة", price: 24.70, color: "أبيض", img: "men's/23.png", badge: "" },
  { id: 62, name: "شورت رياضي رجالي قطعتين", cat: "رجالي", sub: "ملابس سفلية", price: 17.51, color: "أبيض", img: "men's/17.png", badge: "" },


  // حريمي
  { id: 12, name: "تنورة طويلة بيضاء بطبقات", cat: "حريمي", sub: "تنانير", price: 15, color: "أبيض", img: "female/1.png" },
  { id: 13, name: "تنورة طويلة مطبوعة أزرق وأبيض", cat: "حريمي", sub: "تنانير", price: 14, color: "أزرق مطبوع", img: "female/2.png" },
  { id: 14, name: "تنورة بنطلون كحلية بحزام", cat: "حريمي", sub: "تنانير", price: 10, color: "كحلي", img: "female/3.png" },
  { id: 15, name: "تنورة بني غامق بأزرار جانبية", cat: "حريمي", sub: "تنانير", price: 14, color: "بني غامق", img: "female/4.png" },
  { id: 16, name: "تنورة كشمير أصفر كاروهات", cat: "حريمي", sub: "تنانير", price: 12, color: "أصفر كاروهات", img: "female/5.png" },
  { id: 17, name: "تنورة بيضاء بحزام مطرز بألوان", cat: "حريمي", sub: "تنانير", price: 17, color: "أبيض بحزام ملون", img: "female/6.png" },
  { id: 18, name: "تنورة طويلة بني غامق بطبقات", cat: "حريمي", sub: "تنانير", price: 12, color: "بني غامق", img: "female/7.png" },
  { id: 19, name: "تنورة جينز أزرق فاتح", cat: "حريمي", sub: "تنانير", price: 18, color: "أزرق جينز فاتح", img: "female/8.png" },
  { id: 20, name: "تنورة شيفون أخضر زيتي بطبقات", cat: "حريمي", sub: "تنانير", price: 15, color: "أخضر زيتي", img: "female/9.png" },
  { id: 26, name: "فستان ساتان موف بحزام سلسلة", cat: "حريمي", sub: "فساتين", price: 26, color: "موف", img: "female/10.png" },
  { id: 27, name: "طقم بلوزة سوداء وتنورة لفّة بيضاء", cat: "حريمي", sub: "أطقم منسقة", price: 27, color: "أسود وأبيض", img: "female/11.png" },
  { id: 28, name: "فستان ساتان وردي مموّه بسحاب", cat: "حريمي", sub: "فساتين", price: 26, color: "وردي مموّه", img: "female/12.png" },
  { id: 29, name: "فستان سهرة نبيتي بترتر ودانتيل", cat: "حريمي", sub: "فساتين", price: 33, color: "نبيتي", img: "female/13.png" },
  { id: 30, name: "فستان دانتيل نبيتي بأكمام جرس", cat: "حريمي", sub: "فساتين", price: 24, color: "نبيتي", img: "female/14.png" },
  { id: 31, name: "طقم كحلي ببلوزة وتنورة شيفون وحزام", cat: "حريمي", sub: "أطقم منسقة", price: 28, color: "كحلي", img: "female/15.png" },
  { id: 32, name: "طقم بني دگراديه ببلوزة وتنورة شيفون", cat: "حريمي", sub: "أطقم منسقة", price: 26, color: "بني دگراديه", img: "female/16.png" },
  { id: 33, name: "فستان سهرة أخضر فستقي بياقة مرصعة", cat: "حريمي", sub: "فساتين", price: 26, color: "أخضر فستقي", img: "female/17.png" },
  { id: 34, name: "طقم كروب توب أسود وتنورة تاي داي", cat: "حريمي", sub: "أطقم منسقة", price: 21, color: "أسود وبرتقالي", img: "female/18.png" },

  // أحذية
  { id: 8, name: "حذاء كلاسيك جلديشعر صناعي أحمر عنابي طويل", cat: "أحذية", sub: "كلاسيك", price: 9, img: "shoes/1.png" },
  { id: 21, name: "صندل كعب نبيتي بفيونكة ساتان", cat: "أحذية", sub: "صنادل", price: 17, color: "نبيتي", img: "shoes/2.png" },
  { id: 22, name: "صندل كعب نبيتي بفيونكة كبيرة", cat: "أحذية", sub: "صنادل", price: 17, color: "نبيتي", img: "shoes/3.png" },
  { id: 23, name: "كعب مرصّع بالكريستال والورود", cat: "أحذية", sub: "كعوب", price: 17, color: "وردي مرصّع", img: "shoes/4.png" },
  // { id: 24, name: "صندل كعب بيج بتصميم كروشيه", cat: "أحذية", sub: "صنادل", price: 13, color: "بيج", img: "shoes/5.png" },

  // إكسسوارات (مثال جاهز - فعّل السطر لما توصل الصور)
  { id: 40, name: "     لشعر مستعار نبيتي", cat: "إكسسوارات", sub: "شعر مستعار", price: 9, color: "لون خمري", img: "accessories/1.png" },
  // { id: 41, name: "جنطة كتف جلد أسود", cat: "إكسسوارات", sub: "جنط", price: 30, color: "أسود", img: "accessories/bag1.png" },
  // { id: 42, name: "طقم مجوهرات فضي مرصّع", cat: "إكسسوارات", sub: "مجوهرات", price: 15, color: "فضي", img: "accessories/jewelry1.png" },
];

const categories = ["الكل", "رجالي", "حريمي", "أطفال", "أحذية", "إكسسوارات"];
const catKeyMap = { "الكل": "cat_all", "رجالي": "cat_men", "حريمي": "cat_women", "أطفال": "cat_kids", "أحذية": "cat_shoes", "إكسسوارات": "cat_acc" };

/* ============ التصنيفات الفرعية لكل فئة رئيسية ============ */
const subcatsByCat = {
  "رجالي": ["ملابس علوية", "أطقم منسقة", "ملابس سفلية", "ملابس دينيم"],
  "حريمي": ["تنانير", "فساتين", "أطقم منسقة", "ملابس علوية", "ملابس سفلية"],
  "أطفال": ["بناتي", "أولادي"],
  "أحذية": ["صنادل", "كعوب", "كلاسيك"],
  "إكسسوارات": ["شعر مستعار", "جنط", "مجوهرات"],
};
const subKeyMap = {
  "ملابس علوية": "sub_top", "أطقم منسقة": "sub_sets", "ملابس سفلية": "sub_bottom", "ملابس دينيم": "sub_denim",
  "فساتين": "sub_dresses", "تنانير": "sub_skirts", "بناتي": "sub_girls", "أولادي": "sub_boys",
  "صنادل": "sub_sandals", "كعوب": "sub_heels", "كلاسيك": "sub_classic",
  "شعر مستعار": "sub_hair", "جنط": "sub_bags", "مجوهرات": "sub_jewelry",
};
let activeCat = "الكل";
let activeSub = "الكل";
let cart = []; // {id, qty}

/* ============ عرض الفلاتر (رئيسية + فرعية) ============ */
const filtersEl = document.getElementById("filters");
const subfiltersEl = document.getElementById("subfilters");
function buildFilters() {
  filtersEl.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCat ? " active" : "");
    btn.textContent = t(catKeyMap[cat] || cat);
    btn.dataset.cat = cat;
    btn.onclick = () => { activeCat = cat; activeSub = "الكل"; renderFilters(); renderGallery(); };
    filtersEl.appendChild(btn);
  });
  buildSubFilters();
}
function buildSubFilters() {
  if (!subfiltersEl) return;
  const subs = subcatsByCat[activeCat];
  if (!subs || !subs.length) {
    subfiltersEl.innerHTML = "";
    subfiltersEl.style.display = "none";
    return;
  }
  subfiltersEl.style.display = "flex";
  subfiltersEl.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = "subfilter-btn" + (activeSub === "الكل" ? " active" : "");
  allBtn.textContent = t("cat_all");
  allBtn.onclick = () => { activeSub = "الكل"; renderFilters(); renderGallery(); };
  subfiltersEl.appendChild(allBtn);
  subs.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "subfilter-btn" + (sub === activeSub ? " active" : "");
    btn.textContent = t(subKeyMap[sub] || sub);
    btn.onclick = () => { activeSub = sub; renderFilters(); renderGallery(); };
    subfiltersEl.appendChild(btn);
  });
}
function renderFilters() {
  buildFilters();
}

/* ============ تفعيل الفلترة من مربعات الفئات بالأعلى ============ */
document.querySelectorAll(".cat-tile").forEach(tile => {
  tile.onclick = () => {
    activeCat = tile.dataset.cat;
    activeSub = "الكل";
    renderFilters();
    renderGallery();
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };
});

/* ============ عرض المعرض ============ */
const galleryEl = document.getElementById("gallery-grid");
function renderGallery() {
  galleryEl.innerHTML = "";
  let list = activeCat === "الكل" ? [...products] : products.filter(p => p.cat === activeCat);
  if (activeSub !== "الكل") list = list.filter(p => p.sub === activeSub);

  const searchInput = document.getElementById("searchInput");
  const searchVal = searchInput ? searchInput.value.trim() : "";
  if (searchVal) {
    const q = searchVal.toLowerCase();
    list = list.filter(p =>
      String(p.id).includes(q) ||
      p.name.toLowerCase().includes(q)
    );
  }

  const sortVal = document.getElementById("sortSelect") ? document.getElementById("sortSelect").value : "default";
  if (sortVal === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sortVal === "price-desc") list.sort((a, b) => b.price - a.price);

  if (list.length === 0) {
    galleryEl.innerHTML = `<div class="no-results">${t("no_results")}</div>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" ${p.fallback ? `onerror="this.onerror=null;this.src='${p.fallback}'"` : ""} onclick="openLightbox(this.src,'${p.name.replace(/'/g, "\\'")}')">
        <span class="product-id">#${p.id}</span>
        ${p.badge ? `<span class="badge ${p.sale ? 'sale' : ''} ${p.best ? 'best' : ''}">${p.badge}</span>` : ""}
        <div class="quick-add">
          <button class="add-btn" data-id="${p.id}"><span>${t("add_btn")}</span></button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-cat">${t(catKeyMap[p.cat] || p.cat)}</div>
        <h3>${p.name}</h3>
        <div class="price-row">
          <span class="price-display">${p.price}${CURRENCY}</span>
          ${p.oldPrice ? `<span class="price-old">${p.oldPrice}${CURRENCY}</span>` : ""}
        </div>
      </div>`;
    galleryEl.appendChild(card);
  });

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.onclick = () => {
      addToCart(Number(btn.dataset.id));
      btn.classList.add("added");
      btn.querySelector("span").textContent = t("added_btn");
      setTimeout(() => { btn.classList.remove("added"); btn.querySelector("span").textContent = t("add_btn"); }, 1200);
    };
  });
  requestAnimationFrame(observeCards);
}

/* ============ حركة الظهور عند التمرير ============ */
function observeCards() {
  const cards = document.querySelectorAll(".card:not(.reveal)");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("reveal"); io.unobserve(e.target); } });
  }, { threshold: .15 });
  cards.forEach(c => io.observe(c));
}

/* ============ السلة ============ */
function addToCart(id) {
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; } else { cart.push({ id, qty: 1 }); }
  updateCartUI();
}
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(c => c.id !== id); }
  updateCartUI();
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}
function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const waBtn = document.getElementById("waBtn");

  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  countEl.textContent = totalQty;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div>🛍️</div>${t("cart_empty")}</div>`;
    totalEl.textContent = `0${CURRENCY}`;
    waBtn.disabled = true;
    return;
  }
  waBtn.disabled = false;
  let total = 0;
  itemsEl.innerHTML = cart.map(c => {
    const p = products.find(pr => pr.id === c.id);
    const subtotal = p.price * c.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" ${p.fallback ? `onerror="this.onerror=null;this.src='${p.fallback}'"` : ""}>
        <div class="ci-info">
          <h4>${p.name} <span class="ci-id">#${p.id}</span></h4>
          <span class="ci-price">${p.price}${CURRENCY} × ${c.qty} = ${subtotal}${CURRENCY}</span>
          <div class="qty-row">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <span>${c.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${p.id})">${t("remove_btn")}</button>
        </div>
      </div>`;
  }).join("");
  totalEl.textContent = `${total}${CURRENCY}`;
}

/* ============ فتح / إغلاق صورة كاملة (Lightbox) ============ */
function openLightbox(src, alt) {
  const lb = document.getElementById("imgLightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("imgLightbox");
  lb.classList.remove("show");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ============ فتح / إغلاق السلة ============ */
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

/* ============ فتح / إغلاق قائمة الموبايل ============ */
function openNav() {
  document.getElementById("nav").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeNav() {
  document.getElementById("nav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.contains("open") ? closeNav() : openNav();
}
function closeAllPanels() {
  closeCart();
  closeNav();
}
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", closeNav));

/* ============ نافذة "الخدمة متوقفة مؤقتاً" ============ */
function openServiceModal() {
  document.getElementById("serviceModal").classList.add("show");
}
function closeServiceModal() {
  document.getElementById("serviceModal").classList.remove("show");
}

/* ============ إرسال الطلب عبر واتساب ============ */
function sendWhatsAppOrder() {
  if (cart.length === 0) return;
  if (!ORDERS_ENABLED) { openServiceModal(); return; }
  let total = 0;
  let message = "🛍️ *طلب جديد من ستايل روج*\n\n";
  cart.forEach(c => {
    const p = products.find(pr => pr.id === c.id);
    const subtotal = p.price * c.qty;
    total += subtotal;
    message += `🔸 *${p.name}* (رقم المنتج: #${p.id} - ${p.cat})\n`;
    message += `   الكمية: ${c.qty} × ${p.price}${CURRENCY} = ${subtotal}${CURRENCY}\n`;
    message += `   📸 صورة القطعة: ${p.img}\n\n`;
  });
  message += "────────────────\n";
  message += `💰 *الإجمالي: ${total}${CURRENCY}*\n`;
  message += `عدد القطع: ${cart.reduce((s, c) => s + c.qty, 0)}\n\n`;
  message += "يرجى تأكيد الطلب وإرسال العنوان لإتمام التوصيل 🙏";

  const url = `https://wa.me/${WHATSAPP_NUMBERS[selectedCountry]}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ============ تصغير الهيدر عند التمرير ============ */
window.addEventListener("scroll", () => {
  document.querySelector("header").style.boxShadow = window.scrollY > 10 ? "0 6px 20px rgba(0,0,0,.06)" : "none";
});

/* ============ تهيئة أولية ============ */
renderGallery();
updateCartUI();
applyLanguage(currentLang);