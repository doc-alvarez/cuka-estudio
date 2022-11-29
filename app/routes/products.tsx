import { Link, Outlet } from "@remix-run/react";

export default function Products() {
  return (
    <main>
      <Outlet />
      <Link to='/'>Home</Link>
    </main>
  );
}
