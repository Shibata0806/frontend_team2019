export default {
    head: {
        title: 'タイピングゲーム',
        link: [
            {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'}
        ]
    },
    data: () => ({
        isTrying: false,
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
        solvedWords: [],
        typingText: '',
        currentWord: '',
        currentWordNumber: 1,
    }),
    methods: {
        start() {
            this.isTrying = true;
            this.solvedWords = []
            this.$nextTick(() => this.$refs.input.focus())
            this.setRandomText()
        },
        setRandomText() {
            const unsolvedWords = this.words.filter((word) => {
                return (!this.solvedWords.includes(word))
            })
            const randomIndex = Math.floor(Math.random()*unsolvedWords.length)
            this.currentWord = unsolvedWords[randomIndex]
        },
    }
}
