import { X } from '@phosphor-icons/react/dist/csr/X';
import { useRef } from 'react';
import { Brand, Container } from './components/Ui';
import { Difference, Experiences, Hero, Journey } from './components/Sections';
import { Membership } from './components/Membership';

export default function App() {
  const checkoutNotice = useRef<HTMLDialogElement>(null);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="bg-oxblood">
        <Container className="flex items-center justify-between gap-4 py-[11.2px] lg:py-[12.8px]">
          <Brand />
          <div className="flex items-center gap-10 text-paper">
            <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Page navigation">
              <a className="nav-link" href="#experiences">Experiences</a>
              <a className="nav-link" href="#membership">Membership</a>
            </nav>
            <span className="text-xs leading-[1.3] tracking-[.5px]">Bengaluru</span>
          </div>
        </Container>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Experiences />
        <Difference />
        <Journey />
        <Membership onCheckoutPreview={() => checkoutNotice.current?.showModal()} />
      </main>
      <footer className="bg-oxblood">
        <Container className="flex items-center justify-between gap-4 py-5 lg:py-[22.4px]">
          <Brand footer />
          <p className="max-w-[150px] text-right text-[9px] leading-[1.6] font-medium tracking-[1.1px] text-paper uppercase">Mingle Eat Talk · Bengaluru</p>
        </Container>
      </footer>
      <dialog className="checkout-dialog" ref={checkoutNotice} aria-labelledby="checkout-notice-title" aria-describedby="checkout-notice-description">
        <div className="flex items-start justify-between gap-4">
          <h2 id="checkout-notice-title" className="text-[25px] leading-[1.2] tracking-[-.6px] text-oxblood">Payment setup pending</h2>
          <button type="button" className="dialog-close" aria-label="Close payment notice" onClick={() => checkoutNotice.current?.close()}><X size={19} aria-hidden="true" /></button>
        </div>
        <p id="checkout-notice-description" className="mt-4 text-base">This is a development preview. The membership checkout has not been connected, and no payment is taken here.</p>
        <button className="cta mt-6" type="button" onClick={() => checkoutNotice.current?.close()}><span>Return to membership</span></button>
      </dialog>
    </>
  );
}
