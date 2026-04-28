/**
 * Card — base card wrapper.
 * @param {object} props
 * @param {'base'|'elevated'|'flat'|'glow'|'outlined'} [props.variant='base']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Card({ variant = "base", className = "", children, ...rest }) {
  const variantClass = {
    base: "card",
    elevated: "card-elevated",
    flat: "card-flat",
    glow: "card-glow",
    outlined: "card-outlined",
  }[variant];

  return (
    <div className={`${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
