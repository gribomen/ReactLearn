import type React from 'react';

export interface SearchProps {
	isIcon: boolean;
	placeholder: string;
	size: number;
	ref?: React.ForwardedRef<HTMLInputElement>
}