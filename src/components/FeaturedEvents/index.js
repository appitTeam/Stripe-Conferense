import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)({
  width: '300px', // Fixed width for all cards
  height: '400px', // Fixed height for all cards
  margin: '1rem',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column', // Ensure content is aligned vertically
  alignItems: 'center',
  borderRadius: '12px',
  border: '1px solid #ddd', // Light border
  overflow: 'hidden', // Ensure no overflow of content
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
  },
  '@media (max-width: 600px)': {
    width: '90%', // Adjust width for mobile devices
  },
  '@media (min-width: 601px) and (max-width: 1200px)': {
    width: '80%', // Adjust width for tablet devices
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: '200px', // Fixed height for media
  width: '100%', // Full width of the card
  objectFit: 'cover', // Ensure image covers the area
  borderBottom: '1px solid #ddd', // Separator line
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center content vertically
  height: 'calc(100% - 200px)', // Adjust height to fill remaining space
  padding: '1rem', // Padding inside card
  textAlign: 'center', // Center text
  overflow: 'hidden', // Prevent overflow of text
});

const FeaturedCard = ({ image, date, name, events }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={image}
        title={name}
      />
      <StyledCardContent>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: '600', color: 'text.secondary' }}>
          {date}
        </Typography>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.5rem 0' }} component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
          {events}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default FeaturedCard;