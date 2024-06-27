import { ReactElement } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

/**
 * In order to limit the amount of accepted callback urls we have to define
 * in the criipto dashboard, we send all auth redirects back here, with a `to`
 * search parameter, which defines which page the user should really be redirected to.
 */
export function CallbackPage(): ReactElement {
  const [searchParams] = useSearchParams();
  const to = searchParams.get('to');

  const path = to ? atob(to) : '/';

  return <Navigate to={`${path}?${searchParams}`} />;
}
