'use client';
import { useEffect, useState } from 'react';


export default function CountdownLoopTimer({
  periodSec = 2 * 60 * 60,
  storageKey = 'auction_cycle_epoch',
  render,
  className = '',
}) {
  const periodMs = periodSec * 1000;
  const [now, setNow] = useState(() => Date.now());
  const [epoch, setEpoch] = useState(null);

  useEffect(() => {
    let e = null;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) e = parseInt(saved, 10);
    } catch {}
    if (!e || Number.isNaN(e)) e = Date.now();

    const elapsed = Date.now() - e;
    if (elapsed >= periodMs) {
      const cycles = Math.floor(elapsed / periodMs);
      e = e + cycles * periodMs;
    }

    setEpoch(e);
    try { localStorage.setItem(storageKey, String(e)); } catch {}

    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [periodMs, storageKey]);

  if (epoch == null) return null;

  let remainingMs = periodMs - ((now - epoch) % periodMs);
  if (remainingMs === periodMs) remainingMs = 0;

  const totalSec = Math.max(0, Math.floor(remainingMs / 1000));
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  if (typeof render === 'function') {
    return render({ hours, minutes, seconds, totalSec });
  }

  const pad = (n) => n.toString().padStart(2, '0');
  return (
    <span className={className}>
      {pad(hours)} : {pad(minutes)} : {pad(seconds)}
    </span>
  );
}
