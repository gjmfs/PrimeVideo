import intersteller from "../Images/cover-images/interstellar.jpg"
import naruto from "../Images/cover-images/naruto.jpg";
import onePiece from "../Images/cover-images/one-piece.jpg";
import soloLeveling from "../Images/cover-images/solo-leveling.jpg";
import godFather from "../Images/cover-images/godfather.jpg";
import despicableMe from "../Images/cover-images/despicableMe.jpg"
import JusticeLeague_COIE_P3 from "../Images/cover-images/JusticeLeagueCrisisOnINfiniteEarthP3.jpg"
import Oppenheimer from "../Images/cover-images/Oppenheimer.jpg"
import theFlash from "../Images/cover-images/TheFlash.jpg"
import Transformers_RiseOfTheBeasts from "../Images/cover-images/Transformers_RiseofTheBeasts.jpg"
import WoodyWoodpecker from "../Images/cover-images/WoodyWoodpecker.jpg"
import CaptainUnderpants_TheFirstEpicMovie from "../Images/cover-images/CaptainUnderpants_TheFirstEpicMovie.jpg"
import Smurfs_TheLostVillage from "../Images/cover-images/Smurfs_TheLostVillage.jpg"
import TheEmojiMovie from "../Images/cover-images/TheEmojiMovie.jpg"
import TheBossBaby from "../Images/cover-images/TheBossBaby.jpg"
import DespicableMe3 from "../Images/cover-images/DespicableMe3.jpg"
import Cars3 from "../Images/cover-images/Cars3.jpg"
import Tnaruto from "../Images/Thumbnail/naruto.jpg"
import Tsolo_leveing from "../Images/Thumbnail/solo-Leveling.jpg"
import Tone_piece from "../Images/Thumbnail/One-piece.jpg"

const movie = [
    {
      id: 0,
      name: "Naruto",
      category: ["Anime","Action","Adventure","Comedy","Fantasy"],
      Rating: 9.8,
      year:2002,
      thumbnail:Tnaruto,
      coverPhoto: naruto,
    },
    {
      id: 1,
      name: "One-piece",
      category: ["Anime","Action","Adventure","Comedy","Drama","Fantasy"],
      Rating: 9.9,
      year:1999,
      thumbnail:Tone_piece,
      coverPhoto: onePiece,
    },
    {
      id: 2,
      name: "Solo leveling",
      category: ["Anime","Action","Adventure","Fantasy"],
      Rating: 9.5,
      year:2024,
      thumbnail:Tsolo_leveing,
      coverPhoto: soloLeveling,
    },
    {
      id: 3,
      name: "The Godfather",
      category: ["Crime","Drama"],
      Rating: 9.2,
      year:1972,
      coverPhoto: godFather,
    },
    {
      id:4,
      name:"Intersteller",
      category:["Adventure","Drama","Sci-Fi"],
      Rating:8.7,
      year:2014,
      coverPhoto: intersteller
    },
    {
      id:5,
      name:"Despicable Me 4",
      category:["Anime","Adventure","Comedy","family","Sci-Fi"],
      Rating:7.2,
      year:2024,
      coverPhoto:despicableMe
    },
    {
      id:6,
      name:"Justice League: Crisis on Infinite Earths, Part Three",
      category:["Action", "Adventure", "Animation", "Drama", "Fantasy" ,"Sci-Fi"],
      Rating:6.1,
      year:2024,
      coverPhoto:JusticeLeague_COIE_P3
    },
    {
      id:7,
      name:"Oppenheimer",
      category:["Action" ,"Biography","Drama" ,"History"],
      Rating:8.3,
      year:2023,
      coverPhoto:Oppenheimer
    },
    {
      id:8,
      name:"The Flash",
      category:["Action","Adventure","Fantasy","Sci-Fi"],
      Rating:6.7,
      year:2023,
      coverPhoto:theFlash
    },
    {
      id:9,
      name:"Transformers: Rise of the Beasts",
      category:["Action","Adventure","Sci-Fi"],
      Rating:6.0,
      year:2023,
      coverPhoto:Transformers_RiseOfTheBeasts
    },
    {
      id:10,
      name:"Woody Woodpecker",
      category:["Action","Adventure","Animation","Comedy","Family","Fantasy"],
      Rating:4.2,
      year:2017,
      coverPhoto:WoodyWoodpecker
    },
    {
      id:11,
      name:"Captain Underpants: The First Epic Movie",
      category:["Action","Adventure","Animation","Comedy","Family","Sci-Fi"],
      Rating:6.2,
      year:2017,
      coverPhoto:CaptainUnderpants_TheFirstEpicMovie
    },
    {
      id:12,
      name:"Smurfs: The Lost Village",
      category:["Action","Adventure","Animation","Comedy","Family","Fantasy"],
      Rating:6.0,
      year:2017,
      coverPhoto:Smurfs_TheLostVillage
    },
    {
      id:13,
      name:"The Emoji Movie",
      category:["Action","Adventure","Animation","Comedy","Family","Fantasy","Sci-Fi"],
      Rating:3.4,
      year:2017,
      coverPhoto:TheEmojiMovie
    },
    {
      id:14,
      name:"The Boss Baby",
      category:["Action","Adventure","Animation","Comedy","Family","Fantasy"],
      Rating:6.3,
      year:2017,
      coverPhoto:TheBossBaby
    },
    {
      id:15,
      name:"Despicable Me 3",
      category:["Action","Adventure","Animation","Comedy","Crime","Family","Fantasy","Sci-Fi"],
      Rating:6.2,
      year:2017,
      coverPhoto:DespicableMe3
    },
    {
      id:16,
      name:"Cars 3",
      category:["Action","Adventure","Animation","Comedy","Family","Sport"],
      Rating:6.7,
      year:2017,
      coverPhoto:Cars3
    }
  ];
  export default movie