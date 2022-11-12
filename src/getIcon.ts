import source from './source.json'
import { Letter } from './types'
import shuffle from 'lodash/shuffle'

const dataSource: Letter[] = shuffle(source);

export const getIcon = (): string => {
	return (dataSource.find(el => el.letter.toUpperCase() === 'B'.toUpperCase())!).picname;
}