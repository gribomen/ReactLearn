import type React from 'react';

export interface TextInputProps {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
}