import { Fragment, useState } from 'react';
import { Button, Dialog, DialogBody, Switch } from '@material-tailwind/react';
import gear from '../assets/gear-icon.png';
import { EnvProps } from 'types';

export default function Modal({ onToggleEnv, currentEnvironment }: EnvProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        className="bg-primary25 shadow-none p-0 hover:shadow-none"
      >
        <img
          src={gear}
          alt="Gear icon"
          className="my-1 w-[18px] h-[18px]"
        />
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
      >
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
    </Fragment>
  );
}
