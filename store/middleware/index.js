import { RECEIVE_DECKS, STORE_DECK, STORE_CARD_TO_DECK } from '../actions'

function decks(state = {}, action) {
    switch (action?.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: action.decks
            }
        case STORE_DECK:
            return {
                decks: {
                    ...state.decks,
                    [action.deck.title]: action.deck
                }
            }
        case STORE_CARD_TO_DECK:
            state.decks[action.deckTitle].questions.push(action.card)
            return {
                ...state,
                decks: state.decks
            }
        default:
            return state
    }
}

export default decks