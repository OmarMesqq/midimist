import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './../layout/Home';
import { Chat } from './../layout/Chat';
import { List } from './../layout/GridList';
import { Search } from './../layout/Search';
import { AddMedia } from "../layout/AddMedia";

const Tab = createBottomTabNavigator();

export const BottomBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: styles.bottomBarStyle,
            tabBarActiveTintColor: '#A3FFE6',
            tabBarInactiveTintColor: '#D9D9D9',
            tabBarLabelStyle: styles.text,
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen name="Home" component={Home} options={{
    
                tabBarIcon: ({color}) => (
                    <Image source={require('../../assets/images/home.png')} style={[styles.icon, { tintColor: color }]}/>
                )
            }} />

            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({color}) => (
                    <Image source={require('../../assets/images/chat.png')} style={[styles.icon, { tintColor: color }]}/>
                )
            }} />

            <Tab.Screen name="Add" component={AddMedia} options={{
                tabBarIcon: ({color}) => (
                    <Image source={require('../../assets/images/add_media.png')} style={[styles.icon, { tintColor: color }]}/>
                )
            }} />

            <Tab.Screen name="My Lists" component={List} options={{
                tabBarIcon: ({color}) => (
                    <Image source={require('../../assets/images/my_lists.png')} style={[styles.icon, { tintColor: color }]}/>
                )
            }} />

            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({color}) => (
                    <Image source={require('../../assets/images/search.png')} style={[styles.icon, { tintColor: color }]} />
                )
            }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        marginTop: 4,
    },
    text: {
        fontSize: 12,
        marginBottom: 4, 
    },
    bottomBarStyle: {
        backgroundColor: '#1D1D1D',
        height: 54,
        borderTopWidth: 0,
    },
});
