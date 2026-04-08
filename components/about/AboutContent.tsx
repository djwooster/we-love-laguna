"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Locally Written",
    description:
      "Every story is written by someone who lives here or has a deep love for this place. No travel bloggers, no algorithm-generated lists.",
  },
  {
    title: "Community First",
    description:
      "We champion local businesses, independent artists, and the people who make Laguna Beach what it is — not the chains, not the generic.",
  },
  {
    title: "Editorial Honesty",
    description:
      "We only recommend what we genuinely love — and our sponsors love this community, too. Paid partnerships are welcomed.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <Image
          src="/compressed/Founder.jpg"
          alt="Jennifer Halbert, founder of We Love Laguna Beach"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-sand-50" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 text-center px-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] uppercase text-white/70 font-medium mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Letter from the Founder */}
      <section className="bg-white py-20 lg:py-24 border-t border-sand-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-6">
              A Letter from Our Founder
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 leading-tight mb-10">
              Dear Readers,
            </h2>
            <div className="space-y-6 text-warm-500 leading-relaxed text-base">
              <p>
                Welcome to We Love Laguna Beach! I am Jennifer Halbert, founder,
                and my goal in creating this publication is to provide a
                resource for locals, new residents and visitors alike. The
                contents of this magazine include samplings of the finest
                entertainment, artists, restaurants, services and organizations
                in Laguna Beach.
              </p>
              <p>
                Since our first edition launched, We Love Laguna Beach has
                morphed organically into much more — especially after teaming up
                with local social media extraordinaire, Kristin Nicholson,
                a.k.a. @kristinbytheocean. The magazine&apos;s online presence
                has grown, and its visibility in the community is even stronger.
                Kristin is a true leader, friend and talented person who shares
                my enthusiasm for marketing, volunteerism and helping others.
                She is a bright light that shines throughout the community.
              </p>
              <p>
                When my family first introduced me to Laguna, I was immediately
                drawn to its eclectic, friendly people; gorgeous art;
                breathtaking beaches, and amazing properties. I moved from
                Florida to Los Angeles years ago to pursue an acting career.
                While searching for my own property, I developed an interest in
                real estate and decided to become a Realtor. Now my home is
                close to my family&apos;s in Laguna Beach and very near to my
                &ldquo;second home&rdquo; — Berkshire Hathaway HomeServices
                California Properties. My versatility stems from my vast
                experience in marketing, graphic design and acting, as well as a
                degree in communication, in which I focused on advertising and
                public relations. This — combined with the intense business and
                negotiating training I receive daily from my parents, brother
                and Berkshire Hathaway team — led me to become an award-winning
                real estate agent. I am so grateful for the tremendous love and
                support with which I have been blessed.
              </p>
              <p>
                Giving back to the community is my way of expressing that
                appreciation. A portion of each of my closed transactions is
                donated to local charities. I also enjoy mentoring at my office
                and sharing my marketing skills with local small businesses to
                help them achieve their goals. In addition, I participate in
                many organizations, including The Ability Awareness Project, The
                Laguna Beach Chamber of Commerce, The Laguna Board of Realtors,
                Young Professionals Network, PUP Laguna Beach, Chabad of Laguna
                Beach, and more. I especially enjoy engaging in local events.
                When I am not helping in the community, you may find me creating
                abstract art; traveling; spending time with family; eating
                sushi; escaping to Joshua Tree with my better half; or walking
                my adorable Pomeranian mix, Bitsy!
              </p>
              <p>
                My joy in building relationships and helping others sparked my
                interest in this endeavor, and I hope you enjoy reading this
                issue as much as the team enjoyed putting it together. I would
                like to extend special thanks to the contributors, advertisers,
                family members and friends who always support me.
              </p>
              <p className="font-serif italic text-warm-600">
                This issue is dedicated to my dear friend, Erika, who passed
                away this year — she was a huge supporter of mine throughout my
                creative journey and will forever be in my heart. Her
                encouragement and friendship gave me the strength to get that
                first issue off the ground.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-sand-100">
              <p className="font-serif italic text-warm-700 text-lg">
                Warm regards,
              </p>
              <p className="font-serif text-xl font-semibold text-warm-900 mt-1">
                Jennifer Halbert
              </p>
              <p className="text-sm text-warm-400 mt-1">
                Founder, We Love Laguna Beach
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-3 text-center"
          >
            What We Believe
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 text-center mb-14"
          >
            Our Editorial Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(45,40,38,0.06)]"
              >
                <div className="w-8 h-0.5 bg-aqua-400 mb-5" />
                <h3 className="font-serif text-xl font-semibold text-warm-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-warm-500 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="max-w-2xl mx-auto px-5 py-20 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-5">
            Write for Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 mb-5 leading-tight">
            Have a story worth telling?
          </h2>
          <p className="text-warm-500 text-base leading-relaxed mb-8">
            We welcome pitches from local writers, business owners, artists, and
            anyone else who has something real to say about life in Laguna
            Beach.
          </p>
          <a
            href="mailto:jennifer@welovelagunabeach.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-warm-900 text-white text-xs font-medium tracking-[0.15em] uppercase rounded-full hover:bg-aqua-600 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </>
  );
}
