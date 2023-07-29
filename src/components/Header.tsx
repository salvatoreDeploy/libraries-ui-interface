import { Moon, Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 lg:left-80  right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-between">
      <button className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 h-8 ">
        <Search size={14} />
        <span>Find something....</span>
      </button>
      <div className="flex items-center">
        <nav className="hidden items-center text-sm gap-6 lg:flex">
          <a
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            href="http://"
          >
            API
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            href="http://"
          >
            Documentation
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            href="http://"
          >
            Support
          </a>
        </nav>
        <div className="flex items-center boder-l border-white/10 pl-6 pm-6 gap-6">
          <button>
            <Moon size={14} className="text-zinc-100 " />
          </button>
          <button className="border border-cyan-800 bg-cyan-400/10 text-cyan-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-cyan-400 transition-colors">
            SigIn
          </button>
        </div>
      </div>
    </header>
  );
}
