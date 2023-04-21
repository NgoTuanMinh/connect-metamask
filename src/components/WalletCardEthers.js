import React, {useState, useEffect, useCallback} from 'react'
import {ethers} from 'ethers'
import Moralis from 'moralis';
import './WalletCard.css'

const WalletCardEthers = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);
	const [listNfts, setListNfts] = useState([]);

	const connectWalletHandler = () => {
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			setProvider(new ethers.BrowserProvider(window.ethereum));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				setConnButtonText('Wallet Connected');
				console.log('result[0]', result[0]);
				setDefaultAccount(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	const getNFT = useCallback(async () => {
		try {
			await Moralis.start({
				apiKey: "Ep0LhOpaddl7vgbe6eGfLlGSQvWMu5gCUPODG6D6YPdpvyRPYrBorvcyfs7FzDfZ"
			});
		
			const response = await Moralis.EvmApi.nft.getWalletNFTs({
				"chain": "0x89",
				"format": "decimal",
				"tokenAddresses": [],
				"limit": 10,
				"mediaItems": true,
				// "address": defaultAccount,
				"address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			});

			setListNfts(response?.raw?.result);
		
			console.log('data=====', response.raw);
			
		} catch (e) {
			console.error(e);
		}
	}, [defaultAccount]);

useEffect(() => {
	if(defaultAccount){
		provider.getBalance(defaultAccount)
		.then(balanceResult => {
			setUserBalance(ethers.formatEther(balanceResult));
		})
		getNFT();
	};
}, [defaultAccount, provider, getNFT]);
	
	return (
		<>
			<div className='walletCard'>
				<h4> Connection to MetaMask using ethers.js </h4>
				<button onClick={connectWalletHandler}>{connButtonText}</button>
				<div className='accountDisplay'>
					<h3>Address: {defaultAccount}</h3>
				</div>
				<div className='balanceDisplay'>
					<h3>Balance: {userBalance}</h3>
				</div>
				{errorMessage}
			</div>

			{listNfts.length >0 && <div className='walletCard'>
				<h4> List NFT </h4>
				<div className='wrap-image'>
					{listNfts.map((i,idx) => 
					<div className='item-image' key={idx}>
						<img alt='' src={i?.media?.original_media_url} />
					</div>)}
				</div>
				{errorMessage}
			</div>}


		</>
	);
}

export default WalletCardEthers;