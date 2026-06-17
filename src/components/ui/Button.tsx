"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "cta" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const sizeClasses = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-11 px-4 text-[15px]",
  lg: "h-14 px-6 text-[15px]",
};

const variantClasses = {
  primary: "bg-brand text-text-on-brand",
  cta: "gradient-brand text-text-on-brand shadow-lg",
  secondary: "bg-[var(--elevated)] text-text-primary border border-[var(--border)] hover:border-[var(--border-strong)]",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary",
  outline: "bg-transparent text-brand border border-brand",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
