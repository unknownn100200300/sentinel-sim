import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ComingSoon = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
    <Construction className="h-16 w-16 text-primary mb-6" />
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Coming Soon</h1>
    <p className="text-sm md:text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
      We're working hard to bring this page to life. Stay tuned for updates!
    </p>
    <Link to="/">
      <Button variant="outline" className="h-11 px-6">
        Back to Home
      </Button>
    </Link>
  </div>
);

export default ComingSoon;
