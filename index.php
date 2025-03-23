<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WSDev</title>
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/projects.css">
    <link rel="stylesheet" href="css/resume.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/contact.css">
</head>
<body>
    <?php include 'navbar.php'; ?>
    <section id="hero">
        <div class="hero-wrapper">
            <div class="hero-inner">
                <div class="hero-content">
                    <div class="intro">
                        <p class="intro-text">Welcome to my portfolio!</p>
                        <h1 class="intro-title">Hi, I'm <span id="name">Wilmer Suelo</span></h1>
                        <p class="intro-subtitle">A Software Technology student specializing in front-end development, creating smooth and interactive web experiences. Constantly improving and refining my skills!</p>
                        <div class="d-buttons">
                            <button class="d-resume" onclick="alert('Coming Soon!')">Download Resume</button>
                            <button class="contact" onclick="location.href='#contact'">Contact</button>
                        </div>
                    </div>
                    <div class="myImage">
                        <img src="assets/hero-image.svg" alt="Logo" class="hero-logo" width="100" height="100">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="projects">
        <div class="wrapper">
            <div class="inner">
                <div class="content">
                    <div class="projects-header">
                        <h1>My journey in designing and developing websites</h1>
                    </div>
                    <div class="projects-container">
                        <button class="prev" onclick="prevSlide()">&#10094;</button>
                        <div class="projects-slide">
                            <div class="image-container">
                                <img id="projects-image" src="" alt="Project Image">
                                <div id="projects-details" class="details-overlay"></div>
                            </div>
                        </div>
                        <button class="next" onclick="nextSlide()">&#10095;</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="resume">
        <div class="wrapper">
            <div class="inner">
                <div class="resume-header">
                    <h1>Building with These Technologies</h1>
                </div>
                <div class="content">
                    <div class="image">
                        <img src="assets/image2.svg" style="height: 100%; width: 100%;" alt="Resume Image">
                    </div>
                    <div class="resume-info">
                        <div class="name-container">
                            <h1>Wilmer L, Suelo</h1>
                        </div>
                        <div class="info-container">
                            <p>I am a passionate web developer currently pursuing a <strong>Bachelor of Science in Information Technology</strong>, majoring in <strong>Software Technology</strong>. I enjoy building responsive and interactive web applications, continuously learning new technologies, and improving my development skills.</p>
                        </div>
                        <div class="skills-container">
                            <h2>I have experience working with the following technologies:</h2>
                            <ul>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="SASS Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="GIT Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase Logo"></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap Logo"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    <section id="contact">
        <div class="contact-wrapper">
            <div class="contact-inner">
                <div class="contact-content">
                    <div class="contact-header">
                        <h1>Get in Touch</h1>
                    </div>
                    <div class="contact-form">
                        <div class="contact-card">
                            <div class="name-role">
                                <h2>Wilmer Suelo</h2>
                                <p>Front-end Developer</p>
                                <p>Let’s collaborate! Feel free to reach out for opportunities, projects, or just to chat about web development.</p>
                            </div>
                            <div class="social-media">
                                <div class="column">
                                    <ul>
                                        <li><a href="Wilmer Suelo" id="facebook-link"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo"> Facebook</a></li>
                                        <li><a href="mailto:suelowilmer27@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Logo"> Gmail</a></li>
                                        <li><a href="https://github.com/Wilmer27-ai" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo"> GitHub</a></li>
                                    </ul>
                                </div>
                                <div class="column">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/wilmer-suelo-b88b94259/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Logo"> LinkedIn</a></li>
                                        <li><a href="https://www.instagram.com/wilmer_suelo/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo"> Instagram</a></li>
                                        <li><a href="#" id="phone-link"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="Phone Logo"> +639469485103</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="js/projects.js"></script>
    <script src="js/hero.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/scrollEffects.js"></script>
    <?php include 'footer.php'; ?>
</body>
</html>
