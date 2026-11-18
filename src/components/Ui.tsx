import { ArrowDown } from '@phosphor-icons/react/dist/csr/ArrowDown';
import { ArrowUpRight } from '@phosphor-icons/react/dist/csr/ArrowUpRight';
import type { ReactNode } from 'react';
import { checkoutUrl, media } from '../config';
import { copy } from '../content';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'text-butter' : 'text-oxblood'}`}>{children}</p>;
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <img
      src="/brand/met-wordmark.svg"
      alt="MET, Mingle Eat Talk"
      width={126}
      height={65}
      className={`brand-logo${footer ? ' brand-logo-footer' : ''}`}
      decoding="async"
    />
  );
}

export function Photo({ asset, className = '', priority = false }: {
  asset: keyof typeof media;
  className?: string;
  priority?: boolean;
}) {
  const image = media[asset];
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={`block h-full w-full object-cover ${className}`}
      style={{ objectPosition: image.position }}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}

export function ExploreButton() {
  return <a className="cta hero-cta" href="#membership"><span>{copy.hero.cta}</span><ArrowDown size={19} aria-hidden="true" /></a>;
}

export function CheckoutButton({ onPreview }: { onPreview: () => void }) {
  const contents = <><span>{copy.membership.cta}</span><ArrowUpRight size={19} aria-hidden="true" /></>;
  return checkoutUrl ? (
    <a className="cta" href={checkoutUrl} aria-describedby="payment-note">{contents}</a>
  ) : (
    <button className="cta" type="button" onClick={onPreview} aria-haspopup="dialog" aria-describedby="payment-note">{contents}</button>
  );
}
