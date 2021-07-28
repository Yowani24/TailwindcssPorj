module.exports = {
  prefix: 'tw-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-orange-1':'#D5A368',
        'custom-orange-2':'#F9EFE4',
        'custom-wine':'#472138',
        'custom-search-1':'#F2F2F2',
        'custom-search-2':'#DBDBDB',
        'custom-dark-1':'#333333',
        'custom-btn-border':'#767676',
        'custom-gray-1':'#999999',
        'custom-gray-2':'#5A5A5A',
      },
      spacing: {
        '150':'9.375rem',
        '100':'6.25rem',
        '96px':'6rem',
        '42px':'2.625rem',
        '45px':'2.813rem',
        '55px':'55px',
        '60px':'60px',
        '80px':'5rem',
        '900px':'900px',
        '800px':'800px',
        '834px':'834px',
        '700px':'43.75rem',
        '600px':'37.5rem',
        '500px':'31.25rem',
        '550px':'550px',
        '530px':'530px',
        '450px':'28.125rem',
        '406px':'406px',
        '400px':'25rem',
        '300px':'18.75rem',
        '355px':'22.188rem',
        '350px':'21.875rem',
        '340px':'340px',
        '458px':'28.625rem',
        '460px':'460px',
        '470px':'470px',
        '334px':'334px',
        '200px':'12.5rem',
        '250px':'15.625rem',
        '270px':'16.875rem',
        '533px':'533px',
        

        'negative-40px':'-40px',
        'negative-35px':'-35px',

        'normal-logo-size':'316.74px',
        'ipad-logo-size':'209.26px',
        'mobile-logo-size':'158.74px',

        'mobile-lineHeight-1':'152.62%',
        '85%':'85%',
        'hide-side-bar':'-100%',

        
      },
      backgroundImage: (theme) => ({

        'stores_bgImage':"url('/dist/images/MaskGroup.png')",
        'traditional-bg1':"url('/dist/images/traditional1.png')",
        'traditional-bg2':"url('/dist/images/traditional2.png')",
        'traditional-bg3':"url('/dist/images/traditional3.png')",
        'ringImage':"url('/dist/images/category-ring.png')",
        'ringImage-2':"url('/dist/images/earingzx.jpg')",
        'ring-1':"url('/dist/images/ring-1.png')",
        'ring-2':"url('/dist/images/ring-2.png')",
        'ring-3':"url('/dist/images/ring-3.png')",
        'showcasebg-1':"url('/dist/images/showcasebg.png')",
      }),
      rotate: {
        '90':'-90deg',
      },
      
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'raleway': ['Raleway', 'sans-serif'],
    },
    screens: {


      'tablet': '640px',

      'ipad':'768px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
