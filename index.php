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
                            <button class="d-resume">Download Resume</button>
                            <button class="contact">Contact</button>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    <script src="js/projects.js"></script>
    <script src="js/hero.js"></script>
    <script src="js/navbar.js"></script>
</body>
</html>