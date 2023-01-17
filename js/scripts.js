let team = [
    {
        name: `Wayne Barnett`,
        job: `Founder & CEO`,
        image: `img/wayne-barnett-founder-ceo.jpg`
    },
    {
        name: `Angela Caroll`,
        job: `Chief Editor`,
        image: `img/angela-caroll-chief-editor.jpg`
    },
    {
        name: `Walter Gordon`,
        job: `Office Manager`,
        image: `img/walter-gordon-office-manager.jpg`
    },
    {
        name: `Angela Lopez`,
        job: `Social Media Manager`,
        image: `img/angela-lopez-social-media-manager.jpg`
    },
    {
        name: `Scott Estrada`,
        job: `Developer`,
        image: `img/scott-estrada-developer.jpg`
    },
    {
        name: `Barbara Ramos`,
        job: `Graphic Designer`,
        image: `img/barbara-ramos-graphic-designer.jpg`
    }
];

const container = document.getElementById(`container`);
for(let i = 0; i < team.length; i++){
    const object = team[i];
    console.log(object.name, object.job,object.image);
    
    container.innerHTML += `
    <div>
        <div>
            <img src = '${object.image}'>
        </div>
        <div>
        <h2>${object.name}</h2>
        <p>${object.job}</p>
        </div>
    </div>` 
}