const login = document.querySelector('.btn');
login.setAttribute('id', 'login');

login.addEventListener('click', (event) => {
    alert('Sending You to Bookr Login');
} );


const signUp = document.querySelector('.btns');
signUp.setAttribute('id', 'signUp');

signUp.addEventListener('click', (event) => {
    alert('Sign-Up for Bookr');
});
