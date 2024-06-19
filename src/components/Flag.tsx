import { ReactElement } from 'react';
import { Country } from '../context/CountryContext';

type FlagProps = {
    className?: string;
    country: Country;
}

export function Flag({ country, className }: FlagProps): ReactElement {
    if(country === 'DK') return <DkFlag className={className}/>;
    if(country === 'FI') return <FiFlag className={className}/>;
    if(country === 'NO') return <NoFlag className={className}/>;
    if(country === 'SE') return <SeFlag className={className}/>;
    return <></>;
}

function FiFlag({ className }: Omit<FlagProps, 'country'>): ReactElement {
    return <svg className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1100"><path fill="#fff" d="M0 0h1800v1100H0z"/><path fill="#003580" d="M0 400h1800v300H0z"/><path fill="#003580" d="M500 0h300v1100H500z"/></svg>;
}

function DkFlag({ className }: Omit<FlagProps, 'country'>): ReactElement {
    return <svg className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 280"><path fill="#c60c30" d="M0 0h370v280H0z"/><path fill="#fff" d="M120 0h40v280h-40z"/><path fill="#fff" d="M0 120h370v40H0z"/></svg>;
}
function NoFlag({ className }: Omit<FlagProps, 'country'>): ReactElement {
    return <svg className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 800"><path fill="#ef2b2d" d="M0 0h1100v800H0z"/><path fill="#fff" d="M300 0h200v800H300z"/><path fill="#fff" d="M0 300h1100v200H0z"/><path fill="#002868" d="M350 0h100v800H350z"/><path fill="#002868" d="M0 350h1100v100H0z"/></svg>;
}
function SeFlag({ className }: Omit<FlagProps, 'country'>): ReactElement {
    return <svg className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><path fill="#006aa7" d="M0 0h16v10H0z"/><path fill="#fecc00" d="M5 0h2v10H5z"/><path fill="#fecc00" d="M0 4h16v2H0z"/></svg>;
}
