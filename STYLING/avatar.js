function getAvatar(id) {
        return fetch(`https://discordapp.com/api/users/${id}`, {
                headers: {
                        authorization: "Bot ODM0Njk4OTczMjgxMzg2NTE3.YIEr_w.-MR9LUI_xxwAf1sf-6AMWSIKv_g"
                },
        });
}

let imgs = document.getElementsByClassName("avatar");
for (img of imgs) {
    getAvatar(img.id)
    .then(res => res.json())
    .then(data => {
        img.src = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`
    });
}