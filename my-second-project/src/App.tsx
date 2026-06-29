import './App.css'
import { Recipe } from './components/Recipe'
import IcedCaramelImage from './assets/recipes/iced_caramel.webp'
import CafeMochaImage from './assets/recipes/cafe_mocha.webp'
import Affogato from './assets/recipes/affogato.webp'
import Sparkiling from './assets/recipes/sparkling.webp'
import Vanilla from './assets/recipes/vanilla.webp'
import { Coffee } from './components/Coffee'

function App() {
	return (
		<>
			<h1 className='title'>Receitas StarBucks</h1>
			<div className='recipe-list'>
				<Recipe
					onClick={() =>
						alert('Você quer ver mais de: Iced Caramel Machiatto')
					}>
					<Coffee
						imageSrc={IcedCaramelImage}
						coffee={{
							name: 'Iced Caramel Macchiato',
							description: 'Rico e com toque de Bauilha',
							preparationTime: 3,
						}}
					/>
				</Recipe>

				<Recipe>
					<Coffee
						imageSrc={CafeMochaImage}
						coffee={{
							name: 'Café mocha',
							description: 'Um classico starbuks',
							preparationTime: 2,
						}}
					/>
				</Recipe>

				<Recipe>
					<Coffee
						imageSrc={Affogato}
						coffee={{
							name: 'Affogato',
							description: 'Impactante de cremoso',
							preparationTime: 5,
						}}
					/>
				</Recipe>

				<Recipe>
					<Coffee
						imageSrc={Sparkiling}
						coffee={{
							name: 'Sparkling mint expresso',
							description: 'Encorpado e refrescante',
							preparationTime: 3,
						}}
					/>
				</Recipe>

				<Recipe>
					<Coffee
						imageSrc={Vanilla}
						coffee={{
							name: 'Vanilla Latte',
							description: 'Um classicom com um toque especial',
							preparationTime: 3,
						}}
					/>
				</Recipe>
			</div>
		</>
	)
}

// <>
//   <h1>Propriedades</h1>
//   <p>Componentes utilizam propriedades para se comunicar entre si. <br/>
//   Elas nos permitem passar qualquer valor ou expressão Javascript de um
//   componente para otro</p>
// </>

export default App
