"use client";

import { motion } from "framer-motion";
import type { DirectorySection } from "@/lib/directory";

interface Props {
  sections: DirectorySection[];
}

export function DirectoryGrid({ sections }: Props) {
  return (
    <div className="space-y-20 pb-24">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-aqua-600 leading-tight">
              {section.title}
            </h2>
            <div className="mt-4 h-px bg-sand-200" />
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {section.entries.map((entry, index) => (
              <motion.div
                key={entry.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white border border-sand-200 rounded-2xl p-6 hover:border-aqua-300 hover:shadow-[0_4px_24px_rgba(62,165,164,0.08)] transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-warm-900 leading-snug mb-3 group-hover:text-aqua-600 transition-colors duration-200">
                  {entry.name}
                </h3>

                <div className="space-y-1.5 text-sm">
                  {entry.note && (
                    <p className="text-aqua-600 font-medium text-xs tracking-wide uppercase">
                      {entry.note}
                    </p>
                  )}

                  {entry.address && (
                    <p className="text-warm-500">{entry.address}</p>
                  )}

                  {entry.phone && (
                    <div className="space-y-1">
                      {Array.isArray(entry.phone) ? (
                        entry.phone.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/\D/g, "")}`}
                            className="block text-warm-700 hover:text-aqua-500 transition-colors duration-150"
                          >
                            {p}
                          </a>
                        ))
                      ) : (
                        <a
                          href={`tel:${entry.phone.replace(/\D/g, "")}`}
                          className="block text-warm-700 hover:text-aqua-500 transition-colors duration-150"
                        >
                          {entry.phone}
                        </a>
                      )}
                    </div>
                  )}

                  {entry.email && (
                    <a
                      href={`mailto:${entry.email}`}
                      className="block text-aqua-500 hover:text-aqua-600 transition-colors duration-150 truncate"
                    >
                      {entry.email}
                    </a>
                  )}

                  {entry.website && (
                    <a
                      href={`https://${entry.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-aqua-500 hover:text-aqua-600 transition-colors duration-150 truncate"
                    >
                      {entry.website}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
