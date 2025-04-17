let section = 1;
let image, story, map, next_section;

function init() {
    image = document.getElementById("image");
    story = document.getElementById("story");
    map = document.getElementById("map");
    next_section = document.getElementById("next_section");
    
    document.getElementById("section_1").addEventListener("click", function() {section = 1; update_section();});
    document.getElementById("section_2").addEventListener("click", function() {section = 2; update_section();});
    document.getElementById("section_3").addEventListener("click", function() {section = 3; update_section();});
    document.getElementById("section_4").addEventListener("click", function() {section = 4; update_section();});
    document.getElementById("section_5").addEventListener("click", function() {section = 5; update_section();});
    document.getElementById("section_6").addEventListener("click", function() {section = 6; update_section();});
    document.getElementById("section_7").addEventListener("click", function() {section = 7; update_section();});
    document.getElementById("section_8").addEventListener("click", function() {section = 8; update_section();});
    document.getElementById("section_9").addEventListener("click", function() {section = 9; update_section();});
    document.getElementById("last_section").addEventListener("click", function() {
        if (section != 1) {
            section--;
            update_section();
        }
    });
    next_section.addEventListener("click", function() {
        if (section != 9) {
            section++;
        } else {
            section = 1;
        }
        update_section();
    });
}

function update_section() {
    switch (section) {
        case 1:
            image.src = "images/little_muck_1.jpg";
            image.alt = "Old Little Muck";
            story.innerHTML = "Once upon a time there was a little person called Little Muck. Little Muck rarely left his house in Nicea, Turkey where he lived alone. Children regularly made fun of Little Muck was because of his misshapen figure and ill-fitting clothing. One day a child called Muley, and his friends were being extremely mean to Little Muck. Muley's father was enraged so he delivered Muley fifty fierce blows with the stem of a tobacco pipe. After the first twenty-five strikes he paused and told Muley a story...";
            map.src = "images/map_1_2.png";
            next_section.innerHTML = "Next Section";
            change_current_section(1);
            break;
        case 2:
            image.src = "images/little_muck_2.jpg";
            image.alt = "Little Muck";
            story.innerHTML = "Little Mucks father Mukrah was respected but poor and was just as lonely as Muck. As he was ashamed of Mucks misshapen figure, he did not allow Muck any education of any kind. When Mukrah died, most of his belongings went to other family members as he owed them a lot of money. The only belongings that Muck got were a suit with wide trousers, wide belt, coat, turban and a knife.";
            map.src = "images/map_1_2.png";
            next_section.innerHTML = "Next Section";
            change_current_section(2);
            break;
        case 3:
            image.src = "images/little_muck_3.png";
            image.alt = "Miss Ahavzi";
            story.innerHTML = "Mukrah was a tall man so to make his trousers fit Muck had to cut off the legs and sleeves while keeping the width. With his father gone, Muck left his hometown and began looking for new opportunities. He soon managed to find accommodation and a new job tending to the numerous feline and canine companions of a mysterious old woman named Miss Ahavzi.";
            map.src = "images/map_3.png";
            next_section.innerHTML = "Next Section";
            change_current_section(3);
            break;
        case 4:
            image.src = "images/little_muck_4.jpg";
            image.alt = "Magical Slippers";
            story.innerHTML = "One day when Little Muck was looking after Miss Ahavzi's cats and dogs he accidentally entered a forbidden room in her house containing many valuable items. Unfortunately, he accidentally destroyed an expensive bowl. Often for no reason Muck was punished and did not get his wages. So, he took a pair of slippers and a walking stick from the forbidden room and ran away. He later found out that the two items had magical powers. The slippers allowed him to walk faster then anyone else could and allowed him to fly anywhere he wanted. The walking stick however allowed him to easily find buried treasures.";
            map.src = "images/map_4.png";
            next_section.innerHTML = "Next Section";
            change_current_section(4);
            break;
        case 5:
            image.src = "images/little_muck_5.png";
            image.alt = "The King";
            story.innerHTML = "Little Muck impressed the king by showing him the magic slippers and was made royal courier, this however made the other servants jealous. So, to make friends he used the walking stick to find forgotten treasure in the palace garden and distributed all the gold he found to the other servants. Unfortunately, when the king found out was Muck did, he charged Muck with theft and sent him to prison.";
            map.src = "images/map_5.png";
            next_section.innerHTML = "Next Section";
            change_current_section(5);
            break;
        case 6:
            image.src = "images/little_muck_6.jpg";
            image.alt = "Prison";
            story.innerHTML = "Back then the punishment for stealing royal property was death. But Little Muck had a plan to save his own life. He told the king about the magical powers of the slippers and walking stick but did not tell him how to stop the slippers, so he ran and ran until he passed out. The king got very angry, confiscated the magical items and chased Muck away. Eight hours later Muck finally reached the border of another small country";
            map.src = "images/map_6.png";
            next_section.innerHTML = "Next Section";
            change_current_section(6);
            break;
        case 7:
            image.src = "images/little_muck_7.png";
            image.alt = "Figs";
            story.innerHTML = "When Little Muck entered a forest in the other country, he found a wizard who showed him two different fig trees that grew figs with special properties. One type of fig caused a growth of huge donkey ears and a long nose to appear on the person who ate it. The second type reversed the effects of the first one. With the two types of figs, he returned to the king to retaliate. He dressed up as a salesman and gave the first type of figs to the king. Later he dressed up as a scholar and offered the seconds type of figs to the king as a remedy for his and his royal court's deformities.";
            map.src = "images/map_7.png";
            next_section.innerHTML = "Next Section";
            change_current_section(7);
            break;
        case 8:
            image.src = "images/little_muck_8.jpg";
            image.alt = "The Royal Treasury";
            story.innerHTML = "The king gave one of the figs to one of his royal court and the donkey ears and long nose successfully disappeared, the king then immediately offered Muck a reward from the treasury. Muck snatched the magical items back and then revealed his identity. Muck then flew home with the help of the slippers and left the disloyal king and his deformed face behind. Ever since that day Muck has lived in his hometown in great prosperity, but lonely as he despised other people.";
            map.src = "images/map_8_9.png";
            next_section.innerHTML = "Next Section";
            change_current_section(8);
            break;
        case 9:
            image.src = "images/little_muck_9.jpg";
            image.alt = "Muley and his friends";
            story.innerHTML = "\"Muck became wise through experience and therefore he deserves admiration instead of mockery\", Muley's father told his son as he ended his story and spared muley the last half of the blows. Muley then told Mucks story to his friends who were very impressed at the story of his life. Ever since that day Muley and his friends honoured Muck and whenever they saw him, they bowed before him.";
            map.src = "images/map_8_9.png";
            next_section.innerHTML = "Restart Story";
            change_current_section(9);
            break;
    }
}

function change_current_section(section) {
    const elements = document.querySelectorAll(".current_section");
    for (let i=0; i<elements.length; i++) {
        elements[i].classList.remove("current_section");
    }
    document.getElementById("section_" + section).classList.add("current_section");
}

window.onload = init;