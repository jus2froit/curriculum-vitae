var skills = ["CSS", "HTML", "Javascript", "Tailwind CSS", "symfony", "vuejs", "python", "GitHub", "SQL", "écriture comptable"]

var passions = ["Foot","Sports", "Manga/Anime", "Jeux vidéos"]
// Foot en club jusqu'au début du covid

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
                <li class="p-2  text-violet-700"> ${passions[i]}</li>
            `
        }
    }
})