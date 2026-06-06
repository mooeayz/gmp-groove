import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/gmp-logo.png.asset.json";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414] border-b border-[#141414]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <img src={logo.url} alt="GMP Farms logo" className="h-10 w-10 object-contain" />
            <span>GMP Farms</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-yellow transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-yellow transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-white hover:text-yellow transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("availability")}
              className="text-white hover:text-yellow transition-colors"
            >
              Availability
            </button>
            <Link to="/cart">
              <Button variant="outline" size="sm" className="gap-2 relative bg-transparent border-yellow text-yellow hover:bg-yellow hover:text-yellow-foreground">
                <ShoppingCart className="w-4 h-4 text-yellow" />
                Cart
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-yellow transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-yellow transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-yellow transition-colors text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("availability")}
                className="text-white hover:text-yellow transition-colors text-left"
              >
                Availability
              </button>
              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="gap-2 w-full relative bg-transparent border-yellow text-yellow hover:bg-yellow hover:text-yellow-foreground">
                  <ShoppingCart className="w-4 h-4 text-yellow" />
                  Cart
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
