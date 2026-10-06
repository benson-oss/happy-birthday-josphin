import { useMemo } from "react";

const rnd = (a, b) => a + Math.random() * (b - a);

// Floating emoji effect. fall = true makes them fall from the top instead of rising.
export default function Burst({ items, count, fall = false }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        emoji: items[i % items.length],
        style: {
          "--x": rnd(0, 96) + "vw",
          "--s": rnd(18, 44) + "px",
          "--d": rnd(2.4, 4.6) + "s",
          "--dl": rnd(0, 1.4) + "s",
          "--dx": rnd(-60, 60) + "px",
          "--r": rnd(-40, 40) + "deg",
        },
      })),
    []
  );
  return (
    <div className={"fx" + (fall ? " fall" : "")} aria-hidden="true">
      {particles.map((p, i) => (
        <span key={i} style={p.style}>{p.emoji}</span>
      ))}
    </div>
  );
}
