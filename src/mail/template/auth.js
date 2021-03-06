const linkLinkedin = 'https://www.linkedin.com/in/joão-pedro-pereira-de-souza-91a0b51b6';
const linkInstagram = 'https://www.instagram.com/jppereirass/';
const linkEmail = 'jppereiradesouza29@gmail.com'

const template = (title , submensage) =>{

const data = 

    `
    <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Pokebook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body style="margin: 0; padding: 0; display:block; justify-content:center;background:#3D3D3D; overflow:hidden;">

            <div style="background:#3D3D3D; padding-top:100px;"> 
                
                <img src="https://fontmeme.com/permalink/210126/cab0ea83f26568630e3431a55a2af0a6.png" alt="logo" width="280" style="display: block; object-fit: contain;margin:auto"/>
                <img src="https://github.com/joaopedro29/Project-Pokemon-Mobile/blob/main/PokemonMobile/src/assets/phanpyRight.png?raw=true" alt="iconLogo" width="120" style="display: block; object-fit: contain;margin:auto"/>
          
            </div>

            <div style="background:#3D3D3D;padding:0.4rem 0 0 2rem;"> 
        
                <p style="color:#fff; font-wegth:bold; font-family: Arial, sans-serif; font-size: 1.4rem;"> ${title} </p>

                <p style="color:#fff; font-wegth:bold; font-family: Arial, sans-serif; font-size: 0.7rem; margin-top:10px; margin-right:30px; opacity:0.8">

                 ${submensage} 

                 </p>

            </div>

            <div style="width:100%; background:#3D3D3D"> 
         
                <div style="padding:30px 60px;"> 

                    <a href="${linkLinkedin}" cursor="pointer" style="padding:10px; color: #ffffff;text-decoration: none; font-weight: bold; border-radius: 5px; font-family: Arial, sans-serif; font-size: 10px; line-height: 20px; background-color: #6FA6A8">Linkedin</a>
                    <a href="${linkInstagram}" cursor="pointer" style="padding:10px; color: #ffffff; font-weight: bold; border-radius: 5px; font-family: Arial, sans-serif; font-size: 10px;text-decoration: none; line-height: 20px; background-color: #6FA6A8">instagram</a>
                    <a href="${linkEmail}" cursor="pointer" style="padding:10px; color: #ffffff; font-weight: bold; border-radius: 5px; font-family: Arial, sans-serif; font-size: 10px;text-decoration: none; line-height: 20px; background-color: #6FA6A8">email</a>

                </div>

             </div>
       
        </body>
        </html>
    `

return data

}

module.exports = template
