'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h1>global-error.tsx</h1>
        <button onClick={reset}>reset</button>
      </body>
    </html>
  );
}
