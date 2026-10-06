import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Burst from "../components/Burst.jsx";

export default function Welcome() {
  const navigate = useNavigate();
  const [showNo, setShowNo] = useState(true);
  const [line, setLine] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  function handleNo() {
    setShowNo(false); // NO disappears. No navigation, no movement.
    setLine(1);
    setTimeout(() => setLine(2), 2200);
  }

  function handleYes() {
    setCelebrate(true);
    setTimeout(() => navigate("/message"), 1700); // YES is the only way to Page 2
  }

  return (
    <main className="wrap">
      {celebrate && <Burst items={["❤️", "✨", "🎉", "💖", "🎊"]} count={46} />}
      <div className="avatar" role="img" aria-label="Josephine" />
      <h1 className="script">Hey Josephine ❤️</h1>
      <p>I have a little question for you...</p>
      <p className="q">Are you ready for your birthday surprise?</p>

      <div className="btns">
        <button className="yes" onClick={handleYes} disabled={celebrate}>YES ❤️</button>
        {showNo && <button className="no" onClick={handleNo}>NO 😏</button>}
      </div>

      <div className="oops" aria-live="polite">
        {line >= 1 && (
          <p key={line} className="pop">
            {line === 1
              ? "Oops... looks like NO disappeared 😂❤️"
              : "There's only one way to find out what's waiting for you..."}
          </p>
        )}
      </div>
    </main>
  );
}
