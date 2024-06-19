import logo from '../assets/logos/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import ToggleEnvironmentModal from './ToggleEnvironmentModal';
import { EnvProps } from 'types';
import { CountryModal } from './CountryModal';
import { Link } from 'react-router-dom';

export default function Header({ onToggleEnv, currentEnvironment }: EnvProps) {
  return (
    <header className="bg-primary25 flex flex-row justify-between px-4 pt-3 pb-2">
      <Link to="/">
        <img
          src={logo}
          className="h-11"
        />
      </Link>
      <div className="flex flex-row items-center gap-2">
        <CountryModal />
        <img
          src={search}
          className="w-5 h-[19px]"
        />
        <img
          src={profile}
          className="w-5 h-[19px]"
        />
        <ToggleEnvironmentModal
          onToggleEnv={onToggleEnv}
          currentEnvironment={currentEnvironment}
        />
      </div>
    </header>
  );
}
