function random(min, max) {
  return Math.random() * (max - min) + min;
}
list_of = [
	"Northern lights",
	"Sam Rubin",
	"Happy mothers day",
	"Ferry",
	"Sean Burroughs",
	"Google Classroom",
	"The Chi",
	"I had some help",
	"Tornadoes",
	"hmm",
	"iuwbtht3uiwjgtuuijfgb",
	"d7854irw",
	"3",
	"324",
	"3o4i5tgjrk",
	"765tr",
	"643w5t",
	"45tr4f",
	"45trf",
	"noopensesame",
	"thisisaplace",
	"iwonderwhythesearehere",
	"thisisamazinglmfao",
	"imsoconfused",
	"thisissostupid",
	"allofthethingshere",
	"wesgtrtdhtg",
	"nhjgkfghjnk",
	"234657",
	"43rfd",
	"qwedrftgyhuiopasdfghjklzxcvbnm",
	"https://thissiteshouldnotexistandifitdoesexistimgoingtodieirofsjerdfkjdlfbh",
	"rnadomthinsfoirngrsogn",
	"hytghygrbhyt",
	"rtg.rgt",
	"a",
	"b",
	"c",
	"d",
	"e",
	"iwonderwherethishascomefrom",
	"funnithingirgjsreorejg",
	"funnithingdegpergrg",
	"funnithingdsfefewfwefef",
	"eroigerwugiersgiurehegiuerhureigheruigrehgiuerhguierhgeruigrehiugdjvgfuibjsv",
	"funnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithing",
	"i wonder where this is frommmm",
	"Yes this is some real bull but i dont care",
	"why are you checking this mans search history",
	"Sus",
	"man its not that bad",
	"I hope",
	"Man this is a search history spammer of all time",
	"Hmm",
	"Wall-E",
	"Google slides",
	"Google ch",
	"What is the time",
	"Still not worth it",
	"Google classes",
	"Google docs",
	"sdf",
	"sdsdfdf",
	"sdfdfsdfdsfdsfdff",
	"irgitjbdkslf;kn hj",
	"y6gutjrijmrjhturkmf"
]
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(alphabet[Math.floor(random(1, 25))])
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
let gsearch_str = "https://www.google.com/search?q="
function lagproof_crash() {
for (i = 0; i < list_of.length; i++) {
	let x = open(gsearch_str+list_of[i])
	pausecomp(300) // we dont like crashing	
	console.log(list_of[i])
}
}
function crash() {
	for (i = 0; i < (list_of.length*25); i++) {
	let rand_al = random(1, 25)
	let x = open(gsearch_str+list_of[i]+alphabet[rand_al])
	console.log(list_of[i])
}
}