import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function FeatureSection() {
  return (
    <div id="school" className="relative overflow-hidden bg-paper pt-16 pb-20">
      <Container>
        <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 text-ember">Community</p>
            <h2
              className="display-headline font-bold text-charcoal"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Join the community
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-warm-700">
              Connect with introverts around the world just like you. Share
              articles, weekly live sessions, monthly guest speakers. The
              community is here for you when you need us.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <PlaceholderImage
              aspect="4/3"
              tint="ink2"
              rounded="md"
              label="Community"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
