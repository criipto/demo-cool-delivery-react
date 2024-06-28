import { ToggleEnvironmentModal } from './ToggleEnvironmentModal';
import { SearchIcon, UserIcon } from './Icon';
import { Logo } from './Logo';
import { CountryModal } from './CountryModal';

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-primary-25 px-4 pt-4">
      <Logo />
      <div className="flex flex-row items-center gap-4">
        <SearchIcon className="h-6 w-6 text-light-blue-800" />
        <UserIcon className="h-6 w-6 text-light-blue-800" />
        <ToggleEnvironmentModal />
        <CountryModal />
      </div>
    </header>
  );
}
