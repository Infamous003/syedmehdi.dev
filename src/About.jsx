export default function About() {
    return(
        <div className="about-section">
            <h1 className="greetings">Hey there! Syed here,</h1>
            <p className="about-subtitle"><b>I'm a recent graduate and a backend developer in the making.</b></p>
            <br />
            <p>I mostly use <b>Python</b> with <b>FastAPI</b> and <b>PostgreSQL</b> for back-end and <b>JavaScript</b> with <b>React</b> for the font-end.</p>
            <br />
            <p>When I'm bored of submitting job applications, I spend time dockerizing my projects and learn <b>Go</b>. And when bored of that, I love playing anger inducing games like <b>Sekiro</b> and <b>Dark Souls 3</b></p>
            <br />

            <p>You can find me on:</p>
            <ul className="socials-container">
                <li>&gt; <a href="https://github.com/Infamous003" className="socials-link">GitHub</a></li>
                <li>&gt; <a href="#" className="socials-link">Twitter</a></li>
                <li>&gt; <a href="#" className="socials-link">LinkedIn</a></li>
            </ul>
            <br />
        </div>
    )
}