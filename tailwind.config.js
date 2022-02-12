module.exports = {
    theme: {
        extend: {
            screens: {
                'xs':'360px'
            },
            keyframes: {

            },
            animation: {

            },
            colors: {
                'bluePrimary':'#639AE2',
                'redPrimary':'#F92746',
                'blackPrimary':'#2E2D33'
            },
            backgroundImage: theme => ({
                'backweb': "url('../img/back.png')"
            }),
            fontFamily: {
                sen: ['Sen']
            },
            width: {
                'phoneAd':'500px'
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
    }
}