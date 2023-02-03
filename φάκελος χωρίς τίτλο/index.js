class Movie{
   
    constructor(Name,ReleaseYear,Director,Actors)
    {
        this.Name = Name;
        this.ReleaseYear = ReleaseYear;
        this.Director = Director;
        this.Actors = Actors;
    }
}

var Movies = [];
var MoviesAvailable = [];
var Countries = ["Greece","UK","USA","Italy","France","Germany","Canada"];

function AddMovie(Movie)
{
    Movies.push(Movie);
}

function AddAvailable(Country,Movie,Date)
{
    MoviesAvailable.push([Movie,Country,Date]);
}

function GetAvailableForCountry(Country,Date)
{
    for(var i = 0; i < MoviesAvailable.length;i++)
    {
        if(MoviesAvailable[i][1] == Country )
        {
        document.writeln(MoviesAvailable[i][0].Name);
        }
    }
}

function RemoveMovie(Movie)
{
   for(var i = 0; i < Movies.length;i++)
   {
    if(Movies[i].Name == Movie.Name)
    {
        Movies[i] = Null;
    }
   }
}

function ReadMovies()
{
    for(var i = 0; i < Movies.length;i++)
    {
        document.writeln(Movies[i]);
    }
}

function FindMovie(Movie)
{
    for(var i = 0; i < Movies.length; i++)
    {
        if(Movie.Name == Movies[i].Name)
        {
            return true;
        }
    }

    return false;
}

function SetUp()
{
    AddMovie(new Movie("The Shawshank Redemption",1994,"S.King",["T.Robbins","M.Freeman"]));
    AddMovie(new Movie("The Godfather",1972,"F.Coppola",["M.Brando","A.Pacino"]));
    AddMovie(new Movie("The Dark Knight",2008,"C.Nolan",["C.Bale","H.Ledger"]));
    AddMovie(new Movie("The Godfather,Part 2",1974,"F.Coppola",["A.Pacino","R.Deniro"]));
    AddMovie(new Movie("12 Angry Men",1957,"S.Lumet",["H.Fonda","L.Cobb"]));

    for(var i = 0; i < Movies.length; i++)
    {
        for(var j = 0; j < Countries.length; j++)
        {
            if(Math.random() * 100 < 90)
            {
                AddAvailable(Countries[j],Movies[i],new Date("2050-12-31"));
            }
        }
    }
    
}

SetUp();
    
        
GetAvailableForCountry("Greece",Date.Now);

