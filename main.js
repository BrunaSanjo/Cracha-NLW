const LinksSocialMedia = {
  github: 'BrunaSanjo',
  youtube: 'channel/UCbmjL7TQB38U6L9yn4J4OIQ',
  facebook: 'profile.php?id=100007890630653',
  instagram: 'bruna_sanjo',
  twitter: 'twitter'
}

function changeSocialMediaLinks(){
 for (let li of socialLinks.children) {
   const social = li.getAttribute('class')
   
   li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
 }
}
 
changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url= `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name 
    userBio.textContent = data.bio  
    userLink.href = data.html_url 
    UserImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()