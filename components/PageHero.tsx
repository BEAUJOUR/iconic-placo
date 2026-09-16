type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="border-b border-goldline bg-warm">
      <div className="mx-auto max-w-7xl px-5 py-10 md:py-14 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.7rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.025em] text-walnut">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-taupe">{text}</p>
      </div>
    </section>
  );
}
