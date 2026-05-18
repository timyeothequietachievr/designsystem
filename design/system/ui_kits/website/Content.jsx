const TOPICS = [
  {name:'Introducing yourself', desc:'What makes a good introduction, different types of intros you need, and how to structure them for meetings, workshops and interviews.', tint:'sunrise'},
  {name:'Small talk', desc:'A framework for developing small talk topics that feel natural — no awkward silences.', tint:'ember'},
  {name:'Meetings', desc:'How to speak up before you are ready, be more visible in your org, and make space for focus-work.', tint:'ink'},
  {name:'Public speaking', desc:'Types of scripts and how to prepare so you communicate with purpose and clarity.', tint:'sunrise2'},
  {name:'Difficult conversations', desc:'Why these are especially hard for quiet achievers, how to give feedback, and what to do when you receive it.', tint:'ember2'},
  {name:'How to say no (politely)', desc:'Saying yes when you think no is not sustainable. Practical tips on how to push back.', tint:'ink2'},
];

const TopicsGrid = () => (
  <div className="bg-paper py-20 sm:py-28">
    <Container>
      <div className="max-w-2xl">
        <div className="eyebrow text-ember mb-4">Tiny habits</div>
        <h2 className="display text-charcoal font-bold" style={{fontSize:'clamp(32px, 4vw, 52px)', lineHeight:1.02, letterSpacing:'-.015em'}}>Topics we cover</h2>
        <p className="mt-6 text-lg leading-8 text-warm-700 max-w-xl">Tiny habits that you put into practice and start having impact at work the very next day. We cover topics like:</p>
      </div>
      <ul role="list" className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {TOPICS.map(t => (
          <li key={t.name}>
            <PlaceholderImg aspect="3/2" tint={t.tint} rounded="md" label={t.name} />
            <h3 className="mt-5 text-lg font-bold text-charcoal">{t.name}</h3>
            <p className="mt-1 text-sm leading-6 text-warm-700">{t.desc}</p>
          </li>
        ))}
      </ul>
    </Container>
  </div>
);

const TestimonialLargeAvatar = () => (
  <section className="bg-paper-soft overflow-hidden">
    <div className="relative max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="hidden lg:block lg:flex-shrink-0">
          <div className="h-64 w-64 rounded-full xl:h-80 xl:w-80" style={{background:'radial-gradient(circle at 35% 30%, #E5A402 0%, #D54A2F 70%)'}} />
        </div>
        <div className="relative flex-1">
          <div className="eyebrow text-ember mb-2">Testimonials</div>
          <h2 className="display text-charcoal font-bold mb-8" style={{fontSize:'clamp(28px, 3.5vw, 44px)', lineHeight:1.05, letterSpacing:'-.015em'}}>What people are saying</h2>
          <span aria-hidden="true" className="absolute display font-bold select-none pointer-events-none" style={{fontSize:220, lineHeight:.7, color:'#D54A2F', opacity:.12, top:-40, left:-30}}>“</span>
          <blockquote className="relative">
            <p className="display italic text-charcoal" style={{fontSize:'clamp(22px, 2.2vw, 30px)', lineHeight:1.35, fontWeight:500}}>
              Tim gave me incredible advice and methods I could use in real-life scenarios. He showed me how to build confidence to speak up in uncomfortable situations. I highly recommend.
            </p>
            <footer className="mt-8">
              <div className="eyebrow text-charcoal">Ezra Ju</div>
              <div className="mt-1 text-sm font-semibold text-ember-deep">Product Designer, Domain</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

const Feature = () => (
  <div className="relative bg-paper pt-16 pb-20 overflow-hidden">
    <Container>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <div className="eyebrow text-ember mb-4">Community</div>
          <h2 className="display text-charcoal font-bold" style={{fontSize:'clamp(28px, 3.5vw, 44px)', lineHeight:1.05, letterSpacing:'-.015em'}}>Join the community</h2>
          <p className="mt-5 text-lg text-warm-700 leading-relaxed max-w-lg">Connect with introverts around the world just like you. Share articles, weekly live sessions, monthly guest speakers. The community is here for you when you need us.</p>
        </div>
        <div className="mt-12 lg:mt-0">
          <PlaceholderImg aspect="4/3" tint="ink2" rounded="md" label="Community" />
        </div>
      </div>
    </Container>
  </div>
);

const PricingCard = ({ subheading, price, suffix, features, cta, badge, onClick }) => (
  <div className="relative p-8 bg-paper border border-paper-200 rounded-lg shadow-sm flex flex-col gap-6">
    {badge && <small className="absolute top-0 py-1.5 px-4 bg-sunrise rounded-full text-xs font-bold uppercase tracking-wider2 text-ink-deep transform -translate-y-1/2">{badge}</small>}
    <header className="flex flex-col gap-3">
      <h3 className="eyebrow text-charcoal">{subheading}</h3>
      <h4 className="flex gap-2 items-baseline">
        <span className="display font-bold tracking-tight text-charcoal" style={{fontSize:56, lineHeight:1, letterSpacing:'-.02em'}}>{price}</span>
        {suffix && <span className="text-sm font-semibold text-warm-500">{suffix}</span>}
      </h4>
    </header>
    <section className="flex-1">
      <ul role="list" className="space-y-4">
        {features.map(f => (
          <li key={f} className="flex gap-2 text-sm text-warm-700 leading-6">
            <svg className="flex-shrink-0 w-5 h-5 text-ember mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </section>
    <footer>
      <button onClick={onClick} className="w-full bg-ember text-paper hover:bg-ember-deep py-3 px-5 rounded text-sm font-semibold tracking-wide">{cta}</button>
    </footer>
  </div>
);

const PricingGroup = ({ title, items, onBuy }) => (
  <div className="py-24 px-4 bg-paper-soft sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="eyebrow text-ember mb-4">Pricing</div>
      <h2 className="display text-charcoal font-bold" style={{fontSize:'clamp(32px, 4.5vw, 56px)', lineHeight:1, letterSpacing:'-.02em'}}>{title}</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {items.map((i, idx) => <PricingCard key={idx} {...i} onClick={() => onBuy(i.subheading)} />)}
      </div>
    </div>
  </div>
);

Object.assign(window, { TopicsGrid, TestimonialLargeAvatar, Feature, PricingCard, PricingGroup });
