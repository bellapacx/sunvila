interface ButtonProps {
  label?: string; // optional because you might use children instead
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  targetBlank?: boolean;
  variant?: 'solid' | 'outline';
  children?: React.ReactNode;
}

export default function Button({
  label,
  href,
  onClick,
  className = '',
  ariaLabel,
  targetBlank = false,
  variant = 'solid',
  children,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center font-semibold rounded-full shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses =
    variant === 'outline'
      ? 'border-2 border-green-600 text-green-700 bg-transparent hover:bg-green-100 focus:ring-green-600'
      : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-700';

  // Responsive padding & font size
  const responsiveSizing = 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg';

  const combinedClasses = `${baseClasses} ${responsiveSizing} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={targetBlank ? '_blank' : undefined}
        rel={targetBlank ? 'noopener noreferrer' : undefined}
      >
        {children ?? label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children ?? label}
    </button>
  );
}
