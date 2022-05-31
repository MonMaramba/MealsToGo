import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: 'white';
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?t=st=1653874717~exp=1653875317~hmac=cbb323d10a52f07ac1a2e2016a7456e2682d97951d6b81db667f3d4ac81f9cf3&w=996',
    ],
    address = '100 some random address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
