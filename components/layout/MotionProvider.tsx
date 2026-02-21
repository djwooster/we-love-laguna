"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app in Framer Motion's MotionConfig with reducedMotion="user".
 * This makes all motion components throughout the site automatically respect
 * the user's OS-level "reduce motion" accessibility preference.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
