const configuredCheckout = import.meta.env.VITE_MEMBERSHIP_CHECKOUT_URL?.trim();

function getCheckoutUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

export const checkoutUrl = getCheckoutUrl(configuredCheckout);

export const media = {
  hero: {
    src: '/images/met-community.webp',
    alt: 'A group laughing and chatting together at a social gathering',
    width: 1122,
    height: 1402,
    position: 'center 35%',
  },
  dinner: {
    src: '/images/met-dinner.webp',
    alt: 'Guests sharing food and conversation around a dinner table',
    width: 1440,
    height: 1440,
    position: 'center 35%',
  },
  conversation: {
    src: '/images/met-mixers.webp',
    alt: 'Three guests smiling together at a MET mixer',
    width: 1122,
    height: 1402,
    position: 'center top',
  },
  games: {
    src: '/images/met-games.webp',
    alt: 'Guests enjoying a sticky-note activity at a game event',
    width: 1254,
    height: 1254,
    position: 'center 30%',
  },
  community: {
    src: '/images/met-hero.webp',
    alt: 'A large group gathered under an outdoor canopy at a MET event',
    width: 1672,
    height: 941,
    position: 'center bottom',
  },
} as const;
