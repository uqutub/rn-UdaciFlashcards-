import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from '../store';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

class QuizView extends Component {
    state = {
        count: 0,
        correctAnwers: 0,
        inCorrectAnswers: 0,
        toggle: true,
    };

    handleGuess = (ans) => {
        const { decks } = this.props
        const deck = decks[this.props.navigation.state.params.deckTitle]
        if (ans === 'correct') {
            this.setState({
                count: this.state.count + 1,
                correctAnwers: this.state.correctAnwers + 1
            });
        } else {
            this.setState({
                count: this.state.count + 1,
                inCorrectAnswers: this.state.inCorrectAnwers + 1
            });
        }
        if (this.state.count === deck.questions.length) {
            clearLocalNotification().then(setLocalNotification);
        }
    }

    questionAndAnswerSwitch = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    startOverQuiz = () => {
        this.setState({
            count: 0,
            correctAnwers: 0,
            inCorrectAnswers: 0
        })
    }
    render() {
        const { decks } = this.props;
        const { toggle } = this.state;
        const deck = decks[this.props.navigation.state.params.deckTitle];
        const showQuestion = this.state.count < deck.questions.length ? true : false;
        const currentQuestion = deck.questions[this.state.count];

        if (deck.questions.length === 0) {
            return (
                <Card>
                    <Text>Sorry You cannot take a quiz because there are no cards in the deck.</Text>
                </Card>
            )
        }
        return (
            <View style={styles.container}>
                {showQuestion ?
                    <Card>
                        <Text>{this.state.count} / {deck.questions.length}</Text>
                        <Text style={styles.text}>
                            {toggle ? currentQuestion.question : currentQuestion.answer}
                        </Text>
                        <Button
                            title={toggle ? 'Answer' : 'Question'}
                            buttonStyle={{ marginBottom: 20, borderRadius: 50 }}
                            onPress={this.questionAndAnswerSwitch} />
                        {!toggle && (
                            <>
                                <Button
                                    buttonStyle={{ backgroundColor: '#008000', marginBottom: 10 }}
                                    title='Correct'
                                    onPress={() => this.handleGuess('correct')} />
                                <Button
                                    buttonStyle={{ backgroundColor: '#FF0000' }}
                                    title='Incorrect'
                                    onPress={() => this.handleGuess('inCorrect')} />
                            </>
                        )}
                    </Card>
                    :
                    <Card>
                        <Text style={styles.text}>Correct Answers: {this.state.correctAnwers} out of {deck.questions.length}</Text>
                        <Button
                            buttonStyle={{ marginBottom: 10 }}
                            title='Restart Quiz'
                            onPress={this.startOverQuiz} />
                        <Button
                            title='Back to Deck'
                            onPress={() => this.props.navigation.navigate(
                                'DeckView',
                                { deckTitle: deck.title }
                            )} />
                    </Card>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        marginBottom: 10
    },
})

const mapStateToProps = ({ decks }) => ({
    decks
});

export default connect(mapStateToProps)(QuizView);