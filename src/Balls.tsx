import clsx from 'clsx'
import './Balls.css'

const Balls = () => (
	<>
		<div
			className={clsx(
				'relative grid size-20 place-items-center rounded-full border-2 border-slate-400',
				'before:absolute before:inset-0 before:size-12 before:translate-[14px] before:rounded-full before:border-2 before:border-slate-400',
				'after:absolute after:inset-0 after:size-4 after:translate-[30px] after:rounded-full after:border-2 after:border-slate-400',
			)}
		>
			<div className="animate-loading-spin-sm col-[1] row-[1] size-2 rounded-full bg-slate-400"></div>
			<div className="animate-loading-spin-md col-[1] row-[1] size-2 rounded-full bg-slate-400"></div>
			<div className="animate-loading-spin-lg col-[1] row-[1] size-2 rounded-full bg-slate-400"></div>
		</div>

		<div className="balls">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</>
)

export default Balls
