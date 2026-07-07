import type { HTMLAttributes, ReactNode } from 'react';
import type React from 'react';

export interface ItemBarProps extends HTMLAttributes<HTMLDivElement>{
	text: string;
	icon?: 'none' | 'count' | 'exit' | 'profile';
	onClick?: React.MouseEventHandler;
	isActive?:ReactNode;
}