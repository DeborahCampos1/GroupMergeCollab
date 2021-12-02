function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a * b);
  }
  
  fn(1, 2, 9); //> 6
  fn(200, "B", 400); //> error All arguments must be numbers.
  //trying to follow

  let favoriteMovies = [
{
name: 'Star Wars 4,5,6',
name:"Tomorrow's War",
name: 'how to train your dragon?',
name: 'Bill and Ted trilogy',
name: 'John Wich trilogy',
name: 'Rogue one',
name: 'Gun powder milkshake',
name: 'Children of Dune',
name: 'Dune (2000)',
name: 'One Piece : Strong World', 
name: 'My hero Academia: two heroes',
name: 'Dead Poet Society',
name: 'Spider-man (tom holland)',
name: 'Iron Man trilogy',
name: 'Black Widow',
name: 'Fast and Furious trilogy',
}
];