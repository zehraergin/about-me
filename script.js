const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("serious");

    if (toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Serious Fact #1: My first and only job was working as tutor for middle schoolers. </h3>
                <p>
                    Last year, i worked at this small tutroing company that did some individual tutroing as well, so I was tutor there in math. 
                </p>
                <ul>
                    <li>I wored with 7th graders.</li>
                    <li>I taught math.</li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Serious Fact #2: I used to live in South Hackensack, but now I live in Upper Saddle River. </h3>
                <p>
                    I'd lived in South Hackensack for practically my whoel life, from the time I was a baby to 14 years old. My elementray school and middle school was really smalll, and we were about 25 people per grade. I moved to Upper Saddle River as a sophmore. 
                </p>
                <ul>
                    <li>I lived in South Hckensack for almost 15 years. </li>
                    <li>I moved to Upper Saddle river as a sophmore.</li>
                    <li>It was a really big change to go from a reallly small middle school to BCA. 
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Serious Fsct #3: I know two languages: English and Turkish</h3>
            <p>
                My first language was accutally Turkish. Before I started going to school, my parenst only spoke to me in Turkish, but then I learned English in PreK. My parents are both Turkish and I go to Turkey every year so to able tot speak to my grandparesnts, I know Turkish. 
            </p>
            <ul>
                    <li>I am bilingual.</li>
                    <li>My first language was Turkish.</li>
                    <li>I go to Turkey every year becuase my entire extended family lives there. 
                    </li>
                </ul>
    `;
    }

    if (!toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Silly Fact #1: I have a cat named Coco</h3>
                <p>
                    My cat is a Scottish Fold and is 1 years old. Her name is Coco and she has white fur. She loves to sleep in my sister's bed and jump on you when you're sleeping. 
                </p>
                <ul>
                    <li>Coco is 1.5 years old.</li>
                    <li>She is Scottish Fold.</li>
                </ul>
        `;
        card2.innerHTML = `
             <h3>Silly Fact #2: My favorite place I have traveled to is Marseille, France.</h3>
                <p>
                    I went to Marseilles last summer with my paresnts, my sister and other family friends. We only stayed there for 2 days, but I loved it there becuase it is a port city, and was right by the sea. I also had the best tasting gelato. I alse loved walking through the streets fo Marseille and seeing the beautiful, old architecute and shopping. There were vey beautiful fountains and my favoitre shop was a small, cozy, cafe right near the water. 
                </p>
                <ul>
                    <li>I stayed there for 2 days.</li>
                    <li>I had gelato.</li>
                    <li>I toured Marseille on The Little Tourist Train. 
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Silly Fact #3: I did figure skating for 5 years. </h3>
                <p>
                    I started figure skating when I was 9 nine years old. I also used to do ballet, so those were the two main sports that I would do. I loved figure skating, adn was advncing pretty quecly, yet I quit when I came to BCA and started volleyball becuase I did nto have enought time to do both. 
                </p>
                <ul>
                    <li>My favorite spin was a sit spin. </li>
                    <li>I had to quit when I came to BCA. </li>
                    <li>
                        It's my favoirte sport I've ever done. 
                    </li>
                </ul>
    `;
    }
});