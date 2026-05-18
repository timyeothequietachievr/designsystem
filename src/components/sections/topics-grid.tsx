import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { TOPICS } from "@/lib/site-data";

export function TopicsGrid() {
  return (
    <div className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-ember">Tiny habits</p>
          <h2
            className="display-headline font-bold text-charcoal"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
            }}
          >
            Topics we cover
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-warm-700">
            Tiny habits that you put into practice and start having impact at work
            the very next day. We cover topics like:
          </p>
        </div>
        <ul
          role="list"
          className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {TOPICS.map((topic) => (
            <li key={topic.name}>
              <PlaceholderImage
                aspect="3/2"
                tint={topic.tint}
                rounded="md"
                label={topic.name}
              />
              <h3 className="mt-5 text-lg font-bold text-charcoal">{topic.name}</h3>
              <p className="mt-1 text-sm leading-6 text-warm-700">{topic.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
