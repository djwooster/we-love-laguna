export interface DirectoryEntry {
  name: string;
  phone?: string | string[];
  address?: string;
  website?: string;
  email?: string;
  note?: string;
}

export interface DirectorySection {
  id: string;
  title: string;
  entries: DirectoryEntry[];
}

export const directorySections: DirectorySection[] = [
  {
    id: "advertisers",
    title: "Directory of Advertisers",
    entries: [
      { name: "Ability Awareness Project", phone: "(949) 415-4096", website: "www.kindandsafeschools.org" },
      { name: "AmeriSpec Orange Coast Home Inspections", address: "22471 Aspan St, Ste 104, Lake Forest", phone: "(949) 454-0508", website: "www.amerispec.net/woodford" },
      { name: "Berkshire Hathaway HomeServices | Jennifer Halbert", address: "30812 S Coast Hwy, Laguna Beach", phone: "(949) 899-2113", website: "www.jenniferhalbert.com" },
      { name: "Bob Ortiz | Photographer", phone: "(949) 289-2912", website: "www.bobortiz.com" },
      { name: "Carolyn Johnson Gallery", phone: "(408) 210-6326", website: "www.carolynjohnsongallery.com" },
      { name: "CryoCareUSA", address: "1400 S Coast Hwy, Ste 103, Laguna Beach", phone: "(949) 200-7333", website: "www.cryocareusa.com" },
      { name: "David M. Parker | ARCHITECT", address: "1502 N Coast Hwy, Laguna Beach", phone: "(949) 872-6616", website: "www.dmparchitect.org" },
      { name: "Easy Home Loan 4U | Robin E. Thomas", phone: "(619) 733-8086", email: "robin@extendedprime.com" },
      { name: "Gelson's Market", address: "30922 S Coast Hwy, Laguna Beach", phone: "(949) 499-8130" },
      { name: "Golden West Moving, Inc.", address: "15671 Commerce Ln, Huntington Beach", phone: "(714) 895-5152", website: "www.goldenwestmoving.com" },
      { name: "Habitat Estate Sales", phone: "(949) 813-9154", website: "www.habitatestatesales.com" },
      { name: "I Love Laguna Beach", phone: "(714) 504-4088", website: "www.ilovelagunabeach.com" },
      { name: "Joyce Floral Design", address: "31709 S Coast Hwy, Laguna Beach", phone: "(949) 715-0988", website: "www.joycefloral.com" },
      { name: "Kid Care Brookie's Mom", address: "741 Marlin Dr, Laguna Beach", phone: "(949) 499-1178", website: "www.kidcarebrookiesmom.com" },
      { name: "Kubed Living", phone: "(626) 590-6923", website: "www.kubedliving.com" },
      { name: "KX FM Radio", address: "1833 S Coast Hwy, Ste 200, Laguna Beach", phone: "(949) 715-5936", website: "www.kxfmradio.org" },
      { name: "Laguna Beach Aesthetics | Adrienne O'Connell, DO", address: "32392 S Coast Hwy, Ste 240, Laguna Beach", phone: "(949) 264-8825", website: "www.lagunabeachaesthetics.com" },
      { name: "Laguna Beach Dojo", address: "1100 S Coast Hwy, Ste 301C, Laguna Beach", phone: "(949) 239-7489", website: "www.lagunabeachkarate.com" },
      { name: "Laguna Beach Lodge", address: "30806 Coast Hwy, Laguna Beach", phone: "(949) 499-2227", website: "www.lagunabeachlodge.com" },
      { name: "Laguna Canyon Foundation", address: "10 Phillips Rd, Laguna Beach", phone: "(949) 497-8324", website: "www.lagunacanyon.org" },
      { name: "Laird Homebuilders Inc.", address: "1278 Glenneyre St, Ste 304, Laguna Beach", phone: "(949) 235-7397", website: "www.lairdhomebuilders.com" },
      { name: "Life Force Liquids", address: "1080 S Coast Hwy, Laguna Beach", phone: "(949) 560-9648", website: "www.lifeforceliquids.com" },
      { name: "Lindsay DeLong Creative", phone: "(619) 846-2826", website: "www.ilikelindsay.com" },
      { name: "Lock-Tech", phone: "(949) 770-4885", website: "www.locktechoc.com" },
      { name: "Lovely Nails Boutique", address: "30824 Coast Hwy, Ste B, Laguna Beach", phone: "(949) 499-3627" },
      { name: "Madison Taylore Designs", phone: "(949) 357-8571", website: "www.madisontayloredesigns.com" },
      { name: "Minti Pest Co, Inc.", address: "668 N Coast Hwy, Ste 299, Laguna Beach", phone: "(714) 728-7081", website: "www.mintipestco.com" },
      { name: "Newt's Plumbing Service", address: "265 Center St, Laguna Beach", phone: "(949) 395-7593", website: "www.newtsplumbing.com" },
      { name: "Nirvana Grille", address: "303 Broadway, Ste 101, Laguna Beach", phone: "(949) 497-0027", website: "www.nirvanagrille.com" },
      { name: "Private Chef Jenny Lesch", phone: "(805) 218-6030" },
      { name: "Puppies and People Too", address: "1400 S Coast Hwy, Ste 101, Laguna Beach", phone: "(949) 702-9003", website: "www.puppiesandpeopletoo.com" },
      { name: "SoCal Event Décor", phone: "(657) 235-8178", website: "www.socaleventdecor.com" },
      { name: "South Swell Donuts", address: "31660 S Coast Hwy, Laguna Beach", phone: "(949) 499-6171" },
      { name: "Spa Del Rio", address: "384 Forest Ave, Ste 27, Laguna Beach", phone: "(949) 549-4682", website: "www.spadelrio.com" },
      { name: "Stu News Laguna", phone: "(949) 315-0259", website: "www.stunewslaguna.com" },
      { name: "Susan Cavka Hypnotherapy", address: "2515 East Coast Hwy, Ste 3B, Corona Del Mar", phone: "(949) 615-9101", website: "www.susancavka.com" },
      { name: "The T-Shirt Company at Laguna Beach", address: "387 S Coast Hwy, Laguna Beach", phone: "(949) 494-3217", website: "www.lagunabeachtshirtco.com" },
      { name: "Think Laguna First", website: "www.thinklagunafirst.org" },
      { name: "Visit Laguna Beach", website: "www.visitlagunabeach.com" },
      { name: "Walsh Floors & Windows", address: "31655 Second Ave, Laguna Beach", phone: "(949) 499-5366", website: "www.walsh1964.com" },
      { name: "Wyland Galleries", address: "509 S Coast Hwy, Laguna Beach", phone: "(949) 376-8000", website: "www.wyland.com" },
    ],
  },
  {
    id: "utilities",
    title: "Utilities",
    entries: [
      { name: "AT&T", phone: "(866) 861-6075", website: "www.att.com" },
      { name: "Cox Communications", phone: "(866) 867-7644", website: "www.cox.com" },
      { name: "Laguna Beach County Water District", phone: "(949) 494-1041", website: "www.lbcwd.org" },
      { name: "San Diego Gas & Electric Company", address: "South Laguna Beach", phone: "(800) 411-7343", website: "www.sdge.com" },
      { name: "South Coast Water District", phone: "(949) 499-4555", website: "www.scwd.org" },
      { name: "Southern California Edison (Electric)", phone: "(800) 655-4555", website: "www.sce.com" },
      { name: "Southern California Gas Company", phone: "(877) 238-0092", website: "www.socalgas.com" },
      { name: "Verizon Residential", phone: "(800) 837-4966", website: "www.verizon.com" },
      { name: "Waste Management", phone: ["(949) 837-0427", "(800) 596-7444"], website: "www.wm.com" },
    ],
  },
  {
    id: "city-services",
    title: "City Services",
    entries: [
      { name: "Laguna Beach Police Department", address: "505 Forest Ave, Laguna Beach", phone: "(949) 497-0701", note: "Non-Emergency · Emergency: 911" },
      { name: "Laguna Beach City Hall", address: "505 Forest Ave, Laguna Beach", phone: "(949) 497-3311", website: "www.lagunabeachcity.net" },
      { name: "Laguna Beach Fire Department", phone: "(949) 497-0700" },
      { name: "United States Postal Service", address: "350 Forest Ave | 31677 Virginia Way", phone: "(800) 275-8777" },
    ],
  },
  {
    id: "medical",
    title: "Medical",
    entries: [
      { name: "Bushard's Pharmacy & Apothecary", address: "244 Forest Ave, Laguna Beach", phone: "(949) 494-1059", website: "www.bushardspharmacy.com" },
      { name: "Providence Mission Hospital Laguna Beach", address: "31872 Coast Hwy, Laguna Beach", phone: "(949) 499-1311", website: "www.providence.org" },
    ],
  },
  {
    id: "education",
    title: "Education",
    entries: [
      { name: "Laguna Beach Unified School District", address: "550 Blumont St, Laguna Beach", phone: "(949) 497-7700", website: "www.lbusd.org" },
      { name: "El Morro Elementary", address: "8681 North Coast Hwy, Laguna Beach", phone: "(949) 497-7780" },
      { name: "Top of The World Elementary", address: "21601 Treetop Ln, Laguna Beach", phone: "(949) 497-7790" },
      { name: "Thurston Middle", address: "2100 Park Ave, Laguna Beach", phone: "(949) 497-7785" },
      { name: "Laguna Beach High", address: "625 Park Ave, Laguna Beach", phone: "(949) 497-7750" },
    ],
  },
  {
    id: "animal-services",
    title: "Animal Services & Pet",
    entries: [
      { name: "After-Hours Pet Emergency Hospital", address: "28085 Hillcrest, Mission Viejo", phone: "(949) 364-6228", website: "www.aucsoc.com" },
      { name: "Animal Services", phone: "(949) 497-0701" },
      { name: "Laguna Beach Animal Shelter", address: "20612 Laguna Canyon Rd, Laguna Beach", phone: "(949) 497-3552", website: "www.puplagunabeach.org" },
      { name: "Laguna Beach Dog Park", address: "20672 Laguna Canyon Rd, Laguna Beach" },
      { name: "Pacific Marine Mammal Center", address: "20612 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-3050", website: "www.pacificmmc.org" },
    ],
  },
  {
    id: "art-events",
    title: "Art Events & Activities",
    entries: [
      { name: "Art-A-Fair", address: "777 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-4514", website: "www.art-a-fair.com" },
      { name: "Boys and Girls Club of Laguna Beach", address: "1085 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-2535", website: "www.bgclagunabeach.org" },
      { name: "Festival of Arts", address: "650 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-1145", website: "www.foapom.com" },
      { name: "First Thursdays Art Walk", phone: "(949) 415-4652", website: "www.firstthursdaysartwalk.com" },
      { name: "Laguna Beach Farmer's Market", address: "521 Forest Ave, Laguna Beach", note: "Saturdays · 8 AM – 12 PM" },
      { name: "Pageant of the Masters", address: "650 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-1145", website: "www.foapom.com" },
      { name: "Sawdust Art Festival", address: "935 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-3030", website: "www.sawdustartfestival.org" },
      { name: "Yoga in the Park | Carl Brown", address: "Treasure Island Park, Montage Laguna Beach", phone: "(949) 280-1822", website: "www.yogainthepark.blogspot.com" },
    ],
  },
];
