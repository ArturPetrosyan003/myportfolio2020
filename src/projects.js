const data = [
    {
        id: 1,
        platform: 'mobile',
        duration: '1.5 mo',
        url: 'https://play.google.com/store/apps/details?id=com.BlockGames.TPM',
        github: null,
        description: 'The Pyramid Mystery is an adventure/puzzle android game made with Unity. It consists of 2 chapters. I used modern technologies such as AI and game storytelling to create the game. Enjoy playing :)',
        images: [
            require('./assets/images/TPM/01.jpg'),
            require('./assets/images/TPM/02.jpg'),
            require('./assets/images/TPM/03.jpg')
        ]
    },
    {
        id: 2,
        platform: 'web',
        duration: '1 mo',
        url: 'https://m-city-453a6.firebaseapp.com/',
        github: null,
        description: 'THIS WEBSITE IS UDEMY COURSE PROJECT. It is about football team Manchester City and created with React Js and uses Firebase DB and hosting. It also has admin dashboard with login system (Firebase auth). In website is shown the information about the team, matches and players with a lot of animations.',
        images: [
            require('./assets/images/MCity/01.png'),
            require('./assets/images/MCity/02.png'),
            require('./assets/images/MCity/03.png')
        ]
    },
    {
        id: 3,
        platform: 'web',
        duration: '2 wk',
        url: 'http://glorious.surge.sh/',
        github: null,
        description: 'THIS WEBSITE IS UDEMY COURSE PROJECT. It is about a musical event. The website is created with React Js but it is very simple.',
        images: [
            require('./assets/images/Venue/01.png'),
            require('./assets/images/Venue/02.png'),
            require('./assets/images/Venue/03.png')
        ]
    },
    {
        id: 4,
        platform: 'web',
        duration: '3 wk',
        url: null,
        github: null,
        description: 'This is online shop prototype created with Laravel. It has admin dashboard, login/registration system and account page with card. It is not deployed anywhere.',
        images: [
            require('./assets/images/Laravel/01.png'),
            require('./assets/images/Laravel/02.png'),
            require('./assets/images/Laravel/03.png')
        ]
    }
]

export default data;