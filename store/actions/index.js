export const RECEIVE_DECKS = 'RECEIVE_ENTRIES'
export const STORE_DECK = 'STORE_DECK'
export const STORE_CARD_TO_DECK = 'STORE_CARD_TO_DECK'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function storeDeck(deck) {
    return {
        type: STORE_DECK,
        deck
    }
}

export function storeCardToDeck(card, deckTitle) {
    return {
        type: STORE_CARD_TO_DECK,
        card,
        deckTitle
    }
}