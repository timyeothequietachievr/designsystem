// Small, reusable primitives used across the kit.

const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 sm:py-24 lg:py-28 ${className}`}>{children}</section>
);

const Button = ({ children, variant = 'primary', size = 'md', onClick, href }) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded transition-colors';
  const sizes = {
    md: 'px-5 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
  };
  const variants = {
    primary:   'bg-ember text-paper hover:bg-ember-deep shadow-sm',
    ink:       'bg-ink text-paper hover:bg-ink-deep shadow-sm',
    outline:   'border border-ink text-ink hover:bg-paper-soft',
    ghost:     'text-ember hover:text-ember-deep border-b-2 border-ember rounded-none px-1 pb-1',
    secondary: 'bg-paper text-ink border border-paper-200 hover:bg-paper-soft shadow-sm',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
};

// Placeholder image — painterly swatches in brand palette
const PlaceholderImg = ({ aspect = '16/10', tint = 'ember', rounded = 'md', label = '' }) => {
  const tints = {
    ember:   '#D54A2F',
    ember2:  'radial-gradient(circle at 35% 30%, #E27A60, #D54A2F 70%, #8A2A1C)',
    sunrise: '#E5A402',
    sunrise2:'radial-gradient(circle at 35% 30%, #F5C84B, #E5A402 70%)',
    ink:     '#2B2B52',
    ink2:    'radial-gradient(circle at 35% 30%, #5A5A82, #2B2B52 70%, #1A1A3A)',
    paper:   '#E8E1BE',
    warm:    'linear-gradient(135deg, #E5A402, #D54A2F)',
    cover:   'linear-gradient(180deg, #E5A402 0%, #E5A402 28%, #D54A2F 28%, #D54A2F 72%, #F5F0D3 72%, #F5F0D3 100%)',
  };
  const rs = { md:'rounded-md', lg:'rounded-lg', xl:'rounded-xl', '2xl':'rounded-2xl', full:'rounded-full' };
  return (
    <div
      className={`w-full ${rs[rounded]} shadow-lg flex items-center justify-center text-paper text-xs opacity-95`}
      style={{ aspectRatio: aspect, background: tints[tint], boxShadow:'0 12px 24px -6px rgba(30,30,30,.18), 0 0 0 1px rgba(30,30,30,.06)' }}
    >
      <span className="opacity-70 eyebrow">{label}</span>
    </div>
  );
};

Object.assign(window, { Container, Section, Button, PlaceholderImg });
