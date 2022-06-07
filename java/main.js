const video = document.querySelector(".video")
const playButton = document.querySelector(".play")
const playToPause = playButton.querySelector("i")
const stopButton = document.querySelector(".stop")
const progressBar = document.querySelector(".progress")
const timestamp = document.querySelector(".timestamp")

video.addEventListener("click", playPauseVideo)
playButton.addEventListener("click", playPauseVideo)
stopButton.addEventListener("click", stopVideo)
stopButton.addEventListener("click", stopVideo)
video.addEventListener("timeupdate", updateVideoProgress)

function playPauseVideo()
{
    if (video.paused)
    {
        video.play()
    }
    else 
    {
        video.pause()
    }
    playToPause()
}

function playToPause()
{
    if (video.pause)
    {
        playButtonIcon.classList.remove("fa-solid fa-stop")
        playButtonIcon.classList.add("fa-solid fa-play")
    }
    else
    {
        playButtonIcon.classList.add("fa-solid fa-stop")
        playButtonIcon.classList.remove("fa-solid fa-play")
    }
}

function stopVideo ()
{
    video.pause()
    video.currentTime = 0
    playButtonToggleIcon()
    progressBar.value = 0
}

function setVideoProgress() 
{
    video.currentTime = Number((progressBar.value * video.duration) / 100)
}

function updateVideoProgress() 
{
    progressBar.value = Number((video.currentTime / video.duration) * 100)
    let minutes = Math.floor(video.currentTime / 60)    
    let seconds = Math.floor(video.currentTime % 60)
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    timestamp.textContent = `${minutes}:${seconds}`
}