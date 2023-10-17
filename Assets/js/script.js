window.onload = function(){
    window.addEventListener('scroll', function(e) {
        const height = window.innerHeight;
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
    })
}