<template>
    <div>
        <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
            <md-table-toolbar>
                <div class="md-toolbar-section-start">
                    <h1 class="md-title">系统 / 日志</h1>
                </div>

                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="通过名称搜索" v-model="search" @input="searchOnTable" />
                </md-field>
            </md-table-toolbar>

            <md-table-empty-state
                    md-label="没有发现任何日志"
                    :md-description="`没有发现'${search}'的日志.请尝试不同的关键字搜索.`">
            </md-table-empty-state>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="名称" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="日志" md-sort-by="logs">{{ item.logs }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    const toLower = text => {
        return text.toString().toLowerCase()
    }

    const searchByName = (items, term) => {
        if (term) {
            return items.filter(item => toLower(item.name).includes(toLower(term)))
        }

        return items
    }

    export default {
        name: 'TableSearch',
        data: () => ({
            search: null,
            searched: [],
            logs: [
                {
                    name: "Alarm for memory",
                    email: "sdubbin0@geocities.com",
                    logs: "Memory is too high,memory > 60"
                },
                {
                    name: "Warn for disk",
                    email: "odemageard1@spotify.com",
                    logs: "host disk too small"
                },
                {
                    name: "Info for vm202",
                    email: "vtaleworth2@google.ca",
                    logs: "vm202 is opened"
                },
                {
                    name: "Alarm for CPU",
                    email: "lizkovitz3@youtu.be",
                    logs: "The CPU of vm101 is too high"
                },
                {
                    name: "Alarm for token",
                    email: "tstave4@reference.com",
                    logs: "Token expired"
                },
                {
                    name: "Info for vm202",
                    email: "kchipping5@scribd.com",
                    logs: "vm202 is closed"
                }
            ]
        }),
        methods: {
            searchOnTable () {
                this.searched = searchByName(this.users, this.search)
            }
        },
        created () {
            this.searched = this.logs
        }
    }
</script>

<style scoped>
    .md-field {
        max-width: 300px;
    }
</style>