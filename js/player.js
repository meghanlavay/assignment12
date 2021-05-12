class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

// const album1 = new Album('Operation Ivy', 'Energy');
// const album2 = new Album('Blink 182', 'Dude Ranch');
// const album3 = new Album('New Found Glory', 'Sticks and Stones');

// jbox.addAlbum(album1);
// jbox.addAlbum(album2);
// jbox.addAlbum(album3);

// album1.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album3.play();


let jbox = new Jukebox();

window.addEventListener('load', init);
function init() {
    
    let select = document.getElementById("albums");
    let playBtn = document.getElementById("playBtn");
    let favBtn = document.getElementById("favBtn");
    let paragraph = document.getElementById("favoriteAlbum");
    let arr = [['Operation Ivy', 'Energy'], ['Blink 182', 'Dude Ranch'], ['New Found Glory', 'Sticks and Stones']];

    for (let i=0; i < arr.length ; i++) {
         let albumChoices = arr[i];
         let opt = document.createElement('option');
         opt.textContent = `${albumChoices[0]} / ${albumChoices[1]}`;
         opt.value = albumChoices[0] ;
         select.appendChild(opt);

         const album = new Album(albumChoices[0],albumChoices[1]);
         jbox.addAlbum(album);
    }

    playBtn.addEventListener('click', () => {
        console.log(select.value);
        for (let i=0; i< jbox.albums.length; i++) {
            if (jbox.albums[i].artist === select.value){
                jbox.albums[i].play();
            }
        }
        
        paragraph.innerText = `You are currently playing ${select.value}`;
    });

    favBtn.addEventListener('click', () => {
        paragraph.innerText = `Your favorite album is: ${jbox.favoriteAlbum()}`;
        console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);
    });

}