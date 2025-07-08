import { Link } from "react-router-dom";

export default function Button({ to, onClick, className = "", children }) {
  const baseClasses = "rounded-[8px] border-2 border-[#9333EA] bg-[#9333EA] text-white transition-colors hover:bg-[#7e2ad1]";

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
