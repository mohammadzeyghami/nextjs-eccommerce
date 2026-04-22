'use client';

import ServerErrorPage from "@/src/modules/error/components/ServerErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ServerErrorPage reset={reset} />;
}
