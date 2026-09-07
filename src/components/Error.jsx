import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-muted">
        404
      </p>
      <p className="text-lg font-bold tracking-tight">This page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="mt-2 rounded-lg hairline px-3.5 py-1.5 text-[11px] text-muted transition-colors hover:bg-subtle hover:text-fg"
      >
        Go back
      </Link>
    </div>
  );
};

export default Error;
