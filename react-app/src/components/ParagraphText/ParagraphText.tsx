import styles from './ParagraphText.module.css';
import cn from 'classnames';
import type { ParagraphTextProps } from './ParagraphText.props';
import type { FC } from 'react';

const ParagraphText: FC<ParagraphTextProps> = ({ fontSize, text }) => {
	return (
		<p className={cn(styles['p-text'], styles[`fs${fontSize}`])} style={{ whiteSpace: 'pre-line' }}>{text}</p>
	);
};

export default ParagraphText;
