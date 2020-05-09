import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';
import { connect, storeDeck } from '../store';
import { saveDeckTitle } from '../utils/api';

class NewDeck extends Component {
    state = { title: '' };

    componentDidMount() {
        this.willFocus = this.props.navigation.addListener('willFocus', () => {
            this.setState({ title: '' });
        });
    }

    componentWillUnmount() {
        this.willFocus.remove();
    }

    handleTextChange = (e) => {
        this.setState({ title: e });
    }

    onSubmit = () => {
        this.props.dispatch(storeDeck({ title: this.state.title, questions: [] }))
        saveDeckTitle(this.state.title, { title: this.state.title, questions: [] })
        this.props.navigation.navigate('DeckView', { deckTitle: this.state.title })
    }

    render() {
        return (
            <View>
                <Card>
                    <Text style={{ fontSize: 35 }}>What is the title of your new deck?</Text>
                    <Input
                        placeholder="Title"
                        onChangeText={this.handleTextChange}
                        value={this.state.title}
                        inputContainerStyle={{ marginBottom: 30, marginTop: 30 }}
                    />
                    <Button title="Submit" onPress={this.onSubmit} />
                </Card>
            </View>
        )
    }
}

export default connect()(NewDeck);