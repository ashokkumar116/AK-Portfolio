/**
 * Tag — tech tags, badges, status indicators.
 * @param {object} props
 * @param {'default'|'ink'|'surface'|'success'|'warning'|'error'} [props.variant='default']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Tag({ variant = "default", className = "", children }) {
  const variantClass = {
    default: "tag",
    ink: "tag tag-ink",
    surface: "tag tag-surface",
    success: "tag tag-success",
    warning: "tag tag-warning",
    error: "tag tag-error",
  }[variant];

  return (
    <span className={`${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}
