import Link from 'next/link';

export function LogoIcon({ className = "logo-svg" }) {
  return (
    <svg
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue stylized mountain/A chevron */}
      <path
        d="M 8 45 L 31 12 C 33 9 36 9 38 12 L 56 37 C 58 40 56 43 51 43 L 38 43 C 36 43 35 41 34 39 L 30 32 L 20 46 C 18 49 14 49 10 49 L 8 45 Z"
        fill="#3A7D9F"
      />
      {/* Upper black sloped bar */}
      <path
        d="M 35 8 L 62 38 C 64 40 62 44 58 47 L 52 51 C 49 53 45 52 43 49 L 17 19 C 15 16 16 12 20 10 L 27 5 C 30 3 33 5 35 8 Z"
        fill="currentColor"
      />
      {/* Lower right black accent shape */}
      <path
        d="M 52 52 L 68 64 C 70 66 69 69 66 72 L 61 76 C 58 78 55 77 53 74 L 38 62 C 36 60 37 57 40 55 L 45 51 C 47 49 50 50 52 52 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo({ onClick }) {
  return (
    <Link href="/" className="logo" onClick={onClick}>
      <LogoIcon />
      <div className="logo-text">
        <span className="logo-title">ATM</span>
        <span className="logo-subtitle">
          QUARRIES<br />
          <b>LIMITED</b>
        </span>
      </div>
    </Link>
  );
}
