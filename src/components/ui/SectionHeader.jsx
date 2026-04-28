/**
 * SectionHeader — Label + Title + Subtitle pattern.
 * @param {object} props
 * @param {string} props.label — small uppercase label (e.g. "Services")
 * @param {string} props.title — section title
 * @param {string} [props.subtitle] — optional subtitle
 * @param {boolean} [props.center=false] — center-aligned variant
 */
export function SectionHeader({ label, title, subtitle, center = false }) {
  const wrapperClass = center ? "section-header-center" : "section-header";

  return (
    <div className={wrapperClass}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
