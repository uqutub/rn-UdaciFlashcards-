import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { storeCardToDeck, connect } from '../store';
import { saveCardToDeck } from '../utils/api';

class NewCard extends Component {
    state = { question: '', answer: '' };

    handleChange = (e, prop) => {
        this.setState({ [prop]: e });
    }

    onSubmit = () => {
        const { deckTitle } = this.props.navigation.state.params;
        this.props.dispatch(storeCardToDeck(this.state, deckTitle));
        saveCardToDeck(deckTitle, this.state);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Input
                    placeholder='Question'
                    onChangeText={(e) => this.handleChange(e, 'question')}
                    inputContainerStyle={{ marginBottom: 15 }}
                />
                <Input
                    placeholder='Answer'
                    onChangeText={(e) => this.handleChange(e, 'answer')}
                    inputContainerStyle={{ marginBottom: 15 }}
                />

                <Button title="Submit" onPress={this.onSubmit} />
                
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default connect()(NewCard);