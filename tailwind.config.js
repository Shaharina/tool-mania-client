/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
    },

    daisyui: {
        themes: [
            {
                tooltheme: {
                    primary: '#ffd333',
                    secondary: '#0c0c0c',
                    accent: '#020053',
                    neutral: '#ffd333',
                    'base-100': '#ffffff',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
