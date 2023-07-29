import NavLink from "./NavLink";
("./NavLink");
import { Logo } from "./icons/Logo";

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block">
      <Logo className="text-white h-4 w-auto" />
      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100">Node</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/content/a">Introductions</NavLink>
            <NavLink href="/content/b">QuickStart</NavLink>
            <NavLink href="/content/c">SDKs</NavLink>
            <NavLink href="/content/d">Authentications</NavLink>
            <NavLink href="/content/f">Paginations</NavLink>
            <NavLink href="/content/g">Errors</NavLink>
            <NavLink href="/content/h">WebHooks</NavLink>
          </div>
        </div>
        <div>
          <strong className="text-zinc-100">React and Next</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/content/i">Introductions</NavLink>
            <NavLink href="/content/j">QuickStart</NavLink>
            <NavLink href="/content/k">SDKs</NavLink>
            <NavLink href="/content/l">Authentications</NavLink>
            <NavLink href="/content/m">Paginations</NavLink>
            <NavLink href="/content/n">Errors</NavLink>
            <NavLink href="/content/o">WebHooks</NavLink>
          </div>
        </div>
        <div>
          <strong className="text-zinc-100">React Native</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/content/p">Introductions</NavLink>
            <NavLink href="/content/q">QuickStart</NavLink>
            <NavLink href="/content/r">SDKs</NavLink>
            <NavLink href="/content/s">Authentications</NavLink>
            <NavLink href="/content/u">Paginations</NavLink>
            <NavLink href="/content/v">Errors</NavLink>
            <NavLink href="/content/x">WebHooks</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}
