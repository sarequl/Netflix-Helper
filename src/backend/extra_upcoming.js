//'button.color-primary.hasLabel.hasIcon.ltr-v8pdkb';
//'[data-uia="next-episode-seamless-button"]';
//next episode
// let nextEpisode = document.querySelector('button.color-primary.hasLabel.hasIcon.ltr-v8pdkb');
// if(nextEpisode){
// 	nextEpisode.click();
// }

//hide header big video section
let headerVideoContainer = document.querySelector('.volatile-billboard-animations-container');
let headerCheckBoxStatus = true;
if (headerCheckBoxStatus === true) headerVideoContainer.style.display = 'none';

//hide my list
let myList = document.querySelector('.lolomoRow.lolomoRow_title_card');
let MyListCheckBoxStatus = true;
if (MyListCheckBoxStatus === true) myList.style.display = 'none';

//hide continueWatching
let continueWatching = document.querySelector('[data-list-context="continueWatching"]');
let continueWatchingCheckBoxStatus = false;
if (continueWatchingCheckBoxStatus === true) continueWatching.style.display = 'none';

//hide trending
let trendingNow = document.querySelector('[data-list-context="trendingNow"]');
let trendingNowCheckBoxStatus = true;
if (trendingNowCheckBoxStatus === true) trendingNow.style.display = 'none';

//hide sections
// function hideSections(){
// 	//hide header big video section
// 	let headerVideoContainer = document.querySelector('.volatile-billboard-animations-container');
// 	let headerCheckBoxStatus = true;
// 	if (headerCheckBoxStatus === true) headerVideoContainer.style.display = 'none';

// 	//hide my list
// 	let myList = document.querySelector('.lolomoRow.lolomoRow_title_card');
// 	let MyListCheckBoxStatus = true;
// 	if (MyListCheckBoxStatus === true) myList.style.display = 'none';

// 	//hide continueWatching
// 	let continueWatching = document.querySelector('[data-list-context="continueWatching"]');
// 	let continueWatchingCheckBoxStatus = false;
// 	if (continueWatchingCheckBoxStatus === true) continueWatching.style.display = 'none';

// 	//hide trending
// 	let trendingNow = document.querySelector('[data-list-context="trendingNow"]');
// 	let trendingNowCheckBoxStatus = true;
// 	if (trendingNowCheckBoxStatus === true) trendingNow.style.display = 'none';
// }

// setInterval(()=>{
// 	hideSections();
// },2000);

//let [node] = [...document.querySelectorAll('.row-header-title')].filter(e => e.innerText.includes('Originals'));


//find, filter, findIndex, map,reduce, foreach