const linksSocialMedia = {
  facebook: 'NOSC4P3',
  youtube: 'NOSC4P3',
  instagram: 'henriqueferreira.svg',
  twitter: 'N0SC4P3',
  github: 'NOSC4P3'
}
function changeSocialMediaLinks() {
  for (let li of socialMedias.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
//API GITHUB
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()
