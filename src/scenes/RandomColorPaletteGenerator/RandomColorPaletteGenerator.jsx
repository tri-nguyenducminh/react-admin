import('./style.css');
import('./script');

const RandomColorPaletteGenerator = () => {
    return <html lang="en" dir="ltr">
    <head>
        <meta charSet={"utf-8"}/>
        <title>Color Palette Generator</title>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
    </head>
    <body>
        <ul class={"container"}></ul>
    <button class={"refresh-btn"}>Refresh Palette</button>
    </body>
    </html>
}

export default RandomColorPaletteGenerator;