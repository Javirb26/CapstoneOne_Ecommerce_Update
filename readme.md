# ARCV - Archival Fashion E-Commerce Platform Capstone 2.0
## <a href='https://javirb26.github.io/CapstoneOne_Ecommerce_Update/'>Visit Site</a>
## Introduction
ARCV, now in its Capstone 2.0 update, continues to revolutionize the consumer-to-consumer e-commerce space for fashion enthusiasts. Focused on offering a blend of history and unique fashion pieces, this platform allows users to engage in buying, selling, and trading archival fashion items in a secure and user-friendly environment.

### What's New in Capstone 2.0
The latest update, Capstone 2.0, brings significant enhancements to the ARCV platform, making the user experience more intuitive and visually appealing:

*  Dark Mode Feature: A much-requested dark mode has been added to every page, reducing eye strain and providing a modern aesthetic.

* Responsive Navigation and Footer: Navigation and footer elements have been redesigned to be fully responsive, ensuring a seamless experience across various devices and screen sizes.

* Enhanced Registration Process: The registration page has been updated for better responsiveness, making the sign-up process smoother and more accessible on different devices.

## Team Collaboration
The successful development and launch of ARCV Capstone 2.0 are attributed to the collaborative efforts of our skilled team members: Aviad, Javier, Amaris, Tolani, Jesse, and Armanie. Each member played a crucial role in the update, contributing their unique skills and perspectives to enhance the platform.

## Updates
### Here we have showcased a handful of updates we've added to ARCV: 

Navbar Structure and Design
Old Code:
Used Bootstrap's navbar-expand-lg class for a responsive navbar with a traditional layout.

```
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ARCV</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- Navigation items -->
      </ul>
    </div>
  </div>
</nav>
```
New Code:
Simplified custom navbar with a logo, dark mode toggle, and responsive menu button for improved user experience.

```
<nav class="navbar">
  <div class="logo"><h1>ARCV</h1></div>
  <ul class="menu">
    <button class="dark-mode-switch" id="dark-mode-toggle">Toggle Dark Mode</button>
    <!-- Other menu items -->
  </ul>
  <!-- Responsive menu button -->
  <div class="menu-btn">
    <i class="fa fa-bars"></i>
  </div>
</nav>
```
Footer Section
Old Code:
A simpler footer with minimal content and basic links.
```
<footer>
  <div class="footer"></div>
    <p>Copyrights at<a href=""> ARCV</a></p>
      <ul>
        <li>Contact us</li>
        <li>Help</li>
    </ul>
  </div>
</footer>
```
New Code:
A more comprehensive footer with two columns for page navigation and social media links, styled with a modern, dark theme.
```
<footer class="py-5 bg-dark border-top text-white text-center">
  <div class="container">
    <!-- Footer content with social links -->
  </div>
</footer>
```
Main Content Area
Old Code:
Lacks detailed content in the main section, providing a basic layout.

```
<section class="sec">
  <!-- Old main content -->
</section>
```
New Code:
Includes rich content with headings like "Promise," "Quality," "About," and "What sets us apart," each accompanied by descriptive text, enhancing the content presentation.

```
<div class="container py-5">
  <main>
    <!-- New detailed content with headings and paragraphs -->
  </main>
</div>
```
