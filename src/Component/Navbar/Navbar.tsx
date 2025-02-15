const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-20 border-b border-textSecondary">
      <img src="/logo.png" alt="" />
      <nav>
        <ul className="flex gap-12">
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Rute
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              #TravelBetter
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Tentang Kami
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-10 items-center">
        <img src="/search.png" alt="" />
        <a
          href=""
          className="font-nunito font-bold text-xl text-secondary leading-6"
        >
          Sign Up
        </a>
        <button className="bg-primary flex rounded-lg py-4 px-8 gap-2 text-white text-xl font-nunito font-bold leading-6">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
