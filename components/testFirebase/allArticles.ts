const allChapters = [
    {
        title: 'Introduction',
        title_de: 'Einführung',
        desc: 'A brief introduction to the website and the journey ahead of us.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'Introduction Section to help users accomodate with the aerospace engineering industry and the journey ahead of us.',
                image: 'introduction.png'
            }
        ]
    },
    {
        title: 'Fundamentals',
        title_de: 'Grundlagen',
        desc: 'Why go to space and where to go to? Those are our first important questions.',
        articles: [
            {
                title: 'Motivation',
                title_de: 'Motivation',
                desc: 'What is our motivation to travel to space? Is it a reasonable venture? Should we not pursue it at all? Let us find out.',
                image: 'starshipramp.jpg'
            },
            {
                title: 'Destinations',
                title_de: 'Erste Ziele',
                desc: 'A reasonable evaluation of our first target is necessary. Where are we going? Venus? Mars? The moon, perhaps?',
                image: 'destinations.jpg'
            },
        ]
    },
    {
        title: 'Aerospace Engineering',
        title_de: 'Raumfahrttechnik',
        desc: 'In this chapter, we will learn more about how Rockets, Rocket Engines and Space Stations work and how they get to land safely again.',
        articles: [
            {
                title: 'Rocket Basics',
                title_de: 'Raketen: Grundlagen',
                desc: 'How are Rockets powered, how do they land, how can we afford them, what are they even made of? We will look into all of this!',
                image: 'falconheavy.jpg'
            },
            {
                title: 'Rocket Engines',
                title_de: 'Raketentriebwerke',
                desc: 'An in-depth look into the physics, functionality and different cycle models behind modern rocket engines.',
                image: 'raptor_cgi.jpg'
            },
            {
                title: 'Autonomous Landing',
                title_de: 'Autonome Landungen',
                desc: 'Since rockets like the Falcon 9 do not land manually but autonomously, how do they do that? Whats necessary to achieve this?',
                image: 'landing.jpg'
            },
            {
                title: 'Reusability',
                title_de: 'Wiederverwendbarkeit',
                desc: 'Check out what is necessary to re-use rockets after they have landed and how we can cut down our cost-to-orbit significantly.',
                image: 'entryburn.png'
            },
            {
                title: 'Starship',
                title_de: 'Starship',
                desc: 'As the biggest rocket of our time and NASAs trusted moon rocket, we should take a look at Starships history.',
                image: 'starship1.webp'
            },
            {
                title: 'Space Stations',
                title_de: 'Raumstationen',
                desc: 'We will find out what the first Space Stations looked like, what kind of a desaster they were and why space stations exist.',
                image: 'iss.png'
            },
        ]
    },
    {
        title: 'The Moon',
        title_de: 'Der Mond',
        desc: 'Find out what we can learn from our moon and when we are planning to go back there.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the Moon chapter and an outlook onto what we are trying to learn from our closest stellar neighbor.',
                image: 'moon.png'
            },
            {
                title: 'Dear Moon Mission',
                title_de: 'Dear Moon Mission',
                desc: 'Learn more about SpaceX and Yusaku Maezawa Dear Moon Mission and who is going to be on board.',
                image: 'dearmoon.png'
            },
            {
                title: 'Artemis Basecamp',
                title_de: 'Artemis Mondbasis',
                desc: 'A deep dive into NASAs plans for the Artemis Lunar Basecamp, their Lunar Terrain Vehicle and their new Space Station.',
                image: 'gateway.png'
            },
        ]
    },
    {
        title: 'Terraforming Mars',
        title_de: 'Terraforming des Mars',
        desc: 'As the title suggests, we are going to be taking a deeper look into the concept of Terraforming and how it could be applicable for Mars.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the Mars chapter and the underlying topics we will explore throughout it.',
                image: 'mars.png'
            },
            {
                title: 'Marsian Basecamp',
                title_de: 'Basecamp',
                desc: 'A visualization and explanation of what our first Marsian Basecamp could and most likely will look like.',
                image: 'gateway.png'
            },
            {
                title: 'First City',
                title_de: 'Stadt auf dem Mars',
                desc: 'A visualization and explanation of how we are going to build our first city on mars and what the government will be like.',
                image: 'basecamp.jpg'
            },
            {
                title: 'Terraforming',
                title_de: 'Terraforming',
                desc: 'An in-depth look at terraforming as a whole and a detailed plan to terraform Mars quicker than most commonly estimated.',
                image: 'mars_astronauts.png'
            },
        ]
    },
    {
        title: 'Colonizing Venus',
        title_de: 'Kolonisation der Venus',
        desc: 'In this chapter, we are going to take a closer look at Venus and will clarify why now all of a sudden it once again is on the menu for colonizational targets.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the Venus chapter and the aspects of Venus we will be looking at.',
                image: 'venus4.png'
            },
            {
                title: 'Why Venus?',
                title_de: 'Warum die Venus?',
                desc: 'Since we ruled out Venus before, it is only reasonable for us to wonder why it is mentioned again now. Why is it, though?',
                image: 'venus3.png'
            },
            {
                title: 'Problems of Venus',
                title_de: 'Probleme der Venus',
                desc: 'In this article, we will clarify why Venus is not all love and rainbows and why it will make a hard colonization target.',
                image: 'venus.png'
            },
            {
                title: 'Cloud Cities',
                title_de: 'Cloud Cities',
                desc: 'Find out why flying cities may not be as futuristic as they sound, how we could build them on Venus and why they are geat.',
                image: 'venus2.png'
            },
        ]
    },
    {
        title: 'Space Habitats',
        title_de: 'Space Habitats',
        desc: 'Why land on a planet and accept the condition it faces us with if we can just live in space itself? Well, in this chapter we will find out how.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to Space Habitats and what exactly we will be looking at when exploring the topic.',
                image: 'spacehabitats.png'
            },
            {
                title: 'The Concept',
                title_de: 'Das Konzept',
                desc: 'Learn about the concept of Space Habitats, multiple NASA models and what the structure of a Space Habitat would look like.',
                image: 'stanfordtorus2.png'
            },
            {
                title: 'Gathering Resources',
                title_de: 'Ressourcen',
                desc: 'To build Space Habitats as big as we imagined them in the last chapter, we will need lots of resources. Let us gather them.',
                image: 'ceres.png'
            },
            {
                title: 'Potential',
                title_de: 'Potenzial',
                desc: 'After looking at the necessary amount of resources for a Space Habitat, we can assess our solar systems capacity for them.',
                image: 'colonyfive.png'
            },
            {
                title: 'Power Supply',
                title_de: 'Energieversorgung',
                desc: 'When trying to build dozens of Space Habitats, at some point you will naturally lack the energy to do so...',
                image: 'power.png'
            },
        ]
    },
    {
        title: 'Alien Life',
        title_de: 'Außerirdisches Leben',
        desc: 'One of the most fundamental questions in life is the probability for it to form. If it is not as unlikely as we thought, where are all the aliens?',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the topic of Alien Life, how we can find it and what we are going to explore in this chapter.',
                image: 'alienlife.png'
            },
            {
                title: 'The Search',
                title_de: 'Die Suche',
                desc: 'Answering the question of how to search for alien life and telling the tale of recent findings.',
                image: 'melody1.png'
            },
            {
                title: 'Fermi Paradox',
                title_de: 'Das Fermi Paradoxon',
                desc: 'Unraveling the famous Fermi Paradox, you will learn why we have very good reason to think there is no aliens around us.',
                image: 'fermi.png'
            },
            {
                title: 'Kardashev Scale',
                title_de: 'Die Kardaschow-Skala',
                desc: 'The Kardashev Scale aims to categorize intelligent life after their current state of technological progress.',
                image: 'kardashev.png'
            },
            {
                title: 'The Great Filter',
                title_de: 'Der große Filter',
                desc: 'As one of the most famous explanations to the Fermi Paradox, The Great Filter does not come short in excitement to it.',
                image: 'filter.png'
            },
            {
                title: 'Solutions',
                title_de: 'Erklärungsversuche',
                desc: 'Finding solutions to the Fermi Paradox and explaining what the solutions mean for us as a species and for us as a species.',
                image: 'milkyway.png'
            },
            {
                title: 'Conclusion',
                title_de: 'Schlussfolgerung',
                desc: 'A summary of the chapter, acknowledging our current position on the Kardashev Scale and my personal opinion on Fermi.',
                image: 'years.png'
            },
        ]
    },
    {
        title: 'Distant Systems',
        title_de: 'Fremde Systeme',
        desc: 'Once we colonized our entire solar system, what is there to explore? Do we have cosmic neighbors that we can visit? Let us find out.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the topic of Distant Systems and how they could be useful or at the very least interesting to us.',
                image: 'hero15.png'
            },
            {
                title: 'Trappist-System',
                title_de: 'Trappist-System',
                desc: 'One of our closest neighboring systems and the closest system with planets within the habitable zone, the Trappist-System.',
                image: 'trappist1e.png'
            },
            {
                title: 'Proxima Centauri',
                title_de: 'Proxima Centauri',
                desc: 'The closest neighboring system and the prime target of one of our observative missions, Proxima Centauri.',
                image: 'melody2.png'
            },
        ]
    },
    {
        title: 'Future of the Universe',
        title_de: 'Die Zukunft des Universums',
        desc: 'What does the future of our universe look like? (How) will it end? When? Why?',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the End. One last time, we will talk about what comes next and what we can do about it.',
                image: 'interstellar.png'
            },
            {
                title: 'Our Borders',
                title_de: 'Unsere Grenzen',
                desc: 'Before dabbling into the final destiny of the universe, what will ours be like? Where can we go? Where not? Why?',
                image: 'localgroup.png'
            },
            {
                title: 'Life in The Universe',
                title_de: 'Leben im Universum',
                desc: 'In this article, we will discuss the future of life within our universe and how it can survive the ever-darkening universe.',
                image: 'blackholes.png'
            },
            {
                title: 'Eras of The Universe',
                title_de: 'Zeitalter des Universums',
                desc: 'The easiest way to understand the future of the Universe is by dividing it down into eras - timeframes of unimaginable length.',
                image: 'whitedwarf.png'
            },
            {
                title: 'Death Of The Universe',
                title_de: 'Tod des Universums',
                desc: 'The last chapter. The eventual "death" of our universe and how it will go down. Bring tissues!',
                image: 'blackhole2.png'
            },
            {
                title: 'Philosophy',
                title_de: 'Philosophie',
                desc: 'A philosophical epilogue of mine, reminiscing about the last chapters and giving my personal opinion towards it.',
                image: 'particles.png'
            },
        ]
    }
];

export default allChapters;