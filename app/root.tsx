import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ThemeProvider } from "~/components/theme-provider";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useClientSide } from "~/hooks/use-client-side";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const isClient = useClientSide();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body className="no-animation">
        <Analytics />
        <ScrollArea className="h-screen w-full">
          {isClient ? (
            <ThemeProvider defaultTheme="light" storageKey="anggaais-theme">
              {children}
            </ThemeProvider>
          ) : (
            children
          )}
        </ScrollArea>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                  document.body.classList.remove('no-animation');
                }, 100);
              });
            `,
          }}
        />
        {/* <SmoothCursor
          springConfig={{
            damping: 25,
            stiffness: 400,
            mass: 0.5,
            restDelta: 0.001,
          }}
        /> */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ScrollArea className="h-screen w-full">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* Simple 404 Text */}
            <div className="mb-12">
              <h1 className="text-9xl font-bold font-serif text-primary mb-6">
                404
              </h1>
              <h2 className="text-4xl font-bold mb-8 text-foreground font-serif">
                {message === "404" ? "Page Not Found" : message}
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
              {message === "404"
                ? "Looks like you've wandered off the beaten path. This oasis doesn't exist in our digital desert."
                : details}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 font-medium"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Return to Oasis
              </a>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:-translate-y-1 font-medium"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Go Back
              </button>
            </div>

            {stack && (
              <details className="mt-12 text-left">
                <summary className="cursor-pointer text-muted-foreground hover:text-foreground mb-4">
                  Show technical details
                </summary>
                <pre className="w-full p-4 overflow-x-auto bg-muted rounded-lg text-sm border border-border">
                  <code>{stack}</code>
                </pre>
              </details>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </ScrollArea>
  );
}
