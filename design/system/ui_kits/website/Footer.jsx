const Footer = () => {
  const cols = {
    Book: ['eBook', 'Hardcover', 'Paperback', 'Backstory', 'Download free chapter'],
    Courses: ['Convince Your Boss', 'Too Valuable to Lose', 'Being more visible', 'Facilitation', 'Public speaking'],
    Content: ['Testimonials', 'Podcast', 'Newsletter'],
    Pricing: ['Books', 'Courses', 'Coaching'],
  };
  const social = [
    {name:'LinkedIn', path:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'},
    {name:'YouTube', path:'M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C23 8.12002 23 11.7004 23 11.7004s0 3.58-.46 5.295c-.253.947-.997 1.691-1.945 1.945C18.88 19.4007 12 19.4007 12 19.4007s-6.88 0-8.595-.46C2.458 18.687 1.714 17.943 1.46 16.996 1 15.281 1 11.7004 1 11.7004s0-3.58.46-5.295C1.714 5.458 2.458 4.714 3.405 4.46 5.12 4 12 4 12 4s6.88 0 8.595.46zM15.513 11.7l-5.715 3.3V8.4l5.715 3.3z'},
    {name:'Instagram', path:'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'},
    {name:'Twitter', path:'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'},
  ];
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <span className="display text-4xl font-bold text-paper tracking-tight">tq<span className="text-sunrise">a</span></span>
            <p className="mt-4 text-sm text-paper/70 leading-6 max-w-xs italic font-display">Tiny habits for quiet achievers to have impact at work.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-4">
            {Object.entries(cols).map(([title, links]) => (
              <div key={title}>
                <h3 className="eyebrow text-sunrise">{title}</h3>
                <ul role="list" className="mt-5 space-y-3">
                  {links.map(l => <li key={l}><a href="#" className="text-sm leading-6 text-paper/70 hover:text-paper">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 border-t border-paper/15 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {social.map(s => (
              <a key={s.name} href="#" className="text-paper/60 hover:text-paper">
                <span className="sr-only">{s.name}</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d={s.path} clipRule="evenodd" /></svg>
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-paper/50 md:mt-0 md:order-1">© 2026 The Quiet Achiever Pte. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
