var skills = ["CSS", "HTML", "JS", "Tailwind CSS", "symfony", "vuejs", "..."]

var passions = ["Foot","Sports", "Manga/Anime", "Jeux vidéos"]

var nbClick = 0

for (i = 0; i < skills.length; i++){
    document.getElementById("mySkills").innerHTML += 
                                `
                                <li class="flex justify-center  text-fuchsia-800">
                                    ${skills[i]}
                                </li>
                                `
}

document.getElementById("passionsButton").addEventListener("click", function(){
    nbClick += 1
    if (nbClick <= 1){
        for (i = 0; i < passions.length; i++){
            document.getElementById("myPassions").innerHTML += 
            `
                <li class="flex justify-center  p-2"> ${passions[i]}</li>
            `
        }
    }
})