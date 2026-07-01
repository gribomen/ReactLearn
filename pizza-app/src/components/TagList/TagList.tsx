import type { TagListProps } from './TagList.props';

function TagList({ tags }: TagListProps) {

	return (
		<ul>
			{tags.map(item => {
				return (<li>{item}</li>);
			})}
		</ul>
	);
}

export default TagList;