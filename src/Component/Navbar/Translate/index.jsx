import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {ExpandMore , ExpandLess , GTranslate} from "@mui/icons-material";
import { useLanguage } from "../../../Utils/LanguageContext "; // استفاده از Context

export default function Translate() {
  const { language, toggleLanguage } = useLanguage(); // دسترسی به زبان و تابع تغییر زبان
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const fontFamily =
    language === "fa" ? "IranYekan, sans-serif" : "Arial, sans-serif"; // Set Persian font

  return (
    <>
      <Button
        id="lang-button"
        aria-controls={open ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
        startIcon={<GTranslate fontSize="small" />}
        style={{ color: "black", fontFamily:"Iran" }}
      >
        {language === "fa" ? "فارسی" : "English"}
      </Button>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "lang-button" }}
      >
        <MenuItem
          onClick={() => {
            toggleLanguage(); // تغییر زبان به انگلیسی یا فارسی
            handleClose();
          }}
        >
          <ListItemIcon>
            <GTranslate fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={language === "fa" ? "English" : "فارسی"}
            style={{ color: "black", fontFamily }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
