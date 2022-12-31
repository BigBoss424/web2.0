<template>
  <ul class="w-full text-gray-600 leading-snug pt-4 md:pt-0">
    <TimelineItem period title="Founded Cogs Web Development and Hosting" when="June 2018">
      Since the Summer of 2018, I launched my first business, Cogs Web Hosting and Development.
      The purpose of creating this company is to better myself as a developer and Information Technologies
      specialist. Combining my years of experience building and developing websites, I decided to make
      the jump to launching my own business. Now I spend most of my days learning constantly different
      skills from programming to document design and marketing.
    </TimelineItem>

    <TimelineItem title="Created Cogs Website" when="March 2020">
      This project has taken many different turns and a variety of different versions.
      At first I built the site using only Bootstrap as the Front-End and utilized Javascript
      for the backend. From then I created 6 different versions of the site using Jekyll, Ruby on Rails,
      Hugo and now finally settled on using Gatsby.js, which is under development right now,
      <a
        class="text-gray-700 hover:text-gray"
        href="https://www.cogswebdevandhosting.ml"
        rel="noopener"
        target="_blank"
      >cogswebdevandhosting.ml</a>.
      <br>
      <br>
      I decided to relaunch my companies site, to not only redesign the site but to add more functionality
      to the site itself and to make things easier to get in contact and process payments.
      <br>
      <br>
      <b>Used Technologies</b><br>
      Gatsby.js, Vue.js, BootStrap 4
    </TimelineItem>

    <TimelineItem title="Created my first Personal Blog" when="February 2020">
      After talking with a lot of people about my choice of programming languages, I decided to work on a
      talk about PHP, it's flaws and advantages, as well as the upcoming future of the language.<br>
      I named it "<span class="font-semibold text-indigo-600" v-text="'PHP is dead - Long live PHP!'" />".
      The talk marks the starting point of my
      <NuxtLink
        class="text-gray-800 underline hover:text-gray-500"
        to="/speaking/"
        rel="noreferrer noopener"
        v-text="'speaking journey'"
      />!<br><br>
      <b>Used Technologies</b><br>
      Ruby on Rails, Liquid, Jekyll
    </TimelineItem>

    <TimelineItem title="Created an Online Resume" when="January 2020">
      Before applying to companies all over the world for my upcoming semester abroad in 2018, I wanted to
      have a unique way of displaying my CV. So why not creating an adapted version online?
      <a
              class="text-gray-700 hover:text-gray"
              href="https://bigboss424.github.com/jones-resume"
              rel="noreferrer noopener"
              target="_blank"
              v-text="'did it'"
      />!
      <br><br>
      <b>Used Technologies</b><br>
      Jekyll, Github Pages, SCSS, Ruby on Rails
    </TimelineItem>

    <TimelineItem title="Created a Galaga Emulation in JS" when="November 2019">
      Built a site with the emulation of Galaga, an 80's arcade classic. To which, is my father's
      favorite video game. I did this for his birthday as a gift and plan on further developing the
      site for him to cater to his favorite things.
      <a
              class="text-gray-700 hover:text-gray"
              href="https://www.mjones.tk/"
              rel="noreferrer noopener"
              target="_blank"
              v-text="'did it'"
      />!
      <br><br>
      <b>Used Technologies</b><br>
      JavaScript, HTML5, CSS3, EMCA
    </TimelineItem>

    <TimelineItem title="Enrolled in WGU" when="October 2019">
      I decided in October to register and continue my Bachelors in Science Degree in the field of
      Computer Science. I made the transition from attending California State University,
      Los Angeles to Western Governors University an Online University. As making the transit
      and attending school became to financially difficult and I like the concept of taking as
      many classes during each term and testing out of classes that I am competent in.
    </TimelineItem>


    <TimelineItem title="Joined the Eastern Washington University Delta Chi Chapter" when="December 2013">
      As I became accustomed to College life at EWU, I received a Bid for the Eastern Washington University
      Chapter of Delta Chi Fraternity. A social fraternity that operates in the US and Canada. I held the
      executive officer positions of Alumni Relations Officer amd Treasurer. I also held the following Committee
      chairman positions, Head of IT Committee, PR Committee, Homecoming Committee and Recruitment Committee.
    </TimelineItem>

    <TimelineItem period title="Transferred to Eastern Washington University " when="September 2013">
      I gained acceptance to transfer at EWU, and continue my pursuit of my BS in Computer Science.
      <strong>Interested?</strong>
    </TimelineItem>

    <TimelineItem title="Transferred to Walla Walla Community College" when="September 2011">
      After taking a six-month hiatus for work, I re-enrolled into college at
      <em>Walla Walla Community College</em> completed over 60 credits in 3 quarter time span.
      To have credits to transfer to Eastern Washington University, since my credits from Walla
      Walla University were unaccredited.
    </TimelineItem>

    <TimelineItem title="Started Summer Session at Walla Walla University" when="July 2010">
      I started college shortly after graduating to begin Summer Session at
      <em>Walla Walla University</em> and became a Junior Systems Administrator for the
      Computer Science and Engineering Computer Labs.
    </TimelineItem>

    <TimelineItem title="Graduated Glendale Adventist Academy" when="June 06 2010">
      In 2010 I finished my high school education at Glendale Adventist Academy. In
      <em>Forest Lawn Cemetery</em> with a final grade of <strong>2.98</strong>
    </TimelineItem>

    <TimelineItem title="Built my First Computer" when="December 2009">
      In the 12th grade, I was the only student in my Advanced Computers class. As all my classmates
      believed that the course was too difficult. This allowed me the opportunity to be lectured and
      mentored, one on one, with Erwin Gonzales not only my teacher but the entire schools Systems Administrator.
      <br><br>
      As we completed the courses material rather quickly towards the beginning of December, my final
      was to build a computer. I told my Dad this and asked him if it was possible for me to get my own
      parts and build my own computer, since I was bottlenecked using a G5 Mac Pro. Thus, BigBoss, my first
      computer was born. An AMD Quad-Core System with a Windows 7 and Ubuntu 10.04 dual boot. Still works to
      this day.
      <br><br>
      <b>Used Technologies</b><br>
      Windows 7, Ubuntu 10.04, Bash
    </TimelineItem>

    <TimelineItem title="Used a Apple computer the first time" when="1998">
      Played Age of Empires on my father's G3 PowerMac, and first used a Mac computer.
    </TimelineItem>

    <TimelineItem period title="I was born 🤰🏼👶🏼" when="June 1992" />
  </ul>
</template>

<script>
import TimelineItem from '~/components/TimelineItem.vue'

export default {
  name: 'Timeline',
  components: { TimelineItem }
}
</script>

<style lang="postcss">
  .developmint {
    color: #15831d;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
