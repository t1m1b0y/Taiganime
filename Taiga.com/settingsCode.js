

const colorPicked = document.getElementById('colorPicker')
let parameters = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
            width=500,height=500,left=700,top=100`;

colorPicked.addEventListener('click', function(){
    window.open('color customization.html', 'test', parameters)
    console.log('works')
    
})


