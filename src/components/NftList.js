import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Moralis from 'moralis';
import localStorageHelper from '../utils/localStorage';


const pages = ['HOME', 'NFT VERIFICATION', 'PRESS RELEASE'];

function NftList() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [listNfts, setListNfts] = useState([]);

  const { addressMetaMask } = useParams();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  Moralis.start({
    apiKey: "Ep0LhOpaddl7vgbe6eGfLlGSQvWMu5gCUPODG6D6YPdpvyRPYrBorvcyfs7FzDfZ"
  });

  const getNFT = useCallback(async () => {
		try {
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
		
			// console.log('data=====', response.raw);

      await Moralis.start({
				apiKey: "Ep0LhOpaddl7vgbe6eGfLlGSQvWMu5gCUPODG6D6YPdpvyRPYrBorvcyfs7FzDfZ"
			});
			
		} catch (e) {
			console.error(e);
		}
	}, []);

  useEffect(() => {
    if(addressMetaMask){
      getNFT();
    };
  }, [addressMetaMask, getNFT]);

  const listNftsRender = useMemo(() => {
    const listNftStakedStorage = localStorageHelper.getObject('tokenStaked');
    if (!listNftStakedStorage) return listNfts;

    const listNftStaked = listNftStakedStorage.filter((i) => i?.addressMetaMask === addressMetaMask).map((j) => j?.tokenHash); 
    const res = listNfts.filter((i) => !listNftStaked.includes(i?.token_hash));
    return res;
  }, [listNfts, addressMetaMask]);

  return (
    <div style={{background: 'black'}}>
      <AppBar position="static" sx={{backgroundColor:"unset" , boxShadow:'none'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div>
              <img alt='' style={{width:'150px', height:'150px'}}  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlBt9laQodEG9vbk903CJl55NOksuOwud6oMd_BIPi6DKHZI2A"/>
            </div>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Avatar alt="Remy Sharp" src="./public/logo.png" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#ffffff', display: 'block', px: 4 }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '45vh' }}
      >

        <Grid item xs={3} sx={{ pt:10 }}>
          <Avatar src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyU00YdJGM9DhnXH5mYujUG2v2OvTnePZBSdg5PR4mVFzPbsen" sx={{ width: 200, height: 200,}} />
          <Typography component="h1" variant="h5" sx={{color:'white'}}>
            Username
          </Typography>
          <Typography sx={{color:'white', fontSize:14}}>
            ID: 123456789
          </Typography>
          <Typography sx={{color:'white', pt:1, fontSize:12, display:'inline-flex'}}>
           <AccountBalanceWalletIcon fontSize='small' sx={{pr:1}}/> Wallet is connected
          </Typography>
        </Grid>   
        
      </Grid> 
      <Grid item xs={3} sx={{ pt:5 , textAlign:'start', pl:15, minHeight: '45vh'}}>
        <Typography component="h1" variant="h5" sx={{color:'white'}}>
          My NFT
        </Typography>
        <Typography sx={{color:'white', fontSize:12,}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc urna, eu efficitur risus consectetur.
        </Typography>
        <Grid item xs={3} sx={{ pt:5 , pr:5}} >
          <ImageList cols={7} rowHeight={'100%'}>
            {listNftsRender.map((item, idx) => (
              <ImageListItem key={idx} style={{cursor: 'pointer'}} onClick={() => navigate(`/staking/${item?.token_hash}`)}>
                <img
                    style={{width:"120px", height:'120px', border:'1px solid white', objectFit:'revert'}}
                    src={item?.media?.original_media_url}
                    alt={item?.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    sx={{color:'white'}}
                    title={item?.name}
                    subtitle={<span>by: Owned by JZ08</span>}
                    position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>  
      
    </div>
    

  );
}
export default NftList;