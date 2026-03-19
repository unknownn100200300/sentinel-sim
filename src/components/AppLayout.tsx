import type { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Mail, Menu, Phone } from "lucide-react";

import ariLogo from "@/assets/ari-logo-light.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "/", label: "Home" },
  { key: "/products", label: "Products" },
  { key: "/industries", label: "Industries" },
  { key: "/contact", label: "Contact" },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-border/70 bg-background/80 backdrop-blur md:h-24">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img src={ariLogo} alt="ARI Simulation" className="h-12 w-auto md:h-14" />
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.key}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-xs suppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "bg-accent/20 text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <MobileNav currentPath={location.pathname} />
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20 md:pt-24">{children}</main>

      <footer className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <img src={ariLogo} alt="ARI Simulation" className="h-14 w-auto" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Applied Research International Pvt. Ltd.
                <br />
                High-fidelity simulation for mission-critical training.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide">NAVIGATION</p>
              <div className="mt-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link key={item.key} to={item.key} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide">CONTACT</p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+91 11 41326882</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>info@arisimulation.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} ARI Simulation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;

function MobileNav({ currentPath }: { currentPath: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                currentPath === item.key
                  ? "bg-accent/20 text-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
