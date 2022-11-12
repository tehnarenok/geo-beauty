import source from './source.json'
import { Letter } from './types'
import shuffle from 'lodash/shuffle'

export const getIcon = (): string => {
	const dataSource: Letter[] = shuffle(source);
	
	return (dataSource.find(el => el.letter.toUpperCase() === 'B'.toUpperCase())!).picname;
}