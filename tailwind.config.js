module.exports = {
    theme: {
        extend: {
            screens: {

            },
            keyframes: {

            },
            animation: {

            },
            backgroundImage: theme => ({
                'backweb': "url('../img/back.png')"
            }),
            fontFamily: {
                sen: ['Sen']
            },
            colors: {
                'bluePrimary':'#639AE2',
                'redPrimary':'#F92746',
                'blackPrimary':'#2E2D33'
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
    }
}