import React from "react";

import { Link } from "react-router-dom";

const API_KEY = "eb553c2aaa97d1b7165b442b3d13bc65";

class Recipe extends React.Component {
	state = {
		activeRecipe: []
	};
	componentDidMount = async () => {
		const recipe_id = this.props.location.state.recipe;

		const req = await fetch(
			`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&rId=${recipe_id}`
		);

		const res = await req.json();
		console.log(res);
		this.setState({ activeRecipe: res.recipes[0] });
		console.log(this.state.activeRecipe);
	};
	render() {
		const recipe = this.state.activeRecipe;
		return (
			<div className="container">
				{this.state.activeRecipe.length !== 0 && (
					<div className="active-recipe">
						<img
							className="active-recipe__img"
							src={recipe.image_url}
							alt={recipe.title}
						/>
						<h3 className="active-recipe__title">{recipe.title}</h3>
						<h4 className="active-recipe__publisher">
							Publisher: <span>{recipe.publisher}</span>
						</h4>
						<p className="active-recipe__website">
							Website:
							<span>
								<a href={recipe.publisher_url}>{recipe.publisher_url}</a>
							</span>
						</p>
						<button className="active-recipe__button">
							<Link to="/">Go Home</Link>
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default Recipe;
