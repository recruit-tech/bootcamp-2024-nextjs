"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Alert() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams?.get("alert") === "deleted" && pathname) {
      window.alert("削除しました");
      router.replace(pathname);
    }
  }, [searchParams, pathname, router]);

  return null;
}
