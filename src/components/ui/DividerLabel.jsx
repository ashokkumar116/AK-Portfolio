/**
 * DividerLabel — Horizontal divider with centered text.
 * @param {object} props
 * @param {string} props.text — text shown in the center of the divider
 */
export function DividerLabel({ text }) {
  return (
    <div className="divider-labeled">
      {text}
    </div>
  );
}
