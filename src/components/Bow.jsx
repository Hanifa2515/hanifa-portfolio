export default function Bow({ className = "" }) {
  return (
    <svg className={`bow ${className}`} viewBox="0 0 64 48" aria-hidden="true">
      <path d="M28 27 15 46l9-3 6 4 4-18zM36 27l13 19-9-3-6 4-4-18z" fill="#e8488a" />
      <path d="M30 20C20 6 6 4 4 10c-3 8-2 20 2 25 6 3 18-5 24-9z" fill="#ff7eb3" />
      <path d="M34 20C44 6 58 4 60 10c3 8 2 20-2 25-6 3-18-5-24-9z" fill="#ff7eb3" />
      <path d="M28 22c-7-5-14-7-18-6M28 25c-6 1-12 3-16 6M36 22c7-5 14-7 18-6M36 25c6 1 12 3 16 6" fill="none" stroke="#e8488a" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="26" y="16" width="12" height="13" rx="4" fill="#d6246e" />
    </svg>
  );
}
