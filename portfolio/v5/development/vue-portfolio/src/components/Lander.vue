<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fluid">
                <img alt="Vue logo" class="rounded-circle" src="https://avatars3.githubusercontent.com/u/6344405?s=460&u=29bd436491fdeac863e54c94299621aff66a92cb&v=4">
                <h1>Software Developer</h1>
                <p class="p">
                    My name is Aaron Jones, I reside in Altadena, California.
                    I am a Web Developer and Programmer of sorts with experience in languages such as Java, C, C++,
                    HTML5, CSS3, RoR (Ruby on Rails). I also have experience managing servers and services such as
                    Web Hosting and SEO Optimization. I enjoy using Linux and other Unix-Based Operating Systems.
                    I have a great attention to detail and like to ensure that my clients are fully satisfied with
                    the site or program that I build for them.
                </p>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio">
            <h1>Portfolio</h1>
            <p>These are suppose to be sample projects</p>
            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://www.wetechnology.cz/wp-content/uploads/2017/02/uxui.jpg">
                                <h2>Equity Publishing</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p class="p">
                                    I work with this client to bring in his Magazine and
                                    Publications to the digital frontier. I am currently working on
                                    redesigning his main site as well as working on making their magazines digital.
                                    An example of one magazine that I made digital using the turn.js Framework, would be,
                                    North Idaho Star, a retirement home magazine that Equity Publishing creates
                                    and issues out.
                                </p>
                                <button type="button" class="btn btn-outline-primary">
                                    <a class="button_link" href="http://www.eqpublishing.tk/"> View </a>
                                </button>
                                <button type="button" class="btn btn-outline-primary">
                                    <a class="button_link" href="http://northstaridaho.tk/"> North Idaho Star </a>
                                </button>
                                <button type="button" class="btn btn-outline-secondary">More</button>
                            </div>
                        </div>
                        <br>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png">
                                <h2>Cogs Web Development and Hosting</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p class="p">
                                    A web development and hosting company that I am in the process of creating and
                                    perfecting. It's a daily challenge learning how to utilize multiple technologies,
                                    to deliver web hosting and development in one package. Though each day, I learn
                                    something new.
                                </p>

                                <button type="button" class="btn btn-outline-primary">
                                    <a class="button_link" href="http://www.cogswebdevandhosting.ml/"> View </a>
                                </button>
                                <button type="button" class="btn btn-outline-secondary">More</button>
                            </div>
                        </div>
                        <br>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg">
                                <h2>Hobby Projects</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p class="p">
                                    These are projects that I do for fun, There are quite a few of them.
                                    The links will be down below. The projects so far include two extensions
                                    for the Mozilla Firefox browser, a Kardashian Filter and a Donald Trump Filter.
                                </p>

                                <button type="button" class="btn btn-outline-primary">
                                    <a class="button_link" href="https://github.com/BigBoss424/DonaldTrumpFilter">Trump Filter</a>
                                </button>
                                <button type="button" class="btn btn-outline-primary">
                                    <a class="button_link" href="https://github.com/BigBoss424/kardasianFilter">More</a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- modal for contact -->

        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1"
                 role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <contact/>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
    import Contact from './Contact.vue'
    export default {
        name:'Lander',
        components:{
            Contact
        }
    }
</script>

<style lang="css" scoped>

    .p{
        text-align: justify;
    }

    .section{
        text-align:  center;
        padding-top: 10%;
        padding-bottom: 10%;
    }

    button{
        margin-right: 25px;
    }

    .button_link{
        color:inherit;
        text-decoration: none;
    }
    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }
    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
</style>