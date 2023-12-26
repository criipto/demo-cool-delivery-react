import logo from '../assets/logos/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';

export default function Header() {
  return (
    <header className="bg-primary25 flex flex-row justify-between px-4 pt-3 pb-2">
      <img
        src={logo}
        className="h-11"
      />
      <div className="flex flex-row items-center">
        <img
          src={search}
          className="w-5 h-[19px]"
        />
        <img
          src={profile}
          className="w-5 h-[19px]"
        />
      </div>
    </header>
  );
}
