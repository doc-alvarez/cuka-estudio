import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Header } from "./shared/Header";
import headerStyles from "../app/styles/header.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Cuka Estudio Store",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: headerStyles }];
};

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300&family=Fredoka+One&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
