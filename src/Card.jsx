export default function Card({ title, description, date, link }) {
    return (<>
        <div className="card">
            <a href={link}>
                <h3 className="project-title">
                    { title }
                </h3>
            </a>
            <p className="project-description">
                { description }
            </p>
            <p className="project-date">{ date }</p>
        </div>
    </>)
}