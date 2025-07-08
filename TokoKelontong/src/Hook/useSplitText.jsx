import { useLayoutEffect, useRef } from 'react';

export function useSplitText(by = 'chars') {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.innerText;
    const words = text.trim().split(' ').map(word => {
      if (by === 'chars') {
        const chars = word.split('').map(char => `<span class="char">${char}</span>`).join('');
        return `<span class="word">${chars}</span>`;
      } else {
        return `<span class="word">${word}</span>`;
      }
    });

    el.innerHTML = words.join(' ');
  }, [by]);

  return ref;
}