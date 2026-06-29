import { LikeButton } from './LikeButton'

interface Props {
	imageSource: string
	alternative: string
	user: string
	text: string
	onLikePost: React.MouseEventHandler<HTMLButtonElement>
}

export function Post({
	imageSource,
	alternative,
	user,
	text,
	onLikePost,
}: Props) {
	return (
		<div
			className='post'
			onClick={() => alert('Disparado evento div POST')}>
			<img
				src={imageSource}
				alt={alternative}
			/>
			<p>
				<b>@{user}:</b>
				{text}
			</p>
			<LikeButton onLike={onLikePost} />
		</div>
	)
}
