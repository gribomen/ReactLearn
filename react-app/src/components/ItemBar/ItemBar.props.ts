import type React from 'react';

export interface ItemBarProps {
	text: string;
	icon?: 'none' | 'count' | 'exit' | 'profile';
	active?: string,
	onClick?: React.MouseEventHandler;
}