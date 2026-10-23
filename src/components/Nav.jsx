import { Link } from 'react-router';
import {useState} from 'react'


export default function Nav(){
    const [activePage,setActivePage] = useState('/');
    return(
        <nav>
            <div className="container">
                <div className="nav-content">
                    <Link className={activePage === '/'?'nav-link active':'nav-link'} onClick={()=>setActivePage('/')} to="/">Home</Link>
                    <Link className={activePage === '/bookShelf'?'nav-link active':'nav-link'} onClick={()=>setActivePage('/bookShelf')} to={'/bookShelf'}>
                        Bookshelf
                    </Link>
                </div>
            </div>
        </nav>
    );
}