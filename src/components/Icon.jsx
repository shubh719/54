export default function Icon({ name, className = "", ...rest }) {
  return (
    <span aria-hidden="true" className={`ms ${className}`} {...rest}>
      {name}
    </span>
  );
}
