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
        currentWordNumber: '',
    }),
    methods: {
        start() {
            this.isTrying = true;
            this.solvedWords = []
            this.$nextTick(() => this.$refs.input.focus())
            this.setRandomText()
            this.currentWordNumber = 1
        },
        setRandomText() {
            const unsolvedWords = this.words.filter((word) => {
                return (!this.solvedWords.includes(word))
            })
            const randomIndex = Math.floor(Math.random()*unsolvedWords.length)
            this.currentWord = unsolvedWords[randomIndex]
        },
    },
    computed: {
        isTypingCorrect() {
            if(this.typingText == this.currentWord) {

                this.solvedWords.push(this.currentWord)
                this.currentWordNumber = this.solvedWords.length + 1
                this.typingText = ''

                if(this.words.length == this.solvedWords.length) {

                    this.solvedWords = []
                    this.isTrying = false
                    alert('全問正解！')
                }
                this.setRandomText()
                return true
            }

            const typingTextLength = this.typingText.length
            return (this.typingText === this.currentWord.slice(0, typingTextLength))
        }
    }
}
