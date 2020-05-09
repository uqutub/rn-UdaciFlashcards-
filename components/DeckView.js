import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from '../store';

class DeckView extends Component {

    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params;
        return {
            title: deckTitle
        }
    }

    render() {
        const { decks } = this.props;
        const { deckTitle } = this.props.navigation.state.params;
        const deck = decks[deckTitle];

        return (
            <View style={style.container}>
                <Text style={style.mainHeading}>{deck.title}</Text>
                <Text style={style.subHeading}>{deck.questions.length} cards</Text>
                <Button
                    title="Add Card"
                    onPress={() => this.props.navigation.navigate('NewCard', { deckTitle: deck.title })}
                    buttonStyle={{ marginTop: 20, marginBottom: 10 }}
                />
                <Button
                    title="Start Quiz"
                    onPress={() => this.props.navigation.navigate('QuizView', { deckTitle: deck.title })}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHeading: {
        fontSize: 35,
    },
    subHeading: {
        fontSize: 25,
        color: 'grey'
    },
});

const mapStateToProps = ({ decks }) => ({
    decks
});

export default connect(mapStateToProps)(DeckView);