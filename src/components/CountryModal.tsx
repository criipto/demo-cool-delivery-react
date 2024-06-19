import { Fragment, ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, DialogBody } from '@material-tailwind/react';
import { Country, availableCountries, useCountry } from '../context/CountryContext';
import { Flag } from './Flag';

export function CountryModal(): ReactElement {
  const {country, setCountry} = useCountry();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(country == null) {
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
        className="rounded-none flex items-center gap-0.5 text-gray-600 bg-primary25 shadow-none p-0 hover:shadow-none gap-1"
      >
        {country && <Flag className="w-6 h-4" country={country}/>}
        {country}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
      >
        <DialogBody className="flex flex-col items-center gap-2">
          <h1 className="font-medium">Please select a country to continue</h1>
          <div className="flex justify-around gap-5 w-full">
            {
              availableCountries.map((country) => (
                <button key={country} onClick={() => updateCountry(country)}>
                  <Flag className="w-20 h-14 border" country={country} />
                  <span className="text-gray-600 font-semibold">{country}</span>
                </button>
              ))
            }
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
