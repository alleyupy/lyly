import oceanlg from "./assets/oceanlg.jpg";
import { CircleUserRound, LogIn } from "lucide-react";
function App() {
  return (
    <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${oceanlg})` }}
>


      {/* =========================
          NAVBAR
      ========================== */}
      <header className="absolute left-1/2 top-14 z-10 w-[calc(100%-105px)] max-w-[1400px] -translate-x-1/2">
        <nav className="flex h-[105px] items-center justify-between rounded-[20px] border border-[#16708b] bg-white px-8 shadow-sm md:px-12">

          {/* LOGO */}
          <div className="flex items-center">
            <div className="leading-none">
              <p className="relative top-1 mt-3 ml-22 font-[ballet] text-[27px] italic tracking-tight text-[#f3b123]">
                Bahari
              </p>

              <p className="-translate-y-4 -mt-1 ml-12 font-[ballet] text-[24px] italic tracking-tight text-[#16708b]">
                <span className="text-[40px]">N</span>usantara
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden items-center gap-10 md:flex">

            <a
              href="#home"
              className="-translate-x-1 text-[20px] font-medium text-[#075c78] transition hover:text-[#0b89ad]"
            >
              Home Page
            </a>

            <a
              href="#catalog"
              className="translate-x-12 text-[20px] font-medium text-[#075c78] transition hover:text-[#0b89ad]"
            >
              Catalog
            </a>

            <a
              href="#cuaca"
              className="translate-x-18 text-[20px] font-medium text-[#075c78] transition hover:text-[#0b89ad]"
            >
              Cuaca Laut
            </a>

            <a
              href="#about"
              className="translate-x-25 text-[20px] font-medium text-[#075c78] transition hover:text-[#0b89ad]"
            >
              About Us
            </a>

          </div>

          {/* LOGIN & SIGN IN */}
          <div className="flex items-center gap-4">

            {/* LOGIN */}
            <button
              className="flex items-center gap-2 rounded-full border border-[#075c78] bg-white px-5 py-2 text-sm font-medium text-[#075c78] transition hover:bg-[#075c78] hover:text-white"
            >
              <span className="text-base">
                <CircleUserRound size={20} strokeWidth={2} />
              </span>

              Log In
            </button>

            
            {/* SIGN IN */}
            <button
              className="flex items-center gap-2 rounded-full border border-[#075c78] bg-[#075c78] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#ffffff] hover:text-[#075c78]"
            >
              <span className="text-base text-white">
                  ↪
              </span>

              Sign In
            </button>

          </div>

        </nav>
      </header>


      {/* =========================
          HERO SECTION
      ========================== */}
      <main
        id="home"
        className="flex min-h-screen w-full items-center justify-center px-6"
      >

        <section className="flex w-full max-w-[1000px] flex-col items-center text-center">

          {/* TITLE */}
          <h1 className="text-4xl font-semibold tracking-tight text-[#ffffff] drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)] md:text-5xl">
            FROM OCEAN, WE MAKE STORIES
          </h1>

          {/* SUBTITLE */}
          <p className="mt-3 text-lg font-medium text-[#ffffff] drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)] md:text-xl">
            Connecting the ocean, people, and endless opportunities
          </p>

          {/* JOIN US BUTTON */}
          <button
            className="mt-7 rounded-lg bg-white px-7 py-2.5 text-sm font-bold text-[#126b85] shadow-md transition hover:scale-105 hover:bg-[#126b85] hover:text-white"
          >
            JOIN US !
          </button>

        </section>

      </main>


      {/* =========================
          TEMPORARY MOBILE MENU
      ========================== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 md:hidden">
        Menu
      </div>

    </div>
  );
}

export default App;