import React from "react";
import "./Projects.css";
import signsImg from "../../imgs/road-signs-ss.webp";
import pomoImg from "../../imgs/pomo-ss.webp";
import bpmImg from "../../imgs/bpm-ss.webp";

const Projects = () => {
	return (
		<div className='projects' id='projects'>
			<h1>Projects</h1>
			<div className='projects-cont'>
				<div className='project'>
					<h2>Road Signs Quiz</h2>
					<img src={signsImg} alt='road signs quiz website' />
					<p>
						This website is a way for people who plan on taking the Cypriot Driving Test
						to practice their knowledge of the road signs. It was built by me during my
						1st year studying Computer Engineering at the Cyprus University of
						Technology.
					</p>
					<p>
						This test includes all the road signs that are part of the official driving
						rules booklet which is sold at bookshops and kiosks around the island.
						Warning signs, order signs, and information signs are all in the test. The
						test is not limited by time as it's meant to be taken at your own pace in
						your own time. Your results will be displayed at the end of the test.
					</p>
					<p>The site was built using ReactJS, React Router and CSS.</p>
					<div className='links'>
						<a
							href='https://davidbalian.github.io/road-signs/'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live View
						</a>
						<a
							href='https://github.com/davidbalian/road-signs'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub Repository
						</a>
					</div>
				</div>
				<div className='project'>
					<h2>Pomodoro Timer</h2>
					<img src={pomoImg} alt='pomodoro timer website' />
					<p>
						This website is meant to be a tool to improve productivity and time
						management for various tasks including studying and working. It is based on
						the{" "}
						<a
							href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							Pomodoro Technique
						</a>{" "}
						which is a time management method developed by Francesco Cirillo in the late
						1980s. It uses a timer to break work into intervals, typically 25 minutes in
						length, separated by short breaks.
					</p>
					<p>The site was built using ReactJS and CSS.</p>
					<div className='links'>
						<a
							href='https://davidbalian.github.io/pomodoro/'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live View
						</a>
						<a
							href='https://github.com/davidbalian/pomodoro'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub Repository
						</a>
					</div>
				</div>
				<div className='project'>
					<h2>BPM Tapper</h2>
					<img src={bpmImg} alt='bpm tapper website' />
					<p>
						This website is a tool meant to calculate the bpm or tempo of any song you
						might be listening to. Tap the "Tap" button with the same tempo of the song
						you're listening to and the app will display the bpm.
					</p>
					<p>
						BPM (Or "Beat per minute") is self-explanatory: it indicates the number of
						beats in one minute. For instance, a tempo notated as 60 BPM would mean that
						a beat sounds exactly once per second.
					</p>
					<p>The site was built using ReactJS and CSS.</p>
					<div className='links'>
						<a
							href='https://davidbalian.github.io/bpm/'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live View
						</a>
						<a
							href='https://github.com/davidbalian/bpm/'
							className='external-link'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub Repository
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
