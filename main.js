const lyrics = [
  "❤️Search the definition of shame \nI'm sure you'll see my face❤️\n\n",
  "❤️Who's gonna save me now? \nI hope it's you, my babe❤️\n\n",
  "❤️Don't change a thing, you are amazing \nI can't believe you've come and saved me❤️\n\n",
  "❤️We can stay here, spend every \nday here I don't mind, no❤️\n\n",
  "❤️Don't change a thing, you are amazing \nI can't believe you've come and saved me❤️\n\n",
  "❤️We can stay here, spend every day here \nI don't mind❤️\n\n"
];

const sleepTimes = [
  7700,
  6800,
  8000,
  7700,
  7300,
  8000
];

const playButton = document.getElementById("play-button");
const Header = document.getElementById("Header-1");
const lyricsContainer = document.getElementById("lyrics-container");
const bgMusic = document.getElementById("bg-music");
const gifContainer = document.getElementById("gif-container");

const displayLyrics = async () => {
  for (let i = 0; i < lyrics.length; i++) {
    // Fade In
    lyricsContainer.textContent = lyrics[i];
    lyricsContainer.style.opacity = "1";
    await new Promise(resolve => setTimeout(resolve, sleepTimes[i] - 2000));

    // Fade Out
    lyricsContainer.style.opacity = "0";
    await new Promise(resolve => setTimeout(resolve, 2000)); 
  }

  bgMusic.pause();
  bgMusic.currentTime = 0; 
  playButton.style.display = "block";
  Header.style.display = "block"; 
  lyricsContainer.style.display = "none"; 
  gifContainer.style.display = "none"; 
};

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  Header.style.display = "none";
  lyricsContainer.style.display = "block"; 
  gifContainer.style.display = "block"; 
  bgMusic.play();
  displayLyrics(); 
});
