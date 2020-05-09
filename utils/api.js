import { AsyncStorage } from 'react-native';
import { formatDeckResults, APP_KEY } from './_DATA';

export function getDecks() {
    return AsyncStorage.getItem(APP_KEY)
        .then(formatDeckResults)
}

export function getDeck(id) {
    return AsyncStorage.getItem(APP_KEY)
        .then(formatDeckResults)
        .then((result) => result[id])
}

export function saveDeckTitle(key, deck) {
    return AsyncStorage.mergeItem(APP_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function saveCardToDeck(title, card) {
    return AsyncStorage.getItem(APP_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            if (data[title] !== undefined) {
                data[title].questions.push(card);
                AsyncStorage.setItem(APP_KEY, JSON.stringify(data))
            }
        })
}