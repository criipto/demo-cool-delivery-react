import { useState } from 'react';
import { Dialog, DialogBody, Switch } from '@material-tailwind/react';
import { EnvProps } from 'types';
import { GearIcon } from './Icon';

export function ToggleEnvironmentModal({
  onToggleEnv,
  currentEnvironment,
}: EnvProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center justify-center bg-primary-25 p-0 shadow-none hover:shadow-none"
      >
        <GearIcon className="h-6 w-6 text-light-blue-800" />
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <Switch
            id="env-toggle"
            label="Production"
            color="indigo"
            checked={currentEnvironment === 'production'}
            onChange={onToggleEnv}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
