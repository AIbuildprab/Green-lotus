import { BrickWall, Leaf, Shovel, Trees } from "lucide-react";

export const business = {
  name: "Green Lotus Landscape",
  owner: "Steve",
  phoneDisplay: "604-728-0246",
  phoneHref: "tel:6047280246",
  email: "hello@greenlotuslandscape.example",
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
  logo: "/images/logo.png",
  mark: "/images/lotus-mark.svg",
  markAlt: "Green Lotus Landscape logo",
};

export const fullAddress = `${business.street}, ${business.city}, ${business.region} ${business.postalCode}`;

export const rating = {
  score: "4.9",
  count: 19,
  source: "Google",
};

export const hours = [
  { days: "Monday – Saturday", time: "7:00 AM – 6:00 PM" },
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

// Temporary photo placeholders (Unsplash). Swap for real job photos in /public/images.
export const images = {
  heroYard:
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80",
  lawnCare:
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=1200&q=80",
  lawnCareAlt:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  hedgeCare:
    "https://images.unsplash.com/photo-1466692476866-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
  hedgeCareAlt:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  hardscaping:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  hardscapingAlt:
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?auto=format&fit=crop&w=1200&q=80",
  seasonal:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  seasonalAlt:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
  project2:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  project3:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  team:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  aboutYard:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
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
      { src: images.lawnCare, alt: "Green Lotus crew mowing a residential lawn in Vancouver" },
      { src: images.lawnCareAlt, alt: "Freshly edged lawn border along a Vancouver front walkway" },
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
      "Hedges and shrubs get away from you fast on the coast. We shape hedges cleanly, prune with the plant's health in mind, and keep beds looking cared for through the growing season. If you are not sure what needs cutting back, Steve will walk it with you and say so plainly.",
    points: [
      "Hedge trimming and shaping",
      "Seasonal pruning for shrubs and small trees",
      "Bed weeding, mulching, and refreshes",
      "Green waste hauled away",
    ],
    photos: [
      { src: images.hedgeCare, alt: "Green Lotus crew trimming a cedar hedge at a Vancouver home" },
      { src: images.hedgeCareAlt, alt: "Newly pruned garden bed with shaped shrubs in Vancouver" },
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
      { src: images.hardscaping, alt: "Stone retaining wall built by Green Lotus in a Vancouver backyard" },
      { src: images.hardscapingAlt, alt: "Garden block border and pathway repair on a Vancouver property" },
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
      { src: images.seasonal, alt: "Green Lotus crew clearing fall leaves from a Vancouver yard" },
      { src: images.seasonalAlt, alt: "Vancouver garden bed cleared and mulched after a seasonal cleanup" },
    ],
    cover: images.seasonal,
  },
];

export const galleryItems = [
  {
    id: "project-1",
    src: images.heroYard,
    alt: "Front yard lawn and garden beds maintained by Green Lotus in Vancouver",
    caption: "Front yard reset with fresh edging and tidy beds",
    category: "Lawn Maintenance",
  },
  {
    id: "project-2",
    src: images.lawnCare,
    alt: "Green Lotus crew mowing a residential lawn in Vancouver",
    caption: "Bi-weekly mowing for a long-standing East Vancouver client",
    category: "Lawn Maintenance",
  },
  {
    id: "project-3",
    src: images.hedgeCare,
    alt: "Green Lotus crew trimming a cedar hedge at a Vancouver home",
    caption: "Cedar hedge brought back into shape",
    category: "Hedge & Garden Care",
  },
  {
    id: "project-4",
    src: images.hedgeCareAlt,
    alt: "Newly pruned garden bed with shaped shrubs in Vancouver",
    caption: "Garden beds pruned and mulched for the season",
    category: "Hedge & Garden Care",
  },
  {
    id: "project-5",
    src: images.hardscaping,
    alt: "Stone retaining wall built by Green Lotus in a Vancouver backyard",
    caption: "Retaining wall rebuild on a sloped backyard",
    category: "Hardscaping",
  },
  {
    id: "project-6",
    src: images.hardscapingAlt,
    alt: "Garden block border and pathway repair on a Vancouver property",
    caption: "Garden block border and pathway repair",
    category: "Hardscaping",
  },
  {
    id: "project-7",
    src: images.seasonal,
    alt: "Green Lotus crew clearing fall leaves from a Vancouver yard",
    caption: "Fall cleanup before the rain set in",
    category: "Seasonal Cleanups",
  },
  {
    id: "project-8",
    src: images.seasonalAlt,
    alt: "Vancouver garden bed cleared and mulched after a seasonal cleanup",
    caption: "Spring reset ahead of a family gathering",
    category: "Seasonal Cleanups",
  },
  {
    id: "project-9",
    src: images.project2,
    alt: "Tidy residential lawn and walkway maintained by Green Lotus in Vancouver",
    caption: "Regular maintenance keeps this one easy",
    category: "Lawn Maintenance",
  },
  {
    id: "project-10",
    src: images.project3,
    alt: "Vancouver backyard with shaped shrubs and clean lawn edges",
    caption: "Backyard shrubs shaped and edges cut in",
    category: "Hedge & Garden Care",
  },
  {
    id: "project-11",
    src: images.lawnCareAlt,
    alt: "Freshly edged lawn border along a Vancouver front walkway",
    caption: "Edging detail along the front walk",
    category: "Lawn Maintenance",
  },
  {
    id: "project-12",
    src: images.hardscaping,
    alt: "Repaired garden wall and level ground in a Vancouver yard",
    caption: "Wall repair and re-levelled ground",
    category: "Hardscaping",
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
      "Steve quoted the job, explained exactly what the crew would do, and then they did it. The communication from start to cleanup was the best part.",
    name: "Michelle T.",
    context: "East Vancouver",
    date: "Mar 2026",
  },
  {
    quote:
      "They actually show up when they say they will. After dealing with contractors who ghost you, that alone is worth it.",
    name: "James R.",
    context: "Mount Pleasant",
    date: "Feb 2026",
  },
  {
    quote:
      "Professional work at a reasonable rate. We have already passed their number along to family and to two neighbours.",
    name: "Anita K.",
    context: "Kitsilano",
    date: "Jan 2026",
  },
  {
    quote:
      "Our strata has used Green Lotus for over four years now. Reliable every season, and easy to reach when something comes up.",
    name: "David L.",
    context: "Strata Council, Vancouver",
    date: "Dec 2025",
  },
  {
    quote:
      "Friendly, hardworking crew. They left the yard cleaner than they found it and did not leave a mess on the street either.",
    name: "Sarah P.",
    context: "Hastings-Sunrise",
    date: "Nov 2025",
  },
];

export const featuredProjects = [
  {
    id: "story-lawn",
    title: "Front yard reset",
    neighbourhood: "East Vancouver",
    service: "Lawn Maintenance",
    scope: "Overgrown edges, patchy lawn, and beds that had not been touched in two seasons.",
    before: images.seasonal,
    after: images.lawnCare,
    beforeAlt: "Placeholder before photo of an untidy Vancouver front yard",
    afterAlt: "Placeholder after photo of a clean, edged Vancouver front lawn",
  },
  {
    id: "story-hedge",
    title: "Cedar hedge brought back",
    neighbourhood: "South Vancouver",
    service: "Hedge & Garden Care",
    scope: "Tall, uneven cedar hedge blocking the sidewalk and crowding the driveway.",
    before: images.hedgeCareAlt,
    after: images.hedgeCare,
    beforeAlt: "Placeholder before photo of an overgrown hedge",
    afterAlt: "Placeholder after photo of a shaped cedar hedge",
  },
  {
    id: "story-wall",
    title: "Retaining wall rebuild",
    neighbourhood: "Burnaby",
    service: "Hardscaping",
    scope: "Leaning garden wall and poor drainage along a sloped backyard.",
    before: images.hardscapingAlt,
    after: images.hardscaping,
    beforeAlt: "Placeholder before photo of a failing garden wall",
    afterAlt: "Placeholder after photo of a rebuilt stone retaining wall",
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
      "We do. Steve handles the quote and communication with council or the property manager, and we keep a simple paper trail for invoices and schedules.",
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
      "Not for routine visits once access is sorted. For the first quote walkthrough, it helps if someone can meet Steve on site.",
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
    body: "Steve visits, walks it with you, and listens before recommending anything.",
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
