// Fellow Programmers Do Not Look At This Code Or You Will Throw Up, i tried :,)

/**
 * update 1.1,
 * fixed hidive inactivity glitch in mobile
 * readjusted the legal site icons to fit better on mobile screens
 * adjusted the personal site cards to look better on mobile
 * made site able to acces the user's location so that it can use said location when trying to find the animes legally available to them
 */

/**
 * update 1.2
 * Made The Searchbar move into the middle for mobile devices
 * added a reccomended anime sites system
 * fixed .the margin bottom glitch made by altering the pirate site intro in any way at all
 * made it so that it defaults to the Us should the location of the user be restricted
 */


// news bar visibilty and opacity code

const newsBar = document.getElementById('news-bar')

const newsPaper = document.getElementById("news-wallpaper")

const newsContent = document.getElementById('news-practise')
newsContent.style.opacity = '0.3';

newsPaper.style.opacity = '75%'

const huluText = document.getElementById('huluText')
const netflixText = document.getElementById('netflixText')
const hidiveText = document.getElementById('hidiveText')
const crunchyrollText = document.getElementById('crunchyroll-text')






function makeNewsVisible(){
    newsPaper.style.opacity = '75%'

}

function makeNewsInvisible(){
    newsPaper.style.opacity = '50%'
}


const PopUp = () =>{
    
    newsContent.style.opacity = '1';
}

const PopDown = () =>{

    newsContent.style.opacity = '0.3';
}

// making it so that when the mouse hovers over or leaves the news bar it changes
newsBar.addEventListener('mouseover', PopUp, )
newsBar.addEventListener('mouseleave', PopDown, makeNewsInvisible)

newsBar.addEventListener('mouseover', makeNewsVisible)
newsBar.addEventListener('mouseleave', makeNewsInvisible)



// coding the enhancing and color changing features for each of the legal sites

const crunchyroll = document.getElementById('crunchyroll')
const netflix = document.getElementById('netflix')
const hulu = document.getElementById('hulu')
const hidive =  document.getElementById('hidive')
const legalSection = document.getElementById('legalSection')
const introText = document.getElementById('legal-sites-intro')



let userBGColors = []

const userBGColorValues = JSON.parse(localStorage.getItem('SavedInfo'))
console.log(userBGColorValues)
if( Array.isArray(userBGColorValues)){
    userBGColors = userBGColorValues
    

}else{
    userBGColors = [
 
]

}



function giveBGColorL(){
    userBGColors.forEach(function(example){
        if(example.Section == 'legal'){
            legalSection.style.backgroundColor = example.Color

        }
    })

    
    

}

const pirateSection = document.getElementById('pirateSection')

function giveBGColorP(){
    userBGColors.forEach(function(example){
        if(example.Section == 'pirate'){
            pirateSection.style.backgroundColor = example.Color

        }
    })

    
    

}

giveBGColorL()
giveBGColorP()


const crunchyrollConvert = () =>{
    legalSection.style.backgroundColor = 'orange';
    crunchyrollText.style.color = 'white';
    
}


const netflixConvert = () =>{
    legalSection.style.backgroundColor = 'red';
 
}

const hidiveConvert = () =>{
    legalSection.style.backgroundColor = 'rgb(0, 255, 247)';
    hidiveText.style.color = 'blue';
}

const huluConvert = () =>{
    legalSection.style.backgroundColor = 'black';
    huluText.style.color = 'green';
    introText.style.color = 'white';

}




const convertBack  = () =>{
    let count = 0

    userBGColors.forEach(function(example){
        if(example.Section == 'legal'){
            count += 1
        }

    })

    if(count > 0){
        giveBGColorL()
    }else{
        legalSection.style.backgroundColor = 'rgb(21, 17, 17)'
    }
        
    }
    




crunchyroll.addEventListener('mouseover', crunchyrollConvert)
netflix.addEventListener('mouseover', netflixConvert)
hidive.addEventListener('mouseover', hidiveConvert)
hulu.addEventListener('mouseover', huluConvert)




crunchyroll.addEventListener('mouseleave', convertBack)
netflix.addEventListener('mouseleave', convertBack)
hulu.addEventListener('mouseleave', convertBack)
hidive.addEventListener('mouseleave', convertBack)













// getting news from twitter sources

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b190a4426emsh3860366f955209cp1617cejsn6440c33ff475',
		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
	}
};

// different API urls reverse engineered to work
const url = 'https://twitter154.p.rapidapi.com/user/tweets?username=Anime%20News%20Network&limit=40&user_id=36178012&include_replies=false&include_pinned=false';


const url2 = 'https://twitter154.p.rapidapi.com/user/tweets?username=Anime%20Corner&limit=40&user_id=1303061521&include_replies=false&include_pinned=false';

const url3 = 'https://twitter154.p.rapidapi.com/user/tweets?username=Anime%20News%20And%20Facts&limit=40&user_id=922060301628932097&include_replies=false&include_pinned=false';




// fetch(`${url}`)

//         .then(response => response.json())
//         .then(json =>{
//             const Tweet = json.results[0]
//             console.log(Tweet)

//         })


const contentBox = document.getElementById('content-box')
const NewsImage = document.getElementById('newsImage')
const NewsText = document.getElementById('newsText')
let number = 0
// getting the news images, urls, and texts
const async = async() =>{

    try{ 
        
        
        while(number <= 3){
                
            const response = await fetch(`${url3}`, options)
            const data = await response.json()
            const MoreData = data.results
            const twitterData = MoreData[number]
            console.log(twitterData)
            NewsImage.src = twitterData.media_url
            NewsText.innerHTML = twitterData.text
            
            NewsGenerator(twitterData.media_url, twitterData.text, twitterData.expanded_url)
            number += 1

        }
        
        

    }
    
    catch(error){
        console.log(error)

    }

    
        
    
}

// generating the news articles into the news bar
function NewsGenerator(media_url, text, link){
    const ContentBox = document.createElement('div')
    ContentBox.id = 'content-box'
    ContentBox.className = 'content-box'
    const contentBoxIMG = document.createElement('img')
    contentBoxIMG.id = 'NewsImage'
    contentBoxIMG.src = media_url
    contentBoxIMG.className = 'news-practise'

    const linker = document.createElement('a')
    linker.href = link

    
    const contentBoxText = document.createElement('p') 

    contentBoxText.id = 'NewsText'
    contentBoxText.className = 'news-text'
    contentBoxText.innerHTML = text

    ContentBox.appendChild(contentBoxIMG)
    ContentBox.appendChild(contentBoxText)
    linker.appendChild(ContentBox)
    
    newsContent.appendChild(linker)
    

    async()
  
}


const plusSign = document.getElementById('plusSign')


function log2(){
    plusSign.style.opacity = '1'

}


const log =  async () =>{
    plusSign.style.opacity = '0.7'

    const promise2 = new Promise((resolve, reject) => {

        setTimeout(() =>  {
            plusSign.style.opacity = '1'
        },100)
        
    
    
    })

    return promise2



    
}



plusSign.addEventListener('click', log)

// opening and closing the <dialog> box

const addSection = document.getElementById('addSection')
const dialog = document.getElementById('dialogue')
const closer = document.getElementById('dialog-closing-div')
function work(){
    dialog.showModal()
}

function closing(){
    const name = pirateSiteName.value
    const link = pirateSiteLink.value
    
    if(name && link){
        if(link.indexOf(' ') <= 1 /*&& (link.includes('.com')  || link.includes('.net'))*/){
            dialog.close()

        }else{
            alert('URL is not valid, please try again')
        }
        
        
    }else{
        alert('Please Fill out the Information')
        

    }
   
}

function regularClose(){
    dialog.close()
}

addSection.addEventListener('click', work)

dialog.addEventListener('click', regularClose)


closer.addEventListener('click', (event) => event.stopPropagation());

const submit = document.getElementById('submit-button')
const pirateSiteName = document.getElementById('pirateSiteInput-name')
const pirateSiteLink = document.getElementById('pirateSiteInput-link')


// working on saving user data






submit.addEventListener('click', closing)



let PirateSitelist = []
const savedTodoList = JSON.parse(localStorage.getItem('Save'))





if( Array.isArray(savedTodoList)){
    const PirateSiteIntro = document.getElementById('pirate-sites-intro')
    PirateSiteIntro.innerText = 'Your Personal Sites To Watch Anime!'


    if(savedTodoList.length == 0){

        const PirateSiteIntro = document.getElementById('pirate-sites-intro')
        PirateSiteIntro.innerText = 'Recommended Pirate Sites To Watch Anime!'
        PirateSitelist = [ 
            {
                Name: 'AniWatch!',
                Link: 'https://aniwatch.to',
                id: '1',
            },
            {
                Name: 'AnimePahe!',
                Link: 'https://animepahe.ru',
                id: '2',
    
            },
            {
                Name: 'GoGoAnime!',
                Link: 'https://gogoanime.hu/',
                id: '3'
            }
            
     
    ]
    // render()
    }else{
        PirateSitelist = savedTodoList;

    }
    

}else{
    PirateSitelist = [

    ]
}



// PSN = pirate site name
// PSL = pirate site link

function deleteSite(event){

    const buttonToDelete = event.target;
    const todelete = buttonToDelete.id;

    PirateSitelist = PirateSitelist.filter(function(example){
        if(example.id === todelete){
            if(confirm('Are You Sure You Would Like To Delete This Link')){
                return false

            }else{
                return true
            }
            
        } else{
            return true;
        }
    })

    const PirateSiteIntro = document.getElementById('pirate-sites-intro')
    PirateSiteIntro.innerText = 'Your Personal Sites To Watch Anime!'
    
    render();
    saveList()
}

function hi(){
    console.log('hi')
}


const render = () =>{
    const pirateSection = document.getElementById('pirateSiteIconsDiv')
    pirateSection.innerHTML = ''

    
    
    
    
    
    
    PirateSitelist.forEach(function(example){
        

        const pirateSectionDiv = document.createElement('div')
        pirateSectionDiv.className = 'pirateSectionDiv slide'
        const boilerDiv = document.createElement('div')
        


    


        const pirateSectionText = document.createElement('p')
        // pirateSectionDiv.style.color = 'red'
        // pirateSectionDiv.style.width = '550px'
        pirateSectionText.innerText = example.Name
        pirateSectionText.className = 'pirateSectionText'
        pirateSectionDiv.appendChild(pirateSectionText)
        
        


        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.className = 'deleteButton'
        deleteButton.id = example.id
        
        deleteButton.onclick = deleteSite;
        boilerDiv.appendChild(deleteButton)
        boilerDiv.addEventListener('click', (event) => event.stopPropagation());
        

        pirateSectionDiv.appendChild(boilerDiv)

        pirateSection.appendChild(pirateSectionDiv)


        pirateSectionDiv.addEventListener('click', function(){
            const link = example.Link
            if(link.includes('https://')){
                const url = example.Link
                window.open(url, '_self')

            }else{
                const url = 'https://'+example.Link
                window.open(url, '_self')

            }
           

            
        })
        

    })
    saveList()
}
function add(){
    const PSNvalue = pirateSiteName.value
    const PSLvalue = pirateSiteLink.value
    const newid = '' + new Date().getTime();
    PirateSitelist.push({
        Name: PSNvalue,
        Link: PSLvalue,
        id: newid


    })
    console.log(PirateSitelist)
    const PirateSiteIntro = document.getElementById('pirate-sites-intro')
    PirateSiteIntro.innerText = 'Your Personal Sites To Watch Anime!'
    render()
    saveList()
}

submit.addEventListener('click', add)
render()

function saveList(){
    localStorage.setItem('Save', JSON.stringify(PirateSitelist))
}

// making the search for legal places to watch anime code






// const userLocationResultsToSlice = userLocationArray.results[0].formatted

// const userLocationResultsSliced = userLocationResultsToSlice.slice(',')

// console.log(userLocationResultsSliced)




const getAnimeInfo = (value) =>{
    const total = String(value)
    const totals = total.split('')
    if(totals[0] == ' '){
        alert("Please Don't Start With A Space")
    }else{
       
        // code to ensure that spaces and other special characters are taken care of ehich is now useless as im switching to the search query which doesnt give 404's :,)
        // const newTotal = total.replace(/ /g, '-', )
        // const properAnimeName = newTotal.replace(/'/g, '')

        // window.open('https://www.justwatch.com/us/tv-show/' + properAnimeName, '_self')

        // but first getting users' location to do the search in their country
        const sucessfulLookup = async(position) =>{
            try{
                const {latitude, longitude} = position.coords;
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a881305bbf2c403d862836ac034d8ecd`)
                const Data = await response.json()
                const userLocationResult = /*Array.from*/(Data.results[0].formatted.split(','))
                const userLocationCountry = userLocationResult.slice(-1)
                const userLocationCountryWithoutFuckingSpaces = userLocationCountry[0].trim()
                // console.log(userLocationCountry)
                const location = String(userLocationCountryWithoutFuckingSpaces)
                console.log(location)
                if(location == 'Nigeria'){
                    console.log('yes this is indeed working')
                    window.open('https://www.justwatch.com/ng/search?q=' + total, '_self')
        
                }else if(location == 'Canada'){
                    window.open('https://www.justwatch.com/ca/search?q=' + total, '_self')

                }else if(location == 'Ghana'){
                    window.open('https://www.justwatch.com/gh/search?q=' + total, '_self')

                }else{
                    window.open('https://www.justwatch.com/us/search?q=' + total, '_self')
                }

            }catch{
                console.error();
                console.log('error')
            }
            
        }
        const unSucessfulLookup = async(ps) =>{
            console.log('error')
            window.open('https://www.justwatch.com/us/search?q=' + total, '_self')

        }

        navigator.geolocation.getCurrentPosition(sucessfulLookup, unSucessfulLookup)



        


       

        
    }
    
}

const searchBar = document.getElementById('SearchBar')
searchBar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getAnimeInfo(searchBar.value)
    }
})

// deactivated code for running the newsgenerator

NewsGenerator()
async()







//settings page code








