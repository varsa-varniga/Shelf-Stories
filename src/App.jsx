import React from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Assurity from "./Components/Assurity.jsx";
import Newreleases from "./Components/Newreleases.jsx";
import Bestsellers from "./Components/Bestsellers.jsx";
import Chapter from "./Components/Chapter.jsx";
import Footer from "./Components/Footer.jsx";
import "./App.css";


const App = () => {
  const books1 = [

    { title: "Ikigai", author: "Héctor García, Francesc Miralles", rating: 4, img: "ikigai.jpeg" },
    { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", rating: 5, img: "richdad.jpeg" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", rating: 5, img: "think_and_grow_rich.jpeg" },
    { title: "You Can Win", author: "Shiv Khera", rating: 5, img: "you-can.webp" },
    { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", rating: 4, img: "roses.jpeg" },
    { title: "Better Than the Movies", author: "Lynn Painter", rating: 5, img: "better_than_movies.jpeg" },
    { title: "Onyx Storm", author: "Rebecca Yarros", rating: 5, img: "Onyx Storm.jpeg" },
    { title: "James", author: "Percival Everett", rating: 4, img: "James.png" },
    { title: "Fourth Wing", author: "Rebecca Yarros", rating: 5, img: "Fourth Wing.jpeg" },
 

  ];
  const books2 = [
    { title: "Pride and Prejudice", author: "Jane Austen", rating: 5, img: "pride_and_prejudice.jpeg" },
    { title: "Wuthering Heights", author: "Emily Brontë", rating: 4, img: "Wuthering Heights.jpeg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 5, img: "The Great Gatsby.jpeg" },
    { title: "1984", author: "George Orwell", rating: 5, img: "1984.jpeg" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", rating: 5, img: "Harry Potter and the Sorcerer's Stone.jpeg" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", rating: 5, img: "the lord of rings.jpeg" },
    { title: "Brave New World", author: "Aldous Huxley", rating: 4, img: "Brave New World.jpeg" },
    { title: "A Song of Ice and Fire", author: "George R.R. Martin", rating: 5, img: "A Song of Ice and Fire.jpeg" },
    { title: "The Hitchhiker’s Guide to the Galaxy", author: "Douglas Adams", rating: 4, img: "Guide to the Galaxy.jpeg" },
    { title: "The Night Circus", author: "Erin Morgenstern", rating: 5, img: "night_circus.jpeg" }


  ];

  const books3 = [
    { title: "The Wind in the Willows", author: "Kenneth Grahame", rating: 5, img: "the_wind_in_the_willows.jpeg" },
    { title: "Pippi Longstocking", author: "Astrid Lindgren", rating: 5, img: "pippi_longstocking.jpeg" },
    { title: "The Tale of Peter Rabbit", author: "Beatrix Potter", rating: 5, img: "the_tale_of_peter_rabbit.jpeg" },
    { title: "Copycat", author: "Hannah Jayne", rating: 4, img: "copycat.jpeg" },
    { title: "Impossible Creatures", author: "Katherine Rundell", rating: 4, img: "impossible_creatures.jpeg" },
    { title: "Hot Mess", author: "Rachel Jonat", rating: 4, img: "hot_mess.jpeg" },
    { title: "Charlotte's Web", author: "E.B. White", rating: 5, img: "charlottes_web.jpeg" },
    { title: "The Very Hungry Caterpillar", author: "Eric Carle", rating: 5, img: "very_hungry_caterpillar.jpeg" },
    { title: "Where the Wild Things Are", author: "Maurice Sendak", rating: 5, img: "where_the_wild_things_are.jpeg" },
    { title: "Matilda", author: "Roald Dahl", rating: 5, img: "matilda.jpeg" },
    { title: "Winnie-the-Pooh", author: "A.A. Milne", rating: 5, img: "winnie_the_pooh.jpeg" },
    { title: "The Gruffalo", author: "Julia Donaldson", rating: 5, img: "the_gruffalo.jpeg" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", rating: 5, img: "alices_adventures.jpeg" }
   
  ];
  const books4 = [
    { title: "The Hunger Games", author: "Suzanne Collins", rating: 5, img: "the_hunger_games.jpeg" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", rating: 5, img: "harry_potter.jpeg" },
    { title: "Divergent", author: "Veronica Roth", rating: 4, img: "divergent.jpeg" },
    { title: "The Fault in Our Stars", author: "John Green", rating: 5, img: "the_fault_in_our_stars.jpeg" },
    { title: "To All the Boys I've Loved Before", author: "Jenny Han", rating: 4, img: "to_all_the_boys.jpeg" },
    { title: "Six of Crows", author: "Leigh Bardugo", rating: 5, img: "six_of_crows.jpeg" },
    { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", rating: 5, img: "perks_of_being_a_wallflower.jpeg" },
    { title: "Cinder", author: "Marissa Meyer", rating: 5, img: "cinder.jpeg" },
    { title: "The Book Thief", author: "Markus Zusak", rating: 5, img: "the_book_thief.jpeg" },
    { title: "Legend", author: "Marie Lu", rating: 4, img: "legend.jpeg" },
    { title: "The Maze Runner", author: "James Dashner", rating: 4, img: "the_maze_runner.jpeg" },
    { title: "Eleanor & Park", author: "Rainbow Rowell", rating: 5, img: "eleanor_and_park.jpeg" },
    { title: "Shadow and Bone", author: "Leigh Bardugo", rating: 4, img: "shadow_and_bone.jpeg" }
  ];

  const books5 = [
    { title: "The Night Circus (Signed Edition)", author: "Erin Morgenstern", rating: 5, img: "the_night_circus_signed.jpeg" },
    { title: "A Court of Thorns and Roses (Collector's Edition)", author: "Sarah J. Maas", rating: 5, img: "acotar_collectors.jpeg" },
    { title: "The Hobbit (Illustrated Deluxe Edition)", author: "J.R.R. Tolkien", rating: 5, img: "the_hobbit_illustrated.jpeg" },
    { title: "The Invisible Life of Addie LaRue (Signed Edition)", author: "V.E. Schwab", rating: 5, img: "addie_larue_signed.jpeg" },
    { title: "The Song of Achilles (Special Edition)", author: "Madeline Miller", rating: 5, img: "song_of_achilles_special.jpeg" },

    { title: "Crescent City: House of Earth and Blood (Special Edition)", author: "Sarah J. Maas", rating: 5, img: "crescent_city_special.jpeg" },
    { title: "Dune (Deluxe Edition)", author: "Frank Herbert", rating: 5, img: "dune_deluxe.jpeg" },

    { title: "The Shadow of the Wind (Special Edition)", author: "Carlos Ruiz Zafón", rating: 5, img: "shadow_of_the_wind_special.jpeg" },
    { title: "Good Omens (Signed Special Edition)", author: "Neil Gaiman & Terry Pratchett", rating: 5, img: "good_omens_signed.jpeg" },
    { title: "It Ends with Us (Collector's Edition)", author: "Colleen Hoover", rating: 4, img: "it_ends_with_us_collectors.jpeg" },
    { title: "Kingdom of the Wicked (Special Edition)", author: "Kerri Maniscalco", rating: 4, img: "kingdom_of_the_wicked_special.jpeg" }
  ];
  
  
  
  
 

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Assurity />
        <Bestsellers heading="Bestsellers" books={books1} />
        <Bestsellers heading="Our Best Fiction Books" books={books2}/>
        <Bestsellers heading="Our Best Kids' Books" books={books3}/>
         <Newreleases/>
         <Bestsellers heading="Our Best YA Books" books={books4} />
        <Bestsellers heading="Signed & Special Editions" books={books5}/>
        <Chapter/>
        <Bestsellers heading="Coming Soon" books={books1}/>
        <Footer/>
        
      </main>
    </div>
  );
};

export default App;
