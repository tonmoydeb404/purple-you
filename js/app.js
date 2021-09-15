// CANVAS
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// CHARACTER TO DISPLAY
const char = `💜`;
const charSize = 14;

var count = Array.from(
	{ length: Math.round(canvas.width / charSize) },
	(_) => 2,
);

// MUSIC
const music = document.getElementById("music");
const text = document.getElementById("text");
const lyric = [
	{ time: "00:20.30", text: "I found a love for me" },

	{ time: "00:27.80", text: "Darling just dive right in" },

	{ time: "00:31.60", text: "And follow my lead" },

	{ time: "00:35.40", text: "Well I found a girl beautiful and sweet" },
	{
		time: "00:42.90",
		text: "I never knew you were the someone waiting for me",
	},
	{ time: "00:49.40", text: "'Cause we were just kids when we fell in love" },
	{ time: "00:54.30", text: "Not knowing what it was" },
	{ time: "00:58.10", text: "I will not give you up this time" },
	{
		time: "01:05.70",
		text: "But darling, just kiss me slow, your heart is all I own",
	},
	{ time: "01:13.00", text: "And in your eyes you're holding mine" },

	{
		time: "01:20.00",
		text: "Baby, I'm dancing in the dark with you between my arms",
	},
	{
		time: "01:31.20",
		text: "Barefoot on the grass, listening to our favorite song",
	},
	{
		time: "01:38.30",
		text: "When you said you looked a mess, I whispered underneath my breath",
	},
	{
		time: "01:45.40",
		text: "But you heard it, darling, you look perfect tonight",
	},

	{
		time: "01:58.60",
		text: "Well I found a woman, stronger than anyone I know",
	},
	{ time: "02:05.60", text: "" },
	{
		time: "02:06.20",
		text: "She shares my dreams, I hope that someday I'll share her home",
	},
	{
		time: "02:13.80",
		text: "I found a love, to carry more than just my secrets",
	},
	{ time: "02:21.90", text: "To carry love, to carry children of our own" },
	{ time: "02:28.20", text: "We are still kids, but we're so in love" },
	{ time: "02:32.80", text: "Fighting against all odds" },
	{ time: "02:36.60", text: "I know we'll be alright this time" },
	{ time: "02:44.20", text: "Darling, just hold my hand" },
	{ time: "02:47.70", text: "Be my girl, I'll be your man" },
	{ time: "02:51.70", text: "I see my future in your eyes" },

	{
		time: "02:58.40",
		text: "Baby, I'm dancing in the dark, with you between my arms",
	},
	{
		time: "03:09.70",
		text: "Barefoot on the grass, listening to our favorite song",
	},
	{
		time: "03:16.80",
		text: "When I saw you in that dress, looking so beautiful",
	},
	{
		time: "03:22.80",
		text: "I don't deserve this, darling, you look perfect tonight",
	},

	{
		time: "03:43.80",
		text: "Baby, I'm dancing in the dark, with you between my arms",
	},
	{
		time: "03:55.10",
		text: "Barefoot on the grass, listening to our favorite song",
	},
	{ time: "04:02.10", text: "I have faith in what I see" },
	{ time: "04:05.50", text: "Now I know I have met an angel in person" },
	{ time: "04:11.90", text: "And she looks perfect" },
	{ time: "04:15.80", text: "I don't deserve this" },
	{ time: "04:19.80", text: "You look perfect tonight" },

	{ time: "04:34.30", text: "I love You" },
];

// FUNCTIONS
const draw = () => {
	canvasContext.fillStyle = "rgb(0,0,0,0.04)";
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);

	canvasContext.fillStyle = "#00f";
	canvasContext.font = `${charSize}px arial`;

	count.forEach((c, index) => {
		canvasContext.fillText(char, index * charSize, c * charSize);

		if (c * charSize > canvas.height && Math.random() > 0.975)
			count[index] = 0;

		count[index]++;
	});
};

const getTime = (mili) => {
	let min = Math.floor(mili / 60);
	let sec = Math.floor(mili % 60);

	min = min <= 9 ? `0${min}` : min;
	sec = sec <= 9 ? `0${sec}` : sec;

	return [min, sec];
};

const loadLyric = () => {
	const subtitle = lyric.find((l) => {
		const time = l.time.split(":");
		const audioTime = getTime(music.currentTime);

		return (
			time[0] === audioTime[0] &&
			Math.floor(parseInt(time[1])) === parseInt(audioTime[1])
		);
	});
	if (subtitle) {
		text.innerHTML = subtitle.text;
	}
};

// CALL FUNCTIONS
setInterval(draw, 35);

music.addEventListener("play", () => {
	music.addEventListener("timeupdate", loadLyric);
});

document.getElementById("playBtn").addEventListener("click", (e) => {
	music.play();
	e.target.style.display = "none";
	text.innerHTML = "";
});
