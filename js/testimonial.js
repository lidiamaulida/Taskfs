const testimonial = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', "https://api.npoint.io/31462ac85749f832f9e8", true)

    xhr.onload = function () {
        if(xhr.status == 200){
            resolve(JSON.parse(xhr.response))
        } else{
            reject("Eror Loading data")
        }
    }

    xhr.onerror = function () {
        reject("Network Eror")
    }

    xhr.send()
})

async function allTestimonial() {
    try {
        const response = await testimonial
        console.log(response)

        let testimonialHTML = "";

        response.forEach(function (item) {
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
    } catch (err){
        console.log(err)
    }
}

allTestimonial();

async function filterTestimonial(rating) {
    try {
        const response = await testimonial
        let testimonialHTML = ''

        const testiminialfiltered = response.filter(function(item){
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
    } catch (error) {
        console.log(error);
    }
}