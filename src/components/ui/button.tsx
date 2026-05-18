import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ink" | "outline" | "secondary";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ember text-paper hover:bg-ember-deep shadow-sm",
  ink: "bg-ink text-paper hover:bg-ink-deep shadow-sm",
  outline: "border border-ink text-ink hover:bg-paper-soft",
  secondary: "bg-paper text-ink border border-paper-200 hover:bg-paper-soft shadow-sm",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded font-semibold transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
