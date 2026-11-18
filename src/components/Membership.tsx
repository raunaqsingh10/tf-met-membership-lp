import { Plus } from '@phosphor-icons/react/dist/csr/Plus';
import { copy } from '../content';
import { CheckoutButton, Container, Eyebrow } from './Ui';

export function Membership({ onCheckoutPreview }: { onCheckoutPreview: () => void }) {
  const content = copy.membership;
  return (
    <section className="border-t border-rule bg-event-paper" id="membership" aria-labelledby="membership-title">
      <div className="bg-butter text-oxblood">
        <Container className="py-8 lg:grid lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-20 lg:py-14">
          <div>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2 id="membership-title">{content.title}</h2>
            <p className="mt-[18px] text-base text-oxblood lg:max-w-[580px] lg:text-[17px]">{content.intro}</p>
          </div>
          <div className="membership-fee">
            <p className="membership-price">{content.price}</p>
            <p className="max-w-32 text-sm leading-[1.4] text-oxblood max-[350px]:max-w-none lg:max-w-[260px] lg:text-base">{content.duration}</p>
          </div>
        </Container>
      </div>
      <Container className="pb-10 lg:pb-20">
        <div className="membership-layout">
          <div>
            <div className="offer-block first-offer-block">
              <h3>{content.benefitsTitle}</h3>
              <ul className="mt-[19px] list-disc space-y-[13px] pl-[18px] text-base text-secondary marker:text-oxblood">
                {content.benefits.map(benefit => <li className="pl-1" key={benefit}>{benefit}</li>)}
              </ul>
            </div>
            <div className="offer-block">
              <h3>{content.ticketTitle}</h3>
              <p>{content.ticketIntro}</p><p>{content.ticketSeparate}</p><p>{content.ticketDetail}</p>
              <p className="ticket-price">
                {content.ticketPriceLead}{' '}
                <strong className="my-1 block text-[26px] leading-[1.25] font-medium tracking-[-.6px] text-oxblood">{content.ticketPrice}</strong>{' '}
                {content.ticketPriceRest}
              </p>
            </div>
          </div>
          <div className="membership-join">
            <div className="offer-block join-block">
              <h3>{content.joinTitle}</h3>
              <ol className="mt-6 list-none space-y-[22px] p-0">
                {content.joinSteps.map((item, index) => (
                  <li className="grid grid-cols-[26px_minmax(0,1fr)] gap-[11px]" key={item.title}>
                    <span className="text-[13px] leading-[25px] font-medium text-oxblood" aria-hidden="true">{index + 1}</span>
                    <div><h4 className="text-[17px] leading-[1.45] font-medium tracking-[-.2px] text-ink">{item.title}</h4><p className="mt-1.5 text-base">{item.description}</p></div>
                  </li>
                ))}
              </ol>
              <p className="refund-note">{content.refund}</p>
            </div>
            <div className="offer-block">
              <h3>{content.renewalTitle}</h3><p>{content.renewal}</p><p className="font-medium text-ink">{content.noRenewal}</p>
            </div>
            <div className="mt-[25px]"><CheckoutButton onPreview={onCheckoutPreview} /></div>
            <p id="payment-note" className="mt-3.5 text-sm leading-[1.55]">{content.paymentNote}</p>
          </div>
        </div>
        <div className="faq-layout">
          <h2 className="mb-[22px] text-[28px] lg:mb-0 lg:max-w-[300px] lg:text-[38px]">{content.faqTitle}</h2>
          <div>
            <div className="faq-list">
              {content.faqs.map(item => (
                <details key={item.question}>
                  <summary className="flex items-center justify-between gap-4 py-[19px] text-base leading-[1.45] font-medium text-ink">
                    {item.question}<Plus size={16} className="shrink-0 text-oxblood" aria-hidden="true" />
                  </summary>
                  <p className="pb-[21px] text-[15px] lg:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-[25px]"><CheckoutButton onPreview={onCheckoutPreview} /></div>
            <p className="mt-[26px] text-center text-[13px] leading-[1.6]">{content.contact}{' '}<a className="break-words text-oxblood underline underline-offset-4" href={`mailto:${content.email}`}>{content.email}</a>.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
