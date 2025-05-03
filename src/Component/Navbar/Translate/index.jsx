import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GTranslateIcon from '@mui/icons-material/GTranslate';

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const currentLang = 'en'; // مثلا از context بگیرید

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        id="lang-button"
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          color: '#4B5563',
          fontWeight: 500,
          bgcolor: '#F3F4F6',
          borderRadius: 3,
          px: 2,
          py: 1,
          boxShadow: open ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            bgcolor: '#E5E7EB',
          },
        }}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        startIcon={<GTranslateIcon fontSize="small" />}
      >
        {currentLang === 'fa' ? 'فارسی' : 'English'}
      </Button>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lang-button',
          dense: true,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            minWidth: 140,
            borderRadius: 3,
            mt: 1,
            p: 0.5,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            fontFamily: 'IranYekan',
          },
        }}
      >
        <MenuItem
          onClick={() => {
            // تغییر زبان به انگلیسی
            handleClose();
          }}
          disabled={currentLang === 'en'}
          sx={{
            borderRadius: 2,
            fontWeight: currentLang === 'en' ? 'bold' : 'normal',
            fontFamily: 'IranYekan',
            '&:hover': {
              bgcolor: '#F3F4F6',
            },
          }}
        >
          <ListItemIcon>
            <GTranslateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="English" />
        </MenuItem>

        <MenuItem
          onClick={() => {
            // تغییر زبان به فارسی
            handleClose();
          }}
          disabled={currentLang === 'fa'}
          sx={{
            borderRadius: 2,
            direction: 'rtl',
            fontWeight: currentLang === 'fa' ? 'bold' : 'normal',
            fontFamily: 'IranYekan',
            '&:hover': {
              bgcolor: '#F3F4F6',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <GTranslateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="فارسی" />
        </MenuItem>
      </Menu>
    </>
  );
}
