export interface movie
{
    movie_id: number,
    title: String,
    box_office:number,
    active:String,
    dateOfLaunch:Date,
    genre:String,
    hasTeaser:String,
}

export interface Favorites
{
    id: number,
    favUsId: number,
    movies : movie,
    
}