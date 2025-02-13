const bookCategories = [
    {
      heading: "Bestsellers",
      books: [
        { title: "Ikigai", author: "Héctor García, Francesc Miralles", rating: 4, img: "ikigai.jpeg" },
        { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", rating: 5, img: "richdad.jpeg" },
        { title: "Think and Grow Rich", author: "Napoleon Hill", rating: 5, img: "think_and_grow_rich.jpeg" },
        { title: "You Can Win", author: "Shiv Khera", rating: 5, img: "you-can.webp" },
        { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", rating: 4, img: "roses.jpeg" },
    { title: "Better Than the Movies", author: "Lynn Painter", rating: 5, img: "better_than_movies.jpeg" },
    { title: "Onyx Storm", author: "Rebecca Yarros", rating: 5, img: "Onyx Storm.jpeg" },
    { title: "James", author: "Percival Everett", rating: 4, img: "James.png" },
    { title: "Fourth Wing", author: "Rebecca Yarros", rating: 5, img: "Fourth Wing.jpeg" },
      ]
    },
    {
      heading: "Our Best Fiction Books",
      books: [
        { title: "Pride and Prejudice", author: "Jane Austen", rating: 5, img: "pride_and_prejudice.jpeg" },
        
        { title: "1984", author: "George Orwell", rating: 5, img: "1984.jpeg" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", rating: 5, img: "Harry Potter and the Sorcerer's Stone.jpeg" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", rating: 5, img: "the lord of rings.jpeg" },
    { title: "Brave New World", author: "Aldous Huxley", rating: 4, img: "Brave New World.jpeg" },
    { title: "A Song of Ice and Fire", author: "George R.R. Martin", rating: 5, img: "A Song of Ice and Fire.jpeg" },
    { title: "The Hitchhiker’s Guide to the Galaxy", author: "Douglas Adams", rating: 4, img: "Guide to the Galaxy.jpeg" },
    { title: "The Night Circus", author: "Erin Morgenstern", rating: 5, img: "night_circus.jpeg" }

      ]
    },
    {
      heading: "Our Best Kids' Books",
      books: [
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

      ]
    },
    {
      heading: "Our Best YA Books",
      books: [
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
      ]
    },
    {
      heading: "Signed & Special Editions",
      books: [
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
      ]
    },
    {
      heading: "Devotional Books",
      books: [
        { title: "Bhagavad Gita", author: "Vyasa", rating: 5, img: "bhagavad_gita.jpeg" },
    { title: "The Holy Bible", author: "Various Authors", rating: 5, img: "holy_bible.jpeg" },
    { title: "The Quran", author: "Prophet Muhammad", rating: 5, img: "quran.jpeg" },
    { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", rating: 5, img: "autobiography_of_a_yogi.jpeg" },
    { title: "The Upanishads", author: "Various Authors", rating: 5, img: "upanishads.jpeg" },
  
    { title: "The Dhammapada", author: "Gautama Buddha", rating: 5, img: "dhammapada.jpeg" },
    { title: "Ramayana", author: "Valmiki", rating: 5, img: "ramayana.jpeg" },
  
    { title: "The Book of Mormon", author: "Joseph Smith", rating: 5, img: "book_of_mormon.jpeg" },
    { title: "Bhakti Sutras", author: "Narada", rating: 5, img: "bhakti_sutras.jpeg" },
    { title: "Tao Te Ching", author: "Lao Tzu", rating: 4, img: "tao_te_ching.jpeg" },
    { title: "The Vedas", author: "Unknown (Ancient Sages)", rating: 4, img: "vedas.jpeg" }
      ]
    },
    {
      heading: "Coming Soon",
      books: [
        { title: "Fourth Wing", author: "Rebecca Yarros", rating: 5, img: "fourth_wing.jpeg" },
        { title: "Light Bringer (Red Rising Saga)", author: "Pierce Brown", rating: 5, img: "light_bringer.jpeg" },
        { title: "Iron Flame", author: "Rebecca Yarros", rating: 5, img: "iron_flame.jpeg" },
        { title: "Lessons in Chemistry", author: "Bonnie Garmus", rating: 5, img: "lessons_in_chemistry.jpeg" },
        { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", rating: 5, img: "tomorrow_and_tomorrow.jpeg" },
      
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", rating: 5, img: "evelyn_hugo.jpeg" },
        { title: "Hell Bent", author: "Leigh Bardugo", rating: 5, img: "hell_bent.jpeg" },
      
        { title: "Happy Place", author: "Emily Henry", rating: 5, img: "happy_place.jpeg" },
        { title: "Chain of Thorns", author: "Cassandra Clare", rating: 5, img: "chain_of_thorns.jpeg" },
        { title: "Love, Theoretically", author: "Ali Hazelwood", rating: 4, img: "love_theoretically.jpeg" },
        { title: "Divine Rivals", author: "Rebecca Ross", rating: 4, img: "Divine Rivals.jpeg" }
      ]
    }
  ];
export default bookCategories;