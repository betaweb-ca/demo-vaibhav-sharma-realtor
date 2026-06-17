export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
