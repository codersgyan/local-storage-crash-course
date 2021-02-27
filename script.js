// localStorage.setItem('theme', 'light');
// localStorage.setItem('font', 'bold');

// localStorage.removeItem('font');
// localStorage.clear();
// const theme = localStorage.getItem('theme');

// console.log(theme);


// const userSettings = {
//     theme: 'dark',
//     font: 'light',
//     score: 100
// }

// const settingString = JSON.stringify(userSettings);

// localStorage.setItem('userSettings', settingString);

// const uSetting = JSON.parse(localStorage.getItem('userSettings'));

// console.log(uSetting.theme);


// cart
// user settings
// filters
// form data
// score

const themeSelector = document.querySelector('#themeSelector');

const theme = localStorage.getItem('theme');
changeTheme(theme);


themeSelector.addEventListener('change', (e) => {
    localStorage.setItem('theme', e.target.value);
    changeTheme(e.target.value);
});

function changeTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#222';
    } else if (theme === 'light') {
        document.body.style.backgroundColor = '#e5e5e5';
    } else {
        document.body.style.backgroundColor = '#fff';
    }
}

window.addEventListener('storage', (e) => {
    if (e.key === 'theme' ) {
        changeTheme(e.newValue);
        themeSelector.value = e.newValue;
    }
});

// error hanfling
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    console.log('Yeppe!! working.');
  }
  else {
    // Too bad, no localStorage for us
    console.log('OOPS!! Not working.');
  }





