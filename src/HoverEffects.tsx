const HoverEffects = () => (
	<>
		<button className="cursor-pointer rounded-lg bg-stone-100 px-2.5 py-5 font-medium outline-2 outline-offset-0 outline-transparent transition-[outline-color,outline-offset] duration-150 hover:outline-offset-3 hover:outline-cyan-600 dark:bg-stone-700">
			Outline effect on hover
		</button>

		<button
			style={{
				backgroundImage:
					'linear-gradient(to bottom, gray, black), linear-gradient(to right, cyan, lime)',
				backgroundClip: 'padding-box, border-box',
			}}
			className="max-w-52 cursor-pointer rounded-2xl border-[10px] border-transparent bg-origin-border px-5 py-2.5 text-center text-slate-100 outline-2 -outline-offset-4 outline-black transition-[outline-offset] hover:-outline-offset-8"
		>
			Another outline effect on hover
		</button>
	</>
)

export default HoverEffects
