export default {
    head: {
        title: 'タイピングゲーム',
        link: [
            {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'}
        ]
    },
    data: () => ({
        trying: false,
        words: [
            'egg',
            'bag',
            'rose',
            'chair',
            'bat',
            'fish',
            'notebook',
            'pencil',
            'dog',
            'desk'
        ],
        solvedWords: []
    }),
    methods: {
        start() {
            this.trying = true;
            this.solvedWords = []
            this.$nextTick(() => {
                document.getElementById('input-typing').focus()
            })
        },
        currentWord() {
            const unsolvedWords = this.words.filter((word) => {
                return (!this.solvedWords.includes(word))
            })
            const randomIndex = Math.floor(Math.random()*unsolvedWords.length)
            return unsolvedWords[randomIndex]
        },
    }
}
