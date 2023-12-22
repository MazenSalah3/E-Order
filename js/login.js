let $password = document.getElementById("input2");
let $toggle = document.querySelector("i");
let loader = document.getElementById("preloader")

const showhiddenpass=() => {
    if($password.type == 'password'){
        $password.setAttribute('type', 'text')
    }else{
        $password.setAttribute(
            'text',
            'password'
        );
    }

    $toggle.classList.toggle('fa-eye');
    $toggle.classList.toggle('fa-eye-slash');
};

$toggle.addEventListener(

    'click',
    showhiddenpass,
);


document.querySelector(".logos").appendChild(copy);

window.addEventListener("load", function(){
    loader.style.display ="none";
})