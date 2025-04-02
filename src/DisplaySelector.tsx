import { Dispatch, SetStateAction } from 'react'
import { displays } from './displays'
import clsx from 'clsx'

type Props = {
	display: Display
	setDisplay: Dispatch<SetStateAction<Display>>
}

const DisplaySelector = ({ display, setDisplay }: Props) => (
	<div>
		{displays.map((d: Display) => (
			<button
				className={clsx(
					'mb-4 bg-slate-300 px-3 py-1 hover:bg-slate-500 hover:text-white dark:bg-slate-700',
					{ 'bg-slate-500! text-white': d === display },
				)}
				onClick={() => setDisplay(d)}
			>
				{d}
			</button>
		))}
	</div>
)

export default DisplaySelector
