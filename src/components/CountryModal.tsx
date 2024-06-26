import { Fragment, ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, DialogBody } from '@material-tailwind/react';
import {
  Country,
  availableCountries,
  countryLabels,
  useCountry,
} from '../context/CountryContext';
import { Flag } from './Flag';

export function CountryModal(): ReactElement {
  const { country, setCountry } = useCountry();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (country == null) {
      setOpen(true);
    }
  }, [country]);

  const handleOpen = () => setOpen(!open);

  const updateCountry = (country: Country): void => {
    setCountry(country);
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        className="bg-primary25 flex items-center gap-0.5 gap-1 rounded-none p-0 text-gray-600 shadow-none hover:shadow-none"
      >
        {country && <Flag className="h-6 w-6" country={country} />}
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="rounded-none"
        // Only allow the user to close the modal if a country has been selected
        dismiss={{ enabled: country != null }}
      >
        <DialogBody className="flex flex-col items-center gap-4 p-5 pt-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-xl font-semibold leading-relaxed text-light-blue-900">
              Select country
            </h1>
            <h2 className="mb-2 text-sm font-normal text-light-blue-700">
              Select the country where you would like us to deliver your goods
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            {availableCountries.map((country) => (
              <button
                className="flex items-center gap-4 rounded-full border border-primary-200 px-3 py-2 shadow-sm outline-none hover:bg-primary-50"
                key={country}
                onClick={() => updateCountry(country)}
              >
                <Flag country={country} className="h-6 w-6" />
                <span className="text-sm font-medium text-light-blue-800">
                  {countryLabels[country]}
                </span>
              </button>
            ))}
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
