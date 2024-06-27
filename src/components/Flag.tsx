import { ReactElement } from 'react';

import { Country } from '../context/CountryContext';

type FlagProps = {
  className?: string;
  country: Country;
};

export function Flag({ country, className }: FlagProps): ReactElement {
  if (country === 'DK') return <DkFlag className={className} />;
  if (country === 'FI') return <FiFlag className={className} />;
  if (country === 'NO') return <NoFlag className={className} />;
  if (country === 'SE') return <SeFlag className={className} />;
  return <></>;
}

export function DkFlag({
  className,
}: Omit<FlagProps, 'country'>): ReactElement {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#a)">
        <path
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
          fill="#F0F0F0"
        />
        <path
          d="M9.392 10.435h14.507C23.132 4.547 18.097 0 12.001 0c-.896 0-1.77.1-2.61.285v10.15ZM6.261 10.436V1.46a12.008 12.008 0 0 0-6.159 8.976h6.16ZM6.261 13.566H.101a12.007 12.007 0 0 0 6.16 8.975v-8.975ZM9.392 13.566v10.15c.84.185 1.713.284 2.609.284 6.097 0 11.131-4.547 11.898-10.434H9.392Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function NoFlag({
  className,
}: Omit<FlagProps, 'country'>): ReactElement {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
    >
      <g clipPath="url(#a)">
        <path
          d="M12.5 24c6.627 0 12-5.373 12-12s-5.373-12-12-12S.5 5.373.5 12s5.373 12 12 12Z"
          fill="#F0F0F0"
        />
        <path
          d="M.913 15.131a12.01 12.01 0 0 0 4.283 6.39v-6.39H.913ZM11.456 23.955c.344.03.692.046 1.044.046 5.544 0 10.21-3.76 11.586-8.87h-12.63v8.824ZM24.086 8.87C22.71 3.76 18.044 0 12.5 0c-.352 0-.7.017-1.044.046V8.87h12.63ZM5.196 2.48A12.01 12.01 0 0 0 .913 8.87h4.283V2.48Z"
          fill="#D80027"
        />
        <path
          d="M24.398 10.434H9.891V.284C8.782.532 7.731.93 6.761 1.46v8.975H.6a12.104 12.104 0 0 0 0 3.13h6.16v8.976c.97.53 2.021.928 3.13 1.174v-10.15h14.507a12.118 12.118 0 0 0 0-3.13Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SeFlag({
  className,
}: Omit<FlagProps, 'country'>): ReactElement {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
    >
      <g clipPath="url(#a)">
        <path
          d="M12.5 24c6.627 0 12-5.373 12-12s-5.373-12-12-12S.5 5.373.5 12s5.373 12 12 12Z"
          fill="#FFDA44"
        />
        <path
          d="M9.89 10.435h14.508C23.63 4.547 18.596 0 12.499 0c-.896 0-1.768.1-2.608.285v10.15ZM6.76 10.435V1.459a12.007 12.007 0 0 0-6.159 8.976h6.16ZM6.76 13.566H.602a12.007 12.007 0 0 0 6.16 8.975v-8.975ZM9.89 13.566v10.15c.84.185 1.713.284 2.61.284 6.096 0 11.13-4.547 11.898-10.434H9.89Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function FiFlag({
  className,
}: Omit<FlagProps, 'country'>): ReactElement {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#a)">
        <path
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.899 10.435H9.392V.285C8.281.531 7.231.93 6.26 1.46v8.976H.101a12.104 12.104 0 0 0 0 3.13h6.16v8.976c.97.53 2.022.928 3.13 1.174v-10.15H23.9a12.12 12.12 0 0 0 0-3.13Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
