
let userBGCOlors = []

const colorSection = document.getElementById('colorSection')



const legalSectionColor = document.getElementById('legalSectionColor')
const pirateSectionColor = document.getElementById('pirateSectionColor')

legalSectionColor.addEventListener('click', function(){
    console.log('yep, this is workinnnnn')
})


pirateSectionColor.addEventListener('click', function(){
    console.log('yep, this is workinnnnn')
})



const legalSectionColorIndicator = document.getElementById('legalSectionColorIndicator')

const colorPickerL = new iro.ColorPicker('#colorPickerL', {
    width:120, color: '#fff'
})

colorPickerL.on('color:change', function(color){
    legalSectionColorIndicator.style.backgroundColor = color.hexString
    userBGCOlors = userBGCOlors.filter(function(example){
        if(example.Section == 'legal'){
            return false
            
            
            
        }else{
            return true
           
        }

       
    })

    userBGCOlors.push({
        Section: 'legal',
        Color: legalSectionColorIndicator.style.backgroundColor


    })
    Save()

})






const pirateSectionColorIndicator = document.getElementById('pirateSectionColorIndicator')

const colorPickerP = new iro.ColorPicker('#colorPickerP', {
    width:150, color: '#fff'
})

colorPickerP.on('color:change', function(color){
    pirateSectionColorIndicator.style.backgroundColor = color.hexString

    userBGCOlors = userBGCOlors.filter(function(example){
        if(example.Section == 'pirate'){
            return false
            
            
            
        }else{
            return true
           
        }

       
    })



    userBGCOlors.push({
        Section: 'pirate',
        Color: pirateSectionColorIndicator.style.backgroundColor


    })
    Save()

})













function Save(){
    localStorage.setItem('SavedInfo', JSON.stringify(userBGCOlors))
}

function stillworking(){
    userBGCOlors = []
    Save()
}