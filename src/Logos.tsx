import reactLogo from './assets/react.svg' // src/assets/...
import viteLogo from '/vite.svg' // public/...

const Logos = () => (
	<div className="flex justify-evenly">
		<a href="https://vite.dev" target="_blank">
			<img
				src={viteLogo}
				className="h-28 p-6 duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
				alt="Vite logo"
			/>
		</a>
		<a href="https://react.dev" target="_blank">
			<img
				src={reactLogo}
				className="motion-safe:animate-logo-spin h-28 p-6 duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
				alt="React logo"
			/>
		</a>
	</div>
)

export default Logos
