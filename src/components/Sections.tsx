import { copy } from '../content';
import { Container, Eyebrow, ExploreButton, Photo } from './Ui';
import { ExperienceGallery } from './ExperienceGallery';

export function Hero() {
  const content = copy.hero;
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-layout">
        <h1 className="hero-headline" id="hero-title">
          <span className="hero-statement">{content.first}</span>{' '}
          <span className="hero-statement">{content.second}</span>{' '}
          <span className="hero-outcome">{content.outcomeLead}{' '}<span className="block">{content.outcome}</span></span>
        </h1>
        <figure className="hero-photo"><Photo asset="hero" priority /></figure>
        <div className="hero-copy">
          <p><strong className="font-medium text-ink">{content.descriptionLead}</strong>{' '}{content.description}</p>
          <div className="mt-6"><ExploreButton /></div>
        </div>
      </Container>
    </section>
  );
}

export function Experiences() {
  const content = copy.experiences;
  return (
    <section className="border-t border-rule bg-event-paper" id="experiences" aria-labelledby="experiences-title">
      <Container className="pt-[37px] sm:pt-14 lg:pt-20">
        <div className="section-opening">
          <div><Eyebrow>{content.eyebrow}</Eyebrow><h2 id="experiences-title">{content.title}</h2></div>
          <div className="mt-[18px] lg:mt-0 lg:pt-[34px]">
            <p>{content.intro}</p>
            <p className="mt-[21px] text-base leading-[1.55]"><strong className="font-medium text-oxblood">{content.frequencyLead}</strong>{' '}{content.frequencyRest}</p>
          </div>
        </div>
        <div className="mt-[27px] lg:mt-11 lg:pb-14"><ExperienceGallery /></div>
      </Container>
      <div className="bg-butter text-oxblood">
        <Container className="py-[29px] lg:flex lg:items-center lg:justify-between lg:gap-14 lg:py-10">
          <p className="max-w-[650px] text-[25px] leading-[1.28] font-medium tracking-[-.65px] text-oxblood lg:text-[30px]">{content.closing}</p>
          <p className="mt-4 text-sm leading-[1.5] text-oxblood lg:mt-0 lg:max-w-[280px]">{content.separateTickets}</p>
        </Container>
      </div>
    </section>
  );
}

export function Difference() {
  const content = copy.difference;
  return (
    <section className="bg-oxblood py-[37px] text-paper sm:py-14 lg:py-20" aria-labelledby="difference-title">
      <Container>
        <div className="section-opening">
          <div><Eyebrow light>{content.eyebrow}</Eyebrow><h2 id="difference-title">{content.title}</h2></div>
          <div className="mt-[18px] lg:mt-0 lg:pt-[34px]"><p className="text-brand-muted">{content.intro}</p><p className="mt-2 text-brand-muted">{content.closing}</p></div>
        </div>
        <figure className="community-photo"><Photo asset="community" /></figure>
        <ol className="mt-7 list-none p-0 lg:mt-11">
          {content.items.map((item, index) => (
            <li className="principle" key={item.title}>
              <span className="pt-0.5 text-xs leading-7 text-butter" aria-hidden="true">0{index + 1}</span>
              <h3 className="text-[23px] leading-[1.25] tracking-[-.65px]">{item.title}</h3>
              <p className="col-start-2 mt-[11px] text-base text-brand-muted lg:col-start-auto lg:mt-0 lg:text-[17px]">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Journey() {
  const content = copy.journey;
  return (
    <section className="py-[38px] sm:py-14 lg:py-20" aria-labelledby="journey-title">
      <Container>
        <div className="section-opening">
          <div><Eyebrow>{content.eyebrow}</Eyebrow><h2 id="journey-title">{content.title}</h2></div>
          <p className="mt-[18px] lg:mt-0 lg:pt-[34px]">{content.intro}</p>
        </div>
        <ol className="mt-[31px] grid list-none p-0 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {content.items.map((item, index) => (
            <li className="journey-step" key={item.title}>
              <span className="text-[28px] leading-none tracking-[-.7px] text-oxblood lg:mb-5 lg:block lg:text-[32px]" aria-hidden="true">{index + 1}</span>
              <div><h3 className="text-[22px] leading-[1.25] tracking-[-.65px]">{item.title}</h3><p className="mt-2.5 text-base">{item.description}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-7 border-t border-rule pt-5 text-sm leading-[1.5] lg:mt-10">{content.note}</p>
      </Container>
    </section>
  );
}
