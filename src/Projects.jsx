import Card from "./Card"

export default function Projects() {
    const projects = [
        {
            "id": 1,
            "title": "Blog API",
            "description": "A FastAPI based back-end for a blogging platform with features like comments, posts, likes, etc with JWT authentication.",
            "date": "May 2025",
            "link": "https://github.com/Infamous003/blog-api"
        },
        {
            "id": 2,
            "title": "E-commerce backend",
            "description": "A FastAPI based back-end for an E-commerce platform",
            "date": "Jun 2025",
            "link": "https://github.com/Infamous003/E-Commerce-App"
        },
        {
            "id": 3,
            "title": "React front-end",
            "description": "React based front-end for my Blog-API",
            "date": "Jul 2025",
            "link": "https://github.com/Infamous003/blog-api-frontend"
        },
        {
            "id": 4,
            "title": "MaBlog",
            "description": "A fullstack Django project for blogging, where users can post blogs, register, filter posts, etc",
            "date": "April 2025",
            "link": "https://github.com/Infamous003/MaBlog"
        },
        
    ]
    return (
        <div className="projects-container">
            { projects.map((p) => 
                                <Card key={p.id} 
                                      title={p.title}
                                      description={p.description}
                                      date={p.date}
                                      link={p.link}
                                    />) }
        </div>
    )
}