import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { Card } from 'react-native-paper';
import star from '../../../../assets/star';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled(View)`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Info = styled(View)`
    padding: {(props) => -moz-context-properties.theme.space[3]} ;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)` 
    font-family: {(props) => props.theme.fonts.body} ;
    font-size: ${(props) => props.theme.fontSizes.caption};
    background-color: ${(props) => props.theme.colors.bg.primary};
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
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
