<template>
<div class="dashbaord" style="background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);">
    <!-- <h3 class="font-weight-light display-1 grey--text mt-3">Dashboard</h3> -->
    <!-- <v-container fluid class="my-5">
        <v-layout row class="mb-3">

            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                    <v-icon left small>
                        folder
                    </v-icon>
                    <span class="caption text-lowercase">By project name</span>
                </v-btn>
                <span>Sort by name</span>

            </v-tooltip>

            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                    <v-icon left small>
                        person
                    </v-icon>
                    <span class="caption text-lowercase">By person</span>
                </v-btn>
                <span>Sort by name</span>
            </v-tooltip>

        </v-layout>

        <v-card flat v-for="project in projects" :key="project.title">

            <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs12 md6>
                    <div class="caption blue--text">Project Title</div>
                    <div>{{project.title}}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption blue--text">{{project.person}}</div>
                    <div>The Todo</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption blue--text">Due date</div>
                    <div>{{project.due}}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div>
                        <v-chip small :class="`${project.status} white--text caption my-2 right`">
                            <v-icon left>
                                {{project.check}}
                            </v-icon>
                            {{project.status}}
                        </v-chip>
                    </div>

                </v-flex>
            </v-layout>
            <v-divider light></v-divider>
        </v-card>

    </v-container> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                    title: 'Design a new website',
                    person: 'The Net Ninja',
                    due: '1st Jan 2019',
                    status: 'ongoing',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
                    check: 'block'
                },
                {
                    title: 'Code up the homepage',
                    person: 'Chun Li',
                    due: '10th Jan 2019',
                    status: 'complete',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
                    check: 'check_circle'
                },
                {
                    title: 'Design video thumbnails',
                    person: 'Ryu',
                    due: '20th Dec 2018',
                    status: 'complete',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
                    check: 'check_circle'
                },
                {
                    title: 'Create a community forum',
                    person: 'Gouken',
                    due: '20th Oct 2018',
                    status: 'overdue',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
                    check: 'remove_circle'
                },
            ]
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    }

}
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}

.project.ongoing {
    border-left: 4px solid #d18c3c;
}

.project.overdue {
    border-left: 4px solid #d13c3c;
}

.v-chip.complete {
    background: #3cd1c2;
}

.v-chip.ongoing {
    background: #d18c3c;
}

.v-chip.overdue {
    background: #d13c3c;
}
</style>
