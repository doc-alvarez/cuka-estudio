import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header>
      <div className='title'>
        <h1>Cuka Estudio</h1>
      </div>
      <div className='menu'>
        <div>
          <Link to='products'>Shop All</Link>
        </div>
        <div>
          <Link to='.'>About us</Link>
        </div>
        <div>
          <Link to='.'>Sign in</Link>
        </div>
        <div>
          <Link to='.'>Cart</Link>
        </div>
      </div>
    </header>
  );
}
