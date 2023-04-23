import React, { useEffect } from 'react';
import './App.css';
import ConnectWallet from './components/ConnectWallet';
import EmptyListNFT from './components/EmptyListNFT';
import WalletCard from './components/WalletCard';
// import WalletCard from './components/WalletCard';
// import WalletCardEthers from './components/WalletCardEthers';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import NftList from './components/NftList';
import ChooseCurrency from './components/ChooseCurrency';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-nft/:addressMetaMask",
    element: <NftList />,
  },
  {
    path: "/staking/:tokenHash",
    element: <ChooseCurrency />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <WalletCard/> */}
      {/* <WalletCardEthers/> */}
      {/* <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
