"use client";
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const messageParam = searchParams.get('message');
    if (messageParam) {
      setMessage(messageParam);
    }else(redirect('/'))
  }, [searchParams]);

  return (<>
  <div>
     
      {message && <p className="text-green-500">{message}</p>}
    </div>
    <Link href='/'>Ir al inicio</Link>
  </>
    
  );
}
