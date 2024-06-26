import { ReactElement, ReactNode } from 'react';
import { ArrowRightIcon, BoxOpenFullIcon } from '../components/Icon';
import visaLogo from '../assets/visa.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ActionsFooter } from '../components/ActionsFooter';
import { useCountry } from '../context/CountryContext';
import { match } from 'ts-pattern';

export function CheckoutDetailsPage(): ReactElement {
  return (
    <div className="flex min-h-screen flex-col items-center px-5">
      <div className="flex w-full flex-col">
        <header className="flex h-[98px] flex-col items-center justify-center bg-white">
          <BoxOpenFullIcon className="h-5 text-primary-600" />
          <h1 className="font-bold">Delivery and payment</h1>
        </header>
        <main className="flex flex-col gap-4">
          <ContentButton title="Saved delivery and payment info" selected>
            <div className="text-sm">
              <MockAddress />
              <div className="flex gap-2">
                <img src={visaLogo} />
                <p>•••• •••• •••• 1234</p>
              </div>
            </div>
          </ContentButton>
          <ContentButton title="New delivery of payment info" />
        </main>
      </div>

      <ActionsFooter className="px-8 py-6">
        <Link to="/checkout/completed" tabIndex={-1}>
          <Button variant="primary">
            Complete order
            <ArrowRightIcon className="ml-2 h-4" />
          </Button>
        </Link>
        <Link to="/" tabIndex={-1}>
          <Button variant="default">Cancel</Button>
        </Link>
      </ActionsFooter>
    </div>
  );
}

type ContentButtonProps = {
  title: string;
  children?: ReactNode;
  selected?: boolean;
};

function ContentButton(props: ContentButtonProps): ReactElement {
  const { title, children, selected = false } = props;

  return (
    <button
      className={classNames(
        'flex gap-5 rounded-3xl border-2 border-light-blue-200 p-4 text-left',
        {
          'bg-light-blue-50': selected,
        },
      )}
    >
      <div className="h-6 w-6 rounded-full border-2 border-light-blue-300 p-0.5">
        {selected && (
          <div className="h-full w-full rounded-full bg-primary-600"></div>
        )}
      </div>
      <div className="space-y-2 text-light-blue-800">
        <span className="block font-medium">{title}</span>
        {children}
      </div>
    </button>
  );
}

function MockAddress(): ReactElement | null {
  const { country } = useCountry();
  return match(country)
    .with('DK', () => (
      <div className="mb-2">
        <p>Anders Andersen</p>
        <p>Lykkevej 7</p>
        <p>2000 Frederiksberg C</p>
        <p>Danmark</p>
      </div>
    ))
    .with('SE', () => (
      <div className="mb-2">
        <p>Emma Andersson</p>
        <p>Ekvägen 34</p>
        <p>72210 Västerås</p>
        <p>Sverige</p>
      </div>
    ))
    .with('NO', () => (
      <div className="mb-2">
        <p>Ingrid Olsen</p>
        <p>Fjellveien 56</p>
        <p>3045 Drammen</p>
        <p>Norge</p>
      </div>
    ))
    .with('FI', () => (
      <div className="mb-2">
        <p>Jussi Virtanen</p>
        <p>Koivukatu 89</p>
        <p>90100 Oulu</p>
        <p>Suomi</p>
      </div>
    ))
    .with(null, () => null)
    .exhaustive();
}
