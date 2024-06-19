import boxIcon from '../assets/box-checkout-blue.png';
import checkmarkIcon from '../assets/checkmark.png';
import { ReactElement } from "react";
import Header from "../components/Header";
import { EnvProps } from "../types";
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function OrderCompletedPage({ onToggleEnv, currentEnvironment }: EnvProps): ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleEnv={onToggleEnv} currentEnvironment={currentEnvironment} />
      <main className="flex flex-col items-center mt-[10vh] gap-8 p-5">
        <div className="flex flex-col items-center gap-2">
          <img src={checkmarkIcon} className="h-12 h-12 mb-2" />
          <h1 className="font-bold">Your order has been submitted.</h1>
        </div>
      </main>
      <div className="fixed bottom-0 w-full lg:max-w-5xl bg-white p-4 bg-white py-6 shadow-inner bg-gray-300">
          <Link to="/" tabIndex={-1} className='w-full'>
            <Button variant="default">
              <img
                src={boxIcon}
                className="w-5 h-4 mr-[6px]"
              />
              <p className="font-semibold">Continue Shopping</p>
            </Button>
          </Link>
      </div>
    </div>
  )
}
