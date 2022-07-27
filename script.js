var skills = ["CSS", "HTML", "JS", "..."]

for (i = 0; i < skills.length; i++){
    document.getElementById("mySkills").innerHTML += 
                                `
                                <li class="flex justify-center  text-white">
                                    ${skills[i]}
                                </li>
                                `
}