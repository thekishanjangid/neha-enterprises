export const BUSINESS = {
  name: "Neha Enterprises",
  tagline: "Custom Furniture & Interior Solutions",
  phone: "+917568723377",
  phoneDisplay: "+91 75687 23377",
  whatsapp: "917568723377",
  email: "info@nehaenterprises.in",
  address: "123, Industrial Area, Jaipur, Rajasthan 302001",
  city: "Jaipur",
  state: "Rajasthan",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Neha+Enterprises+Jaipur",
  instagram: "#",
  facebook: "#",
  yearFounded: 2009,
  projectsCompleted: "2000+",
  yearsExperience: "15+",
} as const;

export const WHATSAPP_MESSAGES = {
  general: "Hi Neha Enterprises, I'd like to discuss a project. Please share details.",
  furniture: "Hi, I'm interested in custom furniture. Can we discuss my requirements?",
  glass: "Hi, I need glass/aluminium partition work. Please share details and pricing.",
  hardware: "Hi, I'm looking for furniture hardware/fittings. Can you share your catalogue?",
  commercial: "Hi, I have a commercial project to discuss. When can we connect?",
  gallery: "Hi, I saw your work on the website. I'd like something similar. Can we talk?",
  contact: "Hi, I'd like to schedule a consultation. Please let me know your availability.",
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    shortDesc: "Beds, wardrobes, sofas, tables — made to your exact specifications",
    fullDesc: "From elegant bedroom sets to functional living room furniture, every piece is designed for your space and built with precision in our own workshop. We work with premium wood, laminates, and veneers to create furniture that lasts generations.",
    items: ["Beds & Headboards", "Wardrobes & Walk-in Closets", "Sofas & Recliners", "Dining Tables & Chairs", "TV Units & Entertainment Centers", "Study Tables & Bookshelves", "Dressing Tables", "Custom Gates & Doors"],
    whatsappMsg: WHATSAPP_MESSAGES.furniture,
    image: "/images/work/furniture/bedroom-1.jpg",
  },
  {
    id: "glass-aluminium",
    title: "Glass & Aluminium",
    shortDesc: "Partitions, facades, and frameless solutions for modern spaces",
    fullDesc: "Transform any space with our precision-engineered glass and aluminium partition systems. From sleek office cabins to elegant residential dividers, we deliver clean lines and flawless installation for a contemporary look.",
    items: ["Office Glass Partitions", "Aluminium Sliding Doors", "Frameless Glass Systems", "Shower Enclosures", "Glass Railings", "Aluminium Facades", "Commercial Storefronts"],
    whatsappMsg: WHATSAPP_MESSAGES.glass,
    image: "/images/work/glass/glass-railing-1.jpg",
  },
  {
    id: "hardware",
    title: "Furniture Hardware",
    shortDesc: "Quality fittings — hinges, channels, handles that last",
    fullDesc: "The longevity of furniture depends on its hardware. We supply and install premium-grade hinges, soft-close channels, designer handles, and specialized fittings from trusted brands that ensure smooth function for years.",
    items: ["Soft-Close Hinges", "Drawer Channels & Slides", "Designer Handles & Knobs", "Hydraulic Fittings", "Cabinet Accessories", "Wardrobe Fittings", "Kitchen Hardware"],
    whatsappMsg: WHATSAPP_MESSAGES.hardware,
    image: "/images/work/kitchen/kitchen-3.jpg",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    shortDesc: "End-to-end interior solutions for offices, showrooms & retail",
    fullDesc: "We handle complete commercial interior projects — from initial space planning to final installation. Our team manages furniture, partitions, hardware, and finishes under one roof, ensuring consistency and timely delivery.",
    items: ["Office Interiors", "Showroom Fit-Outs", "Retail Store Design", "Restaurant & Café Furniture", "Conference Room Setup", "Reception Areas", "Workstation Systems"],
    whatsappMsg: WHATSAPP_MESSAGES.commercial,
    image: "/images/work/living/living-3.jpg",
  },
] as const;

export const GALLERY_CATEGORIES = [
  "All",
  "Furniture",
  "Kitchen",
  "Glass & Aluminium",
  "Commercial",
] as const;

export const GALLERY_ITEMS = [
  // Furniture — Bedrooms
  { src: "/images/work/furniture/bedroom-1.jpg", alt: "Premium bedroom with upholstered brown headboard & false ceiling", category: "Furniture", location: "Mansarovar, Jaipur" },
  { src: "/images/work/furniture/bedroom-2.jpg", alt: "Bedroom with designer marble wall paneling & LED lighting", category: "Furniture", location: "Vaishali Nagar, Jaipur" },
  { src: "/images/work/furniture/bedroom-3.jpg", alt: "Grey themed bedroom with padded headboard & wardrobe", category: "Furniture", location: "Vaishali Nagar, Jaipur" },
  { src: "/images/work/furniture/bedroom-4.jpg", alt: "Bedroom with geometric TV unit & wooden wardrobe", category: "Furniture", location: "Tonk Road, Jaipur" },
  { src: "/images/work/furniture/bedroom-5.jpg", alt: "Bedroom with designer TV unit & false ceiling", category: "Furniture", location: "Jagatpura, Jaipur" },
  { src: "/images/work/furniture/bedroom-6.jpg", alt: "Bedroom with floral wallpaper & wooden bed frame", category: "Furniture", location: "Ajmer Road, Jaipur" },
  { src: "/images/work/furniture/bedroom-7.jpg", alt: "Modular kitchen with wash basin partition & shelves", category: "Kitchen", location: "Malviya Nagar, Jaipur" },
  { src: "/images/work/furniture/bedroom-8.jpg", alt: "Bedroom with upholstered headboard & dressing mirror", category: "Furniture", location: "Mansarovar, Jaipur" },
  { src: "/images/work/furniture/bedroom-9.jpg", alt: "Bedroom with wooden TV unit, wardrobe & false ceiling", category: "Furniture", location: "Sitapura, Jaipur" },
  { src: "/images/work/furniture/bedroom-10.jpg", alt: "Bedroom with velvet headboard & dressing area", category: "Furniture", location: "C-Scheme, Jaipur" },
  // Kitchen
  { src: "/images/work/kitchen/kitchen-1.jpg", alt: "Modular kitchen with marble backsplash & chimney", category: "Kitchen", location: "Tonk Road, Jaipur" },
  { src: "/images/work/kitchen/kitchen-2.jpg", alt: "L-shaped modular kitchen with false ceiling lighting", category: "Kitchen", location: "Mansarovar, Jaipur" },
  { src: "/images/work/kitchen/kitchen-3.jpg", alt: "Kitchen with wooden partition shelves & wash area", category: "Kitchen", location: "Malviya Nagar, Jaipur" },
  { src: "/images/work/kitchen/kitchen-4.jpg", alt: "L-shaped kitchen with brown cabinets & granite top", category: "Kitchen", location: "Jagatpura, Jaipur" },
  { src: "/images/work/kitchen/kitchen-5.jpg", alt: "Kitchen with wooden partition & floating shelves", category: "Kitchen", location: "Ajmer Road, Jaipur" },
  // Living Room
  { src: "/images/work/living/living-1.jpg", alt: "Living room with teal L-shaped designer sofa", category: "Furniture", location: "Jagatpura, Jaipur" },
  { src: "/images/work/living/living-2.jpg", alt: "Living room with staircase, sofa & glass railing", category: "Furniture", location: "Mansarovar, Jaipur" },
  { src: "/images/work/living/living-3.jpg", alt: "Office cabin with false ceiling & custom desk", category: "Commercial", location: "C-Scheme, Jaipur" },
  { src: "/images/work/living/living-4.jpg", alt: "Drawing room with sofa & wooden flooring", category: "Furniture", location: "Vaishali Nagar, Jaipur" },
  { src: "/images/work/living/living-5.jpg", alt: "Drawing room with grey sofa & wooden floor", category: "Furniture", location: "Vaishali Nagar, Jaipur" },
  { src: "/images/work/living/living-6.jpg", alt: "Living room with pooja unit & designer false ceiling", category: "Furniture", location: "Tonk Road, Jaipur" },
  { src: "/images/work/living/living-7.jpg", alt: "Living room with mandir, sofa & designer ceiling", category: "Furniture", location: "Sitapura, Jaipur" },
  { src: "/images/work/living/hall-1.jpg", alt: "Grand hall with staircase, dining area & TV unit", category: "Commercial", location: "Mansarovar, Jaipur" },
  { src: "/images/work/living/hall-2.jpg", alt: "Hall with wash basin, ceiling lights & open kitchen", category: "Commercial", location: "Ajmer Road, Jaipur" },
  // Glass & Aluminium
  { src: "/images/work/glass/glass-railing-1.jpg", alt: "Glass railing with crystal chandelier & false ceiling", category: "Glass & Aluminium", location: "Malviya Nagar, Jaipur" },
  { src: "/images/work/glass/glass-partition-1.jpg", alt: "Bathroom glass partition with shower enclosure", category: "Glass & Aluminium", location: "Sitapura, Jaipur" },
  { src: "/images/work/glass/glass-railing-2.jpg", alt: "Glass staircase railing with under-stair storage", category: "Glass & Aluminium", location: "Ajmer Road, Jaipur" },
  { src: "/images/work/glass/partition-divider-1.jpg", alt: "Custom partition with backlit tree design & shelves", category: "Glass & Aluminium", location: "Jaipur" },
  // Exterior / Complete Projects
  { src: "/images/work/exterior/exterior-1.jpg", alt: "Modern courtyard with patterned tiles & artificial grass", category: "Commercial", location: "Mansarovar, Jaipur" },
  { src: "/images/work/exterior/exterior-2.jpg", alt: "Courtyard with designer tiles & garden area", category: "Commercial", location: "Mansarovar, Jaipur" },
  { src: "/images/work/exterior/front-elevation.jpg", alt: "Complete house front elevation with modern design", category: "Commercial", location: "Jaipur" },
  { src: "/images/work/exterior/entrance.jpg", alt: "House entrance with wooden door & artificial grass", category: "Commercial", location: "Jaipur" },
  // Custom / Kids Room
  { src: "/images/work/custom/kids-room-1.jpg", alt: "Custom kids bunk bed with staircase & reading nook", category: "Furniture", location: "Vaishali Nagar, Jaipur" },
  { src: "/images/work/custom/kids-room-2.jpg", alt: "Kids room with capsule bed & upper play area", category: "Furniture", location: "Vaishali Nagar, Jaipur" },
  // Living — Pink sofa room
  { src: "/images/work/living/living-8.jpg", alt: "Living room with pink sofa, wallpaper panels & chandelier", category: "Furniture", location: "Tonk Road, Jaipur" },
] as const;

export const MATERIALS = [
  {
    title: "Engineered Wood & Veneers",
    description: "Marine-grade BWP plywood, natural veneers, termite-resistant MDF — stronger than solid wood, stable in Jaipur's climate.",
    image: "/images/work/furniture/bedroom-4.jpg",
  },
  {
    title: "Toughened Glass",
    description: "8mm–12mm toughened safety glass with polished edges. Crystal-clear, impact-resistant, certified for Indian standards.",
    image: "/images/work/glass/glass-railing-1.jpg",
  },
  {
    title: "Premium Hardware",
    description: "Hettich, Blum, Hafele — German engineering. 100,000+ cycle-tested hinges and channels that glide like butter.",
    image: "/images/work/kitchen/kitchen-3.jpg",
  },
] as const;

export const FEATURED_PROJECT = {
  title: "The Mansarovar Residence",
  subtitle: "From bare walls to a 3-bedroom dream home — complete interior in 45 days",
  heroImage: "/images/work/living/hall-1.jpg",
  stats: [
    { value: "3", label: "Bedrooms" },
    { value: "45", label: "Days" },
    { value: "Full", label: "Interior" },
  ],
  images: [
    "/images/work/furniture/bedroom-1.jpg",
    "/images/work/kitchen/kitchen-1.jpg",
  ],
  brief: "A young family wanted timeless design, ample storage, and a show-stopping living area for guests.",
  solution: "Custom teak-finished furniture, soft-close hardware throughout, and a dramatic double-height hall with glass railings.",
  result: "A home that feels twice its size, built to last 30+ years.",
} as const;

export const CRAFTSMANSHIP = [
  {
    title: "Clean Joinery",
    description: "Concealed screws, seamless laminate edges, zero visible gaps — like it grew from one piece of wood.",
    image: "/images/work/furniture/bedroom-3.jpg",
  },
  {
    title: "Factory Polish",
    description: "Every edge buffed smooth, every surface dust-free before packing. Walk barefoot-safe finishing.",
    image: "/images/work/kitchen/kitchen-1.jpg",
  },
  {
    title: "Installation Excellence",
    description: "Laser-level alignment, walls protected with padding, site cleaned daily — we leave no trace except beauty.",
    image: "/images/work/glass/glass-railing-2.jpg",
  },
] as const;

export const PARTNER_BRANDS = [
  "Hettich",
  "Blum",
  "Hafele",
  "Ebco",
  "Godrej",
  "Greenlam",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do you provide free design consultation?",
    answer: "Yes. We visit your space, measure, and create a preliminary design — all at no cost. You only pay if you proceed with manufacturing.",
  },
  {
    question: "What's the typical project timeline?",
    answer: "Most bedroom sets: 18–25 days. Full home interiors: 35–45 days. We'll give you an exact timeline after measuring your space.",
  },
  {
    question: "How does pricing work?",
    answer: "We quote per square foot for furniture and per running foot for glass & aluminium work. Pricing depends on materials and hardware grade. No hidden charges, ever.",
  },
  {
    question: "Can I see samples before finalizing?",
    answer: "Absolutely. Visit our workshop to see material samples, hardware options, and finish choices. We'll also show you similar completed projects.",
  },
  {
    question: "Do you handle old furniture removal?",
    answer: "Yes, we can dismantle and dispose of old furniture as part of the installation. There's a small additional charge depending on volume.",
  },
  {
    question: "What's your warranty policy?",
    answer: "1-year comprehensive warranty on manufacturing defects. Hardware carries manufacturer warranty — Hettich and Blum offer 10+ years on mechanisms.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "We visit your space, understand your requirements, and take precise measurements",
  },
  {
    number: "02",
    title: "Design & Material",
    description: "Finalize design, select materials and finishes together to match your vision",
  },
  {
    number: "03",
    title: "Manufacturing",
    description: "Built in our own workshop with quality checks at every stage of production",
  },
  {
    number: "04",
    title: "Installation",
    description: "Professional on-site installation with finishing, cleanup, and final walkthrough",
  },
] as const;
