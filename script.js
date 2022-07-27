var skills = ["CSS", "HTML", "JS", "Tailwind CSS", "symfony", "vuejs", "..."]

var passions = ["Foot","Sports", "Manga/Anime", "Jeux vidéos"]

for (i = 0; i < skills.length; i++){
    document.getElementById("mySkills").innerHTML += 
                                `
                                <li class="flex justify-center  text-white">
                                    ${skills[i]}
                                </li>
                                `
}

document.getElementById("passionsButton").addEventListener("click", function(){
    for (i = 0; i < passions.length; i++){
        document.getElementById("myPassions").innerHTML += 
        `
            <li class="flex justify-center  p-2"> ${passions[i]}</li>
        `
    }
})