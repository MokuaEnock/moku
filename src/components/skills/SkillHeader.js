import {Link} from "react-router-dom"


export default function SkillHeader(){
    return<header>
        <Link to="/">Home</Link>

        <form>
            <input type="text" placeholder="Search Skill"/>
            <button type="submit">Search</button>
        </form>
        
    </header>
}
