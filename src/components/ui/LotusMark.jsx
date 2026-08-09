export default function LotusMark({ className = "h-10 w-10" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path fill="currentColor" d="M60 8c-3.5 14-4.5 28-3 44 8-10 18-18 29-23-10 2-19 8-26 17 2-14 4-26 0-38Z" />
      <path fill="currentColor" d="M34 22c2 13 6 25 12 36 4-12 11-22 20-29-12 1-22 6-32-7Z" />
      <path fill="currentColor" d="M86 22c-10 13-20 18-32 7 9 7 16 17 20 29 6-11 10-23 12-36Z" />
      <path fill="currentColor" d="M18 48c6 10 14 18 24 24-2-11 0-22 5-32-12 0-22 2-29 8Z" />
      <path fill="currentColor" d="M102 48c-7-6-17-8-29-8 5 10 7 21 5 32 10-6 18-14 24-24Z" />
      <path fill="currentColor" opacity="0.85" d="M60 52c-8 8-14 18-16 30h32c-2-12-8-22-16-30Z" />
    </svg>
  );
}
