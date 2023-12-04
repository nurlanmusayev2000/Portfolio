import Capture from '../imgs/Capture.PNG'
import Capture2 from '../imgs/Capture2.PNG'
import Capture3 from '../imgs/Capture3.PNG'



const Project=()=>{


	return(
		<div id="projects" className="projects">
			<h1>My Projects</h1>
			<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
			<div className="project-section">
				<div className="project-img">
					<img src={Capture} alt="" />
				</div>
				<div className="about-project">
					<h1>Ecommerce</h1>
					<p>Designed and implemented a fully functional ECommerce website from scratch, providing users with a seamless online shopping experience. Leveraged a modern tech stack, including React.js for the frontend and Node.js with Express.js for the backend. Incorporated key features such as a dynamic product catalog, user authentication, secure payment processing, and responsive design. The project highlights proficiency in frontend development, backend logic, database management with PostggreSql, and secure authentication using JSON Web Tokens (JWT). The website is accessible on various devices, showcasing an emphasis on user experience and responsive design.
					</p>
					<a href="https://github.com/nurlanmusayev2000/MyProject" target="Blank" className="btn btn-warning">Check Code</a>
				</div>
			</div>
			<div className="project-section">
				<div className="project-img">
					<img src={Capture2} alt="" />
				</div>
				<div className="about-project">
					<h1>Billioner Game</h1>
					<p>
						In this project i would like to show you my abilities about vanilla.js it is a game from 10 question when you entered game you should add your name and email adresas after finishing game you will get the score over the email.The questions is kept in database.Database was created in postgreSql and serverside over Node.js if you want about details of this game you can check my github profile
					</p>
					<a href="https://github.com/nurlanmusayev2000/DI__Bootcamp/tree/main/hackathon2" target="Blank" className="btn btn-warning">Check Code</a>
				</div>
			</div>
			<div className="project-section">
				<div className="project-img">
					<img src={Capture3} alt="" />
				</div>
				<div className="about-project">
					<h1>Currency Converter</h1>
					<p>
						It is a simple Currecny Converter
					</p>
					<a href="https://gleaming-croissant-d4ca63.netlify.app/" target="Blank" className="btn btn-warning">Check Code</a>
				</div>
			</div>
		</div>
	)
}

export default Project