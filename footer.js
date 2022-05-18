const createFooter = () => {
    let footer = document.querySelectorAll('footer');

    footer.innerHTML = "
    <div class="footer-content"><img src="img/light-logo.png" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="" class="footer-link">t-shirts</a></li>
                    <li><a href="" class="footer-link">sweatshirts</a></li>
                    <li><a href="" class="footer-link">shirts</a></li>
                    <li><a href="" class="footer-link">jeans</a></li>
                    <li><a href="" class="footer-link">trousers</a></li>
                    <li><a href="" class="footer-link">shoes</a></li>
                    <li><a href="" class="footer-link">casual</a></li>
                    <li><a href="" class="footer-link">formal</a></li>
                    <li><a href="" class="footer-link">sports</a></li>
                    <li><a href="" class="footer-link">watch</a></li>
                </ul>
            
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="" class="footer-link">t-shirts</a></li>
                    <li><a href="" class="footer-link">sweatshirts</a></li>
                    <li><a href="" class="footer-link">shirts</a></li>
                    <li><a href="" class="footer-link">jeans</a></li>
                    <li><a href="" class="footer-link">trousers</a></li>
                    <li><a href="" class="footer-link">shoes</a></li>
                    <li><a href="" class="footer-link">casual</a></li>
                    <li><a href="" class="footer-link">formal</a></li>
                    <li><a href="" class="footer-link">sports</a></li>
                    <li><a href="" class="footer-link">watch</a></li>
                </ul>
            </div>
            </div>
            <p class="footer-title">About the company</p>
            <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus doloremque officia ipsum quae veniam delectus excepturi fugit, nulla qui in temporibus ipsa dolor tenetur omnis possimus aliquid aut beatae molestiae.</p>
            <p class="info">Support email - help@support.com, customersupport@clothing.com</p>
            <p class="info">Telephone number - 1800 00 00 01</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">Privacy</a>
                    <a href="#" class="social-link">Terms and Conditions</a>
                </div>
                <div>
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Facebook</a>
                    <a href="#" class="social-link">Twitter</a>
                </div>
            </div>
            <p class="footer-credit">Best clothes money can buy</p>
 ";
}

createFooter();