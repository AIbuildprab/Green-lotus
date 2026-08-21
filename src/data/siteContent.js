import { BrickWall, Leaf, Shovel, Trees } from "lucide-react";

const WHATSAPP_NUMBER = "16047280246";

export function getWhatsAppQuoteHref(serviceTitle) {
  const text = serviceTitle
    ? `Hi Steven, I'd like a quote for ${serviceTitle}.`
    : "Hi Steven, I'd like a quote for landscaping in Vancouver.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const business = {
  name: "Green Lotus Landscape",
  owner: "Steven",
  phoneDisplay: "604-728-0246",
  phoneHref: "tel:6047280246",
  whatsappHref: getWhatsAppQuoteHref(),
  email: "greenlotuslandscapes@gmail.com",
  street: "3432 Cherry St",
  city: "Vancouver",
  region: "BC",
  postalCode: "V5R 4W5",
  yearsInBusiness: "10+ years",
  founded: "2014",
  crewNote: "Same small crew every visit",
  seasonalOffer: "spring cleanup packages",
};

export const brand = {
  logo: "/images/logo.svg",
  mark: "/images/lotus-mark.svg",
  markAlt: "Green Lotus Landscape logo",
};

export const fullAddress = `${business.street}, ${business.city}, ${business.region} ${business.postalCode}`;

export const seo = {
  h1: "Landscaper Vancouver",
  servicesH2: "Lawn Care, Hedge Trimming, Hardscaping & Seasonal Cleanups",
  title:
    "BEST Landscaper Vancouver - if you're looking for Landscaping Services near me or Lawn Care, Hedge Trimming, Hardscaping & Seasonal Cleanups near me - Green Lotus Landscape is the place to be",
  description:
    "Green Lotus Landscape is the Vancouver landscaping crew that actually shows up. Lawn maintenance, hedge and garden care, hardscaping, and seasonal cleanups. Call 604-728-0246 for a free quote.",
  keywords: [
    "landscaper Vancouver",
    "landscaping services near me",
    "lawn care Vancouver",
    "hedge trimming Vancouver",
    "hardscaping Vancouver",
    "seasonal cleanup Vancouver",
    "Green Lotus Landscape",
  ],
  pages: {
    services: {
      title:
        "BEST Landscaping Services Vancouver - Lawn Care, Hedge Trimming, Hardscaping & Seasonal Cleanups near me - Green Lotus Landscape",
      description:
        "Vancouver landscaping services from Green Lotus Landscape: lawn care, hedge trimming, hardscaping, and seasonal cleanups. Same small crew every visit. Call 604-728-0246.",
    },
    contact: {
      title:
        "Contact Green Lotus Landscape Vancouver - Landscaper near me for a free landscaping quote | 604-728-0246",
      description:
        "Request a free landscaping quote in Vancouver. Call or text 604-728-0246, WhatsApp Steven, or send the estimate form — Green Lotus Landscape answers as the same local crew.",
    },
    about: {
      title:
        "About Green Lotus Landscape - Landscaper Vancouver | Local lawn care and landscaping crew since 2014",
      description:
        "Green Lotus Landscape has been the Vancouver neighbour crew since 2014. Steven and the same small team handle lawn care, hedges, hardscaping, and seasonal cleanups.",
    },
    gallery: {
      title:
        "Landscaping Gallery Vancouver - Lawn Care, Hedge Trimming, Hardscaping & Seasonal Cleanups | Green Lotus Landscape",
      description:
        "See Green Lotus Landscape work around Vancouver: lawns, hedges, hardscaping, and seasonal cleanups. Real jobs from the local crew at 3432 Cherry St.",
    },
    reviews: {
      title: "Green Lotus Landscape Reviews Vancouver - 4.9 stars from neighbours | Landscaper near me",
      description:
        "Green Lotus Landscape is 4.9 stars on Google from Vancouver neighbours. Read reviews, find us on the map, and call 604-728-0246 for a landscaping quote.",
    },
  },
};

export const rating = {
  score: "4.9",
  count: 19,
  source: "Google",
};

export const google = {
  listingUrl:
    "https://www.google.com/maps/place/Green+Lotus+Landscapes/@49.2342521,-123.0322748,17z/data=!4m8!3m7!1s0x548676918f56d06f:0xdf92bc35573e7a61!8m2!3d49.2342521!4d-123.0322748!9m1!1b1",
  embedSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1303!2d-123.0322748!3d49.2342521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676918f56d06f%3A0xdf92bc35573e7a61!2sGreen%20Lotus%20Landscapes!5e0!3m2!1sen!2sca",
  lat: 49.2342521,
  lng: -123.0322748,
};

export const hours = [
  { days: "Monday", time: "7:00 AM – 6:00 PM" },
  { days: "Tuesday", time: "7:00 AM – 6:00 PM" },
  { days: "Wednesday", time: "7:00 AM – 6:00 PM" },
  { days: "Thursday", time: "7:00 AM – 6:00 PM" },
  { days: "Friday", time: "7:00 AM – 6:00 PM" },
  { days: "Saturday", time: "7:00 AM – 6:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

// Real job photos from /public/images/gallery. Service-card covers are reserved for homepage
// banners and omitted from the gallery grid so the portfolio stays fresh.
export const images = {
  heroYard:
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80",
  lawnCare: "/images/gallery/5.jpg",
  lawnCareAlt: "/images/gallery/8.jpg",
  hedgeCare: "/images/gallery/3.jpg",
  hedgeCareAlt: "/images/gallery/16.jpg",
  hardscaping: "/images/gallery/9.jpg",
  hardscapingAlt: "/images/gallery/11.jpg",
  seasonal: "/images/gallery/1.jpg",
  seasonalAlt: "/images/gallery/2.jpg",
  project2: "/images/gallery/19.jpg",
  project3: "/images/gallery/10.jpg",
  team: "/images/gallery/14.jpg",
  aboutYard: "/images/gallery/4.jpg",
};

export const services = [
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    shortLabel: "Lawn care",
    icon: Leaf,
    summary: "Bi-weekly mowing, clean edges, and steady weeding so the yard always looks looked-after.",
    bestFor: "Homeowners who want a tidy lawn on a regular schedule without chasing different crews.",
    timing: "Weekly or bi-weekly in season",
    description:
      "Most of our neighbours start here. We handle mowing on a schedule that suits your lawn, keep the edges crisp along walkways and beds, and stay on top of weeds before they take hold. You get the same crew each visit, so nothing has to be re-explained.",
    points: [
      "Bi-weekly or weekly mowing schedules",
      "Crisp edging along walks, drives, and beds",
      "Ongoing weeding and bed tidying",
      "Clippings cleaned up before we leave",
    ],
    photos: [
      { src: images.lawnCare, alt: "Freshly mowed front lawn at a Vancouver home" },
      { src: images.lawnCareAlt, alt: "Backyard with clean artificial turf and garden beds" },
    ],
    cover: images.lawnCare,
  },
  {
    slug: "hedge-garden-care",
    title: "Hedge & Garden Care",
    shortLabel: "Hedges & gardens",
    icon: Trees,
    summary: "Hedge trimming, pruning, and general garden upkeep that keeps everything in shape.",
    bestFor: "Properties with hedges, shrubs, or beds that need shaping and seasonal care.",
    timing: "As needed through the growing season",
    description:
      "Hedges and shrubs get away from you fast on the coast. We shape hedges cleanly, prune with the plant's health in mind, and keep beds looking cared for through the growing season. If you are not sure what needs cutting back, Steven will walk it with you and say so plainly.",
    points: [
      "Hedge trimming and shaping",
      "Seasonal pruning for shrubs and small trees",
      "Bed weeding, mulching, and refreshes",
      "Green waste hauled away",
    ],
    photos: [
      { src: images.hedgeCare, alt: "Newly planted garden bed with Japanese maple and ornamental grasses" },
      { src: images.hedgeCareAlt, alt: "Mulched roadside garden bed with fresh plantings and rock border" },
    ],
    cover: images.hedgeCare,
  },
  {
    slug: "hardscaping-repairs",
    title: "Hardscaping & Repairs",
    shortLabel: "Hardscaping",
    icon: BrickWall,
    summary: "Retaining walls, garden blocks, and the structural fixes that keep a yard usable.",
    bestFor: "Walls, borders, or pathways that are leaning, sinking, or starting to fail.",
    timing: "Quoted per job after a site visit",
    description:
      "When a wall starts leaning or blocks work loose, it usually will not fix itself. We build and repair retaining walls and garden block work, and sort out the drainage and grading issues that caused the problem in the first place.",
    points: [
      "Retaining wall builds and repairs",
      "Garden block and border work",
      "Grading and drainage corrections",
      "Pathway and step touch-ups",
    ],
    photos: [
      { src: images.hardscaping, alt: "Two-tier stone retaining wall built in a Vancouver backyard" },
      { src: images.hardscapingAlt, alt: "Stone paver walkway with rock border and gravel edges" },
    ],
    cover: images.hardscaping,
  },
  {
    slug: "seasonal-cleanups",
    title: "Seasonal Cleanups",
    shortLabel: "Seasonal cleanups",
    icon: Shovel,
    summary: "Pre-season and post-season cleanups that reset the whole property in a day or two.",
    bestFor: "Spring or fall resets, guest-ready yards, and one-time catch-up jobs.",
    timing: "Spring and fall (book 2–3 weeks ahead)",
    description:
      "Spring and fall are when a yard either gets ahead or falls behind. We clear leaves and debris, cut back what needs it, tidy the beds, and leave the property ready for the season. Popular with clients getting a place ready for guests or for sale.",
    points: [
      "Spring wake-up and fall leaf cleanups",
      "Cut-backs, bed clearing, and debris removal",
      "Gutter-line and hard surface tidying",
      "One-time bookings welcome",
    ],
    photos: [
      { src: images.seasonal, alt: "Freshly mulched commercial garden bed after a full reset" },
      { src: images.seasonalAlt, alt: "Landscape fabric and mulch staged during a bed rebuild" },
    ],
    cover: images.seasonal,
  },
];

// Homepage service-card covers (1, 3, 5, 9) stay off this list so the gallery feels distinct.
export const galleryItems = [
  {
    id: "project-4",
    src: "/images/gallery/4.jpg",
    alt: "Multi-level Vancouver backyard with wooden stairs, seating deck, and manicured lawn",
    caption: "Finished backyard levels with deck, turf, and seating",
    category: "Hardscaping",
    featured: true,
  },
  {
    id: "project-7",
    src: "/images/gallery/7.jpg",
    alt: "Freshly installed sod lawn in a residential Vancouver backyard",
    caption: "New sod laid and ready for the season",
    category: "Lawn Maintenance",
    featured: true,
  },
  {
    id: "project-8",
    src: "/images/gallery/8.jpg",
    alt: "Backyard artificial turf bordered by wooden beams and Japanese maples",
    caption: "Clean turf install with crisp timber edges",
    category: "Lawn Maintenance",
    featured: true,
  },
  {
    id: "project-16",
    src: "/images/gallery/16.jpg",
    alt: "Finished planted garden bed with mulch, young shrubs, and rock border",
    caption: "Roadside bed rebuilt, planted, and mulched",
    category: "Hedge & Garden Care",
    featured: true,
  },
  {
    id: "project-10",
    src: "/images/gallery/10.jpg",
    alt: "Private backyard putting green with artificial turf and flagsticks",
    caption: "Custom backyard putting green",
    category: "Hardscaping",
    featured: true,
  },
  {
    id: "project-19",
    src: "/images/gallery/19.jpg",
    alt: "Family backyard with artificial turf, playset, and mulched planting beds",
    caption: "Play-ready turf yard with tidy beds",
    category: "Lawn Maintenance",
    featured: true,
  },
  {
    id: "project-11",
    src: "/images/gallery/11.jpg",
    alt: "Straight stone paver walkway beside a red fence with rock and gravel borders",
    caption: "Paver walkway with rock and gravel detailing",
    category: "Hardscaping",
  },
  {
    id: "project-13",
    src: "/images/gallery/13.jpg",
    alt: "Low grey block retaining wall with lattice privacy fence behind a lawn",
    caption: "Low retaining wall and lattice privacy fence",
    category: "Hardscaping",
  },
  {
    id: "project-15",
    src: "/images/gallery/15.jpg",
    alt: "White vinyl fence on a block retaining wall with gravel and boulder accents",
    caption: "Fence, wall, and rock accent strip",
    category: "Hardscaping",
  },
  {
    id: "project-18",
    src: "/images/gallery/18.jpg",
    alt: "Cedar fence panels being installed in a narrow Vancouver side yard",
    caption: "Cedar side-yard fence going in",
    category: "Hardscaping",
  },
  {
    id: "project-6",
    src: "/images/gallery/6.jpg",
    alt: "Backyard renovation in progress with wooden stairs, deck platform, and retaining walls",
    caption: "Deck and stair work underway on a sloped yard",
    category: "Hardscaping",
  },
  {
    id: "project-20",
    src: "/images/gallery/20.jpg",
    alt: "Crew laying fresh sod rolls across a prepared backyard",
    caption: "Sod rolls going down on prepared soil",
    category: "Lawn Maintenance",
  },
  {
    id: "project-17",
    src: "/images/gallery/17.jpg",
    alt: "Crew excavating and rebuilding a garden bed along a metal fence",
    caption: "Bed excavation and site prep",
    category: "Seasonal Cleanups",
  },
  {
    id: "project-2",
    src: "/images/gallery/2.jpg",
    alt: "Mulch and landscape fabric staged during a commercial garden bed rebuild",
    caption: "Mulch staged for a full bed reset",
    category: "Seasonal Cleanups",
  },
  {
    id: "project-14",
    src: "/images/gallery/14.jpg",
    alt: "Green Lotus crew and work truck on a wet Vancouver street",
    caption: "Same crew, rain or shine",
    category: "Seasonal Cleanups",
  },
  {
    id: "project-12",
    src: "/images/gallery/12.jpg",
    alt: "Vancouver residential street lined with blooming cherry blossom trees",
    caption: "Spring colour around the neighbourhoods we serve",
    category: "Hedge & Garden Care",
  },
];

export const galleryCategories = [
  "All",
  "Lawn Maintenance",
  "Hedge & Garden Care",
  "Hardscaping",
  "Seasonal Cleanups",
];

export const testimonials = [
  {
    quote:
      "Amazing work by Steven and his crew. They’ve done a fantastic job with my yard, including: weeding, hedge trimming, lawn maintenance, and even repaired an old rotten retaining wall using large concrete garden blocks. I’m very happy with their work and how efficiently they get the work done. My yard, hedge and new retaining wall look great. I even had them help my parents with their yard. Thank you, Steven and crew for all the hard work!",
    name: "Lars",
    context: "Google review",
    date: "Jul 2026",
    stars: 5,
  },
  {
    quote:
      "Great experience from start to finish. Fair price, quality work, and they cleaned everything up before they left. I’d hire them again for sure.",
    name: "Jay Vee",
    context: "Google review",
    date: "Jul 2026",
    stars: 5,
  },
  {
    quote:
      "We’ve had Steven’s Green Lotus Landscapes for many years. He keeps his words as promised and gets job done. He is well responsive to our requests and we are happy with his service. Thank you, Steven.",
    name: "Yvonne Peck",
    context: "Google review",
    date: "Jul 2026",
    stars: 5,
  },
  {
    quote:
      "Steven’s team was great to work with right from the beginning. Great communication with the introduction, getting a quote, the work itself and cleanup after. Honest and professional service. Would recommend!! We had our tall cedar hedges trimmed.",
    name: "Michael Luong",
    context: "Google review",
    date: "Jun 2026",
    stars: 5,
  },
  {
    quote:
      "Steven and his crew have helped me with a number of different landscaping jobs. They always do a great job. I highly recommend Steven and his team.",
    name: "Danny Duong",
    context: "Google review",
    date: "Jun 2026",
    stars: 5,
  },
  {
    quote:
      "We had such a great experience with Green Lotus Landscapes Ltd.! The team was friendly, hardworking, and easy to communicate with. They completely refreshed our yard and made it a space we actually enjoy spending time in now. You can tell they really care about their work and their clients. Would definitely use them again and recommend to friends and family!",
    name: "Anita Truong",
    context: "Local Guide · Google",
    date: "May 2026",
    stars: 5,
  },
  {
    quote:
      "Steven and his crew have been taking care of our building’s lawn and garden for about 4 years now and do a great job making the grounds look good. On a couple of occasions we had large fallen tree branches that had to be cleared and they came promptly and took care of cleaning out all the debris. We highly recommend them.",
    name: "Maria Paz Torres",
    context: "Google review",
    date: "May 2026",
    stars: 5,
  },
  {
    quote:
      "Steven and his team provide professional services at reasonable rates. The best thing is I can depend on them showing up to mow our lawn every bi-weekly which I appreciate a lot. They also do the annual pre and post season landscaping clean up for us. Outstanding results everytime!",
    name: "Bonnie Yeung",
    context: "Local Guide · Google",
    date: "May 2026",
    stars: 5,
  },
  {
    quote:
      "Always a top notch job. Steven cares about his work and by extension, his clients. Our neighborhood is having more visits from Steven and his team due to the quality of his work.",
    name: "Andrew Lloyd",
    context: "Google review",
    date: "May 2026",
    stars: 5,
  },
  {
    quote: "They redid my entire lawn. Super quick and easy from start to finish. Would recommend 👍",
    name: "Mark Four",
    context: "Local Guide · Google",
    date: "May 2026",
    stars: 5,
  },
  {
    quote: "Our grass is always cut nicely and it is done very efficiently. I would recommend them to anyone.",
    name: "John Silver",
    context: "Google review",
    date: "May 2026",
    stars: 5,
  },
  {
    quote: "Quality work at a fair cost. Recommended.",
    name: "Todd Burman",
    context: "Local Guide · Google",
    date: "May 2026",
    stars: 5,
  },
  {
    quote:
      "They get the job done, nice team. Could be a bit quicker but can’t complain since the results were solid.",
    name: "Sam Patel",
    context: "Google review",
    date: "May 2026",
    stars: 3,
  },
];

export const featuredProjects = [
  {
    id: "story-sod",
    title: "Fresh sod, same day",
    neighbourhood: "East Vancouver",
    service: "Lawn Maintenance",
    scope: "Worn lawn stripped, soil levelled, and new sod rolled out so the yard was green again before evening.",
    before: "/images/gallery/20.jpg",
    after: "/images/gallery/7.jpg",
    beforeAlt: "Sod rolls staged on prepared soil in a Vancouver backyard",
    afterAlt: "Finished fresh sod lawn ready for the season",
  },
  {
    id: "story-bed",
    title: "Bed rebuilt and planted",
    neighbourhood: "South Vancouver",
    service: "Hedge & Garden Care",
    scope: "Overgrown strip dug out, rock border reset, and new plantings set into fresh mulch along the fence line.",
    before: "/images/gallery/17.jpg",
    after: "/images/gallery/16.jpg",
    beforeAlt: "Garden bed excavation and site prep along a metal fence",
    afterAlt: "Finished planted and mulched garden bed with rock border",
  },
  {
    id: "story-yard",
    title: "Levels, deck, and living space",
    neighbourhood: "Burnaby",
    service: "Hardscaping",
    scope: "Sloped backyard brought into usable levels with stairs, decking, retaining edges, and a clean lawn below.",
    before: "/images/gallery/6.jpg",
    after: "/images/gallery/4.jpg",
    beforeAlt: "Backyard renovation in progress with stairs and deck framing",
    afterAlt: "Finished multi-level backyard with wooden stairs, seating, and lawn",
  },
];

export const faqs = [
  {
    question: "How do you price a job?",
    answer:
      "Every quote is free and based on a look at the property. We do not publish flat online prices because yards vary too much — access, slope, and how far behind things are all change the work.",
  },
  {
    question: "Do you come on a regular schedule?",
    answer:
      "Yes. Most lawn and garden clients are on a weekly or bi-weekly route. You get the same crew each visit so nothing has to be re-explained.",
  },
  {
    question: "Can you work with our strata?",
    answer:
      "We do. Steven handles the quote and communication with council or the property manager, and we keep a simple paper trail for invoices and schedules.",
  },
  {
    question: "What happens to green waste?",
    answer:
      "We haul it. Clippings, hedge cuttings, and cleanup debris leave with us so you are not left with piles at the curb.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For spring and fall cleanups, two to three weeks is ideal. Regular maintenance can often start sooner — call and ask.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Not for routine visits once access is sorted. For the first quote walkthrough, it helps if someone can meet Steven on site.",
  },
  {
    question: "Are estimates really free?",
    answer:
      "Yes. No charge to walk the property and give you a clear number. No pressure to book on the spot.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Vancouver and nearby neighbourhoods including East Van, South Van, Kitsilano, Mount Pleasant, and select Burnaby streets. If you are unsure, call and we will tell you straight.",
  },
];

export const estimateOptions = {
  yardSizes: ["Small townhouse / courtyard", "Typical city lot", "Large lot / corner", "Strata / multi-unit"],
  timelines: ["ASAP", "Within 2 weeks", "This month", "Just planning ahead"],
};

export const trustPoints = [
  `${rating.score}★ on Google (${rating.count} reviews)`,
  `${business.yearsInBusiness} serving Vancouver`,
  "Referred by family and friends",
];

export const differentiators = [
  {
    title: "We communicate",
    body: "You hear from us at quote, before the crew arrives, and once the work is done. No wondering what is happening.",
  },
  {
    title: "We show up",
    body: "Scheduled visits happen on schedule. That reliability is the single thing our clients mention most.",
  },
  {
    title: "We finish clean",
    body: "The job is not done until the clippings, debris, and green waste are gone and the site looks tidy.",
  },
];

export const audiences = [
  {
    title: "Homeowners",
    body: "Bi-weekly lawn care, hedges, cleanups, and hardscape fixes that keep the place looking looked-after without you chasing contractors.",
    href: "/services",
    cta: "View residential services",
    image: images.lawnCare,
  },
  {
    title: "Strata & light commercial",
    body: "Reliable scheduled maintenance for strata councils and small commercial sites that need clear communication and crews who show up.",
    href: "/about",
    cta: "How we work with strata",
    image: images.project2,
  },
];

export const serviceAreas = [
  "East Vancouver",
  "South Vancouver",
  "Kitsilano",
  "Mount Pleasant",
  "Hastings-Sunrise",
  "Burnaby (select)",
];

export const processSteps = [
  {
    title: "Request a quote",
    body: "Call or send a message and tell us what the yard needs. No pressure, no hard sell.",
  },
  {
    title: "Walk the property",
    body: "Steven visits, walks it with you, and listens before recommending anything.",
  },
  {
    title: "Clear free quote",
    body: "You get a straight recommendation and a free quote you can actually understand.",
  },
  {
    title: "We take care of the rest",
    body: "The same crew shows up on schedule, finishes clean, and keeps you in the loop.",
  },
];
