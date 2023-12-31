window.onload = function(){
    window.addEventListener('scroll', function(e) {
        var height = this.document.getElementById('Hero').offsetHeight
        height = height - 20;
        if(this.scrollY > height){
            this.document.getElementById('header').classList.add('active')
            this.document.getElementById('to-top').classList.add('active')
        } else{
            this.document.getElementById('header').classList.remove('active')
            this.document.getElementById('to-top').classList.remove('active')
        }
    });

    document.getElementById('to-top').addEventListener("click", function(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    const menu_btn = document.getElementById('menuToggle');
    const menu = document.getElementById('mobile-nav')

    menu_btn.addEventListener("click", function(){
        menu.classList.toggle('active')
    })

    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

        let currentDropdown
        if (isDropdownButton){
            currentDropdown = e.target.closest('[data-dropdown]')
            currentDropdown.classList.toggle('active')
        }

        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if(dropdown === currentDropdown) return

            dropdown.classList.remove('active')
        })
    })

    const trigger = document.getElementById('role');
    const desc = document.getElementById('job-desc');

    trigger.addEventListener("click", function(){
        desc.classList.toggle('active')
    })
}