var background = document.getElementById('content')
var home_nav = document.getElementById('home_nav');
var github_nav = document.getElementById('github_nav');
var dribbble_nav = document.getElementById('dribbble_nav');
var twitter_nav = document.getElementById('twitter_nav');
var email_nav = document.getElementById('email_nav');
var about_nav = document.getElementById('about_nav')
var blog_nav = document.getElementById('blog_nav')
var resume_nav = document.getElementById('resume_nav')



// Home navigation
home_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/home_nav.png)";
	background.style.backgroundPosition = "500px 20px"
});

// Github navigation
github_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/github_nav.png)";
	background.style.backgroundPosition = "465px -4px"
});


// Drrble navigation
dribbble_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/dribbble_nav.png)";
	background.style.backgroundPosition = "468px -4px"
});

// Twitter navigation
twitter_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/twitter_nav.png)";
	background.style.backgroundPosition = "480px -4px"
});

// Email navigation
email_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/email_nav.png)";
	background.style.backgroundPosition = "532px -4px"
});

// About navigation
about_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/nav_nav.png)";
	background.style.backgroundPosition = "699px 36px"
});

// Blog navigation
blog_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/nav_nav.png)";
	background.style.backgroundPosition = "699px 36px"
});

// Resume navigation
resume_nav.addEventListener("mouseover", function() {
	background.style.backgroundImage = "url(img/nav_nav.png)";
	background.style.backgroundPosition = "699px 36px"
});