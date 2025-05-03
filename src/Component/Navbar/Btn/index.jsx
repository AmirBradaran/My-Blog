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
  keyframes,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

// انیمیشن برای دکمه شناور
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7); /* بنفش */
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 15px rgba(124, 58, 237, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
  }
`;

const FloatingButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: 15,
  right: 15,
  width: 50,
  height: 50,
  backgroundColor: "#7c3aed",
  color: "white",
  "&:hover": {
    backgroundColor: "#5b1db7", 
  },
  animation: `${pulse} 3s infinite`,
  zIndex: 1001,
  borderRadius: "50%",
  boxShadow: `0 4px 10px rgba(0, 0, 0, 0.2)`,
  transition: "all 0.3s ease-in-out",
}));

const MenuContainer = styled(Box)(({ theme, open }) => ({
  position: "fixed",
  bottom: open ? 65 : 40,
  right: open ? 10 : -250,
  width: 150,
  backgroundColor: "white",
  borderRadius: 10,
  boxShadow: theme.shadows[15],
  transition: "all 0.3s ease-out",
  zIndex: 1000,
  opacity: open ? 1 : 0,
  transform: open ? "translateY(0)" : "translateY(30px)",
  padding: "0",
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
                sx={{
                  "&:hover": {
                    backgroundColor: "#f3e8f9",
                    borderRadius: 2,
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MenuContainer>

      <FloatingButton onClick={toggleMenu} aria-label="menu">
        {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </FloatingButton>
    </>
  );
};

export default Btn;
