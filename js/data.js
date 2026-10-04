/* STACKLY — mock product catalogue (35 items).
   Curated high-fashion imagery from Unsplash for ultra-realistic luxury presentation. */

const FASHION_IMAGES = {
  1: { primary: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=35&w=800&fm=webp&fit=crop" },
  2: { primary: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=35&w=800&fm=webp&fit=crop" },
  3: { primary: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=35&w=800&fm=webp&fit=crop" },
  4: { primary: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=35&w=800&fm=webp&fit=crop" },
  5: { primary: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=35&w=800&fm=webp&fit=crop" },
  6: { primary: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=35&w=800&fm=webp&fit=crop" },
  7: { primary: "https://images.unsplash.com/photo-1544441893-675973e31985?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=35&w=800&fm=webp&fit=crop" },
  8: { primary: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=35&w=800&fm=webp&fit=crop" },
  9: { primary: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=35&w=800&fm=webp&fit=crop" },
  10: { primary: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=35&w=800&fm=webp&fit=crop" },

  /* MEN */
  11: { primary: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=35&w=800&fm=webp&fit=crop" },
  12: { primary: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=35&w=800&fm=webp&fit=crop" },
  13: { primary: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=35&w=800&fm=webp&fit=crop" },
  14: { primary: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=35&w=800&fm=webp&fit=crop" },
  15: { primary: "https://images.unsplash.com/photo-1544441893-675973e31985?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=35&w=800&fm=webp&fit=crop" },
  16: { primary: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=35&w=800&fm=webp&fit=crop" },
  17: { primary: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=35&w=800&fm=webp&fit=crop" },
  18: { primary: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=35&w=800&fm=webp&fit=crop" },

  /* FOOTWEAR */
  19: { primary: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=35&w=800&fm=webp&fit=crop" },
  20: { primary: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=35&w=800&fm=webp&fit=crop" },
  21: { primary: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=35&w=800&fm=webp&fit=crop" },
  22: { primary: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=35&w=800&fm=webp&fit=crop" },
  23: { primary: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=35&w=800&fm=webp&fit=crop" },
  24: { primary: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=35&w=800&fm=webp&fit=crop" },

  /* ACCESSORIES */
  25: { primary: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=35&w=800&fm=webp&fit=crop" },
  26: { primary: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=35&w=800&fm=webp&fit=crop" },
  27: { primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=35&w=800&fm=webp&fit=crop" },
  28: { primary: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=35&w=800&fm=webp&fit=crop" },
  29: { primary: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=35&w=800&fm=webp&fit=crop" },
  30: { primary: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=35&w=800&fm=webp&fit=crop" },
  31: { primary: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=35&w=800&fm=webp&fit=crop" },
  32: { primary: "https://images.unsplash.com/photo-1680968921717-4abbbe793bb3?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1708221269367-ce41b47449d2?q=35&w=800&fm=webp&fit=crop" },
  33: { primary: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=35&w=800&fm=webp&fit=crop" },
  34: { primary: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=35&w=800&fm=webp&fit=crop" },
  35: { primary: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=35&w=800&fm=webp&fit=crop", secondary: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=35&w=800&fm=webp&fit=crop" },
};

const PRODUCTS = [
  /* ---- WOMEN ---- */
  { id:1,  name:"Wool Overcoat",         category:"Women", sub:"Outerwear",  price:2480, oldPrice:null, seed:"arden-01", seed2:"arden-w01b", colors:["Camel","Charcoal","Forest"],  sizes:["XS","S","M","L","XL"],    tag:"New",        rating:4.9, reviewCount:128, desc:"A double-breasted overcoat cut from heavyweight Italian wool. Structured shoulders, peak lapels, and a fit that falls just below the knee. Fully lined in silk-blend. A true investment piece built to outlast a decade of trends." },
  { id:2,  name:"Silk Slip Dress",        category:"Women", sub:"Dresses",    price:1680, oldPrice:2100, seed:"arden-02", seed2:"arden-w02b", colors:["Ivory","Black","Blush"],      sizes:["XS","S","M","L"],         tag:"Sale",       rating:4.7, reviewCount:94,  desc:"Bias-cut silk charmeuse with adjustable straps and a barely-there hem. Skims the body without clinging. Wear alone or layered under a blazer — equally stunning both ways." },
  { id:3,  name:"Tailored Trousers",      category:"Women", sub:"Bottoms",    price:1280, oldPrice:null, seed:"arden-03", seed2:"arden-w03b", colors:["Stone","Black","Navy","Rust"], sizes:["24","26","28","30","32"], tag:null,         rating:4.8, reviewCount:76,  desc:"Wide-leg trousers with a high rise and a single pleat. Fully lined through the hip in a featherweight wool blend. Pairs effortlessly with a tucked-in blouse or a knit." },
  { id:4,  name:"Merino Turtleneck",      category:"Women", sub:"Knitwear",   price:980,  oldPrice:null, seed:"arden-04", seed2:"arden-w04b", colors:["Oatmeal","Forest","Black","Dusty Rose"], sizes:["XS","S","M","L"], tag:"Bestseller", rating:4.9, reviewCount:203, desc:"Fine-gauge extra-fine merino, cut close to the body with a folded turtleneck collar. Machine washable. Available in four considered colours that earn their place in any wardrobe." },
  { id:5,  name:"Linen Wrap Blouse",      category:"Women", sub:"Tops",       price:860,  oldPrice:null, seed:"arden-05", seed2:"arden-w05b", colors:["White","Sand","Terracotta"], sizes:["XS","S","M","L"],         tag:null,         rating:4.6, reviewCount:58,  desc:"Washed linen with a relaxed wrap front and covered buttons. The fabric has been pre-washed for a lived-in softness from the very first wear. Naturally breathable." },
  { id:6,  name:"Pleated Midi Skirt",     category:"Women", sub:"Bottoms",    price:1120, oldPrice:null, seed:"arden-06", seed2:"arden-w06b", colors:["Charcoal","Rust","Ivory"],   sizes:["XS","S","M","L"],         tag:null,         rating:4.7, reviewCount:61,  desc:"Knife-pleated midi in a fluid crêpe that moves beautifully with every step. Sits at the natural waist with a concealed side zip. The length lands just below the calf." },
  { id:7,  name:"Cropped Denim Jacket",   category:"Women", sub:"Outerwear",  price:1180, oldPrice:null, seed:"arden-07", seed2:"arden-w07b", colors:["Indigo","Bleach","Black"],   sizes:["XS","S","M","L"],         tag:"New",        rating:4.8, reviewCount:49,  desc:"Rigid selvedge denim, cropped at the waist with a boxy, relaxed fit. Tonal stitching, corozo buttons, and welt chest pockets. Gets better with every wash." },
  { id:8,  name:"Cashmere Cardigan",      category:"Women", sub:"Knitwear",   price:1980, oldPrice:2480, seed:"arden-07b",seed2:"arden-w08b", colors:["Camel","Cloud","Charcoal"],  sizes:["XS","S","M","L"],         tag:"Sale",       rating:4.9, reviewCount:112, desc:"Two-ply pure cashmere in a relaxed, open-front silhouette. Ribbed cuffs and hem, mother-of-pearl buttons. Luxurious without being fussy — the definition of effortless dressing." },
  { id:9,  name:"Wide-Brim Hat",          category:"Women", sub:"Accessories",price:780,  oldPrice:null, seed:"arden-acc1",seed2:"arden-a01b", colors:["Camel","Black"],            sizes:["One Size"],               tag:"New",        rating:4.5, reviewCount:33,  desc:"100% wool felt, blocked by hand into a wide-brim silhouette. A grosgrain ribbon band adds a refined finish. Packable enough for travel, polished enough for the office." },
  { id:10, name:"Satin Blazer",           category:"Women", sub:"Outerwear",  price:1880, oldPrice:null, seed:"arden-09b",seed2:"arden-w10b", colors:["Ivory","Black","Blush"],     sizes:["XS","S","M","L"],         tag:"New",        rating:4.8, reviewCount:67,  desc:"Relaxed-cut blazer in a satin-back crêpe that bridges the formal–casual divide. Single-button closure, padded shoulders, and a clean-lined back vent. Dressed up or down." },

  /* ---- MEN ---- */
  { id:11, name:"Cotton Twill Overshirt", category:"Men",   sub:"Outerwear",  price:1380, oldPrice:null, seed:"arden-08", seed2:"arden-m01b", colors:["Olive","Navy","Stone"],      sizes:["S","M","L","XL","XXL"],   tag:"New",        rating:4.7, reviewCount:88,  desc:"Heavyweight cotton twill overshirt with corozo buttons, two chest patch pockets, and a boxy, layerable fit. Works over a tee or under a coat with equal conviction." },
  { id:12, name:"Merino Crew Sweater",    category:"Men",   sub:"Knitwear",   price:1080, oldPrice:null, seed:"arden-09", seed2:"arden-m02b", colors:["Charcoal","Camel","Navy","Sage"], sizes:["S","M","L","XL"],     tag:"Bestseller", rating:4.9, reviewCount:176, desc:"12-gauge merino knit with a ribbed crew neck, cuffs, and hem. Lightweight enough to layer, substantial enough to wear alone. Machine washable — an everyday essential." },
  { id:13, name:"Straight Fit Chino",     category:"Men",   sub:"Bottoms",    price:960,  oldPrice:null, seed:"arden-10", seed2:"arden-m03b", colors:["Khaki","Black","Stone","Olive"], sizes:["30","32","34","36"],   tag:null,         rating:4.6, reviewCount:102, desc:"Mid-weight cotton twill with a clean straight leg and no taper. A mid-rise waist, slant front pockets, and a relaxed seat. Cut for all-day comfort without sacrificing the line." },
  { id:14, name:"Oxford Shirt",           category:"Men",   sub:"Tops",       price:780,  oldPrice:980,  seed:"arden-11", seed2:"arden-m04b", colors:["White","Blue","Chambray"],   sizes:["S","M","L","XL"],         tag:"Sale",       rating:4.8, reviewCount:214, desc:"Classic button-down Oxford in a substantial cotton weave that softens beautifully with washing. A slightly relaxed body, point collar, and single barrel cuffs — timeless by design." },
  { id:15, name:"Wool Blend Trench",      category:"Men",   sub:"Outerwear",  price:2680, oldPrice:null, seed:"arden-12", seed2:"arden-m05b", colors:["Stone","Black","Camel"],     sizes:["S","M","L","XL"],         tag:null,         rating:4.8, reviewCount:55,  desc:"A modernised trench in a wool-nylon blend, fully seam-sealed. Raglan sleeves, a storm flap, and a belted waist. The coat that has anchored British wardrobes for over a century, reimagined without compromise." },
  { id:16, name:"Garment-Dyed Tee",       category:"Men",   sub:"Tops",       price:420,  oldPrice:null, seed:"arden-13", seed2:"arden-m06b", colors:["Faded Black","Clay","Sage","Slate"], sizes:["S","M","L","XL","XXL"], tag:null,      rating:4.7, reviewCount:289, desc:"Heavyweight 240gsm cotton jersey, garment-dyed for a worn-in finish and colour depth from day one. Drop-shoulder, relaxed-fit. The kind of tee that improves with every wash." },
  { id:17, name:"5-Pocket Selvedge Jean", category:"Men",   sub:"Bottoms",    price:1580, oldPrice:null, seed:"arden-14b",seed2:"arden-m07b", colors:["Indigo","Charcoal"],         sizes:["30","32","34","36","38"], tag:"New",        rating:4.9, reviewCount:78,  desc:"14oz Japanese selvedge denim woven on vintage shuttle looms. A slim-straight fit, chain-stitched hem, and copper rivets. Built to fade beautifully over years of wear — a true investment in denim." },
  { id:18, name:"Linen Overshirt",        category:"Men",   sub:"Outerwear",  price:980,  oldPrice:1180, seed:"arden-15b",seed2:"arden-m08b", colors:["Ecru","Slate","Rust"],       sizes:["S","M","L","XL"],         tag:"Sale",       rating:4.6, reviewCount:43,  desc:"Washed linen in a boxy, relaxed fit. Two patch pockets, a single-button collar band, and a generous drop shoulder. Effortless summer dressing — wear open over a tee or buttoned solo." },

  /* ---- FOOTWEAR ---- */
  { id:19, name:"Leather Chelsea Boot",   category:"Footwear", sub:"Boots",   price:2280, oldPrice:null, seed:"arden-14", seed2:"arden-f01b", colors:["Black","Chestnut","Tan"],    sizes:["38","39","40","41","42","43"], tag:"Bestseller", rating:4.9, reviewCount:156, desc:"Full-grain leather Chelsea boot on a stacked leather sole with a natural rubber grip layer. A hand-stitched welt, elastic gussets, and a subtle pull tab. Resoleable, built to last decades." },
  { id:20, name:"Suede Derby Shoe",       category:"Footwear", sub:"Shoes",   price:1880, oldPrice:null, seed:"arden-15", seed2:"arden-f02b", colors:["Taupe","Navy","Charcoal"],   sizes:["39","40","41","42","43"],     tag:null,         rating:4.8, reviewCount:67,  desc:"Soft suede derby with a lightly cushioned leather insole and a durable rubber-blend sole. A rounded toe, five eyelet lacing, and a slight platform that adds understated elevation." },
  { id:21, name:"Canvas Low-Top",         category:"Footwear", sub:"Sneakers",price:960,  oldPrice:1200, seed:"arden-16", seed2:"arden-f03b", colors:["White","Black","Ecru"],      sizes:["37","38","39","40","41","42"], tag:"Sale",       rating:4.6, reviewCount:198, desc:"Minimal canvas sneaker with a vulcanised rubber sole and a leather toe cap. Unlined for a breathable wear. The silhouette borrows from the archive — clean, considered, and endlessly wearable." },
  { id:22, name:"Block Heel Mule",        category:"Footwear", sub:"Heels",   price:1480, oldPrice:null, seed:"arden-17", seed2:"arden-f04b", colors:["Black","Camel","Bone"],      sizes:["36","37","38","39","40"],     tag:"New",        rating:4.7, reviewCount:44,  desc:"Square-toe mule on a 55mm block heel in soft nappa leather. A padded insole and a slightly cushioned sole make this a mule you can actually walk in." },
  { id:23, name:"Leather Loafer",         category:"Footwear", sub:"Shoes",   price:1680, oldPrice:null, seed:"arden-18b",seed2:"arden-f05b", colors:["Black","Cognac","Forest"],   sizes:["38","39","40","41","42","43"], tag:"New",        rating:4.8, reviewCount:82,  desc:"A penny loafer in full-grain vegetable-tanned leather. The classic silhouette, a leather insole that moulds to the foot over time, and a durable leather outsole. Timeless, resoleable, rewearable." },
  { id:24, name:"Suede Ankle Boot",       category:"Footwear", sub:"Boots",   price:1980, oldPrice:2480, seed:"arden-19b",seed2:"arden-f06b", colors:["Taupe","Black","Rust"],      sizes:["36","37","38","39","40"],     tag:"Sale",       rating:4.7, reviewCount:59,  desc:"Mid-height ankle boot in supple suede, with an inside zip for easy on/off and a stacked block heel. Versatile enough to carry from day into evening with minimal effort." },

  /* ---- ACCESSORIES ---- */
  { id:25, name:"Leather Tote",           category:"Accessories", sub:"Bags",    price:2180, oldPrice:null, seed:"arden-18", seed2:"arden-a01b", colors:["Black","Cognac","Olive"],    sizes:["One Size"], tag:"Bestseller", rating:4.9, reviewCount:189, desc:"Structured tote in vegetable-tanned leather with an internal zip pocket, two slip pockets, and magnetic closures. A flat base keeps it standing upright. Dimensions: 40 × 30 × 14cm." },
  { id:26, name:"Silk Twill Scarf",       category:"Accessories", sub:"Scarves", price:680,  oldPrice:null, seed:"arden-19", seed2:"arden-a02b", colors:["Ochre Print","Navy Print","Blush Print"], sizes:["One Size"], tag:null,     rating:4.8, reviewCount:71,  desc:"Hand-rolled edges on a 90cm × 90cm printed silk twill. The print is drawn from archival botanical illustrations — wear it as a headscarf, neckerchief, or tied to a bag handle." },
  { id:27, name:"Fine Chain Necklace",    category:"Accessories", sub:"Jewelry", price:580,  oldPrice:null, seed:"arden-20", seed2:"arden-a03b", colors:["Gold","Silver"],             sizes:["One Size"], tag:null,         rating:4.8, reviewCount:94,  desc:"14k gold-plated or sterling silver chain, 45cm with a 5cm extender for adjustability. Tarnish-resistant plating, a spring-ring clasp. Delicate enough to layer, refined enough to wear alone." },
  { id:28, name:"Leather Belt",           category:"Accessories", sub:"Belts",   price:620,  oldPrice:null, seed:"arden-21", seed2:"arden-a04b", colors:["Black","Brown","Cognac"],    sizes:["S/M","M/L","L/XL"], tag:null, rating:4.7, reviewCount:47,  desc:"Full-grain leather belt with a matte brushed steel buckle. Single-stitch edge, five adjustment holes. A 35mm width works with both trousers and jeans — resoleable and long-lasting." },
  { id:29, name:"Wool Beanie",            category:"Accessories", sub:"Hats",    price:380,  oldPrice:480,  seed:"arden-22", seed2:"arden-a05b", colors:["Charcoal","Oatmeal","Forest","Black"], sizes:["One Size"], tag:"Sale", rating:4.8, reviewCount:132, desc:"Ribbed merino beanie with a generous folded brim that can be worn up or down. Lightweight enough to pack flat, warm enough for deep winter. Machine washable." },
  { id:30, name:"Canvas Shopper Tote",    category:"Accessories", sub:"Bags",    price:480,  oldPrice:null, seed:"arden-23", seed2:"arden-a06b", colors:["Natural","Black","Olive"],   sizes:["One Size"], tag:"New",        rating:4.6, reviewCount:88,  desc:"16oz organic cotton canvas with a reinforced base and natural cotton webbing handles. Unbleached and undyed — washes well and gets better-looking with use. Large enough for a weekly shop." },
  { id:31, name:"Leather Crossbody",      category:"Accessories", sub:"Bags",    price:1480, oldPrice:null, seed:"arden-24", seed2:"arden-a07b", colors:["Black","Cognac","Sand"],     sizes:["One Size"], tag:"New",        rating:4.8, reviewCount:65,  desc:"Compact structured crossbody in pebbled full-grain leather. An adjustable, removable strap, front slip pocket, and a main zip compartment. The perfect size for everything you actually need." },
  { id:32, name:"Gold Hoop Earrings",     category:"Accessories", sub:"Jewelry", price:450,  oldPrice:null, seed:"arden-25", seed2:"arden-a08b", colors:["Gold","Silver"],             sizes:["One Size"], tag:null,         rating:4.9, reviewCount:112, desc:"14k gold-plated sterling silver hoops, 30mm diameter. Hinged hoop closure, lightweight enough for all-day wear. Pair alone or stack with a second, smaller hoop for dimension." },
  { id:33, name:"Silk Pyjama Set",        category:"Women", sub:"Loungewear",  price:1480, oldPrice:1860, seed:"arden-26", seed2:"arden-w09b", colors:["Ivory","Dusty Rose","Navy"],  sizes:["XS","S","M","L"],  tag:"Sale",        rating:4.9, reviewCount:77,  desc:"100% mulberry silk pyjama shirt and trouser set. The shirt features a revere collar and chest pocket; the trousers have an elasticated drawstring waist. Generous cut, exquisite drape." },
  { id:34, name:"Rollneck Wool Sweater",  category:"Men",   sub:"Knitwear",    price:1280, oldPrice:null, seed:"arden-27", seed2:"arden-m09b", colors:["Oatmeal","Black","Forest"],  sizes:["S","M","L","XL"],  tag:"Bestseller",  rating:4.9, reviewCount:143, desc:"Medium-gauge Shetland wool in a chunky rollneck. A traditional fisherman's rib body with a generous neck. Substantial enough to wear as a layer or as an outerwear piece on milder days." },
  { id:35, name:"Merino Wrap Cardigan",   category:"Women", sub:"Knitwear",    price:1320, oldPrice:null, seed:"arden-28", seed2:"arden-w10b", colors:["Camel","Charcoal","Dusty Rose"], sizes:["XS","S","M","L"], tag:"New",     rating:4.8, reviewCount:56,  desc:"Relaxed wrap-front cardigan in extra-fine merino. A self-tie belt, v-neckline, and ribbed cuffs. Falls to the hip in a fluid silhouette — styled open as a layer or belted as a standalone piece." },
];

const CATEGORIES = ["Women", "Men", "Footwear", "Accessories"];

/* ---------- helpers ---------- */
function productImage(seed, w, h) {
  // If seed is an ID or matched in FASHION_IMAGES, return curated Unsplash fashion URL
  const pId = typeof seed === 'number' ? seed : Number(String(seed).replace(/\D/g, ''));
  if (pId && FASHION_IMAGES[pId]) {
    return FASHION_IMAGES[pId].primary;
  }
  return `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=35&w=${w||600}&fm=webp&fit=crop`;
}

function productImage2(p, w, h) {
  const pId = typeof p === 'object' ? p.id : Number(String(p).replace(/\D/g, ''));
  if (pId && FASHION_IMAGES[pId]) {
    return FASHION_IMAGES[pId].secondary;
  }
  return `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=35&w=${w||600}&fm=webp&fit=crop`;
}

function productImage3(p, w, h) {
  return `https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=35&w=${w||800}&fm=webp&fit=crop`;
}

function productImage4(p, w, h) {
  return `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=35&w=${w||800}&fm=webp&fit=crop`;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}
function formatPrice(n) {
  const val = Number(n);
  return `₹${val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function getRelated(product, max) {
  return PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, max || 4);
}
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
