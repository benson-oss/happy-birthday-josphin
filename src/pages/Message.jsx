import { useEffect, useState } from "react";
import Burst from "../components/Burst.jsx";

// ✏️ EDIT YOUR BIRTHDAY MESSAGE HERE
const MESSAGE = [
  "Josephine, you make ordinary days feel like something worth celebrating.",
  "Your smile, your laugh, and the way you carry yourself have a way of making everything around you feel lighter.",
  "I hope this year brings you every bit of the joy you give to the people who love you.",
  "Thank you for being you. ❤️",
];

const delay = (s) => ({ animationDelay: s + "s" });

export default function Message() {
  const [done, setDone] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="wrap top">
      {done && <Burst items={["🎉", "🎊", "✨", "⭐"]} count={50} fall />}
      {done && <Burst items={["❤️", "💖", "💕"]} count={30} />}
      {done && <Burst items={["🎈", "🎈", "🎈"]} count={16} />}

      <p className="rv gold" style={delay(0.2)}>Yay! You said YES ❤️</p>
      <h1 className="script rv" style={delay(1)}>Happy Birthday, My Beautiful Josephine</h1>
      <p className="rv" style={delay(2)}>Today is all about you.</p>
      <img className="photo rv" style={delay(3)} src="/josephine.jpg" alt="Josephine on her birthday" />

      <div className="msg rv" style={delay(4.2)}>
        {MESSAGE.map((t, i) => <p key={i}>{t}</p>)}
      </div>

      <div className="rv last" style={delay(5.6)}>
        {!done ? (
          <button className="yes" onClick={() => setDone(true)}>ONE MORE SURPRISE ❤️</button>
        ) : (
          <div className="final">
            <h2 className="script">Happy Birthday Josephine ❤️</h2>
            <p style={{ margin: "10px auto 0" }}>You deserve all the happiness in the world.</p>
          </div>
        )}
      </div>
    </main>
  );
}
