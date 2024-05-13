import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './../layout/Home';

const Tab = createBottomTabNavigator();


export const BottomBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: styles.bottomBarStyle,
            tabBarActiveTintColor: '#A3FFE6',
            tabBarInactiveTintColor: 'gray',
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={require('../../assets/home.png')}
                        style={[styles.icon, { tintColor: color }]}
                    />
                )
            }} />

            <Tab.Screen name="Chat" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={require('../../assets/chat.png')}
                        style={[styles.icon, { tintColor: color }]}
                    />
                )
            }} />

            <Tab.Screen name="Add" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={require('../../assets/add_media.png')}
                        style={[styles.add_media_icon, { tintColor: color }]}
                    />
                )
            }} />

            <Tab.Screen name="My Lists" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={require('../../assets/my_lists.png')}
                        style={[styles.icon, { tintColor: color }]}
                    />
                )
            }} />

            <Tab.Screen name="Search" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={require('../../assets/search.png')}
                        style={[styles.icon, { tintColor: color }]}
                    />
                )
            }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    add_media_icon: {
        width: 35,
        height: 35,
    },
    bottomBarStyle: {
        backgroundColor: '#1D1D1D',
        height: 54
    },
});