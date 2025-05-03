import './TextClipping.css'

const TextClipping = () => (
	<div>
		<h1 className="bg-linear-to-r from-amber-400 to-cyan-400 bg-clip-text pb-1 text-5xl text-transparent selection:bg-[rgb(120,213,255)]/35">
			UI Playground
		</h1>

		<p className="flex gap-1">
			⬅️
			<span className="animate-gradient-text-left bg-[linear-gradient(to_right,cyan,lime,cyan)] bg-[size:200%] bg-clip-text text-transparent">
				Moving gradient background text
			</span>
			⬅️
		</p>

		<p className="flex gap-1">
			➡️
			<span className="animate-gradient-text-right bg-[linear-gradient(to_right,cyan,lime,cyan)] bg-[size:200%] bg-clip-text bg-[position:200%] text-transparent">
				Moving gradient background text
			</span>
			➡️
		</p>
	</div>
)

export default TextClipping
