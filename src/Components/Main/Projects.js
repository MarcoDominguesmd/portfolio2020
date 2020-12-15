import React from 'react';
import mealPlanImg from '../../items/imgs/foodPlanImg.png';
import weddingImg from '../../items/imgs/weddingImg.PNG';


export const Projects = () => {
    return (
        <div id="projects">
            <h2>Recent projects</h2>
            <div class="posts">
                <article id="mealPlan">
                    <a href="https://food-week-plan.web.app/index.html" class="image"><img src={mealPlanImg} alt="" /></a>
                    <div>
                        <h3>Meal planner</h3>
                        <p>An application developed using Progressive Web App, with Firebase used for the backend. This app was created for personal use, as a shopping list and as a weekly meal planner. It is designed for mobile devices.</p>
                        <a href="https://github.com/MarcoDominguesmd/mealPlan" class="button">Source Code</a>
                    </div>
                </article>
                <article id="weddingSite">
                    <a href="https://monikaandmarco.co.uk/" class="image"><img src={weddingImg} alt="" /></a>
                    <div>
                        <h3>Wedding website</h3>
                        <p>A website made with React.js and Firebase. This was designed to provide information about our wedding to our guests. They are also able to RSVP through the site.</p>
                        <a href="https://github.com/MarcoDominguesmd/WeddingWebsite" class="button">Source code</a>
                    </div>
                </article>
            </div>

        </div>
    )
}

export default Projects