import React,{useState} from 'react'
import './ProjectList.css'
export default function ProjectList() {


    const ACTIVE_PROJECT = [{'projNo':12,'projName':'Logo creation'},{'projNo':13,'projName':'Web Design'},{'projNo':24,'projName':'Video Editing'},{'projNo':38,'projName':'Content Writing'},{'projNo':92,'projName':'Web Scraping'},{'projNo':45,'projName':'Building E-commerce Website'},{'projNo':80,'projName':'Business Card Design'},{'projNo':66,'projName':'Enhancing Song "falana dhimkana"'}];
    const HISTORY_PROJECT = [{'projNo':92,'projName':'Web Scraping'},{'projNo':45,'projName':'Building E-commerce Website'},{'projNo':80,'projName':'Business Card Design'},{'projNo':66,'projName':'Enhancing Song "falana dhimkana"'}];
    
    const [currentList, setCurrentList] = useState(ACTIVE_PROJECT);

    const setCurrentListHandler = (listToSet) => {
                setCurrentList(listToSet);        
    }
    


    return (
        <div className="bg-DshBrd">
            <span className="title-wrap"><h1 className='title-your-proj'>Your Projects</h1></span>
            <span className="proj-btns"><button className="proj-btn active-proj" onClick={()=>setCurrentListHandler(ACTIVE_PROJECT)}>Active</button><button className="proj-btn history-proj" onClick={()=>setCurrentListHandler(HISTORY_PROJECT)}>History</button></span>
            <div className="proj-list">
                {
                  currentList.map(lstItm => (
                      <div className='proj-slab' key={lstItm.projNo}>
                          <h5>PRJ#{lstItm.projNo}</h5>
                          <h2>{lstItm.projName}</h2>
                      </div>
                  ))
                }
            </div>
            <button className="create-proj-btn">+ Create Project</button>
        </div>
    )
}
