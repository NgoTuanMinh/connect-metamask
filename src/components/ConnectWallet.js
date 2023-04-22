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
    name: "Metamask",
    icon: "https://i.seadn.io/gae/CincNIekr-b6d7ALHJaLMppvqER0gHzJT-4Rm5HDVL6cX2NajGr51FgUu6UAuhCk9s63m5fn7l3vI62YINMmy6Uf7eE4U7qBOEvqKQ?auto=format&w=1000",
  },
  {
    id: 2,
    name: "Coinbase Wallet",
    icon: "https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg",
  },
  {
    id: 3,
    name: "WalletConnect",
    icon: "https://repository-images.githubusercontent.com/510397898/e6ec745a-0953-4230-aa0a-c87033a41dcb",
  },
  {
    id: 4,
    name: "Phantom",
    icon: "https://pbs.twimg.com/profile_images/1394116783792025603/jTMcoZRY_400x400.jpg",
  },
  {
    id: 5,
    name: "Core",
    icon: "https://pbs.twimg.com/profile_images/1539616954708803585/L_eUNTpQ_400x400.jpg",
  }
]
function ConnectWallet() {
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
           <AccountBalanceWalletIcon fontSize='small' sx={{pr:1}}/> Wallet is not connected
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
            <div key={list.id} style={{color:'white',border:'1px solid white', width:'300px', padding:18, marginBottom:20 , height:20,borderRadius:30 ,cursor:'pointer'}}>
              <div style={{display:'inline-flex', float:'left'}}>
                <img style={{width:'20px', height:'20px', marginRight:10}} src={list.icon}></img> {list.name}
              </div>
            </div> 
          ))}
        </Grid>  
        <Grid item xs={3} sx={{ pt:5 }}>
          <Button className="buttonDisabled" variant="Continue" sx={{borderRadius:10, color:"black", background:'#4DFFF4',width:170,':hover': {bgcolor: '#4DFFF4',}, }}>Contained</Button>
          <Typography sx={{color:'white', fontSize:14,pt:3, pb:20 , cursor:'pointer'}}>
            Cancel
          </Typography>
        </Grid>  
      </Grid> 
      
    </div>
    

  );
}
export default ConnectWallet;