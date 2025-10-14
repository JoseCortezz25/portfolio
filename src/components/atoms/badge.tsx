interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "accent"
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variant === "accent"
          ? "bg-accent/10 text-accent border border-accent/20"
          : "bg-secondary text-secondary-foreground"
        }`}
    >
      {children}
    </span>
  )
}
