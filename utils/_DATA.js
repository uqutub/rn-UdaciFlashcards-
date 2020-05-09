import { AsyncStorage } from 'react-native';
export const APP_KEY = 'UdaciFlashcards';

export const data = {
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is Function?',
                answer: 'A Set of Instructions.'
            }
        ]
    },
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A UI library'
            },
            {
                question: 'Where we need to make Ajax/API calls in React?',
                answer: 'In componentDidMount lifecycle event'
            }
        ]
    }
}

function initialize() {
    AsyncStorage.setItem(APP_KEY, JSON.stringify(data))
    return data
}

export function formatDeckResults(results) {
    return results === null ? initialize() : JSON.parse(results)
}