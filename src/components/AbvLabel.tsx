import { ReactElement } from "react";

type AbvLabelProps = {
 children: number;
};

const pctFormatter = new Intl.NumberFormat('da-DK', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
});

export function AbvLabel({children}: AbvLabelProps): ReactElement {
  return <>{pctFormatter.format(children / 100)}</>;
}
