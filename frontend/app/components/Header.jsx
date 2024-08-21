"use client";

import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter(); 

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-purple-700 cursor-pointer" onClick={() => router.push('/')}>
        MEALMATCH
      </h1>
      <div className="flex space-x-4">
        <Button color="primary" variant="ghost" size="lg">
          Saved Recipe
        </Button>
        <Button color="primary" variant="ghost" size="lg">
          About
        </Button>
      </div>
    </div>
  );
}
