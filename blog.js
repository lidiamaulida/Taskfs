let data = [];

function addData(e) {
    e.preventDefault();

    let blog = {
        nameProject : document.getElementById("input-projectname").value,
        starDate : document.getElementById("input-startdate").value,
        endDate : document.getElementById("input-enddate").value,
        Description : document.getElementById("input-description").value,
    };

    data.push(blog)
    for (let index = 0; index < data.length; index++) {
        console.log(data[index]);
    }
}
