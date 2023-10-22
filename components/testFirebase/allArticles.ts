const allChapters = [
    {
        title: 'Introduction',
        title_de: 'Einführung',
        desc: 'A brief introduction to the website and the journey ahead of us.',
        desc_de: 'Eine kurze Einführung in diese Website und die vor uns liegenden Themen.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'Introduction Section to help users accomodate with the aerospace engineering industry and the journey ahead of us.',
                desc_de: 'Eine Einführungssektion, um Lesern den Einstieg in die Raumfahrtindustrie zu erleichtern.',
                image: 'introduction.png',
                id: 'introduction'
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
                desc_de: 'Was ist unsere Motivation, um ins All zu reisen? Ist es sinnvoll? Sollten wir es vielleicht nicht gar nicht versuchen?',
                image: 'starshipramp.jpg',
                id: 'motivation'
            },
            {
                title: 'Destinations',
                title_de: 'Erste Ziele',
                desc: 'A reasonable evaluation of our first target is necessary. Where are we going? Venus? Mars? The moon, perhaps?',
                desc_de: 'Bevor wir ins All reisen, müssen wir erst einmal wissen, wohin wir wollen. Venus? Mars? Der Mond vielleicht?',
                image: 'destinations.jpg',
                id: 'destinations'
            },
        ]
    },
    {
        title: 'Aerospace Engineering',
        title_de: 'Raumfahrttechnik',
        desc: 'In this chapter, we will learn more about how Rockets, Rocket Engines and Space Stations work and how they get to land safely again.',
        desc_de: 'In diesem Kapitel werden wir mehr über Raketen, deren Antriebe und Start- sowie Landemechanismen erfahren und uns Raumstationen einmal genauer ansehen.',
        articles: [
            {
                title: 'Rocket Basics',
                title_de: 'Raketen: Grundlagen',
                desc: 'How are Rockets powered, how do they land, how can we afford them, what are they even made of? We will look into all of this!',
                desc_de: 'Aus welchen Teilen besteht eigentlich eine Rakete? Wie funktionieren sie? Wie wirken sie miteinander? Finden wir es heraus.',
                image: 'falconheavy.jpg',
                id: 'rocket-basics'
            },
            {
                title: 'Rocket Engines',
                title_de: 'Raketentriebwerke',
                desc: 'An in-depth look into the physics, functionality and different cycle models behind modern rocket engines.',
                desc_de: 'Ein Deep Dive in die Physik von Raumfahrttriebwerken, verschiedenen Modellen und dem State Of The Art.',
                image: 'raptor_cgi.jpg',
                id: 'rocket-engines'
            },
            {
                title: 'Autonomous Landing',
                title_de: 'Autonome Landungen',
                desc: 'Since rockets like the Falcon 9 do not land manually but autonomously, how do they do that? Whats necessary to achieve this?',
                desc_de: 'Raketen wie die Falcon 9 landen automatisch! Aber wie? Was ist notwendig, um dies zu verwirklichen?',
                image: 'landing.jpg',
                id: 'rocket-landing'
            },
            {
                title: 'Reusability',
                title_de: 'Wiederverwendbarkeit',
                desc: 'Check out what is necessary to re-use rockets after they have landed and how we can cut down our cost-to-orbit significantly.',
                desc_de: 'Was ist nötig, um erfolgreich zurückerlangte Raketen und Booster erneut startfähig zu machen? Ein Blick in die Werkstatt!',
                image: 'entryburn.png',
                id: 'rocket-reusability'
            },
            {
                title: 'Starship',
                title_de: 'Starship',
                desc: 'As the biggest rocket of our time and NASAs trusted moon rocket, we should take a look at Starships history.',
                desc_de: 'Als die größte Rakete unserer Zeit und der Hoffnungsträger der NASA ist diese Rakete sicher einen genauen Blick wert!',
                image: 'starship1.webp',
                id: 'starship'
            },
            {
                title: 'Space Stations',
                title_de: 'Raumstationen',
                desc: 'We will find out what the first Space Stations looked like, what kind of a desaster they were and why space stations exist.',
                desc_de: 'Wie sahen die ersten Raumstationen aus, wieso waren sie ein Desaster und wieso gibt es überhaupt noch Raumstationen?',
                image: 'iss.png',
                id: 'space-stations'
            },
        ]
    },
    {
        title: 'The Moon',
        title_de: 'Der Mond',
        desc: 'Find out what we can learn from our moon and when we are planning to go back there.',
        desc_de: 'In diesem Kapitel werden wir herausfinden, was wir vom Mond lernen können und wie wir uns einen erneuten Besuch auf dem Mond vorstellen müssen.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the Moon chapter and an outlook onto what we are trying to learn from our closest stellar neighbor.',
                desc_de: 'Eine Einführung in das Kapitel und ein Ausblick auf allen Themenkomplexe, die wir rund um den Mond behandeln werden.',
                image: 'moon.png',
                id: 'moon-introduction'
            },
            {
                title: 'Dear Moon Mission',
                title_de: 'Dear Moon Mission',
                desc: 'Learn more about SpaceX and Yusaku Maezawa Dear Moon Mission and who is going to be on board.',
                desc_de: 'Die Dear Moon Mission wird die nächste Mission zum Mond, finanziert durch SpaceX und Yusaka Maezawa!',
                image: 'dearmoon.png',
                id: 'moon-dear-moon'
            },
            {
                title: 'Artemis Basecamp',
                title_de: 'Artemis Mondbasis',
                desc: 'A deep dive into NASAs plans for the Artemis Lunar Basecamp, their Lunar Terrain Vehicle and their new Space Station.',
                desc_de: 'Ein Deep Dive in die Pläne der NASA für eine Artemis Mondbasis und die Terrain Vehicles zum Transport auf dem Mond',
                image: 'gateway.png',
                id: 'moon-artemis'
            },
        ]
    },
    {
        title: 'Terraforming Mars',
        title_de: 'Terraforming des Mars',
        desc: 'As the title suggests, we are going to be taking a deeper look into the concept of Terraforming and how it could be applicable for Mars.',
        desc_de: 'Wie der Titel dieses Kapitels schon vorwegnimmt, werden wir uns als nächstes anschauen, ob der Mars ein geeigneter Kandidat für ein Terraforming-Projekt ist und wie dieses aussehen könnte!',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the Mars chapter and the underlying topics we will explore throughout it.',
                desc_de: 'Eine Einführung zum Kapitel des Mars und allen Themen, die wir uns im Zuge dessen anschauen werden.',
                image: 'mars.png',
                id: 'mars-introduction'
            },
            {
                title: 'Marsian Basecamp',
                title_de: 'Basecamp',
                desc: 'A visualization and explanation of what our first Marsian Basecamp could and most likely will look like.',
                desc_de: 'Eine Visualisierung und Erklärung eines wahrscheinlichen ersten Basecamps auf dem Mars und wie es genutzt werden könnte!',
                image: 'gateway.png',
                id: 'mars-basecamp'
            },
            {
                title: 'First City',
                title_de: 'Stadt auf dem Mars',
                desc: 'A visualization and explanation of how we are going to build our first city on mars and what the government will be like.',
                desc_de: 'Wie würde eine erste Stadt auf dem Mars aussehen? Wie würde die Regierung funktionieren? Wie könnte man von hier weiterdenken?',
                image: 'basecamp.jpg',
                id: 'mars-first-city'
            },
            {
                title: 'Terraforming',
                title_de: 'Terraforming',
                desc: 'An in-depth look at terraforming as a whole and a detailed plan to terraform Mars quicker than most commonly estimated.',
                desc_de: 'Ein Deep Dive in das Konzept des Terraforming und wie es für den Mars genutzt werden könnte, um ihn bewohnbar zu machen.',
                image: 'mars_astronauts.png',
                id: 'mars-terraforming'
            },
        ]
    },
    {
        title: 'Colonizing Venus',
        title_de: 'Kolonisation der Venus',
        desc: 'In this chapter, we are going to take a closer look at Venus and will clarify why now all of a sudden it once again is on the menu for colonizational targets.',
        desc_de: 'In diesem Kapitel werden wir uns, obwohl wir sie zuvor quasi ausgeschlossen hatten, die Venus erneut anschauen und darüber sprechen, wieso sie nun urplötzlich doch wieder interessant für uns wird.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the Venus chapter and the aspects of Venus we will be looking at.',
                desc_de: 'Eine Einleitung in das Kapitel der Venus und aller dazugehörigen Themen sowie potenzielle Schwierigkeiten.',
                image: 'venus4.png',
                id: 'venus-introduction'
            },
            {
                title: 'Why Venus?',
                title_de: 'Warum die Venus?',
                desc: 'Since we ruled out Venus before, it is only reasonable for us to wonder why it is mentioned again now. Why is it, though?',
                desc_de: 'Was spricht für die Venus und wieso sollten wir uns lieber die Venus anschauen als andere Kandidaten in unserem Sonnensystem?',
                image: 'venus3.png',
                id: 'venus-why'
            },
            {
                title: 'Problems of Venus',
                title_de: 'Probleme der Venus',
                desc: 'In this article, we will clarify why Venus is not all love and rainbows and why it will make a hard colonization target.',
                desc_de: 'Was spricht gegen die Venus und vor Allem, wieso schauen wir sie uns unseren Nachbarplaneten erst jetzt genauer an?',
                image: 'venus.png',
                id: 'venus-problems'
            },
            {
                title: 'Cloud Cities',
                title_de: 'Cloud Cities',
                desc: 'Find out why flying cities may not be as futuristic as they sound, how we could build them on Venus and why they are geat.',
                desc_de: 'Wie würden schwebende Cloud Cities auf der Venus funktionieren und wieso ist dies unsere beste Option auf der Venus?',
                image: 'venus2.png',
                id: 'venus-cloud-cities'
            },
        ]
    },
    {
        title: 'Space Habitats',
        title_de: 'Space Habitats',
        desc: 'Why land on a planet and accept the condition it faces us with if we can just live in space itself? Well, in this chapter we will find out how.',
        desc_de: 'In diesem Kapitel werden wir uns erstmals mit Space Habitats statt mit anderen Planeten beschäftigen. Das liegt primär daran, dass uns die Planeten ausgegangen sind und sekundär daran, dass Space Habs wirklich geil sind.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to Space Habitats and what exactly we will be looking at when exploring the topic.',
                desc_de: 'Eine Einführung in das Kapitel und eine Übersicht der dazugehörigen Themenkomplexe.',
                image: 'spacehabitats.png',
                id: 'space-habitats-introduction'
            },
            {
                title: 'The Concept',
                title_de: 'Das Konzept',
                desc: 'Learn about the concept of Space Habitats, multiple NASA models and what the structure of a Space Habitat would look like.',
                desc_de: 'Bevor wir Space Habitats bauen, müssen wir sie konzeptionieren! Entscheiden wir uns für eins der Modelle und arbeiten es aus.',
                image: 'stanfordtorus2.png',
                id: 'space-habitats-concept'
            },
            {
                title: 'Gathering Resources',
                title_de: 'Ressourcen',
                desc: 'To build Space Habitats as big as we imagined them in the last chapter, we will need lots of resources. Let us gather them.',
                desc_de: 'Sollten wir viele Space Habs bauen wollen, benötigen wir eine Menge Ressourcen. Das Problem lösen wir in diesem Kapitel!',
                image: 'ceres.png',
                id: 'space-habitats-resources'
            },
            {
                title: 'Potential',
                title_de: 'Potenzial',
                desc: 'After looking at the necessary amount of resources for a Space Habitat, we can assess our solar systems capacity for them.',
                desc_de: 'Stellen Space Habs ein großes Potenzial für uns dar oder sind sie eine überdimensionaler Science-Fiction-Spielerei?',
                image: 'colonyfive.png',
                id: 'space-habitats-potential'
            },
            {
                title: 'Power Supply',
                title_de: 'Energieversorgung',
                desc: 'When trying to build dozens of Space Habitats, at some point you will naturally lack the energy to do so...',
                desc_de: 'Frage des Tages: Wo bekommen wir all die Energie her, um konstant viele unserer Space Habs zu betreiben?',
                image: 'power.png',
                id: 'space-habitats-power'
            },
        ]
    },
    {
        title: 'Alien Life',
        title_de: 'Außerirdisches Leben',
        desc: 'One of the most fundamental questions in life is the probability for it to form. If it is not as unlikely as we thought, where are all the aliens?',
        desc_de: 'In diesem Kapitel beschäftigen wir uns mit einer der fundamentalsten Fragen des Lebens: Ihrer Wahrscheinlichkeit. Wir werden außerdem beleuchten, wo und wie wir anderes Leben finden könnte.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the topic of Alien Life, how we can find it and what we are going to explore in this chapter.',
                desc_de: 'Eine Einführung in das Kapitel und alle Fragen, die es innerhalb dieses Kapitels zu stellen und zu beantworten gilt.',
                image: 'alienlife.png',
                id: 'alien-life-introduction'
            },
            {
                title: 'The Search',
                title_de: 'Die Suche',
                desc: 'Answering the question of how to search for alien life and telling the tale of recent findings.',
                desc_de: 'Haben wir schon nach außerirdischem Leben gesucht? Was haben wir gefunden? Was bedeutet das für uns?',
                image: 'melody1.png',
                id: 'alien-life-search'
            },
            {
                title: 'Fermi Paradox',
                title_de: 'Das Fermi Paradoxon',
                desc: 'Unraveling the famous Fermi Paradox, you will learn why we have very good reason to think there is no aliens around us.',
                desc_de: 'Das berühmt berüchtigte Fermi Paradoxon: Eine Erläuterung und Einschätzung.',
                image: 'fermi.png',
                id: 'alien-life-fermi'
            },
            {
                title: 'Kardashev Scale',
                title_de: 'Die Kardaschow-Skala',
                desc: 'The Kardashev Scale aims to categorize intelligent life after their current state of technological progress.',
                desc_de: 'Das Ziel der Kardaschow-Skala besteht darin, intelligentes Leben zu kategorisieren, um die Suche nach ihm zu erleichtern...',
                image: 'kardashev.png',
                id: 'alien-life-kardashev'
            },
            {
                title: 'The Great Filter',
                title_de: 'Der große Filter',
                desc: 'As one of the most famous explanations to the Fermi Paradox, The Great Filter does not come short in excitement to it.',
                desc_de: 'Eine der möglichen Erklärungen für das Fermi-Paradoxon sind große Filter! Doch welche sind das überhaupt?',
                image: 'filter.png',
                id: 'alien-life-filter'
            },
            {
                title: 'Solutions',
                title_de: 'Erklärungsversuche',
                desc: 'Finding solutions to the Fermi Paradox and explaining what the solutions mean for us as a species and for us as a species.',
                desc_de: 'Auf Basis dessen, was wir in vorigen Kapiteln gelernt haben, können wir hypothetische Erklärungen für das Paradoxon aufstellen.',
                image: 'milkyway.png',
                id: 'alien-life-solutions'
            },
            {
                title: 'Conclusion',
                title_de: 'Schlussfolgerung',
                desc: 'A summary of the chapter, acknowledging our current position on the Kardashev Scale and my personal opinion on Fermi.',
                desc_de: 'Eine Zusammenfassung des Kapitels samt meiner persönlichen Einschätzung des Fermi-Paradoxon und meines Lösungsansatzes.',
                image: 'years.png',
                id: 'alien-life-conclusion'
            },
        ]
    },
    {
        title: 'Distant Systems',
        title_de: 'Fremde Systeme',
        desc: 'Once we colonized our entire solar system, what is there to explore? Do we have cosmic neighbors that we can visit? Let us find out.',
        desc_de: 'Sollten wir jemals unser gesamtes Sonnensystem besiedelt haben, was tun wir? Auf Abenteurreise in fremde Systeme gehen? Vielleicht. Wir können ja schon mal einen Blick dorthin werfen.',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the topic of Distant Systems and how they could be useful or at the very least interesting to us.',
                desc_de: 'Eine Einführung in fremde (Sonnen)Systeme und wie diese und Informationen zu diesen in Zukunft interessant für uns sein könnten.',
                image: 'hero15.png',
                id: 'distant-systems-introduction'
            },
            {
                title: 'Trappist-System',
                title_de: 'Trappist-System',
                desc: 'One of our closest neighboring systems and the closest system with planets within the habitable zone, the Trappist-System.',
                desc_de: 'Unser zweitengster Nachbar mit mehreren Planeten in der habitablen Zone - das Trappist-System, ein unheimlich interessantes Ziel!',
                image: 'trappist1e.png',
                id: 'distant-systems-trappist'
            },
            {
                title: 'Proxima Centauri',
                title_de: 'Proxima Centauri',
                desc: 'The closest neighboring system and the prime target of one of our observative missions, Proxima Centauri.',
                desc_de: 'Unser engster Nachbar und das Hauptziel einiger unserer Beobachtungsmissionen - Proxima Centauri.',
                image: 'melody2.png',
                id: 'distant-systems-proxima-centauri'
            },
        ]
    },
    {
        title: 'Future of the Universe',
        title_de: 'Die Zukunft des Universums',
        desc: 'What does the future of our universe look like? (How) will it end? When? Why?',
        desc_de: 'Wie sieht die Zukunft des Universums aus? (Wie) wird es enden? Wann? Wieso? Werden wir dabei sein?',
        articles: [
            {
                title: 'Introduction',
                title_de: 'Einführung',
                desc: 'An introduction to the End. One last time, we will talk about what comes next and what we can do about it.',
                desc_de: 'Eine Einführung in unser letztes Kapitel. Ein letztes Mal werden wir uns fragen, was als nächstes kommt.',
                image: 'interstellar.png',
                id: 'future-introduction'
            },
            {
                title: 'Our Borders',
                title_de: 'Unsere Grenzen',
                desc: 'Before dabbling into the final destiny of the universe, what will ours be like? Where can we go? Where not? Why?',
                desc_de: 'Bevor wir uns in das finale Schicksal des Universums stürzen, lasst uns klären, wo innerhalb dessen unsere Grenzen liegen.',
                image: 'localgroup.png',
                id: 'future-borders'
            },
            {
                title: 'Life in The Universe',
                title_de: 'Leben im Universum',
                desc: 'In this article, we will discuss the future of life within our universe and how it can survive the ever-darkening universe.',
                desc_de: 'In diesem Artikel werden wir die Zukunft allen Lebens im Universum besprechen und klären, wieso diese relativ kurz ausfällt.',
                image: 'blackholes.png',
                id: 'future-life'
            },
            {
                title: 'Eras of The Universe',
                title_de: 'Ären des Universums',
                desc: 'The easiest way to understand the future of the Universe is by dividing it down into eras - timeframes of unimaginable length.',
                desc_de: 'Der einfachste Weg, um die Zukunft des Universums zu verstehen, ist, sie in Zeitalter aufzuteilen und getrennt zu betrachten.',
                image: 'whitedwarf.png',
                id: 'future-eras'
            },
            {
                title: 'Death Of The Universe',
                title_de: 'Tod des Universums',
                desc: 'The last chapter. The eventual "death" of our universe and how it will go down. Bring tissues!',
                desc_de: 'Das letzte Kapitel. Der endgültige "Tod" des Universums und wie es enden wird. Taschentücher mitbringen!',
                image: 'blackhole2.png',
                id: 'future-death'
            },
            {
                title: 'Philosophy',
                title_de: 'Philosophie',
                desc: 'A philosophical epilogue of mine, reminiscing about the last chapters and giving my personal opinion towards it.',
                desc_de: 'Ein philosophisch angehauchter Epilog meinerseits, Schwelgen in Erinnerung an die vorigen Kapitel und meine Sicht dazu.',
                image: 'particles.png',
                id: 'future-philosophy'
            },
        ]
    }
];

export default allChapters;