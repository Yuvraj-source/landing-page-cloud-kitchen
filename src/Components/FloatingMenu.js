import React, { useState } from 'react';
import { Box, Fab, Menu as MuiMenu, IconButton, styled } from '@mui/material';
import { LocalDining, Close } from '@mui/icons-material';
import CustomMenu from '../Components/Menu';

// Styling the Fab component to increase its size
const LargeFab = styled(Fab)({
  width: 80,
  height: 80,
});

const FloatingMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowMenu(false);
  };

  return (
    <Box position="fixed" bottom={16} right={16}>
      <LargeFab color="primary" aria-label="Menu" onClick={handleClick}>
        <LocalDining />
      </LargeFab>
      <MuiMenu
        anchorEl={anchorEl}
        open={showMenu}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 500,
            overflowY: 'auto',
            width: 300,
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton color="inherit" onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <CustomMenu />
      </MuiMenu>
    </Box>
  );
};

export default FloatingMenuButton;
