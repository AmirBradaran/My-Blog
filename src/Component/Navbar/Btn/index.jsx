import React, { useState } from "react";
import { 
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  styled,
  keyframes
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Close as CloseIcon
} from "@mui/icons-material";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(25, 118, 210, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(25, 118, 210, 0);
  }
`;

const FloatingButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: 30,
  right: 30,
  width: 50,
  height: 50,
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  animation: `${pulse} 2s infinite`,
  zIndex: 1001,
}));

const MenuContainer = styled(Box)(({ theme, open }) => ({
  position: 'fixed',
  bottom: open ? 85 : 32,
  right: open ? 32 : -200,
  width: 200,
  backgroundColor: 'white',
  borderRadius: 8,
  boxShadow: theme.shadows[10],
  transition: 'all 0.3s ease-out',
  zIndex: 1000,
  opacity: open ? 1 : 0,
  transform: open ? 'translateY(0)' : 'translateY(50px)',
}));

const Btn = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const items = [
    { label: "Home", path: "/", icon: <HomeIcon color="secondary" /> },
    { label: "About", path: "/describe", icon: <InfoIcon color="secondary" /> },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuContainer open={open}>
        <List>
          {items.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                component={Link} 
                to={item.path}
                onClick={toggleMenu}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontWeight: 'medium',
                    color: 'text.primary'
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MenuContainer>

      <FloatingButton 
        onClick={toggleMenu}
        aria-label="menu"
      >
        {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </FloatingButton>
    </>
  );
};

export default Btn;