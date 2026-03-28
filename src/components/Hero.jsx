import "./Hero.css"

const Hero = () => {
    return (
        <div>
            <p className="main-text">
                Building <span className="secondary-text">Scalable Digital Foundations</span>
            </p>
            <p>Especialista en arquitectura de sistemas distribuidos y desarrollo full-
stack de alto rendimiento. Transformo visiones complejas en código
elegante, mantenible y escalable.</p>
            <div className="btn-container">
                <button className="btn">View Projects</button>
                <button className="btn">About Me</button>
            </div>
        </div>
    )
}

export default Hero;