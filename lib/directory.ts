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
    id: "utilities",
    title: "Utilities",
    entries: [
      { name: "Cox Communications", phone: "(866) 867-7644", website: "www.cox.com" },
      { name: "Laguna Beach County Water District", phone: "(949) 494-1041", website: "www.lbcwd.org" },
      { name: "San Diego Gas & Electric® Company", address: "South Laguna Beach", phone: "(800) 411-7343", website: "www.sdge.com" },
      { name: "South Coast Water District", phone: "(949) 499-4555", website: "www.scwd.org" },
      { name: "Southern California Edison (Electric)", phone: "(800) 655-4555", website: "www.sce.com" },
      { name: "Southern California Gas Company", phone: "(877) 238-0092", website: "www.socalgas.com" },
      { name: "Trash & Recycling — CR&R Incorporated Environmental Services", phone: "(949) 662-3819", website: "www.crrwasteservices.com" },
    ],
  },
  {
    id: "city-services",
    title: "City Services",
    entries: [
      { name: "Laguna Beach Police Department", address: "505 Forest Ave, Laguna Beach", phone: "(949) 497-0701", note: "Non-Emergency · Emergency: 911" },
      { name: "Laguna Beach City Hall", address: "505 Forest Ave, Laguna Beach", phone: "(949) 497-3311", website: "www.lagunabeachcity.net" },
      { name: "Laguna Beach Fire Department", phone: "(949) 497-0700", note: "Non-Emergency" },
      { name: "Laguna Beach Local", phone: "(949) 497-0766" },
      { name: "Laguna Beach Trolley", phone: "(949) 497-0766", website: "www.lagunabeachcity.net/trolley" },
      { name: "United States Postal Service", address: "350 Forest Ave | 31677 Virginia Way, Laguna Beach", phone: "(800) 275-8777" },
    ],
  },
  {
    id: "education",
    title: "Education",
    entries: [
      { name: "Laguna Beach Unified School District", address: "550 Blumont St, Laguna Beach", phone: "(949) 497-7700", website: "www.lbusd.org" },
      { name: "El Morro Elementary", address: "8681 N Coast Hwy, Laguna Beach", phone: "(949) 497-7780" },
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
    ],
  },
  {
    id: "advertisers",
    title: "Directory of Advertisers",
    entries: [
      { name: "Acai Republic", address: "211 Broadway St, Laguna Beach", phone: "(949) 734-0593", website: "www.acairepublic.com" },
      { name: "AmeriSpec Orange Coast Home Inspections", address: "22471 Aspan St, Ste 104, Lake Forest", phone: "(949) 454-0508", website: "www.amerispec.net/woodford" },
      { name: "Anami", address: "303 Broadway St, Ste 211, Laguna Beach", phone: "(949) 549-4424", website: "www.anami.co" },
      { name: "Anita Wang, MD", address: "255 Thalia St, Ste B, Laguna Beach", phone: "(949) 734-0580", website: "www.anitawangmd.com" },
      { name: "Bay Locksmith", phone: "(949) 842-6967", website: "www.baylocksmith.net" },
      { name: "Berkshire Hathaway HomeServices California Properties | Jennifer Halbert", address: "30812 S Coast Hwy, Laguna Beach", phone: "(949) 899-2113", website: "www.jenniferhalbert.com" },
      { name: "Buni's Bakery", address: "912 N Coast Hwy, Laguna Beach", website: "www.bunisbakery.com" },
      { name: "Carolyn Johnson Gallery", phone: "(408) 210-6326", website: "www.carolynjohnsongallery.com" },
      { name: "David M. Parker | ARCHITECT", address: "1502 N Coast Hwy, Laguna Beach", phone: "(949) 872-6616", website: "www.dmparchitect.org" },
      { name: "Eyes In The Sky | Tarek Jadeba", phone: "(949) 245-9732", website: "www.eyesintheskyusa.com" },
      { name: "Friends Collection", website: "www.friendscollection.com", note: "@friendsplushies" },
      { name: "Golden West Home Watch", phone: "(714) 349-0283", website: "www.gwhomewatch.com" },
      { name: "Golden West Moving, Inc.", address: "15671 Commerce Ln, Huntington Beach", phone: "(714) 895-5152", website: "www.goldenwestmoving.com" },
      { name: "Habitat Estate Sales", phone: "(949) 813-9154", website: "www.habitatestatesales.com" },
      { name: "Indigenous Salon", phone: "(949) 715-2100", website: "www.indigenoussalon.com" },
      { name: "Jedidiah Coffee", address: "397 N Coast Hwy, Laguna Beach", phone: "(949) 687-9717", website: "www.jedidiahcoffee.com" },
      { name: "LIPG | Laguna Intellectual Property Group", phone: "(805) 815-2184", email: "williamlevin@hotmail.com" },
      { name: "Laguna Art-A-Fair", address: "777 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-4514", website: "www.art-a-fair.com" },
      { name: "Laguna Beach Dojo", address: "1100 S Coast Hwy, Ste 301C, Laguna Beach", phone: "(949) 239-7489", website: "www.lagunabeachkarate.com" },
      { name: "Laguna Candles", address: "23501 Ridge Rte Dr, Ste G, Laguna Hills", phone: "(949) 680-8444", website: "www.lagunacandles.com" },
      { name: "Laguna Canyon Winery", address: "2133 Laguna Canyon Rd, Laguna Beach", phone: "(949) 715-9463", website: "www.lagunacanyonwinery.com" },
      { name: "Laguna Golf Carts", address: "22500 Muirlands Blvd, Ste A, Lake Forest", phone: "(949) 317-0896", website: "www.lagunagolfcarts.com" },
      { name: "Laird Homebuilders Inc.", address: "1278 Glenneyre St, Ste 304, Laguna Beach", phone: "(949) 235-7397", website: "www.lairdhomebuilders.com" },
      { name: "Legacy Life Coaching & Consulting | Lori Berkman", phone: "(949) 503-2316", website: "www.legacylifecoaching.com" },
      { name: "Lime Decor & Design", phone: "(949) 687-9345", website: "www.limedecoranddesign.com" },
      { name: "Limo Laguna", phone: "(949) 235-4396", website: "www.limolaguna.us" },
      { name: "Minti Pest Co, Inc.", address: "668 N Coast Hwy, Ste 299, Laguna Beach", phone: "(714) 728-7081", website: "www.mintipestco.com" },
      { name: "Nirvana Kitchen & Pantry", address: "303 Broadway St, Ste 101, Laguna Beach", phone: "(949) 497-0027", website: "www.nirvanagrille.com" },
      { name: "Plus Höme Housing Solutions", phone: "(949) 266-4701", website: "www.plushomegroup.com" },
      { name: "RC Cleaning Service", phone: "(949) 370-6253", website: "www.rc-cleaningservice.com" },
      { name: "S. Aiello Appraisal Services", phone: "(949) 945-3860", email: "sam@samaiello.com" },
      { name: "Slunks", website: "www.getslunks.com", note: "@slunksfamily" },
      { name: "SoCal Event Decor", phone: "(657) 235-8178", website: "www.socaleventdecor.com" },
      { name: "South Swell Donuts", address: "31660 S Coast Hwy, Laguna Beach", phone: "(949) 499-6171" },
      { name: "Spa Del Rio", address: "384 Forest Ave, Ste 27, Laguna Beach", phone: "(949) 549-4682", website: "www.spadelrio.com" },
      { name: "Swiminista", website: "www.swiminista.com" },
      { name: "TanKoi Lifestyle", phone: "(949) 939-0701", website: "www.tankoi.myorganogold.com" },
      { name: "The Art Hotel", address: "1404 N Coast Hwy, Laguna Beach", phone: "(949) 494-6464", website: "www.arthotellagunabeach.com" },
      { name: "The T-Shirt Company at Laguna Beach", address: "387 S Coast Hwy, Laguna Beach", phone: "(949) 494-3217", website: "www.lagunabeachtshirtco.com" },
      { name: "Think Laguna First", phone: "(949) 494-1018", website: "www.thinklagunafirst.com" },
      { name: "Tight Assets", address: "180 S Coast Hwy, Laguna Beach", phone: "(949) 499-0005", email: "tightassetslaguna@gmail.com" },
      { name: "Visit Laguna Beach", website: "www.visitlagunabeach.com" },
      { name: "Walk In the Park Photography", phone: "(949) 350-7344", email: "welton@walkintheparkphoto.com" },
      { name: "Walsh Floors & Windows", address: "1999 S Coast Hwy, Ste C, Laguna Beach", phone: "(949) 499-5366", website: "www.walsh1964.com" },
      { name: "Wine Craft", address: "662 S Coast Hwy, Laguna Beach", phone: "(949) 376-0007", website: "www.winecraftoc.com" },
      { name: "Wyland Galleries", address: "509 S Coast Hwy, Laguna Beach", phone: "(949) 376-8000", website: "www.wyland.com" },
    ],
  },
  {
    id: "art-events",
    title: "Art Events & Activities",
    entries: [
      { name: "Festival of Arts", address: "650 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-1145", website: "www.foapom.com" },
      { name: "First Thursdays Art Walk", phone: "(949) 415-4652", website: "www.firstthursdaysartwalk.com" },
      { name: "Laguna Beach Farmer's Market", address: "521 Forest Ave, Laguna Beach", note: "Saturdays · 8 AM – 12 PM" },
      { name: "Pageant of the Masters", address: "650 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-1145", website: "www.foapom.com" },
      { name: "Sawdust Art Festival", address: "935 Laguna Canyon Rd, Laguna Beach", phone: "(949) 494-3030", website: "www.sawdustartfestival.org" },
    ],
  },
  {
    id: "nonprofits",
    title: "Nonprofit Organizations",
    entries: [
      { name: "Ability Awareness Project", phone: "(949) 415-4096", website: "www.kindandsafeschools.org" },
      { name: "Assistance League of Laguna Beach", address: "547 Catalina, Laguna Beach", phone: "(949) 494-6097", website: "www.assistanceleague.org/locator" },
      { name: "Catmosphere Laguna Foundation", phone: "949-619-MEOW", website: "www.catmospherelaguna.com" },
      { name: "Give a Beat", email: "info@giveabeat.org", website: "www.giveabeat.org" },
      { name: "Laguna Canyon Foundation", address: "10 Phillips Rd, Laguna Beach", phone: "(949) 497-8324", website: "www.lagunacanyon.org" },
      { name: "No Square Theatre", address: "384 Legion St, Laguna Beach", website: "nosquare.org" },
      { name: "PUP Laguna Beach", address: "20612 Laguna Canyon Rd, Laguna Beach", phone: "(949) 497-3552", website: "www.puplagunabeach.org" },
      { name: "Unconditional Rescue", address: "20592 Laguna Canyon Rd, Laguna Beach", email: "hello@unconditionalrescue.org", website: "www.unconditionalrescue.org" },
      { name: "Woman's Club of Laguna Beach", address: "286 St Ann's Dr, Laguna Beach", phone: "(949) 497-1200", email: "venuerental@wclb.org" },
      { name: "Wyland Foundation", phone: "(949) 835-3680", website: "wylandfoundation.org" },
    ],
  },
];
