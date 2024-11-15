import { Link } from "@tanstack/react-router";

interface RouterNotFoundComponentProps {}

export function RouterNotFoundComponent({}: RouterNotFoundComponentProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <div className="bg-bg-emphasized flex flex-col items-center justify-center rounded-lg p-[5%]">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <Link to="/" className="btn btn-link btn-sm">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
