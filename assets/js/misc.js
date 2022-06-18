function settings() {
    const enableAvatar = document.querySelector('#enableAvatarCheckbox');
    if (enableAvatar.checked)
        setCookie("enableavatar", 1);
    else
        setCookie("enableavatar", 0);
    avatarShow();
}
window.addEventListener('load', () => {
    const enableAvatar = document.querySelector('#enableAvatarCheckbox');
    if (getCookie("enableavatar") == 1)
        enableAvatar.checked = true;
    else
        enableAvatar.checked = false;
});
