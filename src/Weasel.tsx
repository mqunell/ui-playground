import clsx from 'clsx'
import weasel from './assets/weasel.jpg'

const Weasel = () => (
	<div
		className={clsx(
			// Base
			'relative size-28 rounded-full',
			// Black outline over image and border
			'outline-[6px] -outline-offset-[3px] outline-black/40',
			// Gradient border
			'before:animate-slow-spin before:absolute before:-inset-2 before:-z-[1] before:rounded-full before:bg-[conic-gradient(purple,#4f46e5,purple)]',
			'after:animate-slow-spin after:absolute after:-inset-2 after:-z-[1] after:rounded-full after:bg-[conic-gradient(purple,#4f46e5,purple)] after:opacity-70 after:blur-sm', // Same as before::, but with blur and opacity
		)}
	>
		<img src={weasel} className="aspect-square w-full rounded-full object-cover object-top" />
	</div>
)

export default Weasel
