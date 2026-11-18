import { ArrowLeft } from '@phosphor-icons/react/dist/csr/ArrowLeft';
import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight';
import { useRef, useState } from 'react';
import type { KeyboardEvent, UIEvent } from 'react';
import { copy } from '../content';
import { Photo } from './Ui';

export function ExperienceGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = copy.experiences.items;

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(items.length - 1, index));
    const first = track.children[0] as HTMLElement;
    const slide = track.children[target] as HTMLElement;
    track.scrollTo({ left: slide.offsetLeft - first.offsetLeft });
  }

  function onScroll(event: UIEvent<HTMLDivElement>) {
    const track = event.currentTarget;
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    const distance = second.offsetLeft - first.offsetLeft;
    if (distance > 0) {
      setActiveIndex(Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / distance))));
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      goTo(event.key === 'Home' ? 0 : items.length - 1);
    }
  }

  return (
    <div className="experience-gallery" role="region" aria-label="MET experiences">
      <div
        id="experience-track"
        ref={trackRef}
        className="experience-track"
        tabIndex={0}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        aria-label="Experience photographs and descriptions"
      >
        {items.map((item, index) => (
          <article className="experience-card" key={item.image} data-active={index === activeIndex || undefined}>
            <figure className="aspect-[4/3] overflow-hidden"><Photo asset={item.image} /></figure>
            <div className="experience-caption pt-[17px]">
              <h3 className="text-[23px] leading-[1.25] tracking-[-.65px]">{item.title}</h3>
              <p className="mt-2.5 text-base">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-[21px] flex items-center justify-between gap-4 pb-[26px] lg:hidden">
        <span className="text-xs tracking-[1.5px] text-secondary" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Experience </span>{activeIndex + 1} / {items.length}
        </span>
        <div className="flex gap-2">
          <button className="gallery-button" type="button" disabled={activeIndex === 0} onClick={() => goTo(activeIndex - 1)} aria-label="Previous experience" aria-controls="experience-track"><ArrowLeft size={17} aria-hidden="true" /></button>
          <button className="gallery-button" type="button" disabled={activeIndex === items.length - 1} onClick={() => goTo(activeIndex + 1)} aria-label="Next experience" aria-controls="experience-track"><ArrowRight size={17} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
