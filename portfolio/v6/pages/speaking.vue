<template>
  <div class="bg-gray-300 px-4 py-16">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold text-center">
        Portfolio - A Curated List of Professional and Personal Projects
      </h1>
      <p class="mt-16 max-w-4xl mx-auto">
        I have created many programs, websites and have many unfinished
        projects as well. Here is a listing of personal and professional
        websites that I have developed over the years. Expect an expansion
        in this section as time goes by!
        <br><br>
        <a
          class="text-gray-900 font-bold hover:text-black underline"
          href="mailto:ajones061392@yahoo.com"
        >Contact me</a>! No matter if it is a conference, a user group meeting, an internal event of your company or similar.
      </p>
      <section class="flex flex-col my-16">
        <Talk
          v-for="talk in $options.talks"
          :key="talk.title + talk.date"
          :talk="talk"
        />
      </section>
    </div>
  </div>
</template>

<script>

const TALKS = [
  {
    title: 'Cogs Web Development and Hosting Company Site',
    description: `
      This project has taken many different turns and a variety of different versions.
      At first I built the site using only Bootstrap as the Front-End and utilized Javascript
      for the backend. From then I created 6 different versions of the site using Jekyll, Ruby on Rails,
      Hugo and now finally settled on using Gatsby.js, which is under development right now,
    `,
    eventName: 'Cogs Web Development',
    location: 'Los Angeles, CA',
    eventUrl: 'https://cogswebdevandhosting.ml/',
    // slidesUrl: 'https://slides.com/mannil/seo-in-a-vuejs-world-vueconf-us-2020/',
    date: '2020-03-30'
  },
  {
    title: 'aDayInTheLife',
    description: `
     A blog that I am working to building using Jekyll and as a way to
     document my daily activities and uses of technologies.
    `,
    eventName: 'A Day In The Life',
    location: 'Pasadena, CA',
    eventUrl: 'https://adayinthelife.ml/',
    date: '2019-10-27'
  },
  {
    title: 'mJones',
    description: `
      A spontaneous live-coding session about the rising CSS framework Tailwind. During the session we created a demo
      project based on Nuxt.js, included Tailwind and took a look at the utility-first approach as well as different
      features of the framework like component extraction, the style reset for many native elements and easy class composition.
    `,
    eventName: 'mJones',
    location: 'Pasadena, CA',
    eventUrl: 'https://mjones.tk/',
    date: '2019-10-27'
  },
  {
    title: 'Equity Publishing',
    eventUrl: 'https://eqpublishing.tk/',
    description: `
      An example of one magazine that I made digital using the turn.js Framework.
      North Idaho Star a retirement home magazine that Equity Publishing creates and issues out.
    `,
    eventName: 'Equity Publishing',
    location: 'Deer Park, Washington',
    eventUrl: 'https://eqpublishing.tk/',
    // slidesUrl: 'https://slides.com/mannil/ama-vuecamp-berlin-2019',
    date: '2019-10-26'
  },
  {
    title: 'North Star Idaho',
    description: `
      An example of one magazine that I made digital using the turn.js Framework.
      North Idaho Star a retirement home magazine that Equity Publishing creates and issues out.
    `,
    eventName: 'North Star Idaho',
    location: 'Pasadena, CA',
    eventUrl: 'https://northstaridaho.tk/',
    date: '2019-10-27'
  },
  {
    title: 'jPortfolio',
    description: `
      My personal portfolio website, in which I demonstrate my skills and knowledge. All to better hone and
      perfect my web development and design skills. I also plan on releasing software that I build on this
      site as well.
    `,
    eventName: 'jPortfolio',
    location: 'Pasadena, CA',
    eventUrl: 'https://jportfolio.tk/',
    // slidesUrl: 'https://slides.com/mannil/jamstack-webmontag-07-19',
    date: '2019-07-22'
  },
  {
    title: 'jPortfolio Dev Blog',
    description: `
       My personal development blog to keep track of all the various topics, tutorials and techniques that I
       will be acquiring over the coming years. I developed it using Jekyll which is a Ruby on Rails powered
       Static Site Generator.`,
    eventName: 'jPortfolio Blog',
    location: 'Pasadena, CA',
    eventUrl: 'https://jportfolio.tk/blog/',
    // slidesUrl: 'https://slides.com/mannil/jamstack-output-dd-2019',
    date: '2019-06-20'
  },
  {
    title: 'mathDev ',
    description: 'Clean Code is undoubtedly important. Too much technical debt can slow down projects and, in the end, ruin companies. While the principles themselve are clear thanks to Uncle Bob, this talk lays the focus on Clean Code when working with the frameworks Vue.js and Nuxt.js.',
    eventName: 'mathDev',
    eventUrl: 'https://mathdev.tk/',
    location: 'Pasadena, CA',
    date: '2019-06-11'
  },
  {
    title: 'cSites Directory',
    description: 'A Website Directory of the Cogs Network Websites. This is a directory listing for all the sites that I have developed under myself and my Company.',
    eventName: 'cSites Directory',
    eventUrl: 'https://csites.tk/',
    location: 'Pasadena, CA',
    date: '2019-06-11'
  },
  // {
  //   title: 'Cogs Web Development and Hosting Blog',
  //   description: `
  //   JAMstack, und damit ist nicht der portablen Gitarrenverstärker den man beim Googlen als erstes findet gemeint, ist eine framework-unabhängige Architektur für moderne Webanwendungen.
  //   Bestehend aus *J*avascript, *A*PIs und *M*arkup verspricht der Ansatz besser Sicherheit "by default", einfachere Skalierung und auch noch erhöhte Performance.
  //   Ob das so einfach geht? Findet es in diesem Lightning Talk heraus`,
  //   eventName: 'DevDay Dresden',
  //   location: 'Dresden, Germany',
  //   eventUrl: 'https://www.devday.de/devday19/talk/jamstack-eine-neuartige-webanwendungs-architektur/',
  //   slidesUrl: 'https://slides.com/mannil/jamstack-dev-day-dresden-2019',
  //   date: '2019-05-22'
  // },
  // {
  //   title: 'Cogs Web Development and Hosting Changelog',
  //   description: `
  //   Nuxt.js - You probably have heard the name of the Vue.js framework a few times by now.
  //   Maybe when a colleague of yours gave it a try, or when you saw it on the GitHub report as the fourth fastest growing open source project in 2018.
  //   But of course, you as a smart developer are skeptical:
  //   Why would I need another framework that even sits on top of *another* one?
  //   What is this trendy "SSR" buzzword?
  //   Which problems would Nuxt solve for me and how can I get started?
  //   During the talk I'll answer all of these questions and many more.
  //   Join the meetup for an introduction to Nuxt.js. There is no further knowledge besides basic Vue experience needed.`,
  //   eventName: 'VueJS Dresden',
  //   location: 'Dresden, Germany',
  //   eventUrl: 'https://www.meetup.com/vue-js-dresden/events/258288987/',
  //   slidesUrl: 'https://slides.com/mannil/nuxt-dresden-2019',
  //   date: '2019-04-29'
  // },
  // {
  //   title: 'Cogs Web Development and Hosting Documentation',
  //   description: 'Nuxt.js - You probably have heard the name of the Vue.js framework at least once. Maybe when a fellow colleague gave it a try, or when you saw it on the GitHub report as 4th fastest growing open source project in 2018. But as a smart developer, you\'re skeptical: Why would I need another framework that even sits on top of *another* one? What is this SSR everyone is talking about? What problems would Nuxt solve for me and how to get started? During my talk, all these questions (and many more) will be answered. Join an introduction to Nuxt.js and experience it with no previous knowledge needed besides Vue. ',
  //   eventName: 'VueDay Verona',
  //   location: 'Verona, Italy',
  //   eventUrl: 'https://2019.vueday.it/talks.html',
  //   videoUrl: 'https://vimeo.com/338836843',
  //   slidesUrl: 'https://slides.com/mannil/nuxt-verona-2019#/',
  //   date: '2019-04-12'
  // },
  // {
  //   title: '',
  //   description: `
  //   Some of you might have heard of JAMstack already - a new approach to build and deliver web applications.
  //   In this talk, we will look at the pros and cons of JAMstack and see how Vue and vue-based frameworks like Nuxt.js or Gridsome will help us building performant, small and efficient web sites and web applications.`,
  //   eventName: 'VueJS Dublin',
  //   location: 'Dublin, Ireland',
  //   eventUrl: 'https://www.meetup.com/DublinVueJS/events/258492845/',
  //   slidesUrl: 'https://slides.com/mannil/jamstack-and-vue',
  //   date: '2019-02-21'
  // },
  // {
  //   title: 'Nuxt.js - An Introduction',
  //   description: `
  //   What? A framework on top of a framework? Yes, you heard right!
  //   Nuxt.js is a Vue.js Meta Framework to create complex, fast & universal web applications quickly.
  //   Have you ever asked yourself how to improve the search engine ranking of your Vue application?
  //   Or if there is an easier way to configure Vuex, VueRouter and other common libraries together.
  //   Join us and learn more about the benefits of Nuxt.js and why you should use it in your next projects.
  //   Live demo included 😳. PS: No prior Nuxt.js knowledge is needed but basic Vue.js understanding is appreciated.`,
  //   eventName: 'VueJS Dublin',
  //   location: 'Dublin, Ireland',
  //   eventUrl: 'https://www.meetup.com/DublinVueJS/events/256376470/',
  //   slidesUrl: 'https://slides.com/mannil/nuxt-js-an-introduction#/',
  //   date: '2018-11-29'
  // },
  // {
  //   title: 'No loops needed - Functional programming in PHP',
  //   description: `
  //   Functional programming is becoming more popular, even in non-functional programming languages.
  //   This observation can be seen as approved after even Java added functional paradigms in the form of lambda expressions.
  //   This lightning talk will highlight the role of functional programming PHP, which similarities FP and Lego have and why loops are (almost?) obsolete in a functional programming world.`,
  //   eventName: 'PHP Usergroup Dresden',
  //   location: 'Dresden, Germany',
  //   eventUrl: 'https://www.meetup.com/PHP-USERGROUP-DRESDEN/events/246306832/',
  //   slidesUrl: 'https://mannil.github.io/fp-in-php/',
  //   date: '2018-05-28'
  // },
  // {
  //   title: 'PHP is dead - Long live PHP',
  //   description: `
  //   PHP - These three letters don't make many people think of anything good.
  //   But why are so many people averse to this server-side language?
  //   And how can it be that PHP's market share is at an incredible 81 percent, despite all the aversion?
  //   Under the headline "PHP is dead - Long live PHP" and in a funny mood we will explore the topic.
  //
  //   Together with Alexander Lichter we will see how important PHP will be in 2018, it's usefulness when programming applications and what the future looks like for PHP!
  //   Whether you are a real PHP-hater or a new programmer, this talk will give you some interesting information. And the more people there are, the more fun it'll be.`,
  //   eventName: 'Information Technology Club Dresden',
  //   location: 'Dresden, Germany',
  //   eventUrl: 'https://www.meetup.com/MSP-Dresden/events/246639875/',
  //   slidesUrl: 'https://mannil.github.io/php-is-dead-long-live-php/',
  //   date: '2018-02-01'
  // },
  // {
  //   title: 'Map, Reduce, Filter - No loops needed',
  //   description: `
  //   The popularity of functional programming is without doubt, even in non-functional languages.
  //   It's rise is underpinned by Java, which now also includes functional paradigms in the language's core.
  //   This talk is perfect for people who never used map, reduce or filter, or for those who don't know a bit about the mentioned functions.
  //   I'll give an introduction about a world that works without for-each loops, lives from expressive code and turns some of the common views topsy-turvy.
  //   Live coding included! No matter if you are new to programming or an OOP-genius, everyone will have something to take away after the talks ;)`,
  //   eventName: 'Hacken 101 - iFSR TU Dresden',
  //   location: 'Dresden, Germany',
  //   eventUrl: 'https://www.ifsr.de/fsr:news:30.01._hacken101_-_map_reduce_filter_-_no_loops_needed',
  //   slidesUrl: 'https://mannil.github.io/map-reduce-filter-no-loops-needed/#/',
  //   date: '2018-01-30'
  // },
  // {
  //   title: 'PHP is dead - Long live PHP',
  //   description: `
  //   PHP - Many people don't think about something positive when reading these three letters.
  //   But how can it be that many people are averse to this server-side language?
  //   And why is PHP's market share at an incredible 81 percent despite all the reluctance?
  //   Under the headline "PHP is dead - Long live PHP" and in a cheerful mood we get to the bottom of all this.
  //   Together with the long-time PHP developer Alexander Lichter we will find out how important PHP will be in 2017, if you can program excellent applications with it and what the future looks like for PHP!
  //   Whether you are a PHP-hater or a new programmer, there is something for everyone in this talk. And the more people there are, the more fun it gets.`,
  //   eventName: 'Hacken 101 - iFSR TU Dresden',
  //   location: 'Dresden, Germany',
  //   eventUrl: 'https://www.ifsr.de/fsr:news:05.12._hacken_101_-_php_is_dead.._long_live_php',
  //   slidesUrl: 'https://mannil.github.io/php-is-dead-long-live-php/',
  //   date: '2017-12-05'
  // }
]

export default {
  components: {
    Talk: () => import('~/components/speaking/Talk')
  },
  talks: TALKS,
  head () {
    const title = 'Speaking - My Talks'
    const metaDescription = 'A list of all talks I\'ve given on conferences, meetups and other events. Slides and video, if available, are linked to each talk.'
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: title
        },
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: metaDescription
        }
      ]
    }
  }
}
</script>
