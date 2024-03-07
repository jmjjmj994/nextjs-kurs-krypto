import { Icon } from '@mui/material';
import { CryptoCurrency } from './types';

export const currencies: CryptoCurrency[] = [
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: (
      <Icon component="img" src="/icons/bitcoin-btc-logo.png" alt="Bitcoin" />
    ),
  },
  {
    symbol: 'ETH',
    name: 'Etherum',
    icon: (
      <Icon component="img" src="/icons/ethereum-eth-logo.png" alt="Ethereum" />
    ),
  },
];
