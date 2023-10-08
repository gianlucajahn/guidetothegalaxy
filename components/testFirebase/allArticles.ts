const allChapters = [
    {
        title: 'Introduction',
        desc: 'A brief introduction to the website and the journey ahead of us.',
        articles: [
            {
                title: 'Introduction',
                desc: 'Introduction Section to help users accomodate with the aerospace engineering industry and the journey ahead of us',
                image: 'introduction.png'
            }
        ]
    },
    {
        title: 'Fundamentals',
        desc: 'Why go to space and where to go to? Those are our first important questions.',
        articles: [
            {
                title: 'Motivation',
                desc: 'What is our motivation to travel to space? Is it a reasonable venture? Should we not pursue it at all?',
                image: 'starshipramp.jpg'
            },
            {
                title: 'Destinations',
                desc: 'A reasonable evaluation of our first target is necessary. Where are we going? Venus? Mars? The moon, perhaps?',
                image: 'destinations.jpg'
            },
        ]
    },
    {
        title: 'Aerospace Engineering',
        desc: 'In this chapter, we will learn more about how Rockets, Rocket Engines and Space Stations work and how they get to land safely again.',
        articles: [
            {
                title: 'Rocket Basics',
                desc: 'How are Rockets powered, how do they land, how can we afford them, what are they even made of? We will look into all of those questions.',
                image: 'falconheavy.jpg'
            },
            {
                title: 'Rocket Engines',
                desc: 'An in-depth look into the physics and the functionality and different cycle models behind modern rocket engines, fuel and oxidizers.',
                image: 'raptor_cgi.jpg'
            },
            {
                title: 'Autonomous Landing',
                desc: 'Since rockets like the Falcon 9 do not land manually but autonomously, how do they do that? What is necessary to achieve this behaviour?',
                image: 'landing.jpg'
            },
            {
                title: 'Reusability',
                desc: 'Check out what is necessary to re-use rockets after they have landed and how we can use these principles to cut down our cost-to-orbit significantly.',
                image: 'entryburn.png'
            },
            {
                title: 'Starship',
                desc: 'As the biggest rocket of our time and the trusted vehicle to fly NASA teams around and to the moon, we should take a look at Starships history.',
                image: 'starship1.webp'
            },
            {
                title: 'Space Stations',
                desc: 'We will find out what the first Space Stations looked like, what kind of a desaster they were and why we are financing space stations at all.',
                image: 'iss.png'
            },
        ]
    },
    {
        title: 'The Moon',
        desc: 'Find out what we can learn from our moon and when we are planning to go back there.',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to the Moon chapter and an outlook onto what we are trying to learn from our closest stellar neighbor.',
                image: 'moon.png'
            },
            {
                title: 'Dear Moon Mission',
                desc: 'Learn more about SpaceX and Yusaku Maezawa Dear Moon Mission, when its going to launch and who is going to be present on board.',
                image: 'dearmoon.png'
            },
            {
                title: 'Artemis Basecamp',
                desc: 'A deep dive into NASAs plans for the Artemis Lunar Basecamp, their Lunar Terrain Vehicle and their new Space Station in lunar orbit.',
                image: 'gateway.png'
            },
        ]
    },
    {
        title: 'Terraforming Mars',
        desc: 'As the title suggests, we are going to be taking a deeper look into the concept of Terraforming and how it could be applicable for Mars.',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to the Mars chapter and the underlying topics we will explore throughout it.',
                image: 'mars.png'
            },
            {
                title: 'Marsian Basecamp',
                desc: 'A visualization and explanation of what our first Marsian Basecamp could and most likely will look like once we shoot our first rockets there.',
                image: 'gateway.png'
            },
            {
                title: 'First City',
                desc: 'A visualization and explanation of how we are going to build our first city on mars, what the government will be like and how decision on life within our colony will be made.',
                image: 'basecamp.jpg'
            },
            {
                title: 'Terraforming',
                desc: 'An in-depth look at terraforming as a whole and a detailed plan to terraform Mars quicker than most commonly estimated, using super greenhouse gases.',
                image: 'mars_astronauts.png'
            },
        ]
    },
    {
        title: 'Colonizing Venus',
        desc: 'In this chapter, we are going to take a closer look at Venus and will clarify why now all of a sudden it once again is on the menu for colonizational targets.',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to the Venus chapter and the aspects of Venus we will be looking at.',
                image: 'venus4.png'
            },
            {
                title: 'Why Venus?',
                desc: 'Since we ruled out Venus before, it is only reasonable for us to wonder why it is mentioned again now. Why is it, though?',
                image: 'venus3.png'
            },
            {
                title: 'Problems of Venus',
                desc: 'In this article, we will clarify why Venus is not all love and rainbows and why it will be hard if manageable at all for us to settle on it.',
                image: 'venus.png'
            },
            {
                title: 'Cloud Cities',
                desc: 'Find out why flying cities may not be as futuristic as they sound, how we could build them on Venus and why they are our best option in the first place.',
                image: 'venus2.png'
            },
        ]
    },
    {
        title: 'Space Habitats',
        desc: 'Why land on a planet and accept the condition it faces us with if we can just live in space itself? Well, in this chapter we will find out how possible that is.',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to Space Habitats and what exactly we will be looking at when exploring the topic.',
                image: 'spacehabitats.png'
            },
            {
                title: 'The Concept',
                desc: 'Learn about the concept of Space Habitats, multiple NASA models and what the structure of a Space Habitat would look like.',
                image: 'stanfordtorus2.png'
            },
            {
                title: 'Gathering Resources',
                desc: 'To build Space Habitats as big as we imagined them in the last chapter, we will need lots of resources. We will find out how to get them within this article.',
                image: 'ceres.png'
            },
            {
                title: 'Potential',
                desc: 'After looking at the necessary amount of resources for a Space Habitat, we can assess our solar systems capacity for them and ultimately its potential to support us in the future.',
                image: 'colonyfive.png'
            },
            {
                title: 'Power Supply',
                desc: 'When trying to build dozens of Space Habitats, at some point you will nature lack the energy to do so. Let us find out how we could try to generate enough to sustain our Space Habitats for a while.',
                image: 'power.png'
            },
        ]
    },
    {
        title: 'Alien Life',
        desc: 'One of the most fundamental questions in life is the probability for it to form. If it is not as unlikely as we thought, where are all the aliens?',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to the topic of Alien Life and what we are going to explore in this chapter.',
                image: 'alienlife.png'
            },
            {
                title: 'The Search',
                desc: 'Answering the question of how to search for alien life and telling the tale of recent findings.',
                image: 'melody1.png'
            },
            {
                title: 'Fermi Paradox',
                desc: 'Unraveling the famous Fermi Paradox, you will learn why we have very good reason to think there is no aliens in close proximity to Earth.',
                image: 'fermi.png'
            },
            {
                title: 'Kardashev Scale',
                desc: 'The Kardashev Scale aims to categorize intelligent life after their current state of technological progress, making it easier for us to search for them.',
                image: 'kardashev.png'
            },
            {
                title: 'The Great Filter',
                desc: 'As one of the most famous explanations to the Fermi Paradox, The Great Filter does not come short in excitement in comparison with its counterpart.',
                image: 'filter.png'
            },
            {
                title: 'Solutions',
                desc: 'Finding solutions to the Fermi Paradox and explaining what the solutions mean for us as a species and for us as a species that is trying to make further progress in technology.',
                image: 'milkyway.png'
            },
            {
                title: 'Conclusion',
                desc: 'A summary of the chapter, acknowledging our current position on the Kardashev Scale and my personal opinion on the Fermi Paradox.',
                image: 'years.png'
            },
        ]
    },
    {
        title: 'Distant Systems',
        desc: 'Once we colonized our entire solar system, what is there to explore? Do we have cosmic neighbors that we can visit? Let us find out.',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to the topic of Distant Systems and how they could be useful or at the very least interesting to us.',
                image: 'hero15.png'
            },
            {
                title: 'Trappist-System',
                desc: 'As one of our closest neighboring systems and the closest system with planets within the habitable zone, the Trappist-System is certainly an interesting system to keep an eye on.',
                image: 'trappist1e.png'
            },
            {
                title: 'Proxima Centauri',
                desc: 'Being the closest neighboring system and the prime target of one of our observative missions, Proxima Centauri might not harbor life yet but might harbor us in the distant future.',
                image: 'melody2.png'
            },
        ]
    },
    {
        title: 'Future of the Universe',
        desc: 'What does the future of our universe look like? (How) will it end? When? Why?',
        articles: [
            {
                title: 'Introduction',
                desc: 'An introduction to the End. One last time, we will talk about what comes next.',
                image: 'interstellar.png'
            },
            {
                title: 'Our Borders',
                desc: 'Before dabbling into the final destiny of the universe, what will ours be like? Where can we go? Where not? Why?',
                image: 'localgroup.png'
            },
            {
                title: 'Life in The Universe',
                desc: 'In this article, we will discuss the future of life within our universe and how it can survive the ever-darkening ages that lie in front of us.',
                image: 'blackholes.png'
            },
            {
                title: 'Eras of The Universe',
                desc: 'The easiest way to understand the future of the Universe is by dividing it down into eras - timeframes of unimaginable length.',
                image: 'whitedwarf.png'
            },
            {
                title: 'Death Of The Universe',
                desc: 'The last chapter. The eventual "death" of our universe and how it will go down. Bring tissues!',
                image: 'blackhole2.png'
            },
            {
                title: 'Philosophy',
                desc: 'A philosophical epilogue of mine, reminiscing about the last chapters and giving my personal opinion towards the spectactle.',
                image: 'particles.png'
            },
        ]
    }
];

export default allChapters;