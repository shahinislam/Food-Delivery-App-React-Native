import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home, Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/Tabs'

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={"Home"}
			>
				<Stack.Screen name="Home" component={Tabs} />
				<Stack.Screen name="Restaurant" component={Restaurant} />
				<Stack.Screen name="OrderDelivery" component={OrderDelivery} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App

const styles = StyleSheet.create({})
