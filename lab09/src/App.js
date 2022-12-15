import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Outlet, Link, useSearchParams, useNavigate } from "react-router-dom";

function App() {
  return (

      <div className="App">
      <Title/>
      <MySidebar/>
  	 <Routes>
  	   <Route path="/" element={<Layout />}>
  		  <Route index element={<Home />} />
  		  <Route path="search" element={<Search />} />

  		  {/* Using path="*"" means "match anything", so this route
  				  acts like a catch-all for URLs that we don't have explicit
  				  routes for. */}
  		  <Route path="*" element={<NoMatch />} />
  	   </Route>
  	 </Routes>
      </div>
  );
}

function Layout() {
  return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
  );
}

function MySidebar() {
  return(
    <Sidebar>
      <Menu>
        <MenuItem routerLink={<Link to="/" />}> Home </MenuItem>
        <MenuItem routerLink={<Link to="/search" />}> Search </MenuItem>
        <MenuItem routerLink={<Link to="/nothing-here" />}>  Nothing Here </MenuItem>
      </Menu>
    </Sidebar>
  )
}

function Title() {
  return(
    <h3>Welcome to NTUT Web Programming</h3>
  )
}

function Home() {
  return (
    <div>
        <h2> This is our home! </h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Search() {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>

      <h2>Your search term: {searchParams.get("name")}</h2>
      <form onSubmit={handleSubmit}>
      <label>
      Search:
      <input type="text" name="name"/>
      </label>
      <input type="submit" value="Submit"/>
      </form>
     </div>
  );
}

export default App;
