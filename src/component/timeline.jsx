import { NavLink } from "react-router-dom"

function ArchitecturalTimeline(){
    return(
        <div className="my-5">
            <div className="text-center timeline-heading">
        <h1>Architectural Journey of India</h1>
        <p>"Tracing India's architectural evolution from ancient to modern times."</p>
            </div>
        <div className="container timeline-card text-center">
            <div className="border timelines px-4 py-2 mx-4">
            <h3 className="text-center">Ancient</h3>
            <h4 className="text-center">2500 BCE - 1200 CE</h4>
            <img src="https://i.pinimg.com/1200x/db/62/dc/db62dc97fd2d413459b10bc1b4260103.jpg" alt="" className="me-3 mb-3"/>
            <img src="https://i.pinimg.com/1200x/7a/59/f9/7a59f907add61846e694eb6a5fbaef0b.jpg" alt="" className="mb-3 "/>
            <p>Indus Valley, Buddhist stupas, Ashokan pillars</p>
            </div>
            <div className="border timelines px-4 py-2 mx-4">
            <h3 className="text-center">Medieval</h3>
            <h4 className="text-center">1200 - 1750</h4>
            <img src="https://i.pinimg.com/736x/ec/b1/bb/ecb1bba5716db7b3b5b80f82855cb2b6.jpg" alt="" className="me-3 mb-3"/>
            <img src="https://i.pinimg.com/736x/5a/4d/5b/5a4d5bfaacb5e5fa8a4c84fa809e1aa7.jpg" alt="" className="mb-3"/>
            <p>Hindu temples, Indo-Islamic architecture</p>
            </div>
            <div className="border timelines px-4 py-2 mx-4">
            <h3 className="text-center">Modern</h3>
            <h4 className="text-center">1750 - Present</h4>
            <img src="https://i.pinimg.com/1200x/b1/64/18/b16418fedb969decdc99d3ce942981a3.jpg" alt="" className="me-3 mb-3"/>
            <img src="https://i.pinimg.com/1200x/a4/f3/c7/a4f3c773da35bc3b0cb0661eff8b781d.jpg" alt="" className="mb-3"/>
            <p>Colonial architecture, contemporary landmarks</p>
            </div>
            <NavLink to="/architecture"><button className="btn my-3">View Full Architecture Timeline</button></NavLink>
        </div>
        </div>
    )
}

export default ArchitecturalTimeline