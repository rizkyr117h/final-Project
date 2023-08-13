import './MainHeader.css';
import { AiFillPlaySquare } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 

function MainHeader() {
  return (
    <header>
      <Link to="/" className="header-link"> 
        <div className="header">
          <AiFillPlaySquare />
          <div className="title">VideoPlay</div>
        </div>
      </Link>
    </header>
  );
}

export default MainHeader;
