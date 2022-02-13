module.exports = {
    theme: {
        extend: {
            screens: {
                'xs':'360px',
                'sm':'300px'
            },
            keyframes: {
                slideDown: {
                   'from': {'transform':'translateY(-10%)'},
                   'to': {'transform':'translateY(0%)'} 
                },
                slideLeft: {
                    'from': {'transform':'translateX(-10%)'},
                    'to': {'transform':'translateX(0%)'} 
                }
            },
            animation: {
                'slideDownAn':'slideDown 2s linear',
                'slideLeftAn':'slideLeft 2s linear'
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