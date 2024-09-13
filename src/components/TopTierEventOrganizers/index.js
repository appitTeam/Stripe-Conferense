import React from 'react';
import { Card, CardMedia } from '@mui/material';
import styled from '@emotion/styled';

// Define the style for the event card
const StyledCard = styled(Card)({
  width: '150px', // Adjust width for smaller card appearance
  height: '150px', // Adjust height for smaller card appearance
  margin: '1rem', // Adjust margin if necessary
  border: 'none', // Remove border
  overflow: 'hidden', // Ensure no overflow of content
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px', // Rounded corners
  // background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.1))', // Subtle gradient background
  // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.6)',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.2))', // Change gradient on hover
  },
  '@media (max-width: 600px)': {
    width: '80%', // Full width for mobile devices
  },
  '@media (min-width: 601px) and (max-width: 1200px)': {
    width: '60%', // Adjust width for tablet devices
  },
});

// Define the style for the card media (image)
const StyledCardMedia = styled(CardMedia)({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Cover the entire area of the card
  // borderRadius: '12px', // Rounded corners for the image
});

const TopTierEventOrganizer = ({ img }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={img.imageUrl}
        title="Event Organizer"
      />
    </StyledCard>
  );
};

export default TopTierEventOrganizer;


