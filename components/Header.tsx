import { navItems } from "@/app/consts/navItems";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <header className="container">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { Header };
