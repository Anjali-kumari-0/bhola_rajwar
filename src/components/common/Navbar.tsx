import content from "../../constants/content.json";

const Navbar = () => {
  return (
    <header className="border-b primary-border px-5">
      <div className="container-layout flex items-center justify-between py-5">
        <h1 className="text-2xl font-bold primary-color">
          {content.navbar.logo}
        </h1>

        <nav className="flex gap-8">
          {content.navbar.links.map((link) => (
            <a
              key={link}
              href="#"
              className="primary-text hover:primary-color transition-all"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="primary-button px-6 py-3 rounded-xl">
          Consultation
        </button>
      </div>
    </header>
  );
};

export default Navbar;