const testimonilaData = [
    {
       autor: "Lidia Maulida",
       quote: "mantap, keren!",
       image: "https://i.pinimg.com/564x/48/1c/f5/481cf50a8cd5d97eb646aa9f1f3ed07e.jpg",
       rating: 5,
    },
    {
        autor: "Timmy",
        quote: "Pelayanannya Good",
        image: "https://i.pinimg.com/564x/c3/c6/48/c3c648f6989873c21ea89fdab8f74400.jpg ",
        rating: 4,
     },
     {
        autor: "Anton",
        quote: "Lumayan lah!",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
        rating: 3,
     },
     {
        autor: "Mark",
        quote: "Sering Error",
        image: "https://images.unsplash.com/photo-1420310414923-bf3651a89816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        rating: 1,
     },
     {
        autor: "Bella",
        quote: "Keren banget",
        image: "https://i.pinimg.com/564x/7b/5d/b3/7b5db3a47d3ebf16616b93b3b049e6cd.jpg",
        rating: 5,
     }
];

function allTestimonial() {
    let testimonialHTML = "";

    testimonilaData.forEach(function (item) {
        testimonialHTML += `
                <div class="testimonial">
                    <img
                         class="profile-testimonial"
                         src="${item.image}" alt="profile"
                    >
                    <p class="quote">"${item.quote}"</p>
                    <p class="autor">-${item.autor}</p>
                    <p class="autor">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
        `
    })

    document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonial();

function filterTestimonial(rating) {
    let testimonialHTML = ''

    const testiminialfiltered = testimonilaData.filter(function(item){
        return item.rating === rating
    });

    if (testiminialfiltered.length === 0) {
        testimonialHTML += '<h2>Data Not Found!</h2>';
    } else {
        testiminialfiltered.forEach(function (item) {
            testimonialHTML += `
                <div class="testimonial">
                    <img
                         class="profile-testimonial"
                         src="${item.image}" alt="profile"
                    >
                    <p class="quote">"${item.quote}"</p>
                    <p class="autor">-${item.autor}</p>
                    <p class="autor">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
        `
        });
    };

    document.getElementById("testimonials").innerHTML = testimonialHTML;
}