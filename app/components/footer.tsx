export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6 md:px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 font-serif">
              Angga<span className="text-primary"> Pasya</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Creating digital experiences in the vast landscape of technology.
              Always exploring new horizons and pushing boundaries.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} AnggaaIs. All rights reserved. Built
            with ❤️ and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
