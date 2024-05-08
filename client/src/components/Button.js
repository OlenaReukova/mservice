import React from 'react';
import MUIButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/graduate');
  };
  return (
    <MUIButton onClick={handleClick} variant='contained'>
      Click me
    </MUIButton>
  );
}

export default Button;
