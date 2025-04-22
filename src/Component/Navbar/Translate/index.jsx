import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GTranslateIcon from '@mui/icons-material/GTranslate';

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentLang = 'en'; // می‌توانید این را از Redux یا Context بگیرید

  return (
    <>
      <Button
        id="lang-button"
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        sx={{ textTransform: 'none', color:"black" }}
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
          dir: 'rtl', // منوی راست‌به‌چپ
        }}
        PaperProps={{
          sx: { minWidth: 120, fontFamily: 'IranYekan' },
        }}
      >
        {/* گزینهٔ انگلیسی */}
        <MenuItem
          onClick={() => {
            // TODO: تغییر زبان به انگلیسی
            handleClose();
          }}
          disabled={currentLang === 'en'}
        >
          <ListItemIcon>
            <GTranslateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText inset primary="English" />
        </MenuItem>

        {/* گزینهٔ فارسی */}
        <MenuItem
          onClick={() => {
            // TODO: تغییر زبان به فارسی
            handleClose();
          }}
          disabled={currentLang === 'fa'}
          sx={{ direction: 'rtl' , fontFamily:"Iran" }}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <GTranslateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText inset primary="فارسی" sx={{fontFamily:"Iran"}} />
        </MenuItem>
      </Menu>
    </>
  );
}
