import { Link } from 'react-router-dom';

const NavBar = () => {

	return (

		<ul>

			<li>
			
				<Link to =  '/' > Home </Link>

				<Link to = '/CarEmissionsCalculator' > CarEmissionsCalculator </Link>

			</li>

		</ul>

	);
}

export default NavBar;