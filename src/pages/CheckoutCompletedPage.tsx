import { ReactElement, useEffect } from 'react';
import { BoxOpenFullIcon, CheckIcon } from '../components/Icon';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { ActionsFooter } from '../components/ActionsFooter';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function CheckoutCompletedPage(): ReactElement {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center px-5 text-center">
      <header className="mt-[15%] flex flex-col items-center justify-center gap-10 bg-white">
        <CheckIcon className="h-7 text-primary-600" />
        <h1 className="text-dark-purple-900 text-xl font-semibold">
          Thank you!
          <br />
          We have received your order
        </h1>
        <p className="max-w-lg text-sm text-light-blue-800">
          An order confirmation has been sent to your email. Check your spam
          folder if you haven't received it within 2 min. Your goods will be
          delivered within 24 hours.
          <br />
          <br />
          Thank you for choosing Cooldelivery!
        </p>
      </header>

      <ActionsFooter className="px-8 py-6">
        <Link to="/" tabIndex={-1}>
          <Button variant="default">
            <BoxOpenFullIcon className="mr-2 h-5 w-5" />
            Continue Shopping
          </Button>
        </Link>
      </ActionsFooter>
    </div>
  );
}
