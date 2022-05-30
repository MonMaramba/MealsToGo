import React from "react";
import { Text } from "react-native";
import { Card } from 'react-native-paper'

export const RestaurantInfo = ({ restaurant = {} }) => {
    const { name = "Some Restaurant", icon, photos=["https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?t=st=1653874717~exp=1653875317~hmac=cbb323d10a52f07ac1a2e2016a7456e2682d97951d6b81db667f3d4ac81f9cf3&w=996"], address="100 some random address", isOpenNow=true, rating= 4, isClosedTemporarily } = restaurant;
    return (
        <Card>
            <Card.Cover source={{ uri: photos[0]}} />
            <Text>{name}</Text>
            <Text>Card title</Text>
        </Card>)
}