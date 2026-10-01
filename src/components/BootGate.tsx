"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const KEY = "sudhanshu-booted";

export default function BootGate({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(KEY);
      if (!seen) {
        setShowLoading(true);
        sessionStorage.setItem(KEY, "1");
      }
    } catch {
      // Safe fallback if sessionStorage is blocked
    }
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen onDone={() => setShowLoading(false)} />}
      {children}
    </>
  );
}
