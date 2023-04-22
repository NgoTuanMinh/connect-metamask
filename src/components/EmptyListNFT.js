import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';

const pages = ['HOME', 'NFT VERIFICATION', 'PRESS RELEASe'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Icons = [
  {
    id: 1,
    name: "Ethereum",
    icon: "https://www.spectre.ai/assets/images/assets/ETH-logo.png?v=2.13",
  },
  {
    id: 2,
    name: "Binance Smart Chain",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJck7-kfeVY1jE5HKfhZTjogzepWqnk28MkIy6UR-_AqL5axCHHiUlCVNYrhXy2h0CJY8&usqp=CAU",
  },
  {
    id: 3,
    name: "Solana",
    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png",
  },
]
function EmptyListNFT() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{background: 'black'}}>
      <AppBar position="static" sx={{backgroundColor:"unset" , boxShadow:'none'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div>
              <img style={{width:'150px', height:'150px'}}  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlBt9laQodEG9vbk903CJl55NOksuOwud6oMd_BIPi6DKHZI2A"/>
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
           <AccountBalanceWalletIcon fontSize='small' sx={{pr:1}}/> Wallet is not connected
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
        <Grid item xs={3} sx={{ pt:5 }}>
          <Button className="buttonDisabled" variant="Continue" sx={{borderRadius:10,border:'1px solid white', color:"white", background:'unset',width:150, height: 150,':hover': {bgcolor: '#4DFFF4',}, }}>Stake NFT</Button>
        </Grid>   
      </Grid>  
      
    </div>
    

  );
}
export default EmptyListNFT;