import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState, useMemo, memo, useCallback } from 'react';

const SplitText = memo(({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  // Memoize words and letters to prevent recalculation on each render
  const { words, letters } = useMemo(() => {
    const wordArray = text.split(' ').map(word => word.split(''));
    return {
      words: wordArray,
      letters: wordArray.flat()
    };
  }, [text]);

  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // Memoize callback to reduce rerenders
  const handleIntersection = useCallback(([entry]) => {
    if (!entry.isIntersecting) {
      setInView(false);
      animatedCount.current = 0; // Reset when leaving view
    } else {
      setInView(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, handleIntersection]);

  // Memoize the animation completion handler
  const handleAnimationComplete = useCallback(() => {
    animatedCount.current += 1;
    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  }, [letters.length, onLetterAnimationComplete]);

  // Create springs with optimized dependencies
  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
            await next(animationTo);
            handleAnimationComplete();
          }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <animated.span
                key={index}
                style={springs[index]}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </animated.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
});

export default SplitText;
