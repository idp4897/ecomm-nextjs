"use client";

import { Empty, Skeleton } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/landing");
  });

  return <Skeleton />;
}
