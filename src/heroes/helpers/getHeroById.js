import { heroes } from "../data/heroes";



export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );
}

///Funcion para encontrar id de hero si existe lo regreso, si no existe no regresa nada