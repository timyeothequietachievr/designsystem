type Tint =
  | "ember"
  | "ember2"
  | "sunrise"
  | "sunrise2"
  | "ink"
  | "ink2"
  | "paper"
  | "warm"
  | "cover";

const tintBackgrounds: Record<Tint, string> = {
  ember: "#D54A2F",
  ember2: "radial-gradient(circle at 35% 30%, #E27A60, #D54A2F 70%, #8A2A1C)",
  sunrise: "#E5A402",
  sunrise2: "radial-gradient(circle at 35% 30%, #F5C84B, #E5A402 70%)",
  ink: "#2B2B52",
  ink2: "radial-gradient(circle at 35% 30%, #5A5A82, #2B2B52 70%, #1A1A3A)",
  paper: "#E8E1BE",
  warm: "linear-gradient(135deg, #E5A402, #D54A2F)",
  cover:
    "linear-gradient(180deg, #E5A402 0%, #E5A402 28%, #D54A2F 28%, #D54A2F 72%, #F5F0D3 72%, #F5F0D3 100%)",
};

const roundedClasses = {
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

export function PlaceholderImage({
  aspect = "16/10",
  tint = "ember",
  rounded = "md",
  label = "",
}: {
  aspect?: string;
  tint?: Tint;
  rounded?: keyof typeof roundedClasses;
  label?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center text-xs text-paper opacity-95 ${roundedClasses[rounded]}`}
      style={{
        aspectRatio: aspect,
        background: tintBackgrounds[tint],
        boxShadow:
          "0 12px 24px -6px rgba(30,30,30,.18), 0 0 0 1px rgba(30,30,30,.06)",
      }}
    >
      <span className="eyebrow opacity-70">{label}</span>
    </div>
  );
}
