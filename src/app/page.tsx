'use client';

import { useState } from 'react';

export default function Home() {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('테스트 1 에러 발생');
  }

  const handleError2 = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users-error');
  };

  return (
    <div>
      <button onClick={() => setError(true)}>에러 발생 1</button>
      <button onClick={() => handleError2()}>에러 발생 2</button>
    </div>
  );
}
