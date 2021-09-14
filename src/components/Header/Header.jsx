import "./styles.css"; 


const Header = () => {
    return ( 
        <div className="header-wrapper">
         <img src="mazadatLogo.png" /> 

         <div className="header-wrapper_searchBar">
             <input className="form-control" /> 
             <button className="btn">Search</button>
         </div>
        </div>
      );
}
 
export default Header;