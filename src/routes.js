export const routes = [
    {
        path: '/resource',
        name: '云计算',
        page: 'resource/resource.vue'
    },
    {
        path: '/alarm',
        name: '告警',
        page: 'alarm/alarm.vue'
    },
    {
        path: '/event',
        name: '事件',
        page: 'event/event.vue'
    },
    {
        path: '/log',
        name: '日志',
        page: 'log/log.vue'
    },
    {
        path: '*',
        name: '404',
        page: 'other/other.vue'
    }
]
