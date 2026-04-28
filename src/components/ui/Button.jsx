/**
 * Button — all button variants for the portfolio.
 * @param {object} props
 * @param {'primary'|'secondary'|'ghost'|'surface'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'|'xl'} [props.size='md']
 * @param {string} [props.href] — if set, renders as <a>
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    surface: "btn-surface",
  }[variant];

  const sizeClass = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
    xl: "btn-xl",
  }[size];

  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
