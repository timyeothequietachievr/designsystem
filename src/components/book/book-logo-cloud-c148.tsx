/** c148 — sections/logo-clouds/01-simple-with-heading */
import { BOOK_COMPANY_LOGOS } from "@/lib/book-company-logos";

export function BookLogoCloudC148() {
  return (
    <section
      data-component-code="c148"
      style={{ borderBottom: "1px solid rgba(30,30,30,0.08)" }}
    >
      <div className="bg-paper py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/7 font-semibold text-charcoal">
            Trusted by quiet achievers from top companies around the world
          </h2>
          <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {BOOK_COMPANY_LOGOS.map((logo) => (
              <img
                key={logo.name}
                alt={logo.name}
                src={logo.src}
                width={158}
                height={48}
                className={`col-span-2 w-full object-contain object-center lg:col-span-1 ${logo.wordmark ? "max-h-9" : "max-h-10"}`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center px-2">
            <a
              href="#praise"
              className="inline-flex items-center justify-center rounded-full bg-paper-soft px-5 py-2 text-center font-sans text-sm font-medium text-charcoal ring-1 ring-charcoal/10 transition hover:text-ember hover:ring-ember/35"
            >
              Read their reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
