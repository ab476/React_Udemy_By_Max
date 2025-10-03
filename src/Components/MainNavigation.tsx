import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

type NavLinkItem = {
  label: string;
  path: string;
  end?: boolean;
};

const navLinks: NavLinkItem[] = [
  { label: "Home", path: "/", end: true },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
];

export default function MainNavigation() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {navLinks.map(({ label, path, end }) => (
            <Button
              key={path}
              component={NavLink}
              to={path}
              end={end}
              color="inherit"
              sx={{
                mr: 2,
                "&.active": {
                  borderBottom: "2px solid white",
                  fontWeight: "bold",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
