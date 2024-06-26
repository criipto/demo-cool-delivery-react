import { ToggleEnvironmentModal } from './ToggleEnvironmentModal';
import { EnvProps } from 'types';
import { SearchIcon, UserIcon } from './Icon';
import { Logo } from './Logo';

export default function Header({ onToggleEnv, currentEnvironment }: EnvProps) {
  return (
    <header className="bg-primary-25 flex items-center flex-row justify-between px-4 pt-4">
      <Logo/>
      <div className="flex flex-row items-center gap-4">
        <SearchIcon className="w-6 h-6 text-light-blue-800"/>
        <UserIcon className="w-6 h-6 text-light-blue-800"/>
        <ToggleEnvironmentModal
          onToggleEnv={onToggleEnv}
          currentEnvironment={currentEnvironment}
        />
      </div>
    </header>
  );
}
