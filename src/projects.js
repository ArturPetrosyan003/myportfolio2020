const data = [
    {
        id: 1,
        platform: 'mobile',
        duration: '1.5 mo',
        url: 'https://play.google.com/store/apps/details?id=com.BlockGames.TPM',
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
        description: 'THIS WEBSITE IS UDEMY COURSE PROJECT. It is about football team Manchester City and created with React Js and uses Firebase DB and hosting. It also has admin dashboard with login system (Firebase auth). In website are shown information about team, matches and players. Also it has a lot of animations. Enjoy! :)',
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
        description: 'THIS WEBSITE IS UDEMY COURSE PROJECT. It is about the musical event. The website is simple and created with React Js. Enjoy! :)',
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
        description: 'This is online shop prototype created with Laravel. It has admin dashboard, login/registration system and account page with card. It is not deployed anywhere :)',
        images: [
            require('./assets/images/Laravel/01.png'),
            require('./assets/images/Laravel/02.png'),
            require('./assets/images/Laravel/03.png')
        ]
    }
]

export default data;