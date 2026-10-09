// Central data store for ROADEYE DASHCAMS

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Dashcams" },
  { id: "single", label: "Single Channel" },
  { id: "dual", label: "Dual Channel" },
  { id: "mirror", label: "Mirror Dashcams" },
  { id: "accessories", label: "Accessories" },
];

const IMG_A = "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80";
const IMG_B = "https://images.unsplash.com/photo-1600705722738-70e4056a4e30?w=800&q=80";
const IMG_C = "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80";

export const PRODUCTS = [
  { id: 1, name: "RoadEye S4 4K", price: 8999, mrp: 10999, category: "single", image: IMG_A, rating: 4.8, reviews: 324,
    description: "Our flagship single-channel dashcam with true 4K recording, Sony STARVIS night vision sensor, and built-in GPS tracking. Captures every detail, day or night.",
    specs: { resolution: "4K @30fps", fov: "140°", nightVision: "Sony STARVIS", storage: "Up to 256GB", gps: "Built-in" },
    features: ["Loop recording", "G-sensor crash detection", "Parking mode", "WiFi app control", "Built-in GPS"],
    inStock: true, isNew: true, isBestSeller: true },
  { id: 2, name: "RoadEye Duo Pro", price: 12499, mrp: 14999, category: "dual", image: IMG_B, rating: 4.9, reviews: 218,
    description: "Front and rear dual-channel recording in 2K resolution. Full coverage protection with a discreet rear camera that mounts cleanly on your back windshield.",
    specs: { resolution: "2K Front / 1080p Rear", fov: "150° Front / 130° Rear", nightVision: "HDR Night Mode", storage: "Up to 256GB", gps: "Built-in" },
    features: ["Front & rear recording", "HDR night mode", "Parking mode", "Collision detection", "Voice control"],
    inStock: true, isNew: false, isBestSeller: true },
  { id: 3, name: "RoadEye Mirror X", price: 9999, mrp: 11499, category: "mirror", image: IMG_A, rating: 4.6, reviews: 156,
    description: "A full-size rearview mirror replacement with an integrated dashcam display. Streams live rear camera feed and records front and rear simultaneously.",
    specs: { resolution: "1440p Front / 1080p Rear", fov: "170° Front", nightVision: "IR Night Vision", storage: "Up to 128GB", gps: "Optional" },
    features: ["Mirror display", "Touchscreen controls", "Front & rear recording", "Auto-dimming mirror", "Easy OEM-style install"],
    inStock: true, isNew: true, isBestSeller: false },
  { id: 4, name: "RoadEye S2 Compact", price: 4999, mrp: 5999, category: "single", image: IMG_B, rating: 4.5, reviews: 412,
    description: "A compact, budget-friendly single-channel dashcam that doesn't skimp on essentials — full HD recording, wide-angle lens, and reliable loop recording.",
    specs: { resolution: "1080p @30fps", fov: "120°", nightVision: "Standard IR", storage: "Up to 128GB", gps: "No" },
    features: ["Loop recording", "G-sensor", "Compact design", "Easy setup"],
    inStock: true, isNew: false, isBestSeller: true },
  { id: 5, name: "RoadEye Duo 2K", price: 10499, mrp: 12999, category: "dual", image: IMG_A, rating: 4.7, reviews: 189,
    description: "Affordable dual-channel coverage without compromising on recording quality. A great entry point for full front-and-rear protection.",
    specs: { resolution: "2K Front / 720p Rear", fov: "140° Front / 120° Rear", nightVision: "Standard Night Mode", storage: "Up to 128GB", gps: "No" },
    features: ["Front & rear recording", "Parking mode", "G-sensor", "Loop recording"],
    inStock: true, isNew: false, isBestSeller: false },
  { id: 6, name: "RoadEye Flagship 4K Duo", price: 16999, mrp: 19999, category: "dual", image: IMG_B, rating: 5.0, reviews: 97,
    description: "The ultimate dashcam setup — true 4K front recording paired with a 2K rear camera. Our most advanced model with AI-powered driver assistance alerts.",
    specs: { resolution: "4K Front / 2K Rear", fov: "150° Front / 140° Rear", nightVision: "Sony STARVIS 2", storage: "Up to 512GB", gps: "Built-in" },
    features: ["4K front + 2K rear", "AI driver alerts", "Built-in GPS", "WiFi + Bluetooth app", "Parking mode", "Collision detection"],
    inStock: true, isNew: true, isBestSeller: false },
  { id: 7, name: "128GB MicroSD (High Endurance)", price: 1299, mrp: 1599, category: "accessories", image: IMG_C, rating: 4.6, reviews: 278,
    description: "High-endurance microSD card rated for continuous loop recording. Built to handle the constant read/write cycles dashcams demand without premature failure.",
    specs: { resolution: "Storage", fov: "—", nightVision: "—", storage: "128GB", gps: "—" },
    features: ["High endurance rated", "U3 speed class", "Compatible with all RoadEye models"],
    inStock: true, isNew: false, isBestSeller: true },
  { id: 8, name: "Hardwire Kit (Parking Mode)", price: 1899, mrp: 2299, category: "accessories", image: IMG_A, rating: 4.4, reviews: 134,
    description: "Connect your dashcam directly to your vehicle's fuse box for always-on parking mode protection, with low-voltage cutoff to protect your battery.",
    specs: { resolution: "Accessory", fov: "—", nightVision: "—", storage: "—", gps: "—" },
    features: ["Low-voltage battery protection", "Clean professional install", "Compatible with all RoadEye models"],
    inStock: false, isNew: false, isBestSeller: false },
];

export const TESTIMONIALS = [
  { id: 1, name: "Arjun Varma", role: "Verified Buyer", image: "https://i.pravatar.cc/150?img=16", quote: "The night vision on the S4 is unreal. Footage from a near-miss at 2AM was crystal clear enough to read the other car's plate.", rating: 5 },
  { id: 2, name: "Lakshmi Nair", role: "Verified Buyer", image: "https://i.pravatar.cc/150?img=29", quote: "Installed the Duo Pro myself in under 20 minutes. The rear camera has already saved me from a bogus insurance claim.", rating: 5 },
  { id: 3, name: "Rahul Pillai", role: "Verified Buyer", image: "https://i.pravatar.cc/150?img=4", quote: "Mirror X looks completely factory-installed. Half my friends don't even realize it's a dashcam until I show them the footage.", rating: 4.5 },
  { id: 4, name: "Divya Krishnan", role: "Verified Buyer", image: "https://i.pravatar.cc/150?img=37", quote: "Customer support walked me through a firmware update over WhatsApp in minutes. Great product, even better service.", rating: 5 },
];

export const STATS = [
  { id: 1, label: "Dashcams Sold", value: 45000, suffix: "+" },
  { id: 2, label: "Verified Reviews", value: 1800, suffix: "+" },
  { id: 3, label: "Cities Shipped", value: 120, suffix: "+" },
  { id: 4, label: "Years in Business", value: 8, suffix: "+" },
];

export const WHATSAPP_NUMBER = "919496313744";
export const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
