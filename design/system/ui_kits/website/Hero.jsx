// Top nav + masthead + book hero + intro band
const Navigation = ({ items, onLogin }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative bg-paper">
      <div className="relative pt-5 pb-5 border-b border-paper-200">
        <Container>
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <a href="/" className="flex items-center gap-2">
                <span className="display text-2xl font-bold text-charcoal tracking-tight">tq<span className="text-ember">a</span></span>
                <span className="display italic text-charcoal text-sm hidden sm:inline">the quiet achievr</span>
              </a>
              <div className="md:hidden ml-auto">
                <button onClick={() => setOpen(true)} className="rounded p-2 text-charcoal hover:bg-paper-soft">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {items.map(i => (
                <a key={i.name} href={i.href} className="text-sm font-semibold uppercase tracking-wider2 text-charcoal hover:text-ember">{i.name}</a>
              ))}
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <a href="#" onClick={(e) => { e.preventDefault(); onLogin && onLogin(); }} className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded text-paper bg-ember hover:bg-ember-deep">Log in</a>
            </div>
          </nav>
        </Container>

        {open && (
          <div className="absolute top-0 inset-x-0 p-2 md:hidden z-50">
            <div className="rounded-lg shadow-md bg-paper ring-1 ring-charcoal/5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <span className="display text-xl font-bold text-charcoal">tq<span className="text-ember">a</span></span>
                <button onClick={() => setOpen(false)} className="rounded p-2 text-charcoal">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="px-2 pt-2 pb-3">
                {items.map(i => (
                  <a key={i.name} href={i.href} className="block px-3 py-2 rounded text-sm font-semibold uppercase tracking-wider2 text-charcoal hover:bg-paper-soft">{i.name}</a>
                ))}
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); onLogin && onLogin(); setOpen(false); }} className="block w-full px-5 py-3 text-center text-sm font-semibold text-paper bg-ember">Log in</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Masthead = ({ onBuy, onWatch }) => (
  <section className="py-20 lg:py-28 bg-paper overflow-hidden">
    <div className="text-center px-4">
      <div className="eyebrow text-ember mb-5">Tim Yeo · New book</div>
      <h1 className="display font-bold text-charcoal" style={{fontSize:'clamp(44px, 7vw, 96px)', lineHeight:.95, letterSpacing:'-.02em'}}>
        The Quiet Achiever
      </h1>
      <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80 font-display">
        <em>Tiny habits to have impact at work</em>
        <span className="block text-ember-deep font-semibold mt-1 not-italic">(without pretending to be an extrovert)</span>
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" onClick={onBuy}>Buy the book</Button>
        <Button size="lg" variant="outline" onClick={onWatch}>▶︎ Watch intro</Button>
      </div>
    </div>
  </section>
);

const BookHero = ({ onBuy }) => (
  <div className="relative bg-paper-soft pt-16 pb-24 overflow-hidden">
    <Container>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="max-w-xl mx-auto lg:max-w-none lg:mx-0">
          <div className="eyebrow text-ember mb-4">Being a quiet achiever</div>
          <h2 className="display text-charcoal font-bold" style={{fontSize:'clamp(32px, 4.5vw, 56px)', lineHeight:1.02, letterSpacing:'-.015em'}}>
            ...in a noisy world is hard.
          </h2>
          <div className="mt-6 text-base text-warm-700 space-y-4 leading-relaxed max-w-lg">
            <p>Do people say "you are too quiet" or "you should speak up more"?</p>
            <p>Is small talk and networking awkward for you?</p>
            <p>In meetings, do you keep quiet — even though you have something to say?</p>
            <p>Most quiet achievers struggle in silence, or pretend to be extroverts.</p>
            <p><strong className="text-charcoal">Life is too short to be living someone else's version of success.</strong></p>
            <p className="text-ember-deep font-semibold">Stop pretending. Start practicing. Remain your true, authentic self.</p>
          </div>
          <div className="mt-8">
            <Button onClick={onBuy}>Buy the book</Button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <PlaceholderImg aspect="4/5" tint="cover" rounded="md" label="Book cover" />
        </div>
      </div>
    </Container>
  </div>
);

const IntroBand = () => (
  <div className="relative bg-ink text-paper">
    <Container className="relative py-20 sm:py-28">
      <div className="eyebrow text-sunrise mb-4">Introducing</div>
      <h2 className="display font-bold" style={{fontSize:'clamp(40px, 6vw, 84px)', lineHeight:.98, letterSpacing:'-.02em'}}>the Quiet Achiever</h2>
      <p className="mt-6 text-lg text-paper/85 max-w-3xl leading-relaxed">
        Tim Yeo has spent his career in rooms full of strong opinions and loud voices. A <a href="#" className="text-sunrise underline decoration-sunrise/60 underline-offset-4">designer and leader in startups for 18 years</a>, he's coached nearly a hundred introverts and has spoken at <a href="#" className="text-sunrise underline decoration-sunrise/60 underline-offset-4">international conferences</a> on the topic of <a href="#" className="text-sunrise underline decoration-sunrise/60 underline-offset-4">design leadership for introverts</a>.
      </p>
    </Container>
  </div>
);

Object.assign(window, { Navigation, Masthead, BookHero, IntroBand });
