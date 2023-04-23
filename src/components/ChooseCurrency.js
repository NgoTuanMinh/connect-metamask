import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Modal } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import localStorageHelper from '../utils/localStorage';
import { useNavigate, useParams } from 'react-router';

const pages = ['HOME', 'NFT VERIFICATION', 'PRESS RELEASe'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ChooseCurrency() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const addressMetaMask = localStorageHelper.get('addressMetaMask');

  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseModalConfirm = () => {
    setIsOpenModalConfirm(false);
  }

  const handleOpenModalConfirm = () => {
    setIsOpenModalConfirm(true);
  }

  const { tokenHash } = useParams();
  const navigate = useNavigate();

  const Icons = [
    {
      id: 1,
      name: "Ethereum",
      icon: "https://www.spectre.ai/assets/images/assets/ETH-logo.png?v=2.13",
      onClick: handleOpenModalConfirm
    },
    {
      id: 2,
      name: "Binance Smart Chain",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJck7-kfeVY1jE5HKfhZTjogzepWqnk28MkIy6UR-_AqL5axCHHiUlCVNYrhXy2h0CJY8&usqp=CAU",
      onClick: handleOpenModalConfirm
    },
    {
      id: 3,
      name: "Solana",
      icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png",
      onClick: handleOpenModalConfirm
    },
  ];

  const stakeNFT = (token) => {
    const tokenStaked = localStorageHelper.getObject('tokenStaked');
    if (!tokenStaked) {
      localStorageHelper.setObject('tokenStaked', [{
        addressMetaMask,
        tokenHash: token
      }])
    } else {
      const newTokenStaked = [...tokenStaked, {
        addressMetaMask,
        tokenHash: token
      }];
      localStorageHelper.setObject('tokenStaked', newTokenStaked);
    }
    navigate(`/my-nft/${addressMetaMask}`);
  }


  const ModalConfirm = () => {
    return (
      <Modal
        open={isOpenModalConfirm}
        onClose={handleCloseModalConfirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" textAlign='center' variant="h6" component="h2" style={{marginBottom: 20}}>
            Do you want to stake this NFT?
          </Typography>

          <div style={{display: 'flex', height: 60}}>
          <Button className="buttonDisabled" variant="Continue" sx={{borderRadius:10, textTransform: 'capitalize', color:"black", background:'#4DFFF4',width:170, fontWeight: '700' , height: 50,':hover': {bgcolor: '#4DFFF4',}, }} onClick={() => stakeNFT(tokenHash)}>Continue</Button>
          <Typography sx={{fontSize:14, cursor:'pointer', marginLeft: 12, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={handleCloseModalConfirm}>
            Cancel
          </Typography>
          </div>

        </Box>
      </Modal>
    )
  }

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
        style={{ minHeight: '100%' }}
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
        <Grid item xs={3} sx={{ pt:5 }}>
          <Typography component="h1" variant="h5" sx={{color:'white'}}>
            Connect your wallet to continue
          </Typography>
          <Typography sx={{color:'white', fontSize:12,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography sx={{color:'white', fontSize:12,}}>
            Nullam dapibus nunc urna, eu efficitur risus consectetur.
          </Typography>
        </Grid>  
        <Grid item xs={3} sx={{ pt:5 }}>
        {Icons.map(list=>(
            <div key={list.id} style={{color:'white',border:'1px solid white', width:'300px', padding:18, marginBottom:20 , height:20,borderRadius:30 ,cursor:'pointer'}} onClick={list.onClick}>
              <div style={{display:'inline-flex', float:'left'}}>
                <img alt='' style={{width:'20px', height:'20px', marginRight:10}} src={list.icon}></img> {list.name}
              </div>
            </div> 
          ))}
        </Grid>  
        <Grid item xs={3} sx={{ pt:5 }}>
        <Button className="buttonDisabled" variant="Continue" sx={{borderRadius:10, textTransform: 'capitalize', color:"black", background:'#4DFFF4',width:170, fontWeight: '700' , ':hover': {bgcolor: '#4DFFF4',}, }}>Continue</Button>
        <Typography sx={{color:'white', fontSize:14,pt:3, pb:20 , cursor:'pointer'}} onClick={() => navigate(`/my-nft/${addressMetaMask}`)}>
          Cancel
        </Typography>
        </Grid>  
      </Grid> 

      <ModalConfirm />
      
    </div>
    

  );
}
export default ChooseCurrency;