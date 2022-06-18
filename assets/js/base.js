if (detectMobile()) {
    let touchPosX = 0;
    let navStartPos = -250;
    let navMaxPos = 0;
    const nav = document.querySelector('nav');
    const navControl = document.querySelector('.nav-control');
    const bxMenuIcon = document.querySelector('.bx-menu');
    function mobileOpenNav(yes) {
        if (yes) {
            nav.style.left = `${navMaxPos}px`;
            navControl.style.left = `${-navStartPos}px`;
            bxMenuIcon.classList.add('bx-menu-anim');
            navOpen = true;
            touchPosX = -navStartPos;
            avatarShow(!navOpen);
        }
        else {
            nav.style.left = `${navStartPos}px`;
            navControl.style.left = `0px`;
            bxMenuIcon.classList.remove('bx-menu-anim');
            navOpen = false;
            touchPosX = 0;
            clearSearch();
        }
    }
    navControl.addEventListener('touchmove', (touch) => {
        touchPosX = touch.touches[0].clientX;
        if (navStartPos + touchPosX <= navMaxPos) {
            nav.style.left = `${navStartPos + touchPosX}px`;
            navControl.style.left = `${touchPosX}px`;
        }
    });
    navControl.addEventListener('touchend', () => {
        if (!navOpen) {
            if (touchPosX <= 50)
                mobileOpenNav(false);
            else
                mobileOpenNav(true);
        }
        else {
            if (touchPosX >= 225)
                mobileOpenNav(true);
            else
                mobileOpenNav(false);
        }
    });
    document.querySelector('main').addEventListener('click', () => {
        mobileOpenNav(false);
    });
    nav.addEventListener('click', () => {
        clearSearch();
    });
}
else {
    const nav = document.querySelector('nav');
    const bxMenuIcon = document.querySelector('.bx-menu');
    const navControl = document.querySelector('.nav-control');
    navControl.addEventListener('click', () => {
        if (!navOpen) {
            navOpen = true;
            nav.style.left = '0';
            bxMenuIcon.classList.add('bx-menu-anim');
            navControl.style.left = '250px';
            avatarShow(!navOpen);
        }
        else {
            navOpen = false;
            nav.style.left = '-250px';
            bxMenuIcon.classList.remove('bx-menu-anim');
            navControl.style.left = '0';
            clearSearch();
        }
    });
    document.querySelector('main').addEventListener('click', () => {
        navOpen = false;
        nav.style.left = '-250px';
        bxMenuIcon.classList.remove('bx-menu-anim');
        navControl.style.left = '0';
        clearSearch();
    });
    nav.addEventListener('click', () => {
        clearSearch();
    });
}
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        category.querySelector('.bx-chevron-right').classList.toggle('chevron-anim');
        category.querySelector('.subcategory').classList.toggle('expand-category');
    });
});
function search(numResultsToReturn = 999) {
    const searchbox = document.querySelector('.nav-searchbox');
    let userInput = searchbox.value.toLowerCase();
    let results = Object.values(DB).filter(data => data.TITLE.toLowerCase().includes(userInput) ||
        data.SUBTITLE.toLowerCase().includes(userInput) ||
        data.SUBID.includes(userInput));
    const output = document.querySelector('.nav-search-results');
    if (navOpen) {
        document.querySelector('nav').style.overflowY = 'visible';
        document.querySelector('main').classList.add('page-blur');
        output.textContent = '';
        let numResultsToList = numResultsToReturn;
        if (results.length < numResultsToReturn)
            numResultsToList = results.length;
        for (let i = 0; i < numResultsToList; i++) {
            const a = document.createElement('a');
            const li = document.createElement('li');
            a.href = `${url}${results[i].IURL()}`;
            if (results[i].TITLE == 'Project Euler')
                a.textContent = `${results[i].TITLE} ${results[i].SUBID} - ${results[i].SUBTITLE}`;
            else
                a.textContent = `${results[i].TITLE} - ${results[i].SUBTITLE}`;
            li.appendChild(a);
            output.appendChild(li);
        }
        if (results.length > numResultsToList) {
            const a = document.createElement('a');
            const li = document.createElement('li');
            li.textContent = `${results.length - numResultsToList} MORE RESULT(S)...`;
            a.href = `${url}/search`;
            setCookie("search", `${userInput}`);
            a.appendChild(li);
            output.appendChild(a);
        }
        if (userInput == '') {
            clearSearch();
        }
    }
}
function clearSearch() {
    document.querySelector('.nav-search-results').textContent = '';
    document.querySelector('main').classList.remove('page-blur');
    document.querySelector('nav').style.overflowY = 'scroll';
}
function setCookie(cookieName, cookieValue) {
    try {
        if (typeof cookieName !== "string" && cookieValue !== "string")
            throw "cookieName or cookieValue was not a string";
    }
    catch (err) {
        console.log(err);
        return;
    }
    document.cookie = `${cookieName}=${cookieValue}; SameSite=Lax; path=/`;
}
function getCookie(cookieName) {
    try {
        if (typeof cookieName !== "string")
            throw "cookieName should be a string";
    }
    catch (err) {
        console.log(err);
        return;
    }
    let cookies = {};
    const cookieArray = document.cookie.split(';');
    cookieArray.forEach((cookie) => {
        let keyValue = cookie.trim().split("=");
        cookies[keyValue[0]] = keyValue[1];
    });
    if (Object.keys(cookies).includes(cookieName))
        return cookies[`${cookieName}`];
    else
        return undefined;
}
function deleteCookie(cookieName) {
    if (getCookie(cookieName) !== undefined)
        document.cookie = `${cookieName}=''; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
function avatarShow(show = true) {
    const avatar = document.querySelector('.avatar');
    const avatarHead = document.querySelector('.head');
    const avatarHands = document.querySelector('.hands');
    if (getCookie("enableavatar") == 1) {
        if (show) {
            avatar.style.pointerEvents = "all";
            avatarHead.classList.remove('hide-head');
            avatarHands.classList.remove('hide-hands');
        }
        else {
            avatar.style.pointerEvents = "none";
            avatarHead.classList.add('hide-head');
            avatarHands.classList.add('hide-hands');
            document.querySelector('.speech').classList.add('speech-hide');
        }
    }
    else {
        avatar.style.display = "none";
    }
}
function avatarScrollBehaviour() {
    const body = document.querySelector('body');
    if (body.scrollTop < body.scrollHeight * 0.05)
        avatarShow(!navOpen);
    else
        avatarShow(false);
}
const avatarSpeak = (function () {
    let time = new Date();
    let hour = time.getHours();
    let dayPhrase = '';
    if (hour > 6 && hour < 12)
        dayPhrase = 'morning';
    else if (hour > 12 && hour < 18)
        dayPhrase = 'afternoon';
    else if (hour > 18 && hour < 21)
        dayPhrase = 'evening';
    else if (hour > 21 && hour < 24)
        dayPhrase = 'night';
    else
        dayPhrase = 'day';
    const phrases = [
        "Hi, I'm Z'Laast and I'm an EE! 🔌⚡",
        "I designed this website with ❤️...at least the HTML part",
        "I might have imposter syndrome",
        "I like programming and electronics",
        "This avatar isn't particularly useful, in case you're wondering. Looks neat though right?",
        "01001101 01100001 01100100 01100101 00100000 01111001 01101111 01110101 00100000 01101100 01101111 01101111 01101011",
        `Have a good ${dayPhrase} 😊`,
        `Today I found out that it's a bad idea to do your own wiring. I was shocked. 🥁`,
        `Have you checked out my posts on ${Object.values(DB)[Math.round(Math.random() * (Object.values(DB).length - 1))].TITLE}?`
    ];
    let speechFlag = true;
    return function () {
        const speechBubble = document.querySelector('.speech');
        if (speechFlag) {
            speechBubble.classList.remove('speech-hide');
            speechBubble.textContent = phrases[Math.floor(Math.random() * phrases.length)];
            speechFlag = false;
            setTimeout(() => {
                speechBubble.classList.add('speech-hide');
                speechFlag = true;
            }, 3000);
        }
    };
})();
function detectMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true; })(navigator.userAgent || navigator.vendor);
    return check;
}
function setMobileSettings() {
    if (detectMobile()) {
        document.querySelector('main').classList.add('thirteen', 'wide', 'padded', 'centered', 'column');
        document.querySelector('meta[name=viewport]').setAttribute('content', "initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0");
    }
    else {
        document.querySelector('main').classList.add('ten', 'wide', 'padded', 'centered', 'column');
    }
}
function setFooter() {
    const footer = document.querySelector('footer');
    footer.style.width = `${window.innerWidth}`;
    footer.style.left = '0';
    footer.style.right = '0';
    footer.style.left = `${-Math.ceil(footer.getBoundingClientRect().left)}px`;
    footer.style.right = `${-Math.ceil(footer.getBoundingClientRect().right) * 0.2}px`;
    if (detectMobile())
        footer.style.left = `${-Math.ceil(footer.getBoundingClientRect().left) - 60}px`;
}
function scrollToTop() {
    document.body.scrollTop = 0;
}
let navOpen = false;
if (getCookie("init") == undefined) {
    setCookie("enableavatar", 1);
    setCookie("init", 1);
}
avatarShow();
document.querySelector('.avatar').addEventListener('click', avatarSpeak);
document.querySelector('body').addEventListener('scroll', avatarScrollBehaviour);
setMobileSettings();
setFooter();
window.addEventListener('resize', setFooter);
