var upbtns = document.getElementsByClassName('ub')

for(i=0;i<upbtns.length;i++){

upbtns[i].addEventListener('click', function(){
    var name = this.dataset.name
    var action = this.dataset.action
    console.log('USER:', user)


            if (user =='AnonymousUser'){
                addCookieItem(name, action)
            }
            else{
                 addfunc(name, action)
            }

    })

}

function addfunc(name, action){
var url = '/sample_E/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'name': name, 'action': action})
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        console.log('data:', data);
        // location.reload(); // Uncomment if you want to reload the page after the request
    })
    .catch((error) => {
        console.error('Error:', error);
    });


}