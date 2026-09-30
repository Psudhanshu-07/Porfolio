"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const KEY = "sudhanshu-booted";

export default function BootGate({ children }: { children: React.ReactNode }) {
  // Start assuming already booted if this session saw the boot screen.
  const [booted, setBooted] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(KEY);
    if (!seen) {
      setBooted(false);
      sessionStorage.setItem(KEY, "1");
    }
    setChecked(true);
  }, []);

  // Avoid flashing content while deciding (only affects first paint)
  if (!checked) return <div className="min-h-screen bg-blue" />;

  return (
    <>
      {!booted && <LoadingScreen onDone={() => setBooted(true)} />}
      {children}
    </>
  );
}
