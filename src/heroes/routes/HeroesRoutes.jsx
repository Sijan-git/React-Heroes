import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../../src/ui";
import { DcPages, HeroPage, MarvelPage, SearchPage } from "../pages";



export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>

      <div>
      <Routes>
        <Route path="marvel" element={<MarvelPage/>} />
        <Route path="dc" element={<DcPages/>} />
        <Route path="search" element={<SearchPage/>} />
        <Route path="hero/:id" element={<HeroPage/>} />

        <Route path="/" element={ <Navigate to='/marvel'/>} />

        {/* //Sirve para redireccionar las paginas se podria colocar error 404 */}
      </Routes>

      </div>

     
    </>
  )
}

