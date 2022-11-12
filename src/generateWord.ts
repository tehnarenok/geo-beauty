import source from './source.json'
import { IWord, Letter } from './types'
import shuffle from 'lodash/shuffle'

const WORD = 'BEAUTY'.toUpperCase()

export const generateWord = (): IWord => {
	const dataSource: Letter[] = shuffle(source);
	
	const word: IWord = [];
	
	for (const letter of WORD) {
		word.push(dataSource.find(el => el.letter.toUpperCase() === letter)!);
	}

	return word;
}