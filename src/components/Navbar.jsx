import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Exams", path: "/exams" },
    { name: "Flashcards", path: "/flashcards" },
    { name: "Explanations", path: "/explanations" },
  ];

  return (
    <nav className="bg-[hsl(var(--edu-nav))] text-white p-4 flex justify-between">
      <h1 className="font-bold">EduAI</h1>

      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              location.pathname === link.path
                ? "text-blue-300"
                : "hover:text-blue-300"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;