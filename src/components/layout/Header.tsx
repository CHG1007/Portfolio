import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems: NavItem[] = [
    { label: "About", href: "/#about", id: "about" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Projects", href: "/#projects", id: "projects" }
  ];

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
      
      // Fallback to top (hero)
      if (window.scrollY < 400) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo Code */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white transition-transform group-hover:scale-105">
            <Code2 className="h-5 w-5 text-indigo-400" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display text-sm font-bold tracking-tight text-slate-800">
              최홍권 <span className="text-xs font-normal text-slate-400">/ portfolio</span>
            </span>
            <span className="font-mono text-[9px] font-semibold text-indigo-600 uppercase tracking-widest leading-none mt-0.5">
              Backend Developer
            </span>
          </div>
        </Link>

        {/* Navigation Area */}
        {isHome ? (
          <nav className="hidden md:flex items-center gap-x-1">
            {navItems.map((item) => {
              const isTargetActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative px-4 py-2 font-sans text-xs font-semibold tracking-wider uppercase transition-colors rounded-lg ${
                    isTargetActive
                      ? "text-indigo-600 font-bold"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isTargetActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 z-0 bg-indigo-50 border border-indigo-100 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-x-2">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-slate-500" />
              <span>포트폴리오 홈으로 가기</span>
            </Link>
          </nav>
        )}

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          aria-expanded={isOpen}
          aria-label="메뉴 토글"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-50 border-t border-slate-200"
          >
            <div className="space-y-1 px-4 py-3">
              {isHome ? (
                navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>이력서 홈으로 가기</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
