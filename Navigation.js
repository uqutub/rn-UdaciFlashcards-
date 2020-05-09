import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { DeckList, DeckView, NewDeck, NewCard, QuizView } from './components';

const Tabs = createBottomTabNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'Deck List'
        })
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'New Deck'
        })
    }
}, {
    navigationOptions: {
        header: null
    }
});

const MainNavigator = createAppContainer(createStackNavigator({
    Home: {
        screen: Tabs
    },
    DeckView: {
        screen: DeckView
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: ({ navigation }) => ({
            title: 'New Card'
        })
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: ({ navigation }) => ({
            title: 'Quiz'
        })
    }
}));

export default MainNavigator;