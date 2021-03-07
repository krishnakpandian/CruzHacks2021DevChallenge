# CruzHacks 2021-2022 Frontend Engineering Challenge
## Setup and Installation

This react app was developed with typescript and yarn.
This application was intended to be run with the following backend.
`https://github.com/krishnakpandian/CruzHacks2021DevChallengeBackend`

You can access the live site here.
https://cruzhacks2021demo.web.app/

One note about the fetching performance on the live site is that the fetches might be slow since heroku free tier turns off it's servers if they are not used in a while. So if the render for backend fetches is slow, reload the page or test via the following instructions.

`git clone https://github.com/krishnakpandian/CruzHacks2021DevChallengeFrontend.git`

Run `yarn` to install the required modules

Add a dotenv with the following information
```  
REACT_APP_BACKEND=www.endpoint.url
```

## How to Run
   * Tested with Node v10.15.1
   * Run App `yarn start`
   * Run Tests `yarn test`
   * Create a Build `yarn build`

## Design Improvements
The frontend challenge was fairly easy and I tried to design a UI that would be simple to use. This year I kept my code very modular and I didn't really run into any issues or roadblocks. I think I could have unit tested better rather than the shallow renders I did for my app but in the grand scheme of things, I think this was okay. My biggest regret in the frontend challenge was not making my form as modular as it could have been. I felt like I wanted to make very field it's own input box however, there were just enough differences between each input  where I felt that might be unneccessary but for scaling I realistically think I should make each input it's own component and pass in values into each with styles. The hardest part of this challenge was trying to figure out a design that looked nice and and was intuitive. This is why we have designers so we don't have to figure this out. 

I think my final design was pretty nice overall considering I built it from scratch, but I did take some inspiration color wise from last year's website. The one part of the site I still think looks mediocre is the submission response page where it shows the applicant information after you fill in the form. I feel like I could have done a better job but I had no idea on how to style that nicely with such large varying sizes. I think my rendering of hacker info was really clean with each one entering it's own card and I'm happy with my protective functions that will ensure our cards will never break style wise no matter what input is received. Besides that, I did leave 2 warnings of unused components but that's not too big. 

This app was designed to scale for all screen sizes greater than the Iphone SE. I'm again pretty happy with the design and there were some more things I thought about implementing but I have finals so I chose not to such as updating old responses and implementing a login, OAuth, or even better data analysis given hacker results. Hopefully I will have that opportunity next year on the CruzHacks dev team.
