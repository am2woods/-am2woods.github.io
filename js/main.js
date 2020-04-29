//Page links buttons
const contactScroll =  document.getElementById('contact-id');
const aboutScroll =  document.getElementById('about-id');

const contactLink = document.getElementById('nav-contact')
const aboutLink = document.getElementById('nav-about')
const upArrow = document.getElementById('top')
const headerBtn = document.getElementById('header-button')

upArrow.addEventListener('click', pageLink);
aboutLink.addEventListener('click', pageLink);
contactLink.addEventListener('click', pageLink);
headerBtn.addEventListener('click', pageLink);

function pageLink(event){
    switch(event.target){
        case headerBtn:
        case aboutLink:
            aboutScroll.scrollIntoView()
        break;
        case contactLink:
            contactScroll.scrollIntoView()
        break;
        case upArrow:
            window.scrollTo(0, 0);
        break;
    }
}

//Opening and Closing contact modal
    //variables
    var modal = document.getElementById("myModal");
    var modalBtn = document.getElementById("openModal");
    var closeModal = document.getElementById("closeBtn");

    //Event Listners
    modal.addEventListener('click', contactModal)
    modalBtn.addEventListener('click', contactModal);
    closeModal.addEventListener('click', contactModal);

    //Function for opening and closing modal
    function contactModal(event){
        if(event.target === modalBtn){
            console.log('you clicked')
            modal.style.display = "block"
        }
        if(event.target === closeModal){
            console.log('you clicked')
            modal.style.display = "none"
        }
        if (event.target === modal) {
            modal.style.display = "none";
          }
    }

//Projects Modal
    //variables
    var promodal = document.getElementById("project-modal");
    var rpsbtn = document.getElementById("rps-btn");
    var ombdbtn = document.getElementById("ombd-btn");
    var giphybtn = document.getElementById("giphy-btn");
    var closeproject = document.getElementById("closepro");

    //Event Listners
    promodal.addEventListener('click', projectModal)
    rpsbtn.addEventListener('click', projectModal)
    ombdbtn.addEventListener('click', projectModal)
    giphybtn.addEventListener('click', projectModal)
    closeproject.addEventListener('click', projectModal)

    function projectModal(event){
        switch(event.target){
            case rpsbtn:
                promodal.style.display = "block"
                document.getElementById('rpsapp').style.display = "block"
            break;
            case ombdbtn:
                promodal.style.display = "block"
                document.getElementById('ombdapp').style.display = "block"
            break;
            case giphybtn:
                promodal.style.display = "block"
                document.getElementById('giphyapp').style.display = "block"
            break;
            case closeproject:
            case promodal:
                if(document.getElementById('rpsapp').style.display === "block"){
                    document.getElementById('rpsapp').style.display = "none"
                    promodal.style.display = "none"
                }
                if(document.getElementById('giphyapp').style.display === "block"){
                    document.getElementById('giphyapp').style.display = "none"
                    promodal.style.display = "none"
                }
                if(document.getElementById('ombdapp').style.display === "block"){
                    document.getElementById('ombdapp').style.display = "none"
                    promodal.style.display = "none"
                }
                // promodal.style.display = "none"
                
                // document.getElementById('giphyapp').style.display = "none"
                // document.getElementById('ombdapp').style.display = "none"
            break;
        }
    }
