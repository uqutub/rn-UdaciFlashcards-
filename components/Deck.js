import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from '../store';

class Deck extends Component {

    render() {
        const { deck } = this.props;

        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                    'DeckView',
                    { deckTitle: deck.title }
                )}>
                    <Card>
                        <Text style={styles.heading}>{deck.title}</Text>
                        <Text style={styles.subHeading}>{deck.questions.length} Cards</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginBottom: 10
    },
    subHeading: {
        fontSize: 20,
        marginBottom: 10,
        color: 'grey'
    },
})

const mapStateToProps = ({ decks }, { deckTitle, navigation }) => ({
    deck: decks[deckTitle],
    navigation
})

export default connect(mapStateToProps)(Deck);