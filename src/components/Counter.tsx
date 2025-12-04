// Counter.tsx
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number; // milliseconds
  decimals?: number; // number of decimals to show (default 0)
  easing?: (t: number) => number; // easing function (t in [0,1])
}

const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

const Counter: React.FC<CounterProps> = ({
  target,
  duration = 2000,
  decimals = 0,
  easing = easeOutQuad,
}) => {
  const [value, setValue] = useState<number>(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const lastTargetRef = useRef<number>(target);

  useEffect(() => {
    // If target didn't change and value already equals target, nothing to do
    if (lastTargetRef.current === target && value === target) return;
    lastTargetRef.current = target;

    // Cancel any running animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    startRef.current = null;

    const formatValue = (n: number) => {
      const factor = Math.pow(10, decimals);
      return Math.round(n * factor) / factor;
    };

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(1, duration === 0 ? 1 : elapsed / duration);
      const eased = easing(progress);

      const current = formatValue(eased * target);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // ensure exact final value
        setValue(formatValue(target));
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, decimals, easing]);

  // If you want to show comma separators, format here (optional)
  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return <span>{display}</span>;
};

export default Counter;
