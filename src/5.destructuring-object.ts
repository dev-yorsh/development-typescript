interface Artist {
    name: string,
    album: string,
    year: string,
}

interface Gender {
    genderName: string;
    classification: string;
    artist: Artist;
}

const gender: Gender = {
    genderName: "Rock and Pop",
    classification: "+18",
    artist: {
        name: "Bruno Mars",
        album: "the lazy song",
        year: "2002"
    }
}

// Desestructuramos el objeto genero
const {genderName, classification, artist} = gender;

// Desestructuramos el objeto hijo
const {name: ss} = artist;

console.log("El genero es: ", genderName);
console.log("El artista es: ", ss);
console.log("El album es: ", artist.album);
console.log("El anio es: ", artist.year);



