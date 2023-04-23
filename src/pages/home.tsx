import React from 'react';
import './styles.css';
// import NftList from '../components/NftList';
import ConnectWallet from '../components/ConnectWallet';

function Home() {
  return (
    <div className='wrap-home'>
      {/* <NftList/> */}
      <ConnectWallet />
    </div>
  );
}

export default Home;
