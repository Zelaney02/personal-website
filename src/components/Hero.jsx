import { useCallback, useEffect, useRef, useState } from 'react';
import BongoCat from './BongoCat';

const BAP_DURATION_MS = 120;

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function Hero() {
  const [bap, setBap] = useState(false);
  const bapTimer = useRef(null);
  const catRef = useRef(null);
  const inViewRef = useRef(true);

  // One throttled "bap": swap the paw frame for ~120ms, then settle back.
  const triggerBap = useCallback(() => {
    if (prefersReducedMotion()) return;
    if (bapTimer.current) return; // throttled to the animation duration
    setBap(true);
    bapTimer.current = setTimeout(() => {
      setBap(false);
      bapTimer.current = null;
    }, BAP_DURATION_MS);
  }, []);

  useEffect(() => {
    // The cat baps when you type — but only while it is in the viewport.
    let observer = null;
    if ('IntersectionObserver' in window && catRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        inViewRef.current = entry.isIntersecting;
      });
      observer.observe(catRef.current);
    }
    const onKeyDown = () => {
      if (inViewRef.current) triggerBap();
    };
    window.addEventListener('keydown', onKeyDown, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (observer) observer.disconnect();
      if (bapTimer.current) {
        clearTimeout(bapTimer.current);
        bapTimer.current = null;
      }
    };
  }, [triggerBap]);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div
        ref={catRef}
        className="hero-cat"
        role="img"
        aria-label="Bongo Cat, a cartoon white cat happily bapping its paws"
        onPointerEnter={triggerBap}
        onClick={triggerBap}
      >
        <BongoCat width={240} height={157} bap={bap} />
      </div>
      <div className="hero-text">
        <h1 id="hero-heading">Jane He</h1>
        <p className="hero-tagline">
          Software engineer passionate about AI and human-computer interaction.
        </p>
      </div>
      <a className="btn" href="#projects">
        View projects
      </a>
    </section>
  );
}

export default Hero;
