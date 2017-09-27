var myName= "Brandon Pickens";
if (myName == 'Brandon Pickens');
    console.log ("Name:" + " "+myName.toUpperCase());

var career = 'Front-End Engineer / Freelance Back-End Engineer';
if (career == 'Front-End Engineer/Freelance Back-End Engineer');
    console.log ('Career:' + " " + career)

var description = 'Changing the world one div at a time';
if (description == 'Changing the world one div at a time');
    console.log ('Description:' + ' ' + description)

var interest = ('My Interest:');
if (interest == 'My Interest:');
    console.log (interest);

var movies= '* Foreign Movies (THE BEST)';
    console.log(movies);

var tv= '* Watching TV Shows on the internet';
    console.log(tv);

var games= '* Playing RPGs';
    console.log(games);

var books= '* Mystery Novels';
    console.log(books);

var experience= 'My Previous Experience:';
    console.log(experience);

function displayPosition(jobTitle, companyName,description) {
    console.log(jobTitle,companyName,description)
}
    displayPosition('* Landscaper','Pickens\' Landscaping', 'Cut and edge the grass, cut and style hedges');
    displayPosition('- Ballerina', 'New Jack Dancers', 'Tip-toeing on the dance floor');
    displayPosition('* Hype Man', 'Flava Industries', 'Getting the croud involved');
    displayPosition('IT', 'GeekSquad', 'Telling people to restart their computers');
    displayPosition('Twitch Watcher', 'Self-employed', 'watching hours of video game streams');
    displayPosition('* Lead Fashion Designer', 'Unemployed', 'Copy the style of Pops from The Wayans Bros');
    displayPosition('Created native iOS', 'virtual tour guide', 'that used iBeacon technology to');
    displayPosition('triangulate position', 'within the museum', 'and give information about a');
    displayPosition('piece', 'of', 'cheese');

var skills = 'My Skills:';
    console.log(skills);

function displaySkills(skillName, coolSkill) {
    if(coolSkill === true) {
        console.log('* ' + 'Check It: ' + skillName); 
    } else {
        console.log('* ' + skillName);
    }
}


displaySkills('Seeing far', true)
displaySkills('Spanish')
displaySkills('HTML', true)
displaySkills('Running', true)
displaySkills('Envy')
displaySkills('People Watching', true)
displaySkills('Reading', true)
displaySkills('Playing the triangle')
displaySkills('Madden')
