import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full border-4 border-white/10 border-t-mint animate-spin" />
            <p className="mt-5 font-display text-xl font-bold">Sachin Pathak</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
