import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(({ className, isValid = true, ...props }, ref) => {
	return (
		<div className={styles['input-wrapper']}>
			<input ref={ref} {...props} className={cn(className, styles['input'], {
				[styles['invalid']]: !isValid
			})} {...props} />
			<img className={styles['icon']} src='/search-icon.svg' alt='Иконка лупы' />
		</div>
	);
});

export default Search;   