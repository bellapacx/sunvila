interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ label, href, onClick }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-900 transition"
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-900 transition"
    >
      {label}
    </button>
  );
}
