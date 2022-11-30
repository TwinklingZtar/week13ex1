const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const progname = document.querySelector("#progname")

let infoArray = []


function buttonpress(event) {
        console.log(event.target.innerText)
        if (event.target.innerText === "Submit") {
            
            infoArray.push({fname: firstname.value, lname: lastname.value, pname: progname.value})

            firstname.value = ''
            lastname.value = ''
            progname.value = ''
            console.log(infoArray)

        }
        if (event.target.innerText === "Change Background Color") {
            document.body.classList.toggle("background_color")
        }
}





document.body.addEventListener("click", buttonpress)