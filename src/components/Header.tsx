import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex justify-center py-5 bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
