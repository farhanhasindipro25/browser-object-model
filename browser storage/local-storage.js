const ytVolume = localStorage.getItem('yt-player-volume');

localStorage.setItem('isDarkMode',true);
localStorage.getItem('isDarkMode');

const ytVolumeObj = JSON.parse(ytVolume);
ytVolumeObj.muted;

const student = {
    id: 1,
    name: 'A'
};
// localStorage.setItem('student',student);
localStorage.setItem('student',JSON.stringify(student));

