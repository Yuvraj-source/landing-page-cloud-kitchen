import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import {

  Home as HomeIcon,
  Info as InfoIcon,
  CommentRounded as CommentRoundedIcon,

} from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuOptions = [
    {
      text: "Knowledge Hub",
      icon: <HomeIcon />,
      submenus: [
        {
          text: "Notes",
          link: "#",
        },
        {
          text: "Quiz",
          link: "#",
        },
        {
          text: "Microbiology News",
          link: "#",
        },
      ],
    },
    {
      text: "Career Pathways",
      icon: <InfoIcon />,
      submenus: [
        {
          text: "Jobs",
          link: "#",
        },
        {
          text: "College Finder",
          link: "#",
        },
        {
          text: "Exam Notification",
          link: "#",
        },
      ],
    },
    {
      text: "Engage and Connect",
      icon: <CommentRoundedIcon />,
      submenus: [
        {
          text: "Discussion Forum",
          link: "#",
        },
        {
          text: "Projects Collaborations",
          link: "#",
        },
        {
          text: "Members Directory",
          link: "#",
        },
      ],
    },
    {
      text: " Explore and Discover",
      icon: <CommentRoundedIcon />,
      submenus: [
        {
          text: "Conferences",
          link: "#",
        },
        {
          text: " Workshops and Webinars",
          link: "#",
        },
        {
          text: " Mentorship Programs",
          link: "#",
        },
      ],
    },
    
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        border: "2px solid white",
        background: " #FFEE58",
        zIndex: 9999,
        
      }}
    >
      <List sx={{ display: "flex" }}>
        <ListItem sx={{ marginRight: "auto" }}>
          <img src="/path/to/your/logo.png" alt="Logo" style={{ height: 50 }} />
        </ListItem>
        {menuOptions.map((item) => (
          <ListItem
            key={item.text}
            onMouseEnter={() => setOpenMenu(item.text)}
            onMouseLeave={() => setOpenMenu(null)}
            sx={{
              marginRight: 5,
              cursor: "pointer",
            }}
          >
            <ListItemText primary={item.text} />
            {openMenu === item.text && (
              <List
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  padding: "10px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  background:"#FAFAFA",
                  width: "200px", 
                  height: "160px", 
                  overflow: "auto",
                }}
              >
                {item.submenus.map((submenu) => (
                  <ListItem
                    component="a"
                    href={submenu.link}
                    onClick={() => setOpenMenu(null)}
                    key={submenu.text}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <ListItemText primary={submenu.text} />
                  </ListItem>
                ))}
              </List>
            )}
          </ListItem>
        ))}
        <ListItem>
          <Button variant="contained" color="primary">
            Join Our Community
          </Button>
        </ListItem>
      </List>
    </nav>
  );
};

export default Navbar;
