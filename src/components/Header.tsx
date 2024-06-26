import { ToggleEnvironmentModal } from './ToggleEnvironmentModal';
import { EnvProps } from 'types';
import { SearchIcon, UserIcon } from './Icon';
import { Logo } from './Logo';

export default function Header({ onToggleEnv, currentEnvironment }: EnvProps) {
  return (
    <header className="flex flex-row items-center justify-between bg-primary-25 px-4 pt-4">
      <Logo />
      <div className="flex flex-row items-center gap-4">
        <SearchIcon className="h-6 w-6 text-light-blue-800" />
        <UserIcon className="h-6 w-6 text-light-blue-800" />
        <ToggleEnvironmentModal
          onToggleEnv={onToggleEnv}
          currentEnvironment={currentEnvironment}
        />
      </div>
    </header>
  );
}
