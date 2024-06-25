import logo from '../assets/logo.png';
import { ToggleEnvironmentModal } from './ToggleEnvironmentModal';
import { EnvProps } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/sharp-light-svg-icons';

export default function Header({ onToggleEnv, currentEnvironment }: EnvProps) {
  return (
    <header className="bg-primary-25 flex flex-row justify-between px-4 pt-3 pb-2">
      <img
        src={logo}
        className="h-11"
      />
      <div className="flex flex-row items-center gap-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 text-light-blue-800"/>
        <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-light-blue-800"/>
        <ToggleEnvironmentModal
          onToggleEnv={onToggleEnv}
          currentEnvironment={currentEnvironment}
        />
      </div>
    </header>
  );
}
