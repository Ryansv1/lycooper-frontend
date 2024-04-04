import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['700'],
    variable: '--font-poppins',
    subsets: ['latin']
})

export const fonts = {
    poppins
}